const Movie = ({title, poster}) => {
    return(
        <div className="movie">
            <h1> {title} </h1>
            <img src={poster} />
        </div>
    );
}

export default Movie;