export interface IDestination{
    countryId: string;
    country: string;
    cityId: string;
    city: string;
    touristPackages: [];
}


export class Destination implements IDestination {
    countryId: string;
    country: string;
    cityId: string;
    city: string;
    touristPackages: [];

    constructor(destination: IDestination) {
        this.countryId = destination.countryId;
        this.country = destination.country;
        this.cityId = destination.cityId;
        this.city = destination.city;
        this.cityId = destination.cityId;
        this.touristPackages = destination.touristPackages;
    }
}
