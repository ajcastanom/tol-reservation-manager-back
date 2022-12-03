import {Router} from "express";
import {corsOptionsDelegate} from "../utils/utils";
import {validateJWT} from "../middleware/validate-jwt";
import {authorize} from "../middleware/authorize";
import {Permission} from "../enum/permission-enum";

const {cityCreateAll, cityListByCountry} = require("../controller/city-controller");
const cors = require("cors");

export const cityRouter = Router();

// Cors Settings
cityRouter.use(cors(corsOptionsDelegate));

cityRouter.post("/create-all", [
    validateJWT,
    authorize(),
], cityCreateAll);

cityRouter.get("/list/:countryId", [
    validateJWT,
    authorize(Permission.CAN_CREATE_BOOKING),
], cityListByCountry);
