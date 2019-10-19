const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const WaterRatingSchema = new Schema({
    location: {
        type: Object,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    name: {
        type: String,
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