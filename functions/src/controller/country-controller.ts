import {response} from "express";
import {CountryService} from "../service/country-service";
import {Status} from "../enum/status-enum";

const HttpStatus = require("http-status-codes");

const countryCreateAll = async (req: any, res = response) => {
    console.log("Provider:createAll");

    if (true) {
        res.status(HttpStatus.StatusCodes.CONFLICT).send({
            create: Status.FAILED,
            description: "Operación fuera de servicio",
        });
        return;
    }
    const countries = req.body;
    const countryService = CountryService.getInstance();

    countryService.createAll(countries)
        .then(function(response: any) {
            if (response) {
                res.status(HttpStatus.StatusCodes.CREATED).send({
                    create: Status.SUCCESS,
                    countries: response
                });
            }
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send({
            create: Status.FAILED,
            description: "Ocurrió un error al guardar los países",
        });
    });
};

module.exports = {
    countryCreateAll,
};
