import {ServiceStatus} from "../enum/service-status-enum";

export class Tour implements IService {
    arrivalDate: string;
    cost: number;
    currencyType: string;
    price: number;
    departureDate: string;
    paymentDate: string;
    providerName: string;
    status: string;

    constructor(tour: Tour) {
        this.arrivalDate = tour.arrivalDate;
        this.cost = tour.cost;
        this.currencyType = tour.currencyType;
        this.departureDate = tour.departureDate;
        this.paymentDate = tour.paymentDate;
        this.providerName = tour.providerName;
        this.status = ServiceStatus.PENDING;
        this.price = tour.price;
    }
}
