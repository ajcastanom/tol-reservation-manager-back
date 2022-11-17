import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {authenticationRouter} from "./router/authentication-router";
import {bookingRouter} from "./router/booking-router";
import {providerRouter} from "./router/provider-router";
import {airlineRouter} from "./router/airline-router";
import {documentTypeRouter} from "./router/document-type-router";
import ConfigAccount from "./config/config-account";

require("dotenv").config();

// initializeApp
admin.initializeApp({
    credential: admin.credential.cert(ConfigAccount.getServiceAccount()),
    databaseURL: ConfigAccount.getAuthDomain(),
    storageBucket: ConfigAccount.getStorageBucket(),
    projectId: ConfigAccount.getServiceAccount().project_id,
});

// @ts-ignore
export const authenticationApi = functions.https.onRequest(authenticationRouter);
// @ts-ignore
export const bookingApi = functions.https.onRequest(bookingRouter);
// @ts-ignore
export const providerApi = functions.https.onRequest(providerRouter);
// @ts-ignorex
export const airlineApi = functions.https.onRequest(airlineRouter);
// @ts-ignore
export const documentTypeApi = functions.https.onRequest(documentTypeRouter);
