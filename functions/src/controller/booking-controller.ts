import {response} from "express";

const HttpStatus = require("http-status-codes");

const create = async (req: any, res = response) => {
    console.log("Booking:create");
    res.status(HttpStatus.StatusCodes.OK).send({
        ok: true,
        msg: "Token válido",
    });
};

module.exports = {
    create,
};
