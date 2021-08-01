import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import apiBaseUrl from "../apiBaseUrl";
import INewTest from "../interfaces/INewTest";

export default function usePostNewTest() {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    function sendTest(test: INewTest) {
        setLoading(true);
        axios.post(apiBaseUrl + "/tests", test)
            .then(onSuccess)
            .catch(onError);
    }

    const onSuccess = (res: AxiosResponse) => {
        setError(false);
        setLoading(false);
    };

    const onError = (error: AxiosError) => {
        setLoading(false);
        console.log(error)
        setError(true);
    };

    return { loading, error, sendTest };
}
