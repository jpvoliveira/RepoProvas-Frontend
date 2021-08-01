import styled from "styled-components";
import Button from "../../components/Button";
import ITeacher from "../../interfaces/ITeacher";

export default function TeacherOption(props: { key: number, data: ITeacher }) {

    const { data } = props;

    return (
        <Container>
            <Button to={`/teacher/${data.id}/tests`} text={`${data.name} tem ${data.tests.length} prova(s) cadastradas`} />
        </Container>
    )
}

const Container = styled.div`
    margin: 10px;
`;