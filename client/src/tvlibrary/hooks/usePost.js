import { useSatte, useEffect } from 'react';
import axios from 'axios';

const usePost = async (data, url) => {

    const [ response, setResponse ] = useSatte(null);
    let config = {
        method: 'POST',
        url,
        headers: { 'Content-Type': 'application/json' },
        data
    }

    useEffect(() => {   
        const abortCont = new AbortController;

        axios(config)
            .then(res => {
                console.log(res)
            })
        return () => abortCont.abort();
    }, [data, url]);

    return { response }
}

export default usePost;