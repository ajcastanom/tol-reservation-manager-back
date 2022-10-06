import {Router} from "express";

const {login} = require("../controller/authentication-controller");

export const authenticationRouter = Router();

authenticationRouter.post("/login", [], login);
