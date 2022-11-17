import {Router} from "express";
import {corsOptionsDelegate} from "../utils/utils";
import {validateJWT} from "../middleware/validate-jwt";

const {documentTypeCreate, documentTypeList} = require("../controller/document-type-controller");
const cors = require("cors");

export const documentTypeRouter = Router();

// Cors Settings
documentTypeRouter.use(cors(corsOptionsDelegate));

documentTypeRouter.post("/create", [
    validateJWT,
], documentTypeCreate);

documentTypeRouter.get("/list", [
    validateJWT,
], documentTypeList);
