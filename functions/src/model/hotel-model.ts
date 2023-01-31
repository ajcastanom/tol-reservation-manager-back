import {ServiceStatus} from "../enum/service-status-enum";

export class Hotel implements IService {
    arrivalDate: string;
    cost: number;
    currencyType: string;
    price: number;
    departureDate: string;
    paymentDate: string;
    providerName: string;
    name: string;
    status: string;

    constructor(hotel: Hotel) {
        this.arrivalDate = hotel.arrivalDate;
        this.cost = hotel.cost;
        this.currencyType = hotel.currencyType;
        this.departureDate = hotel.departureDate;
        this.paymentDate = hotel.paymentDate;
        this.providerName = hotel.providerName;
        this.name = hotel.name;
        this.status = ServiceStatus.PENDING;
        this.price = hotel.price;
    }
}
