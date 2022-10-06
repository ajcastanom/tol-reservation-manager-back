import {response} from "express";

const HttpStatus = require("http-status-codes");

const login = async (req: Request, res = response) => {
    console.log("Login");
    console.log(req.body);
    res.status(HttpStatus.OK).send("Login user");
};

module.exports = {
    login,
};
