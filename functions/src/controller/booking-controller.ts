import {response} from "express";

const HttpStatus = require("http-status-codes");

const create = async (req: any, res = response) => {
    console.log("Booking:create");
    res.status(HttpStatus.StatusCodes.OK).send("Token valido");
};

module.exports = {
    create,
};
