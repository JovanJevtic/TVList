import useFetch from '../hooks/useFetch';
import WatchlistThumbnail from '../components/WatchlistThumbnail';
import CreateWatchlist from '../components/CreateWatchlist';

const WatchlistsPage = () => {

    const { data: watchlists, isLoading, error } = useFetch(`http://localhost:5000/api/watchlists/`);

    return(
        <div className="wathclists-page container">
            <h1>These are your watchlists:</h1>

            <CreateWatchlist />

            { watchlists && watchlists.map(watchlist => (
                <WatchlistThumbnail 
                    key={watchlist._id}
                    title={watchlist.title} 
                    date={watchlist.date} 
                    movies={watchlist.movies} 
                    id={watchlist._id}
                />
            ))}
        </div>
    );
}

export default WatchlistsPage;
