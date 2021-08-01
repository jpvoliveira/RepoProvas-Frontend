import Select from "../../components/Select";
import Button from "../../components/Button";

import useGetCourses from "../../requests/getCourses";
import { useEffect, useState } from "react";
import PageSetup from "../../components/PageSetup";

export default function Home() {

    const { loading, error, data, fetchData } = useGetCourses();
    const [selectedOption, setOption] = useState<number>(1);

    useEffect(() => {
        fetchData();
    }, []);

    function handleChange(e: any) {
        setOption(e.target.value)
    }

    return (
        <PageSetup>
            <>
                <Button text="Escolher" to={`/course/${selectedOption}`} />
                <Select options={data} loading={loading} error={error} selectedOption={selectedOption} handleChange={handleChange} />
            </>
        </PageSetup>
    );
}