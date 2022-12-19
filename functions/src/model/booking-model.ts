import {IDestination} from "./destination-model";

export interface IBooking{
    dateIssue: string;
    contract: string;
    documentType: string;
    documentNumber: string;
    customerName: string;
    dateTravel: string;
    dateCreated: string;
    dateUpdated: string;
    usernameCreated: string;
    destinations: IDestination[];
    payDateLimit: string;
    fullCustomerPayment: number;
    fullProviderPayment: number;
    comments: string;
    trm: number;
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
