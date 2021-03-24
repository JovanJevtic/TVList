import Moment from 'react-moment';
import WatchlistPreview from '../components/WatchlistPreview';

const WatchlistThumbnail = ({ title, movies, date, id }) => {
    return(
        <div className="watchlist-thumbnail">
            <p> {title} </p>
            <p> Created at: <Moment format="DD/MM/YYYY" date={date} /> </p>
            { movies && movies.map(movie => (
                <WatchlistPreview
                    key={movie}
                    id={movie}
                />
            ))}
        </div>
    );
}

export default WatchlistThumbnail;