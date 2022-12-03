import {City} from "../model/city-model";

export class CityDto {
    id: number;
    name: string;
    countryId: string

    constructor(city: City) {
        this.id = city.id;
        this.name = city.name;
        this.countryId = city.countryId
    }
}
