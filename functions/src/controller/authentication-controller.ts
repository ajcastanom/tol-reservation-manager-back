import {response} from "express";
import {AuthenticationService} from "../service/authentication-service";
import {Token} from "../model/token-model";

const HttpStatus = require("http-status-codes");

const login = async (req: any, res = response) => {
    console.log("Login");
    console.log(req.body);
    const {email, password} = req.body;
    const authenticationService = AuthenticationService.getInstance();
    authenticationService.login(email, password)
        .then(function(userCredential: any) {
            const token:Token = userCredential.user.toJSON().stsTokenManager;
            delete token["apiKey"];
            res.status(HttpStatus.StatusCodes.OK).send(token);
        }).catch(function(e) {
        console.log(e);
        res.status(HttpStatus.StatusCodes.UNAUTHORIZED).send(false);
    });
};

module.exports = {
    login,
};
