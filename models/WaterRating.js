const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const WaterRatingSchema = new Schema({
    rating: {
        type: Number,
        required: true
    },
    identifier: {
        type: String,
        required: true
    },
    accessible: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = WaterRating = mongoose.model('water', WaterRatingSchema);