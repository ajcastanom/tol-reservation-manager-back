import ConfigAccount from "../config/config-account";

const got = require("got");

export class AuthenticationClient {
    private static instance: AuthenticationClient;

    public static getInstance(): AuthenticationClient {
        if (!AuthenticationClient.instance) {
            AuthenticationClient.instance = new AuthenticationClient();
        }

        return AuthenticationClient.instance;
    }

    public async refreshToken(apiKey: string, refreshToken: string) {
        const {body} = await got.post(ConfigAccount.getServiceAccount().secure_token_url.concat("/token?key=").concat(apiKey), {
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            form: {
                grant_type: "refresh_token",
                refresh_token: refreshToken,
            },
            responseType: "json",
        });

        return body;
    }
}
