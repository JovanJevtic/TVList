import axios from 'axios';
import { useState } from 'react';

const CreateWatchlist = () => {

    const [ title, setTitle ] = useState('');

    const onFormSubmit = async (e) => {
        e.preventDefault();

        const response = await axios({
            method: 'POST',
            url: 'http://localhost:5000/api/watchlists',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                title: title
            }
        });
        
        console.log(response)
    }

    return(
        <div className="create-watchlist">
            <p>Create wathclist: </p>

            <form onSubmit={onFormSubmit}>
                <input type="text" value={title} onChange={e => (setTitle(e.target.value))} />
                <button type="submit"> Submit </button>
            </form> 
        </div>
    );
}

export default CreateWatchlist;