import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import PageSetup from "../../components/PageSetup";
import styled from "styled-components";

export default function Course() {

    const { id } = useParams<{ id: string }>();

    return (
        <PageSetup>
            <Container>
                <Button text="Por professor" to={`/course/${id}/teachers`} />
                <Button text="Por disciplina" to={`/course/${id}/subjects`} />
            </Container>
        </PageSetup>
    );
}


const Container = styled.div`
    > * {
        margin: 15px;
    }
`;