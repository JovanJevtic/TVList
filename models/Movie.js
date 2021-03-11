const mongoose = require('mongoose');

const MovietSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    imdbID: {
        type: String,
        required: true
    },
    watchlists: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Watchlist', required: true }
    ]
});

module.exports = mongoose.model('Movie', MovietSchema);