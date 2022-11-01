import {Router} from "express";
import {corsOptionsDelegate} from "../utils/utils";
import {validateJWT} from "../middleware/validate-jwt";

const {login, refreshToken, recovery, logout} = require("../controller/authentication-controller");
const cors = require("cors");

export const authenticationRouter = Router();

// Cors Settings
authenticationRouter.use(cors(corsOptionsDelegate));

authenticationRouter.post("/login", [], login);
authenticationRouter.post("/refresh-token", [], refreshToken);
authenticationRouter.post("/recovery", [], recovery);
authenticationRouter.post("/logout", [validateJWT], logout);
