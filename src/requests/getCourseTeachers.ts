import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import apiBaseUrl from "../apiBaseUrl";

interface CoursesSubjectsList {
    id: number,
    name: string,
    teachers: {
        id: number,
        name: string,
        courseId: number,
        tests: {
            id: number,
            name: string,
            courseId: number,
            subjectId: number,
            teacherId: number,
            categoryId: number,
            pdf: string
        }[]
    }[]
};

export default function useGetCourseTeachers(id: number) {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<CoursesSubjectsList[]>([]);

    function fetchData() {
        setLoading(true);
        axios.get(apiBaseUrl + "/courses/" + id + "/teachers")
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
