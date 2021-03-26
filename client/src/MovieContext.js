import { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [name, setName] = useState('');
    const [watchlists, setWatchlists] = useState([]);

    return(
        <MovieContext.Provider value={[name, setName]}>
            { props.children }
        </MovieContext.Provider>
    );
}