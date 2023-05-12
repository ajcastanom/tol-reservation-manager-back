import {Collection} from "../enum/collection-enum";
import {Status} from "../enum/status-enum";
import {Booking} from "../model/booking-model";
import {ResponseDto} from "../dto/response-dto";
import {ErrorEnum} from "../enum/error-enum";
const admin = require("firebase-admin");

export class BookingService {
    private static instance: BookingService;
    private readonly bookingRef: any;

    private constructor() {
        this.bookingRef = admin.firestore().collection(Collection.BOOKING);
    }

    public static getInstance(): BookingService {
        if (!BookingService.instance) {
            BookingService.instance = new BookingService();
        }

        return BookingService.instance;
    }

    public async create(booking: Booking): Promise<any> {
        const bookingCreateRef = this.bookingRef.doc(booking.contract);
        return await bookingCreateRef.get()
            .then(async (doc: any) => {
                if (doc.exists) {
                    return new ResponseDto(
                        Status.DECLINED,
                        "El contrato ya existe, no se puede guardar otra reserva con el mismo número de contrato"
                    );
                } else {
                    return await bookingCreateRef.set(booking)
                        .then(async function() {
                            return new ResponseDto(
                                Status.SUCCESS,
                                "Registro guardado correctamente"
                            );
                        })
                        .catch(async function(error: any) {
                            console.error("Error al guardar el registro:", error);
                            return new ResponseDto(
                                Status.FAILED,
                                "Error al guardar el registro"
                            );
                        });
                }
            });
    }

    public async find(contract: string): Promise<Booking> {
        const bookingCreateRef = this.bookingRef.doc(contract);
        return await bookingCreateRef.get()
            .then(async (doc: any) => {
                if (doc.exists) {
                    return doc.data() as Booking;
                } else {
                    throw new Error(ErrorEnum.BOOKING_NOT_EXIST);
                }
            });
    }
}
