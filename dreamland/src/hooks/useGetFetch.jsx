import { useState, useEffect } from "react"

export const useGetFetch = (url) => {
    const databaseURL = "https://react-dreams-70fcc-default-rtdb.firebaseio.com/";
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(databaseURL + url );
                if(!res.ok) {
                    throw new Error(res.statusText);
                }
                const data = await res.json();
                setIsLoading(false);
                setData(data);
            }
            catch(err) {
                setIsLoading(false);
                setError(err.message);
                console.log(err.message);
            }
        }
        fetchData();
    }, [url])
    return {
        data, isLoading, error
    }
}
