import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import IPeriodsSubjects from "../interfaces/IPeriodSubjects";

export default function useGetPeriodsSubjets(id: number) {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<IPeriodsSubjects[]>([]);

    function fetchData() {
        setLoading(true);
        axios.get(process.env.REACT_APP_HOST + "/periods")
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
