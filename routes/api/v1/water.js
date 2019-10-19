const express = require('express');
const router = express.Router();

// Water Model
const water = require('../../../models/WaterRating');

// @route   GET api/v1/refills
// @desc    Get All Water Bottle Refill Ratings and Attributes
// @access  Public
router.get('/', (req, res) => {
    water.find()
        .sort({ date: -1 })
        .then(refills => res.json(refills))
});

// @route   POST api/v1/refills
// @desc    Create a Water Bottle Refill Rating
// @access  Public
router.post('/', (req, res) => {
    const newWaterRating = new WaterRating({
        location: req.body.location,
        rating: req.body.rating,
        name: req.body.name,
        identifier: req.body.identifier,
        accessible: req.body.accessible,
    });

    newWaterRating.save()
        .then(refill => res.json(refill))
        .catch(err => console.log(err));
});

// @route   DELETE api/v1/refills
// @desc    Delete a Water Bottle Refill
router.delete('/:ide', (req, res) => {
    Water.findById(req.params.id)
        .then(refill => refill.remove().then(() => req.json({success:true})))
        .catch(err => res.status(404).json({success:false}));
});

module.exports = router;