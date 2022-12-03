import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {authenticationRouter} from "./router/authentication-router";
import {bookingRouter} from "./router/booking-router";
import {providerRouter} from "./router/provider-router";
import {documentTypeRouter} from "./router/document-type-router";
import {countryRouter} from "./router/country-router";
import ConfigAccount from "./config/config-account";
import firebase from "firebase";
import {firebaseConfig} from "./utils/utils";

require("dotenv").config();

// initializeApp
admin.initializeApp({
    credential: admin.credential.cert(ConfigAccount.getServiceAccount()),
    databaseURL: ConfigAccount.getAuthDomain(),
    storageBucket: ConfigAccount.getStorageBucket(),
    projectId: ConfigAccount.getServiceAccount().project_id,
});

firebase.initializeApp(firebaseConfig);

// @ts-ignore
export const authenticationApi = functions.https.onRequest(authenticationRouter);
// @ts-ignore
export const bookingApi = functions.https.onRequest(bookingRouter);
// @ts-ignore
export const providerApi = functions.https.onRequest(providerRouter);
// @ts-ignore
export const documentTypeApi = functions.https.onRequest(documentTypeRouter);
// @ts-ignore
export const countryApi = functions.https.onRequest(countryRouter);
