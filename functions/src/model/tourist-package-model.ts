export interface ITouristPackage{
    serviceType: string;
    city: string;
    airlines: [];
    hotels: [];
    tours: [];
    tickets: [];
    medicalAssistance: [];
    transfers: [];
    cabins: [];
}

/*
export class Provider implements IProvider {
    nit: string;
    name: string;
    country: string;
    services: [];
    codeIata: string;

    constructor(provider: IProvider) {
        this.nit = provider.nit;
        this.name = provider.name;
        this.country = provider.country;
        this.services = provider.services;
        this.codeIata = provider.codeIata;
    }
}
*/
