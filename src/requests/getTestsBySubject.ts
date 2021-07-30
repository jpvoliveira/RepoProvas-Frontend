import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

interface TestsBySubject {
    "id": number,
    "name": string,
    "categoryId": number,
    "teacherId": number,
    "subjectId": number,
    "courseId": number,
    "pdf": string,
    "teacher": {
        "id": number,
        "name": string,
        "courseId": number
    }
};

export default function useGetTestsBySubject(id: number) {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<TestsBySubject[]>([]);

    function fetchData() {
        setLoading(true);
        axios.get("http://localhost:4000/tests/subject/" + id)
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
