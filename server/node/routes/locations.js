const router = require('express').Router();
const MapService = require('../google-maps/mapService');
const RetslyApiService = require('../retsly-integration/retsly');

const mapService = new MapService();
const retslyApiService = new RetslyApiService();

// router.get('/:query', (req, res) => {
//     res.json({ search: req.params['id'] });
// });

router.get('/coordinates', (req, res) => {
    console.log('in coordinates');

    mapService.getGeolocation(req.query.query)
        .then(x => {
            console.log(x);
            res.json({result: true, data: x});
        })
        .catch((e) => {
            res.json({message: e.message, result: false});
        });
});

router.get('/:address', (req, res) => {
    console.log('in details');
    retslyApiService.listings({address: req.params['address']})
        .then(x => {
            console.log(x);
            if (!x.success || !x.bundle.length > 0)
            {
                throw new Error("Unable to find results for the given location.")
            }
            res.json({result: true, data: x.bundle}); 

        })
        .catch((e) => {
            res.json({message: e.message, result: false});
        });
});

module.exports = router;