interface ICountry{
    id: number;
    name: string;
    iso2: string;
    currency: string;
    currencySymbol: string;
    region: string;
    subregion: string;
    phoneCode: string;
    emoji: string;
}

export class Country implements ICountry {
    id: number;
    name: string;
    iso2: string;
    currency: string;
    currencySymbol: string;
    region: string;
    subregion: string;
    phoneCode: string;
    emoji: string;
    translations: any;

    constructor(country: any) {
        this.id = country.id;
        this.name = country.name;
        this.iso2 = country.iso2;
        this.currency = country.currency;
        this.currencySymbol = country.currency_symbol;
        this.region = country.region;
        this.subregion = country.subregion;
        this.phoneCode = country.phone_code;
        this.emoji = country.emoji;
        this.translations = country.translations;
    }

    toJson() {
        return {
            "id": this.id,
            "name": this.name,
            "iso2": this.iso2,
            "currency": this.currency,
            "currencySymbol": this.currencySymbol,
            "region": this.region,
            "subregion": this.subregion,
            "phoneCode": this.phoneCode,
            "emoji": this.emoji,
            "translations": this.translations,
        };
    }
}
