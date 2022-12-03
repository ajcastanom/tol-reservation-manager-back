import {firebaseConfig} from "../utils/utils";
import {Collection} from "../enum/collection-enum";
import {ProviderDto} from "../dto/provider-dto";
const admin = require("firebase-admin");

const firebase = require("firebase");

export class ProviderService {
    private static instance: ProviderService;
    private readonly providerRef: any;

    private constructor() {
        firebase.initializeApp(firebaseConfig);
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

    public async listByService(service: string): Promise<any[]> {
        const providersData = await this.providerRef.where("services", "array-contains", service).orderBy("name").get();

        const listResult: any[] = [];

        if (!providersData.empty) {
            providersData.forEach((doc: any) => {
                listResult.push(new ProviderDto(doc.data()));
            });
        }

        return listResult;
    }
}
