import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {authenticationRouter} from "./router/authentication-router";
import ConfigAccount from "./config/config-account";

require("dotenv").config();

// initializeApp
admin.initializeApp({
    credential: admin.credential.cert(ConfigAccount.getServiceAccount()),
    databaseURL: ConfigAccount.getDatabaseURL(),
    storageBucket: ConfigAccount.getStorageBucket(),
    projectId: ConfigAccount.getProjectId(),
});

// @ts-ignore
export const authenticationApi = functions.https.onRequest(authenticationRouter);
