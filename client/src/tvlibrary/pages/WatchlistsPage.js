import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import WatchlistThumbnail from '../components/WatchlistThumbnail';
import CreateWatchlist from '../components/CreateWatchlist';
import Moment from 'moment';
import { useEffect } from 'react';

const WatchlistsPage = () => {

    const { data: watchlists, isLoading, error } = useFetch(`http://localhost:5000/api/watchlists/`);

    useEffect(() => {
        watchlists && watchlists.sort((a,b) => new Moment(a.date).format('DD/MM/YYYY') - new Moment(b.date).format('MM/DD/YYYY'))
    }, [watchlists])

    return(
        <div className="wathclists-page container">
            <h1>These are your watchlists:</h1>

            <CreateWatchlist />

            { watchlists && watchlists.map(watchlist => (
                <Link style={{textDecoration: 'none', color: '#000'}} to={`/watchlist/${watchlist._id}`}>
                    <WatchlistThumbnail 
                        key={watchlist._id}
                        title={watchlist.title} 
                        date={watchlist.date} 
                        movies={watchlist.movies} 
                        id={watchlist._id}
                    />
                </Link>
            ))}
        </div>
    );
}

export default WatchlistsPage;
