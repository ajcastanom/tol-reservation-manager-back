import {Router} from "express";
import {corsOptionsDelegate} from "../utils/utils";
import {validateJWT} from "../middleware/validate-jwt";
import {authorize} from "../middleware/authorize";
import {Permission} from "../enum/permission-enum";

const {countryCreateAll, countryList} = require("../controller/country-controller");
const cors = require("cors");

export const countryRouter = Router();

// Cors Settings
countryRouter.use(cors(corsOptionsDelegate));

countryRouter.post("/create-all", [
    validateJWT,
    authorize(),
], countryCreateAll);

countryRouter.get("/list", [
    validateJWT,
    authorize(Permission.CAN_CREATE_BOOKING),
], countryList);
