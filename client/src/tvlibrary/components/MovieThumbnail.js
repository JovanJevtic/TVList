import { Link } from 'react-router-dom';

const MovieThumbnail = ({id, poster}) => {
    return(
        <Link to={`/movie/${id}`}>
            <div className="movie">
                
                <div className="background" 
                    style={{  
                        backgroundImage: `url(${poster})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
            </div>
        </Link>
    );
}

export default MovieThumbnail;