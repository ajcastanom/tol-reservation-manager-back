import {Country} from "../model/country-model";

export class CountryDto {
    id: number;
    name: string;
    translations: any;

    constructor(country: Country) {
        this.id = country.id;
        this.name = country.name;
        this.translations = country.translations;
    }
}
