import { Link } from 'react-router-dom';

const Movie = ({
    actors,
    awards, 
    country,
    genre,
    plot,
    ratings,
    date, 
    runtime,
    type,
    year,
    writer,
    seasons,
    imdbRating,
    imdbVotes,
    poster,
    title,
    boxOffice
}) => {
    
    return(
        <div className="movie-imdb-page">
            <div className="movie-page-heading">
                <div className="movie-page-poster-container">
                    <div className="movie-poster-container">
                        <img alt="poster" className="movie-poster" src={poster} />
                    </div>
                    <div className="movie-poster-btns-container">
                        <Link to="/watchlists" className="save-btn">
                            Add to Watchlist <i className="fas fa-folder-plus"></i>
                        </Link>
                    </div>
                </div>
                <div className="movie-page-info-container">
                    <h1 className="movie-page-info-title">{title}</h1>

                    <ul>
                        <li><p className="movie-page-info-date"><b>Released:</b> {date}</p></li>
                        <li><p className="movie-page-info-genre"><b>Genre:</b> {genre}</p></li>
                        <li><p className="movie-page-info-actors"><b>Actors:</b> {actors}</p></li>
                        { type === 'series' && <li><p className="movie-page-info-seasons"><b>Number of seasons:</b> {seasons}</p></li> }
                        <li><p className="movie-page-info-imdb-runtime"><b>Runtime:</b> {runtime} </p></li>
                        <li><p className="movie-page-info-imdb-writer"><b>Writer:</b> {writer}</p></li>
                        <li><p className="movie-page-info-imdb-rating"><b>Imdb rating:</b> {imdbRating}</p></li>
                        <li><p className="movie-page-info-imdb-votes"><b>Number of Imdb votes:</b> {imdbVotes} </p></li>
                    </ul>

                    <div className="movie-page-info-plot-container">
                        <p className="movie-page-info-plot">{plot}</p>
                    </div>
                </div>
            </div>
            <div className="movie-page-footer">
               <h2>Received ratings: </h2>
               {ratings.map(rating => (
                   <p>{rating.Source}: {rating.Value}</p>
               ))}
               <h2 className="awards">Awards: </h2>
               <p style={{marginBottom: '20px'}}> {awards} </p>
               { type === 'movie' && <div><h2 className="movie-page-info-boxOffice"><b>BoxOffice revenue: </b></h2> <p>{boxOffice}</p></div> }
            </div>
        </div>
    );
}

export default Movie;
