import WatchlistPreview from '../components/WatchlistPreview';
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const WatchlistThumbnail = ({ title, movies, date, id }) => {

    const { data, isLoading, error} = useFetch(`http://localhost:5000/api/movies/${movies}`);

    console.log(data)
 
    return(
        <div className="watchlist-thumbnail">
            <p> {title} </p>
            <p> Created at: {date} </p>
            {/* { movies && movies.map(movie => {
                <WatchlistPreview
                    key={movie} 
                    id={movie}
                />
            })} */}
        </div>
    );
}

export default WatchlistThumbnail;