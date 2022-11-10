import {response} from "express";
import {AirlineService} from "../service/airline-service";
import {Status} from "../enum/status-enum";

const HttpStatus = require("http-status-codes");

const airlineCreate = async (req: any, res = response) => {
    console.log("Airline:create");

    const airline = req.body;
    const airlineService = AirlineService.getInstance();

    airlineService.create(airline)
        .then(function(response: any) {
            if (response) {
                res.status(HttpStatus.StatusCodes.CREATED).send({
                    create: Status.SUCCESS,
                });
            } else {
                res.status(HttpStatus.StatusCodes.CONFLICT).send({
                    create: Status.FAILED,
                    description: "Ya existe la aerolínea",
                });
            }
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send({
            create: Status.FAILED,
            description: "Ocurrió un error al guardar",
        });
    });
};

const airlineList = async (req: any, res = response) => {
    console.log("Airline:list");

    const airlineService = AirlineService.getInstance();

    airlineService.list()
        .then(function(response: any) {
            if (response) res.status(HttpStatus.StatusCodes.OK).send(response);
            else res.status(HttpStatus.StatusCodes.NOT_FOUND).send(response);
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send({
            create: Status.FAILED,
            description: "Ocurrió un error al guardar",
        });
    });
};

module.exports = {
    airlineCreate,
    airlineList,
};
