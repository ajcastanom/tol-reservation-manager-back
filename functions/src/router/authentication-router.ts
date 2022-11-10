import {Router} from "express";
import {corsOptionsDelegate} from "../utils/utils";
import {validateJWT} from "../middleware/validate-jwt";

const {authenticationLogin, authenticationRefreshToken, authenticationRecovery, authenticationLogout} = require("../controller/authentication-controller");
const cors = require("cors");

export const authenticationRouter = Router();

// Cors Settings
authenticationRouter.use(cors(corsOptionsDelegate));

authenticationRouter.post("/login", [], authenticationLogin);
authenticationRouter.post("/refresh-token", [], authenticationRefreshToken);
authenticationRouter.post("/recovery", [], authenticationRecovery);
authenticationRouter.get("/logout", [validateJWT], authenticationLogout);
