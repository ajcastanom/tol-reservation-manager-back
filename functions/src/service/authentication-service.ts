import {firebaseConfig} from "../utils/utils";

const firebase = require("firebase");

export class AuthenticationService {
    private static instance: AuthenticationService;

    private constructor() {
        firebase.initializeApp(firebaseConfig);
    }

    public static getInstance(): AuthenticationService {
        if (!AuthenticationService.instance) {
            AuthenticationService.instance = new AuthenticationService();
        }

        return AuthenticationService.instance;
    }

    public async login(email: string, password: string): Promise<any> {
        return await firebase.auth().signInWithEmailAndPassword(email, password);
    }
}
