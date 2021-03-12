const Watchlist = require('../models/Wachlist');

const getAllWatchlists = async (req, res, next) => {
    try {
        const watchlists = await Watchlist.find();
        res.json(watchlists);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}

const getSingleWatchlist = async (req, res, next) => {
    let watchlist;
    try {
        watchlist = await Watchlist.findById(req.params.id);

        if (!watchlist) {
            return res.status(404).json({ message: 'Sorry, the watchlist you are looking for does not exist anymore!' });
        }

        res.watchlist = watchlist;
        res.json(res.watchlist);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const createWatchlist = async (req, res, next) => {
    const watchlist = new Watchlist({
        title: req.body.title,
        movies: []
    });

    try {
        const newWatchlist = watchlist.save();
        res.status(201).json(newWatchlist);
    } catch (err) {
        res.status(400).json({ message: "Couldn't create watchlist, please try again!" });
    }
}

const updateWatchlist = async (req, res, next) => {
    const { title, movies } = req.body;

    const watchlist = await Watchlist.findById(req.params.id);
    if (watchlist) {
        watchlist.title = title;
        watchlist.movies = movies;

        try {
            const updatedWatchlist = await watchlist.save();
            res.json(updatedWatchlist);
        } catch (err) {
            res.status(500).json({ err: err.msg });
        }
    } else {
        res.status(404).json({ msg: 'Sorry, the wathclist you are looking for does not exist anymore!' });
    }
}

const deleteWatchlist = async (req, res, next) => {
    const watchlist = Watchlist.findById(req.params.id);

    if (watchlist) {
        try {
            await watchlist.remove();
            res.json({ msg: 'Successfully deleted watchlist!' });
        } catch (err) {
            res.status(500).json({ err: err.message });
        }
    } else {
        res.status(404).json({ message: 'Sorry, the watchlist you are looking for does not exist anymore!' });
    }
}

module.exports = {
    getAllWatchlists,
    getSingleWatchlist,
    createWatchlist,
    updateWatchlist,
    deleteWatchlist
}