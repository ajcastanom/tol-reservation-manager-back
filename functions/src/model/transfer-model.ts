import {ServiceStatus} from "../enum/service-status-enum";

export class Transfer implements IService {
    arrivalDate: string;
    cost: number;
    currencyType: string;
    price: number;
    departureDate: string;
    paymentDate: string;
    providerName: string;
    status: string;

    constructor(transfer: Transfer) {
        this.arrivalDate = transfer.arrivalDate;
        this.cost = transfer.cost;
        this.currencyType = transfer.currencyType;
        this.departureDate = transfer.departureDate;
        this.paymentDate = transfer.paymentDate;
        this.providerName = transfer.providerName;
        this.status = ServiceStatus.PENDING;
        this.price = transfer.price;
    }
}
