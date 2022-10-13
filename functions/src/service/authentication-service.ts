import {firebaseConfig} from "../utils/utils";
import {AuthenticationClient} from "../client/authentication-client";
import {Token} from "../model/token-model";
const admin = require("firebase-admin");


const firebase = require("firebase");

export class AuthenticationService {
    private static instance: AuthenticationService;
    private readonly userRef: any;

    private constructor() {
        firebase.initializeApp(firebaseConfig);
        this.userRef = admin.firestore().collection("user");
    }

    public static getInstance(): AuthenticationService {
        if (!AuthenticationService.instance) {
            AuthenticationService.instance = new AuthenticationService();
        }

        return AuthenticationService.instance;
    }

    public async login(email: string, password: string): Promise<any> {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const userData = await this.userRef.where("uid", "==", userCredential.user.uid).get();

        const token:Token = userCredential.user.toJSON().stsTokenManager;

        if (!userData.empty) {
            let user: any;
            userData.forEach((doc: any) => {
                user = doc.data();
            });

            token.user = {
                name: user.name,
            };
        }

        return token;
    }

    public async refreshToken(apiKey: string, refreshToken: string): Promise<any> {
        const authenticationClient = AuthenticationClient.getInstance();
        const response = await authenticationClient.refreshToken(apiKey, refreshToken);
        return {
            apiKey: apiKey,
            refreshToken: response.refresh_token,
            accessToken: response.access_token,
            expireIn: response.expires_in,
        };
    }
}
