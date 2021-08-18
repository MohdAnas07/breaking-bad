import { useState, useEffect } from 'react';

const Api = (URL) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(URL, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch the data for that resource")
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch Abort');
                } else {
                    setIsPending(false)
                    setError(err.message);
                }

            })

        return () => abortCont.abort();
    }, [URL]);

    return { data, isPending, error }
}

export default Api;
