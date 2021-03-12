const express = require('express');
const router = express.Router();
const {
    getMovie,
    getAllMovies,
    addMovie,
    updateMovie,
    removeMovie
} = require('../controllers/movies.controller');

router.get('/', getAllMovies);

router.post('/', addMovie);

router.get('/:id', getMovie);

router.patch('/:id', updateMovie);

router.delete('/:id', removeMovie);

module.exports = router;