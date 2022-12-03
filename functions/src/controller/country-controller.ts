import {response} from "express";
import {CountryService} from "../service/country-service";
import {Status} from "../enum/status-enum";

const HttpStatus = require("http-status-codes");

const countryCreateAll = async (req: any, res = response) => {
    console.log("Country:createAll");

    const countries = req.body;
    const countryService = CountryService.getInstance();

    countryService.createAll(countries)
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
            description: "Ocurrió un error al guardar los países",
        });
    });
};

const countryList = async (req: any, res = response) => {
    console.log("Country:List");

    const countryService = CountryService.getInstance();

    countryService.list()
        .then(function(response: any) {
            if (response) {
                res.status(HttpStatus.StatusCodes.OK).send(response);
            }
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send({
            create: Status.FAILED,
            description: "Ocurrió un error al consultar los países",
        });
    });
};

module.exports = {
    countryCreateAll,
    countryList,
};
