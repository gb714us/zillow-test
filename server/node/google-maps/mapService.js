const maps = require('@google/maps');
console.log(process.env.MAPS_API_KEY ? 'Found Maps Key' : 'Unable to find maps key')

//check environment variable
const client = maps.createClient({
    key : process.env.MAPS_API_KEY,
    Promise: Promise
})

class MapService {
    getGeolocation(address) {
        if (!address) {
            return null;
        }

        return client.geocode({ address }).asPromise()
        .then(res => {
            if (res.status !== 200)
            {
                throw new Error('No data available.')
            }

            return res.json.results;
        })
    }
}

module.exports = MapService;