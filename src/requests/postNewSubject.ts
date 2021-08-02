import axios, { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";

export default function usePostNewSubject() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    function sendTest(subject: { name: string, courseId: number, periodId: number }) {
        setLoading(true);
        axios.post(process.env.REACT_APP_HOST + "/subjects", subject)
            .then(onSuccess)
            .catch(onError);
    }

    const onSuccess = (res: AxiosResponse) => {
        setError(false);
        setLoading(false);
        alert("Disciplina cadastrada com sucesso!");
    };

    const onError = (error: AxiosError) => {
        setLoading(false);
        console.log(error)
        setError(true);
    };

    return { loading, error, sendTest };
}
