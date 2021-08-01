import Select from "../../components/Select";
import Button from "../../components/Button";

import useGetCourses from "../../requests/getCourses";
import { useEffect, useState } from "react";
import PageSetup from "../../components/PageSetup";

export default function Home() {

    const { loading, error, data, fetchData } = useGetCourses();
    const [optionCourse, setOption] = useState<{ value: number }>({ value: 1 });

    useEffect(() => {
        fetchData();
    }, []);

    function handleChange(e: any) {
        setOption({ value: e.target.value })
    }

    return (
        <PageSetup>
            <>
                <Button text="Escolher" to={`/course/${optionCourse.value}`} />
                <Select props={data} loading={loading} error={error} optionCourse={optionCourse} handleChange={handleChange} />
            </>
        </PageSetup>
    );
}