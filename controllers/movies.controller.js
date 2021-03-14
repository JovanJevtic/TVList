const Movie = require('../models/Movie');

const getMovie = async (req, res, next) => {
    let movie;
    try {g
        movie = await Movie.findById(req.params.id);

        if (!movie) {
            res.status(404).json({ msg: 'Sorry, the movie you are looking for does not exist anymore!' })
        }

        res.movie = movie;
        res.json(res.movie);
    } catch(err) {
        res.status(500).json({ err: err.message });
    }
}

const getAllMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
}

const addMovie = async (req, res, next) => {
    const movie = new Movie({
        title: req.body.title,
        imdbID: req.body.imdbID,
        poster: req.body.poster,
        watchlists: req.body.watchlists
    });

    try {
        const newMovie = movie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json({ message: "Couldn't add movie, please try again!" });
    }
}

const updateMovie = async (req, res, next) => {
    const { title, watchlists } = req.body;

    const movie = Movie.findById(req.params.id);
    if (movie) {
        movie.title = title;
        movie.watchlists = watchlists;

        try {
            const updatedMovie = await movie.save();
            res.json(updatedMovie);
        } catch (err) {
            res.status(500).json({ err: err.msg })
        }
    } else {
        res.status(404).json({ msg: 'Sorry, the movie you are looking for does not exist anymore!' })
    }
}

const removeMovie = async (req, res, next) => {
    const movie = Movie.findById(req.params.id);

    if (movie) {
        try {
            await movie.remove();
            res.json({ msg: 'Successfully removed movie' });
        } catch (err) {
            res.status(500).json({ err: err.message });
        }
    } else {
        res.status(404).json({ msg: 'Sorry, the movie you are looking for does not exist anymore!' });
    }
}

module.exports = {
    getMovie,
    getAllMovies,
    addMovie,
    updateMovie,
    removeMovie
}