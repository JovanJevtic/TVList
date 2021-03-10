import InputForm from '../components/InputForm';
import MovieList from '../components/MovieList';

const Explore = () => {
    return(
        <div className="container">
            <div className="input-form-gap"></div>
            <InputForm />
            <MovieList />
        </div>
    );
}

export default Explore;