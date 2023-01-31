import {Hotel} from "./hotel-model";
import {Tour} from "./tour-model";
import {Ticket} from "./ticket-model";
import {MedicalAssistance} from "./medical-assistance-model";
import {Transfer} from "./transfer-model";
import {Cabin} from "./cabin-model";

export interface ITouristPackage{
    serviceType: string;
    cityId: string;
    hotels: Hotel[];
    tours: Tour[];
    tickets: Ticket[];
    medicalAssistance: MedicalAssistance[];
    transfers: Transfer[];
    cabins: Cabin[];
}

export class TouristPackage implements ITouristPackage {
    serviceType: string;
    cityId: string;
    hotels: Hotel[];
    tours: Tour[];
    tickets: Ticket[];
    medicalAssistance: MedicalAssistance[];
    transfers: Transfer[];
    cabins: Cabin[];

    constructor(touristPackage: ITouristPackage) {
        this.serviceType = touristPackage.serviceType;
        this.cityId = touristPackage.cityId;
        this.hotels = touristPackage.hotels;
        this.tours = touristPackage.tours;
        this.tickets = touristPackage.tickets;
        this.medicalAssistance = touristPackage.medicalAssistance;
        this.transfers = touristPackage.transfers;
        this.cabins = touristPackage.cabins;
    }
}
