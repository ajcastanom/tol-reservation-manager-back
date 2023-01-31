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


export class Booking implements IBooking {
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

    constructor(booking: IBooking) {
        this.dateIssue = booking.dateIssue;
        this.contract = booking.contract;
        this.documentType = booking.documentType;
        this.documentNumber = booking.documentNumber;
        this.customerName = booking.customerName;
        this.dateTravel = booking.dateTravel;
        this.dateCreated = booking.dateCreated;
        this.dateUpdated = booking.dateUpdated;
        this.destinations = booking.destinations;
        this.payDateLimit = booking.payDateLimit;
        this.fullCustomerPayment = booking.fullCustomerPayment;
        this.fullProviderPayment = booking.fullProviderPayment;
        this.comments = booking.comments;
        this.trm = booking.trm;
        this.usernameCreated = booking.usernameCreated;
    }
}
