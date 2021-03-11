import { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../../MovieContext';
import useFetch from '../hooks/useFetch';
import Movie from './MovieThumbnail';

const MovieList = () => {
    
    const [ name, setName ] = useContext(MovieContext);
    const { data: movies, isLoading, error } = useFetch(`https://www.omdbapi.com/?s=${name}&apikey=${process.env.REACT_APP_API_KEY}`);

    return(
        <div className="movie-list">
            { isLoading && 'Loading...' }
            { error && `Something went wrong: ${error}` }
            { movies && movies.Error !== "Incorrect IMDb ID." && movies.Error }
            { movies && movies.Search && movies.Search.map(movie => (
                <div key={movie.imdbID} className="movie-grid" style={{ display: movie.Poster !== "N/A" ? 'flex' : 'none'}}> 
                    <Movie id={movie.imdbID} poster={movie.Poster} /> 
                </div>
            )) }
        </div>
    );
}

export default MovieList;