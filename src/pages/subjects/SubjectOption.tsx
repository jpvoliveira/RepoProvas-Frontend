import { Link } from "react-router-dom";
import styled from "styled-components";
import ISubject from "../../interfaces/ISubject";

export default function SubjectOption(props: { key: number, data: ISubject }) {

    const { data } = props;

    return (
        <Container>
            <Link to={`/subject/${data.id}/tests`}>{data.name}</Link>
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