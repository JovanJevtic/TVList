import { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../../MovieContext';
import useFetch from '../hooks/useFetch';
import Movie from './Movie';

const MovieList = () => {
    
    const [ name, setName ] = useContext(MovieContext);
    const { data: movies, isLoading, error } = useFetch(`https://www.omdbapi.com/?s=${name}&apikey=${process.env.REACT_APP_API_KEY}`);

    useEffect(() => {
        console.log(movies)
    }, [movies])

    return(
        <div className="movie-list">
            { isLoading && 'Loading...' }
            { error && `Something went wrong: ${error}` }
            { movies && movies.Error !== "Incorrect IMDb ID." && movies.Error }
            { movies && movies.Search && movies.Search.map(movie => (
                <div style={{ display: movie.Poster !== "N/A" ? 'block' : 'none'}}> <Movie title={movie.Title} poster={movie.Poster} /> </div>
            )) }
        </div>
    );
}

export default MovieList;