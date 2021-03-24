import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Movie from '../components/Movie';

const MoviePage = () => {

    const { id } = useParams();   
    const { data: movie, isLoading, error } = useFetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`);

    return(
        <div className="movie-page container">
            { error && <h1>Something went wrong...{error}</h1> }
            { isLoading && <h1>Loading...</h1> }
            { movie && <Movie
                key={movie.imdbID}
                actors={movie.Actors}
                awards={movie.Awards}
                country={movie.Country}
                genre={movie.Genre}
                plot={movie.Plot}
                ratings={movie.Ratings}
                date={movie.Released}
                runtime={movie.Runtime}
                type={movie.Type}
                year={movie.Year}
                writer={movie.Writer}
                seasons={movie.totalSeasons}
                imdbRating={movie.imdbRating}
                imdbVotes={movie.imdbVotes}
                poster={movie.Poster}
                title={movie.Title}
                boxOffice={movie.BoxOffice}
            /> }
        </div>
    );
}

export default MoviePage;