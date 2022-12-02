import {Router} from "express";
import {corsOptionsDelegate} from "../utils/utils";
import {validateJWT} from "../middleware/validate-jwt";

const {providerCreate, providerList, providerListByService} = require("../controller/provider-controller");
const cors = require("cors");

export const providerRouter = Router();

// Cors Settings
providerRouter.use(cors(corsOptionsDelegate));

providerRouter.post("/create", [
    validateJWT,
], providerCreate);

providerRouter.get("/list", [
    validateJWT,
], providerList);

providerRouter.post("/list/:service", [
    validateJWT,
], providerListByService);
