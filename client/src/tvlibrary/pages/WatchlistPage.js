import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const WatchListPage = () => {

    const { id } = useParams();
    const { data: watchlist, isLoading, error } = useFetch(`http://localhost:5000/api/watchlists/${id}`);

    return(
        <div className="wathclist-page container">
            { watchlist && (
                <div  className="watchlist">
                    <p>{ watchlist.title }</p>
                    <p>{ watchlist.date }</p>
                    <div className="movie-list">
                        { watchlist.movies.map(movie => (
                            <WatchlistMovie id={movie} key={movie} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

const WatchlistMovie = ({ id }) => {

    const { data: movie, isLoading, error } = useFetch(`http://localhost:5000/api/movies/${id}`);

    return(
        <>
            { movie && (
                <Link className="movie" to={`/movie/${movie.imdbID}`}>
                    <div className="background" 
                        style={{  
                            backgroundImage: `url(${movie.poster})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}
                    ></div>
                </Link>
            )}
        </>
    ); 
}

export default WatchListPage;