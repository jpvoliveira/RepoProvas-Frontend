import styled from "styled-components";
import Logo from "../../components/Logo/Logo";
import PageContainer from "../../assets/styles/PageContainer";
import Select from "../../components/Select";
import Button from "../../components/Button";

import useGetCourses from "../../requests/getCourses";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export default function Home() {

    const { loading, error, data, fetchData } = useGetCourses();
    const [optionCourse, setOption] = useState<{ value: number }>({ value: 1 });
    const history = useHistory();

    useEffect(() => {
        fetchData();
    }, []);

    function handleChange(e: any) {
        setOption({ value: e.target.value })
    }

    return (
        <PageContainer>
            <Logo />
            <Container>
                <Button text="Escolher" to={`/course/${optionCourse.value}`} />
                <Select props={data} loading={loading} error={error} optionCourse={optionCourse} handleChange={handleChange} />
            </Container>
        </PageContainer>
    );
}

const Container = styled.div`
    > * {
        margin: 15px;
    }
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`