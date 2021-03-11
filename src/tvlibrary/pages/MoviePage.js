import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const MoviePage = () => {

    const { id } = useParams();   
    const { data: movie, isLoading, error } = useFetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`);

    return(
        <div className="movie-page container">
            
        </div>
    );
}

export default MoviePage;