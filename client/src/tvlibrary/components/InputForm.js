import { useContext } from 'react';
import { MovieContext } from '../../MovieContext';

const InputForm = () => {
    const [ name, setName ] = useContext(MovieContext);

    const onInputChange = e => {
        setName(e.target.value);
    }

    const formSubmit = e => {
        e.preventDefault();
    }

    return(
        <div className="input-form">
            <form onSubmit={formSubmit}>
                <label>Search movies and TV shows</label>
                <input placeholder="What's on your mind?" type="text" name="name" value={name} onChange={onInputChange} />
            </form>
        </div>
    );
}

export default InputForm;