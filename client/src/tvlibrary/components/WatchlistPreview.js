import useFetch from '../hooks/useFetch';

const WatchlistPreview = ({ id }) => {
    
    const { data: movie, isLoading, error } = useFetch(`http://localhost:5000/api/movies/${id}`);

    return(
        <div>
            { movie &&   
                <div> 
                    <p> {movie.title} </p>
                    <img alt="movie thumbnail" src={movie.poster} />
                </div>
            }
        </div>
    );
}

export default WatchlistPreview;