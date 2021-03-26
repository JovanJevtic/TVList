import useFetch from '../hooks/useFetch';

const WatchlistPreview = ({ id }) => {
    
    const { data: movie, isLoading, error } = useFetch(`http://localhost:5000/api/movies/${id}`);

    return(
        <>
            { movie &&   
                <div className="watchlist-preview"> 
                    <img alt="movie thumbnail" src={movie.poster} />
                </div>
            }
        </>
    );
}

export default WatchlistPreview;