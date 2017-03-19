const router = require('express').Router();

router.get('/:id', (req, res) => {
    return res.json({search: req.params['id']});
});

module.exports  = router;