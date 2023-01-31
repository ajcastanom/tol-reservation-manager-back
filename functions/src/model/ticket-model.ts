import {ServiceStatus} from "../enum/service-status-enum";

export class Ticket implements IService {
    arrivalDate: string;
    cost: number;
    currencyType: string;
    price: number;
    departureDate: string;
    paymentDate: string;
    providerName: string;
    status: string;

    constructor(ticket: Ticket) {
        this.arrivalDate = ticket.arrivalDate;
        this.cost = ticket.cost;
        this.currencyType = ticket.currencyType;
        this.departureDate = ticket.departureDate;
        this.paymentDate = ticket.paymentDate;
        this.providerName = ticket.providerName;
        this.status = ServiceStatus.PENDING;
        this.price = ticket.price;
    }
}
