import {Provider} from "../model/provider-model";

export class ProviderDto {
    nit: string;
    name: string;
    country: string;

    constructor(provider: Provider) {
        this.nit = provider.nit;
        this.name = provider.name;
        this.country = provider.country;
    }
}
