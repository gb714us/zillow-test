const router = require('express').Router();
const ajaxOnly = require('../middleware/ajax-only');
const MapService = require('../google-maps/mapService');

const service = new MapService();

router.use(ajaxOnly);

// router.get('/:query', (req, res) => {
//     res.json({ search: req.params['id'] });
// });

router.get('/coordinates', (req, res) => {
    console.log('in coordinates');

    service.getGeolocation(req.query.query)
        .then(x => {
            console.log(x);
            res.json({result: true, data: x});
        })
        .catch((e) => {
            res.json({message: e.message, result: false});
        });
});

module.exports = router;