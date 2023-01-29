import {Provider} from "../model/provider-model";

export class ProviderDto {
    nit: string;
    name: string;
    country: string;
    countryId: string;
    codeIata: string;

    constructor(provider: Provider) {
        this.nit = provider.nit;
        this.name = provider.name;
        this.country = provider.country;
        this.codeIata = provider.codeIata;
        this.countryId = provider.countryId;
    }
}
