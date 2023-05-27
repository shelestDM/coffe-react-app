import { useState } from "react";

const useFetch = (fetchFunc) => {

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchData = async () => {
        try {
            setIsLoading(true);
            await fetchFunc();
        } catch (error) {
            setErrorMessage(error.message);
        } finally{
            setTimeout(()=>{
                setIsLoading(false);
            },5000)
        }
    }

    return [ fetchData, isLoading, errorMessage ];

};

export default useFetch;