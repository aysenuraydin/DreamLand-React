import { useState, useEffect } from "react"

export const usePostFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (url, data) => {
        setIsLoading(true);
        try {
            const res = await fetch(databaseURL + url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return await res.json();
        } catch (err) {
            setError(err.message);
            return null;
        } finally {
            setIsLoading(false);
        }
    };

    return { postData, isLoading, error };
};
