import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import apiBaseUrl from "../apiBaseUrl";
import ICourse from "../interfaces/ICourse";

export default function useGetCourses() {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<ICourse[]>([]);

    function fetchData() {
        setLoading(true);
        axios.get(apiBaseUrl + "/courses")
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
