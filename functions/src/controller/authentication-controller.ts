import {response} from "express";
import {AuthenticationService} from "../service/authentication-service";
import {Token} from "../model/token-model";
import {Status} from "../enum/status-enum";

const HttpStatus = require("http-status-codes");

const authenticationLogin = async (req: any, res = response) => {
    console.log("Login");
    const {email, password} = req.body;
    const authenticationService = AuthenticationService.getInstance();
    authenticationService.login(email, password)
        .then(function(token: Token) {
            res.status(HttpStatus.StatusCodes.OK).send(token);
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.UNAUTHORIZED).send({
            login: Status.FAILED,
        });
    });
};

const authenticationRefreshToken = async (req: any, res = response) => {
    console.log("Refresh token");
    const {apiKey, refreshToken} = req.body;
    const authenticationService = AuthenticationService.getInstance();
    authenticationService.refreshToken(apiKey, refreshToken)
        .then(function(token: Token) {
            res.status(HttpStatus.StatusCodes.OK).send(token);
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.UNAUTHORIZED).send({
            refreshToken: Status.FAILED,
        });
    });
};

const authenticationRecovery = async (req: any, res = response) => {
    console.log("Recovery password");
    const {email} = req.body;
    const authenticationService = AuthenticationService.getInstance();
    authenticationService.recovery(email)
        .then(function(response: any) {
            res.status(HttpStatus.StatusCodes.OK).send(response);
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send({
            recovery: Status.FAILED,
        });
    });
};

const authenticationLogout = async (req: any, res = response) => {
    console.log("Logout");
    const {uid} = req;
    const authenticationService = AuthenticationService.getInstance();
    authenticationService.logout(uid)
        .then(function(response: any) {
            res.status(HttpStatus.StatusCodes.OK).send(response);
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send({
            recovery: Status.FAILED,
        });
    });
};

module.exports = {
    authenticationLogin,
    authenticationRefreshToken,
    authenticationRecovery,
    authenticationLogout,
};
