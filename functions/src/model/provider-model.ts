export interface IProvider{
    nit: string;
    name: string;
    country: string;
    services: [];
}

export class Provider implements IProvider {
    nit: string;
    name: string;
    country: string;
    services: [];

    constructor(provider: IProvider) {
        this.nit = provider.nit;
        this.name = provider.name;
        this.country = provider.country;
        this.services = provider.services;
    }
}
