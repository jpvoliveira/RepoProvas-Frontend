import { Link } from "react-router-dom";
import styled from "styled-components";

interface Test {
    "id": number,
    "name": string,
    "categoryId": number,
    "teacherId": number,
    "subjectId": number,
    "courseId": number,
    "pdf": string,
    "teacher": {
        id: number,
        name: string,
        courseId: number
    }
}

export default function TestOption(props: { key: number, test: Test }) {

    const { test } = props;

    return (
        <Container>
            <a href={test.pdf} target="_blank" rel="noreferrer" >
                {test.name} do professor {test.teacher.name}
            </a>
        </Container>
    )
}

const Container = styled.div`
    background-color: #f3fcff;
    padding: 4px;
    margin: 5px;
    font-weight: 500;
    :hover{
        transform: scale(1.05);
    }
`;