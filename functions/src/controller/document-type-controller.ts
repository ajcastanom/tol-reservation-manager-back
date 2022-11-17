import {response} from "express";
import {DocumentTypeService} from "../service/document-type-service";
import {Status} from "../enum/status-enum";

const HttpStatus = require("http-status-codes");

const documentTypeCreate = async (req: any, res = response) => {
    console.log("DocumentType:create");

    const documentType = req.body;
    const documentTypeService = DocumentTypeService.getInstance();

    documentTypeService.create(documentType)
        .then(function(response: any) {
            if (response) {
                res.status(HttpStatus.StatusCodes.CREATED).send({
                    create: Status.SUCCESS,
                });
            } else {
                res.status(HttpStatus.StatusCodes.CONFLICT).send({
                    create: Status.FAILED,
                    description: "Ya existe el tipo de documento",
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

const documentTypeList = async (req: any, res = response) => {
    console.log("DocumentType:list");

    const documentTypeService = DocumentTypeService.getInstance();

    documentTypeService.list()
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
    documentTypeCreate,
    documentTypeList,
};
