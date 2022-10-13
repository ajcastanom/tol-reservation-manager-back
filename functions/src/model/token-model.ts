export interface Token{
    refreshToken: string;
    accessToken: string;
    expirationTime?: string;
    expireIn?: string
    apiKey:string;
    user?: any;
}
