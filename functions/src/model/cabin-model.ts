import {ServiceStatus} from "../enum/service-status-enum";

export class Cabin implements IService {
    arrivalDate: string;
    cost: number;
    currencyType: string;
    price: number;
    departureDate: string;
    paymentDate: string;
    providerName: string;
    status: string;

    constructor(cabin: Cabin) {
        this.arrivalDate = cabin.arrivalDate;
        this.cost = cabin.cost;
        this.currencyType = cabin.currencyType;
        this.departureDate = cabin.departureDate;
        this.paymentDate = cabin.paymentDate;
        this.providerName = cabin.providerName;
        this.status = ServiceStatus.PENDING;
        this.price = cabin.price;
    }
}
