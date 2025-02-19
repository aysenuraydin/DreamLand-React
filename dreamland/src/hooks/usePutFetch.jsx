import { useState, useEffect } from "react"

export const usePutFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const putData = async (url, data) => {
        setIsLoading(true);
        try {
            const res = await fetch(databaseURL + url, {
                method: "PUT",
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

    return { putData, isLoading, error };
};