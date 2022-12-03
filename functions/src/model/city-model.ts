interface ICity{
    id: number;
    name: string;
    countryId: string;
}

export class City implements ICity {
    id: number;
    name: string;
    countryId: string;

    constructor(city: any) {
        this.id = city.id;
        this.name = city.name;
        this.countryId = city.country_id;
    }

    toJson() {
        return {
            "id": this.id,
            "name": this.name,
            "countryId": this.countryId,
        };
    }
}
