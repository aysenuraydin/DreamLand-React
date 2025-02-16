import { useState, useEffect } from "react"
export const useDeleteFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteData = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(databaseURL + url, {
                method: "DELETE",
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

    return { deleteData, isLoading, error };
};