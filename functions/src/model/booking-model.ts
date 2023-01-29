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
