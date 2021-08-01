import styled from "styled-components";
import Test from "../../components/Test";
import ITest from "../../interfaces/ITest";

export default function TestsList(data: { title: string, testsBySubjectAndCategory: ITest[] }) {

    const { testsBySubjectAndCategory, title } = data;

    return (
        <Container>
            <strong>{title}</strong>
            {testsBySubjectAndCategory.map(test => <Test key={test.id} test={test} byTeacher={false} />)}
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