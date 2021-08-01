import { Link } from "react-router-dom";
import styled from "styled-components";
import ITeacher from "../../interfaces/ITeacher";

export default function TeacherOption(props: { key: number, data: ITeacher }) {

    const { data } = props;

    return (
        <Container>
            <Link to={`/teacher/${data.id}/tests`}>{data.name} tem {data.tests.length} prova(s) cadastradas</Link>
        </Container>
    )
}

const Container = styled.div`
    background-color: #FAFAFA;
    padding: 4px;
    margin: 5px;
    border: 1px solid rgba(0,0,0,.1);
    :hover{
        transform: scale(1.05);
    }
`;