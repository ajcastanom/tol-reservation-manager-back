import {response} from "express";
import {ProviderService} from "../service/provider-service";
import {Status} from "../enum/status-enum";

const HttpStatus = require("http-status-codes");

const providerCreate = async (req: any, res = response) => {
    console.log("Provider:create");

    const provider = req.body;
    const providerService = ProviderService.getInstance();

    providerService.create(provider)
        .then(function(response: any) {
            if (response) {
                res.status(HttpStatus.StatusCodes.CREATED).send({
                    create: Status.SUCCESS,
                });
            } else {
                res.status(HttpStatus.StatusCodes.CONFLICT).send({
                    create: Status.FAILED,
                    description: "Ya existe el proveedor",
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

const providerList = async (req: any, res = response) => {
    console.log("Provider:list");

    const providerService = ProviderService.getInstance();

    providerService.list()
        .then(function(response: any) {
            if (response) res.status(HttpStatus.StatusCodes.OK).send(response);
            else res.status(HttpStatus.StatusCodes.NOT_FOUND).send(response);
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send({
            list: Status.FAILED,
            description: "Ocurrió un error al listar los proveedores",
        });
    });
};

const providerListByService = async (req: any, res = response) => {
    console.log("Provider:listByService");

    const providerService = ProviderService.getInstance();

    const {service, countryId} = req.params;

    providerService.listByService(service, countryId)
        .then(function(response: any) {
            if (response) res.status(HttpStatus.StatusCodes.OK).send(response);
            else res.status(HttpStatus.StatusCodes.NOT_FOUND).send(response);
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send({
            list: Status.FAILED,
            description: "Ocurrió un error al listar los proveedores",
        });
    });
};

module.exports = {
    providerCreate,
    providerList,
    providerListByService,
};
