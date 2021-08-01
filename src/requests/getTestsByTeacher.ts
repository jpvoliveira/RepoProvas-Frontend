import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import apiBaseUrl from "../apiBaseUrl";
import ITest from "../interfaces/ITest";

export default function useGetTestsByTeacher(id: number) {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<ITest[]>([]);

    function fetchData() {
        setLoading(true);
        axios.get(apiBaseUrl + "/tests/teacher/" + id)
            .then(onSuccess)
            .catch(onError);
    }

    const onSuccess = (res: AxiosResponse) => {
        setError(false);
        setLoading(false);
        setData(res.data);
    };

    const onError = (error: AxiosError) => {
        setLoading(false);
        console.log(error)
        setError(true);
    };

    return { loading, error, data, fetchData };
}
