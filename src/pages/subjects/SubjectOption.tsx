import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import ISubject from "../../interfaces/ISubject";

export default function SubjectOption(props: { key: number, data: ISubject }) {

    const { data } = props;

    return (
        <Container>
            <Button to={`/subject/${data.id}/tests`} text={`${data.name} com ${data.tests.length} prova(s)`} />
        </Container>
    )
}

const Container = styled.div`
`;