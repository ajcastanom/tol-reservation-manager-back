import {Router} from "express";
import {corsOptionsDelegate} from "../utils/utils";
import {validateJWT} from "../middleware/validate-jwt";

const {airlineCreate, airlineList} = require("../controller/airline-controller");
const cors = require("cors");

export const airlineRouter = Router();

// Cors Settings
airlineRouter.use(cors(corsOptionsDelegate));

airlineRouter.post("/create", [
    validateJWT,
], airlineCreate);

airlineRouter.get("/list", [
    validateJWT,
], airlineList);
