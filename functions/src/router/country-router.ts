import {Router} from "express";
import {corsOptionsDelegate} from "../utils/utils";
import {validateJWT} from "../middleware/validate-jwt";

const {countryCreateAll, countryList} = require("../controller/country-controller");
const cors = require("cors");

export const countryRouter = Router();

// Cors Settings
countryRouter.use(cors(corsOptionsDelegate));

countryRouter.post("/create-all", [
    validateJWT,
], countryCreateAll);

countryRouter.get("/list", [
    validateJWT,
], countryList);
