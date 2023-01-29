export interface IProvider{
    nit: string;
    name: string;
    country: string;
    countryId: string;
    services: [];
    codeIata: string;
}

export class Provider implements IProvider {
    nit: string;
    name: string;
    country: string;
    countryId: string;
    services: [];
    codeIata: string;

    constructor(provider: IProvider) {
        this.nit = provider.nit;
        this.name = provider.name;
        this.country = provider.country;
        this.countryId = provider.countryId;
        this.services = provider.services;
        this.codeIata = provider.codeIata;
    }
}
