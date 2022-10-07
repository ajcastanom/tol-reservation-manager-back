export interface Token{
    refreshToken: string;
    accessToken: string;
    expirationTime: string;
    apiKey?:string;
}
