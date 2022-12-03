import {Collection} from "../enum/collection-enum";
import {Country} from "../model/country-model";
import {CountryDto} from "../dto/country-dto";
const admin = require("firebase-admin");

export class CountryService {
    private static instance: CountryService;
    private readonly countryRef: any;

    private constructor() {
        this.countryRef = admin.firestore().collection(Collection.COUNTRY);
    }

    public static getInstance(): CountryService {
        if (!CountryService.instance) {
            CountryService.instance = new CountryService();
        }

        return CountryService.instance;
    }

    public createAll(countries: Country[]): Promise<CountryDto[]> {
        let createResult: CountryDto[] = [];

        countries.forEach(async country => {
            let newCountry: Country = new Country(country);
            createResult.push(new CountryDto(newCountry));
            await this.countryRef.add(newCountry.toJson());
        });

        return Promise.all(createResult);
    }

    public async list(): Promise<any[]> {
        const countriesData = await this.countryRef.orderBy("name").get();

        const listResult: any[] = [];

        if (!countriesData.empty) {
            countriesData.forEach((doc: any) => {
                listResult.push(new CountryDto(doc.data()));
            });
        }

        return listResult;
    }
}
