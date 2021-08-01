import styled from "styled-components";
import ITest from "../../interfaces/ITest";
import TestOption from "./TestOption";

export default function TestsList(data: { title: string, testsByTeacherAndCategory: ITest[] }) {

    const { testsByTeacherAndCategory, title } = data;

    return (
        <Container>
            <strong>{title}</strong>
            {testsByTeacherAndCategory.map(test => <TestOption key={test.id} test={test} />)}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .linha-horizontal{
        width: 300px;
        border: 1px solid rgba(0,0,0,0.4);
        margin-bottom: 10px;
    }

    > strong {
        padding: 5px;
        margin-top: 20px;
    }

`;