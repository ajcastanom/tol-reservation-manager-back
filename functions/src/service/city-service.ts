import {Collection} from "../enum/collection-enum";
import {CityDto} from "../dto/city-dto";
import {City} from "../model/city-model";
import {Status} from "../enum/status-enum";
const admin = require("firebase-admin");
const fs = require("fs");

export class CityService {
    private static instance: CityService;
    private readonly cityRef: any;

    private constructor() {
        this.cityRef = admin.firestore().collection(Collection.CITY);
    }

    public static getInstance(): CityService {
        if (!CityService.instance) {
            CityService.instance = new CityService();
        }

        return CityService.instance;
    }

    public async createAll(): Promise<Awaited<string>[]> {
        const rawdata = fs.readFileSync("cities.json");
        const cities: City[] = JSON.parse(rawdata);
        console.log(cities.length);

        // let count = 0;
        // const total = 150710;

        const sum = 150000;

        const rangeInit = sum;
        // const rangeEnd = 10000 + sum;

        const citiesExistData = await this.cityRef.get();

        const listResult: any[] = [];
        const listResultNames: any = {};
        citiesExistData.forEach((doc: any) => {
            listResult.push(doc.data().id);
            listResultNames[doc.data().name] = true;
        });

        console.log("Tamaño guardado: " + listResult.length);


        for (let i = rangeInit, n = 150710; i < n; i++) {
            const city = cities[i];
            const newCity: City = new City(city);

            if (!listResultNames[newCity.name] && !listResult.includes(city.id)) this.cityRef.add(newCity.toJson());
        }

        return Promise.all(Status.SUCCESS);
    }

    public async listByCountry(countryId: string): Promise<any[]> {
        const citiesData = await this.cityRef.where("countryId", "==", parseInt(countryId)).orderBy("name").get();

        const listResult: any[] = [];

        if (!citiesData.empty) {
            citiesData.forEach((doc: any) => {
                listResult.push(new CityDto(doc.data()));
            });
        }

        return listResult;
    }
}
