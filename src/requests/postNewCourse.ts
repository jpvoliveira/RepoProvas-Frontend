import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

export default function usePostNewCourse() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    function sendTest(course: { name: string }) {
        setLoading(true);
        axios.post(process.env.REACT_APP_HOST + "/courses", course)
            .then(onSuccess)
            .catch(onError);
    }

    const onSuccess = (res: AxiosResponse) => {
        setError(false);
        setLoading(false);
        alert("Curso cadastrado com sucesso!");
    };

    const onError = (error: AxiosError) => {
        setLoading(false);
        console.log(error)
        setError(true);
    };

    return { loading, error, sendTest };
}
