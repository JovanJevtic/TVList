import { useState, useEffect, useContext } from 'react';
import { MovieContext } from '../../MovieContext';

const InputForm = () => {
    const [ name, setName ] = useContext(MovieContext);

    const onInputChange = e => {
        setName(e.target.value);
    }

    return(
        <div className="input-form">
            <form>
                <label>Find movies for you</label>
                <input placeholder="What's on your mind?" type="text" name="name" value={name} onChange={onInputChange} />
            </form>
        </div>
    );
}

export default InputForm;