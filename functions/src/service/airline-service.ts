import {firebaseConfig} from "../utils/utils";
import {Collection} from "../enum/collection-enum";
const admin = require("firebase-admin");

const firebase = require("firebase");

export class AirlineService {
    private static instance: AirlineService;
    private readonly airlineRef: any;

    private constructor() {
        firebase.initializeApp(firebaseConfig);
        this.airlineRef = admin.firestore().collection(Collection.AIRLINE);
    }

    public static getInstance(): AirlineService {
        if (!AirlineService.instance) {
            AirlineService.instance = new AirlineService();
        }

        return AirlineService.instance;
    }

    public async create(airline: any): Promise<any> {
        const providerData = await this.airlineRef.where("name", "==", airline.name.trim()).get();

        let createResult = null;

        if (providerData.empty) {
            createResult = await this.airlineRef.add({
                name: airline.name.trim(),
            });
        }

        return createResult;
    }

    public async list(): Promise<any[]> {
        const providersData = await this.airlineRef.get();

        const listResult: any[] = [];

        if (!providersData.empty) {
            providersData.forEach((doc: any) => {
                listResult.push(doc.data());
            });
        }

        return listResult;
    }
}
