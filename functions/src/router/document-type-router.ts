import {Router} from "express";
import {corsOptionsDelegate} from "../utils/utils";
import {validateJWT} from "../middleware/validate-jwt";
import {authorize} from "../middleware/authorize";
import {Permission} from "../enum/permission-enum";

const {documentTypeCreate, documentTypeList} = require("../controller/document-type-controller");
const cors = require("cors");

export const documentTypeRouter = Router();

// Cors Settings
documentTypeRouter.use(cors(corsOptionsDelegate));

documentTypeRouter.post("/create", [
    validateJWT,
    authorize(),
], documentTypeCreate);

documentTypeRouter.get("/list", [
    validateJWT,
    authorize(Permission.CAN_CREATE_BOOKING),
], documentTypeList);
