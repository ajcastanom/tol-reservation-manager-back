import {response} from "express";
import {AuthenticationService} from "../service/authentication-service";
import {Token} from "../model/token-model";

const HttpStatus = require("http-status-codes");

const login = async (req: any, res = response) => {
    console.log("Login");
    const {email, password} = req.body;
    const authenticationService = AuthenticationService.getInstance();
    authenticationService.login(email, password)
        .then(function(token: Token) {
            res.status(HttpStatus.StatusCodes.OK).send(token);
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.UNAUTHORIZED).send(false);
    });
};

const refreshToken = async (req: any, res = response) => {
    console.log("Refresh token");
    const {apiKey, refreshToken} = req.body;
    const authenticationService = AuthenticationService.getInstance();
    authenticationService.refreshToken(apiKey, refreshToken)
        .then(function(token: Token) {
            res.status(HttpStatus.StatusCodes.OK).send(token);
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.UNAUTHORIZED).send(false);
    });
};

module.exports = {
    login,
    refreshToken,
};
