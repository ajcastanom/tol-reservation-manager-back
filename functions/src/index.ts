import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {authenticationRouter} from "./router/authentication-router";

require("dotenv").config();

// initializeApp
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
});

// @ts-ignore
export const authenticationApi = functions.https.onRequest(authenticationRouter);
