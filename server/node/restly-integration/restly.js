const listings = require('listings.js');
const connectionOptions = {
    url: 'https://rets.io/api'
}

const defaults = {
    vendor: 'test',
    accessToken: '6baca547742c6f96a6ff71b138424f21'
}


class RestlyApi {
    
    constructor(token)
    {
        this.apiToken = token || defaults.accessToken;
    }

    buildUrl ()
    {
        return connectionOptions;
    }
    
}

module.exports = RestlyApi