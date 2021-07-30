import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

interface CoursesSubjectsList {
    id: number,
    name: string,
    subjects: {
        id: number,
        name: string,
        periodId: number,
        courseId: number,
        period: {
            id: number,
            name: string,
        }
    }[]
};

export default function useGetCourseSubjets(id: number) {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<CoursesSubjectsList[]>([]);

    function fetchData() {
        setLoading(true);
        axios.get("http://localhost:4000/courses/" + id + "/subjects")
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
