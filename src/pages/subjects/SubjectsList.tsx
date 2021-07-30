import { useParams } from "react-router-dom";
import styled from "styled-components";
import SubjectOption from "./SubjectOption";


interface PeriodSubjects {
    id: number,
    name: string,
    subjects: {
        id: number,
        name: string,
        periodId: number,
        courseId: number
    }[]
};

export default function SubjectsList(props: { data: PeriodSubjects }) {

    const { data } = props;
    const { courseId } = useParams<{ courseId: string }>();
    const courseSubjects = data.subjects.filter(subject => subject.courseId === parseInt(courseId));

    return (
        <Container>
            {courseSubjects.length > 0 &&
                <>
                    <strong>Disciplinas do período {data.name}</strong>
                    <div className="linha-horizontal"></div>
                </>}
            {courseSubjects.map(subject => <SubjectOption key={subject.id} data={subject} />)}
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