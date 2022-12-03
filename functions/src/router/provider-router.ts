import {Router} from "express";
import {corsOptionsDelegate} from "../utils/utils";
import {validateJWT} from "../middleware/validate-jwt";
import {authorize} from "../middleware/authorize";
import {Permission} from "../enum/permission-enum";

const {providerCreate, providerList, providerListByService} = require("../controller/provider-controller");
const cors = require("cors");

export const providerRouter = Router();

// Cors Settings
providerRouter.use(cors(corsOptionsDelegate));

providerRouter.post("/create", [
    validateJWT,
    authorize(),
], providerCreate);

providerRouter.get("/list", [
    validateJWT,
    authorize(),
], providerList);

providerRouter.post("/list/:service/:country", [
    validateJWT,
    authorize(Permission.CAN_CREATE_BOOKING),
], providerListByService);
