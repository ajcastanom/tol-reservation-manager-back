import {ServiceStatus} from "../enum/service-status-enum";

export class MedicalAssistance implements IService {
    arrivalDate: string;
    cost: number;
    currencyType: string;
    price: number;
    departureDate: string;
    paymentDate: string;
    providerName: string;
    status: string;

    constructor(medicalAssistance: MedicalAssistance) {
        this.arrivalDate = medicalAssistance.arrivalDate;
        this.cost = medicalAssistance.cost;
        this.currencyType = medicalAssistance.currencyType;
        this.departureDate = medicalAssistance.departureDate;
        this.paymentDate = medicalAssistance.paymentDate;
        this.providerName = medicalAssistance.providerName;
        this.status = ServiceStatus.PENDING;
        this.price = medicalAssistance.price;
    }
}
