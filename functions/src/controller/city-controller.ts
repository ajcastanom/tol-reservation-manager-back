import {response} from "express";
import {Status} from "../enum/status-enum";
import {CityService} from "../service/city-service";

const HttpStatus = require("http-status-codes");

const cityCreateAll = async (req: any, res = response) => {
    console.log("City:createAll");

    const cityService = CityService.getInstance();

    cityService.createAll()
        .then(function(response: any) {
            if (response) {
                res.status(HttpStatus.StatusCodes.CREATED).send({
                    create: Status.SUCCESS,
                });
            }
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send({
            create: Status.FAILED,
            description: "Ocurrió un error al guardar las ciudades",
        });
    });
};

const cityListByCountry = async (req: any, res = response) => {
    console.log("City:List by country id");

    const {countryId} = req.params;
    const cityService = CityService.getInstance();

    cityService.listByCountry(countryId)
        .then(function(response: any) {
            if (response) {
                res.status(HttpStatus.StatusCodes.OK).send(response);
            }
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send({
            create: Status.FAILED,
            description: "Ocurrió un error al consultar las ciudades",
        });
    });
};

module.exports = {
    cityCreateAll,
    cityListByCountry,
};
