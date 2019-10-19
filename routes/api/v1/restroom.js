const express = require('express');
const router = express.Router();

// Restroom Model
const restroom = require('../../../models/RestroomRating');

// @route   GET api/v1/restrooms
// @desc    Get All Restroom Ratings and Attributes
// @access  Public
router.get('/', (req, res) => {
    restroom.find()
        .sort({ date: -1 })
        .then(restrooms => res.json(restrooms))
});

// @route   POST api/v1/restrooms
// @desc    Create a Restroom Rating
// @access  Public
router.post('/', (req, res) => {
    const newRestroomRating = new RestroomRating({
        location: req.body.location,
        rating: req.body.rating,
        name: req.body.name,
        identifier: req.body.identifier,
        accessible: req.body.accessible,
        babychanger: req.body.babychanger,
        customeronly: req.body.customeronly
    });

    newRestroomRating.save()
        .then(restroom => res.json(restroom))
        .catch(err => console.log(err));
});

// @route   DELETE api/v1/restrooms
// @desc    Delete a Restroom
router.delete('/:ide', (req, res) => {
    Restroom.findById(req.params.id)
        .then(restroom => restroom.remove().then(() => req.json({success:true})))
        .catch(err => res.status(404).json({success:false}));
});

module.exports = router;