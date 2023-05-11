import {response} from "express";
import {BookingService} from "../service/booking-service";
import {Status} from "../enum/status-enum";
import {ResponseDto} from "../dto/response-dto";

const HttpStatus = require("http-status-codes");

const bookingCreate = async (req: any, res = response) => {
    console.log("Booking:create");

    const booking = req.body;
    const bookingService = BookingService.getInstance();

    bookingService.create(booking)
        .then(function(response: ResponseDto) {
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
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(new ResponseDto(
            Status.FAILED,
            "Ocurrió un error al guardar la reserva"
        ));
    });
};

module.exports = {
    bookingCreate,
};
