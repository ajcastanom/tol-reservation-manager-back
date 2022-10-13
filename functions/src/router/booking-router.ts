import {Router} from "express";
import {corsOptionsDelegate} from "../utils/utils";
import {validateJWT} from "../middleware/validate-jwt";

const {create} = require("../controller/booking-controller");
const cors = require("cors");

export const bookingRouter = Router();

// Cors Settings
bookingRouter.use(cors(corsOptionsDelegate));

bookingRouter.post("/create", [
    validateJWT,
], create);
