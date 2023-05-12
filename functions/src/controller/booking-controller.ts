import {response} from "express";
import {BookingService} from "../service/booking-service";
import {Status} from "../enum/status-enum";
import {ResponseDto} from "../dto/response-dto";
import {ErrorEnum} from "../enum/error-enum";
import {Booking} from "../model/booking-model";

const HttpStatus = require("http-status-codes");

const bookingCreate = async (req: any, res = response) => {
    console.log("Booking:create");

    const booking = req.body;
    const bookingService = BookingService.getInstance();

    bookingService.create(booking)
        .then((response: ResponseDto) => {
            if (response) {
                switch (response.state) {
                    case Status.SUCCESS:
                        res.status(HttpStatus.StatusCodes.CREATED).send(response);
                        break;
                    case Status.DECLINED:
                        res.status(HttpStatus.StatusCodes.NOT_ACCEPTABLE).send(response);
                        break;
                    case Status.FAILED:
                        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(response);
                        break;
                }
            }
        }).catch((e) => {
        console.log(e);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(new ResponseDto(
            Status.FAILED,
            "Ocurrió un error al guardar la reserva"
        ));
    });
};

const bookingFind = async (req: any, res = response) => {
    console.log("Booking:find");

    const {contract} = req.params;
    const bookingService = BookingService.getInstance();

    bookingService.find(contract)
        .then((booking: Booking) => {
            if (booking) {
                res.status(HttpStatus.StatusCodes.OK).send(booking);
            }
        }).catch((e) => {
            console.log(e);
            if (e.message == ErrorEnum.BOOKING_NOT_EXIST) {
                res.status(HttpStatus.StatusCodes.NOT_FOUND).send(new ResponseDto(
                    Status.FAILED,
                    "No se encontró la reserva"
                ));
            } else {
                res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(new ResponseDto(
                    Status.FAILED,
                    "Ocurrió un error al consultar la reserva"
                ));
            }
        });
};

module.exports = {
    bookingCreate,
    bookingFind,
};
