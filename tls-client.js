const URL = "https://dev.tescolabs.com/locations/search";
const HEADER = "Ocp-Apim-Subscription-Key"

module.exports = class TescoStoreLocationClient {
    constructor (subscriptionKey, rp) {
        this.subscriptionKey = subscriptionKey;
        this.rp = rp;
    }

    searchLocations(query) {
        var options = {
            uri: URL,
            qs: query,
            headers: {[HEADER]: this.subscriptionKey},
            json: true
        };

        return this.rp(options)
    }

    static instance (subscriptionKey) {
        const rp = require('request-promise-native')
        return new TescoStoreLocationClient(subscriptionKey, rp)
    }
}