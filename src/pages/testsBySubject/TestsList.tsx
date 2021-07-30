import { useParams } from "react-router-dom";
import styled from "styled-components";
import TestOption from "./TestOption";

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

export default function TestsList(data: { title: string, testsBySubjectAndCategory: TestsBySubject[] }) {

    const { testsBySubjectAndCategory, title } = data;

    return (
        <Container>
            <strong>{title}</strong>
            {testsBySubjectAndCategory.map(test => <TestOption key={test.id} test={test} />)}
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