import Moment from 'react-moment';
import WatchlistPreview from '../components/WatchlistPreview';

const WatchlistThumbnail = ({ title, movies, date, id }) => {
    return(
        <div className="watchlist-thumbnail-container">
            <div className="watchlist-thumbnail-header">
                <div className="watchlist-thumbnail-header-title">
                    <p> {title} </p>
                </div>
                <div className="watchlist-thumbnail-header-date">
                    <p> Created at: <b> <Moment format="DD/MM/YYYY" date={date} /> </b> </p>
                </div>
            </div>
            <div className="watchlist-thumbnail">
                { movies && movies.map(movie => (
                    <WatchlistPreview
                        key={movie}
                        id={movie}
                    />
                ))}
            </div>
        </div>
    );
}

export default WatchlistThumbnail;