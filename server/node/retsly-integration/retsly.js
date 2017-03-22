const fetch = require('isomorphic-fetch');
const urlBuilder = require('../utils/url-builder');

const connectionOptions = {
    url: 'https://rets.io/api/v1/'
}

//default credentials for test dataset.
const defaults = {
    vendor: 'test',
    accessToken: '6baca547742c6f96a6ff71b138424f21'
}


class RetslyTestApi {
    
    constructor(token = defaults.accessToken)
    {
        this.apiToken = token;
        this.vendor = defaults.vendor;
    }

    buildUrl (service, query)
    {
        return urlBuilder(connectionOptions.url + '/' + this.vendor + '/' + service, query);
    }

    //expose the listings integration.
    listings(query)
    {
        let {address, limit} = query;
        limit = limit || 12;

        let q = { 
            address,
            limit
        };

        return this.request('listings', q);
    }

    request(service, query = {})
    {
        query.access_token = this.apiToken;
        return fetch(this.buildUrl(service, query), { 

        })
        .then(res => {
            return res.json();
        });
    }
    
}

module.exports = RetslyTestApi