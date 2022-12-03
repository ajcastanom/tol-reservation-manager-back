import {Collection} from "../enum/collection-enum";
import {ProviderDto} from "../dto/provider-dto";
import ConfigAccount from "../config/config-account";
import {Service} from "../enum/service-enum";
import {MedicalAssistance} from "../enum/medical-asisstance-enum";
import {ErrorEnum} from "../enum/error-enum";
const admin = require("firebase-admin");

export class ProviderService {
    private static instance: ProviderService;
    private readonly providerRef: any;

    private constructor() {
        this.providerRef = admin.firestore().collection(Collection.PROVIDER);
    }

    public static getInstance(): ProviderService {
        if (!ProviderService.instance) {
            ProviderService.instance = new ProviderService();
        }

        return ProviderService.instance;
    }

    public async create(provider: any): Promise<any> {
        const providerData = await this.providerRef.where("name", "==", provider.name.trim()).get();

        let createResult = null;

        if (providerData.empty) {
            createResult = await this.providerRef.add({
                name: provider.name.trim(),
            });
        }

        return createResult;
    }

    public async list(): Promise<any[]> {
        const providersData = await this.providerRef.get();

        const listResult: any[] = [];

        if (!providersData.empty) {
            providersData.forEach((doc: any) => {
                listResult.push(doc.data());
            });
        }

        return listResult;
    }

    public async listByService(service: string, country: string): Promise<any[]> {
        const localCountry = ConfigAccount.getServiceAccount().local_country;

        if (!Object.values(Service).includes(service)) {
            throw new Error(ErrorEnum.SERVICE_NOT_EXIST);
        }

        let query = this.providerRef.where("services", "array-contains", service);

        // Se agrega condicion si es destino nacional
        if (localCountry === country) {
            query = query.where("country", "=", country);

            // Se agrega condicion para consultar proveedores de asistencia medica nacional
            if (Service.MEDICAL_ASSISTANCE === service) {
                query = query.where("type", "=", MedicalAssistance.NATIONAL);
            }
        } else if (Service.MEDICAL_ASSISTANCE === service) {
            query = query.where("type", "=", MedicalAssistance.INTERNATIONAL);
        }

        const providersData = await query.orderBy("name").get();

        const listResult: any[] = [];

        if (!providersData.empty) {
            providersData.forEach((doc: any) => {
                listResult.push(new ProviderDto(doc.data()));
            });
        }

        return listResult;
    }
}
