import {Router} from "express";
import {corsOptionsDelegate} from "../utils/utils";

const {login, refreshToken} = require("../controller/authentication-controller");
const cors = require("cors");

export const authenticationRouter = Router();

// Cors Settings
authenticationRouter.use(cors(corsOptionsDelegate));

authenticationRouter.post("/login", [], login);
authenticationRouter.post("/refresh-token", [], refreshToken);
