import {Router} from "express";
import {corsOptionsDelegate} from "../utils/utils";
import {validateJWT} from "../middleware/validate-jwt";
import {authorize} from "../middleware/authorize";
import {Permission} from "../enum/permission-enum";

const {bookingCreate} = require("../controller/booking-controller");
const cors = require("cors");

export const bookingRouter = Router();

// Cors Settings
bookingRouter.use(cors(corsOptionsDelegate));

bookingRouter.post("/create", [
    validateJWT,
    authorize(Permission.CAN_CREATE_BOOKING),
], bookingCreate);
