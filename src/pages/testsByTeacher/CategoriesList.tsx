import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGetTestsByTeacher from '../../requests/getTestsByTeacher';
import TestsList from './TestsList';

export default function TestsContainer() {

    const { teacherId } = useParams<{ teacherId: string }>();
    const { loading, error, data, fetchData } = useGetTestsByTeacher(Number(teacherId))

    useEffect(() => {
        fetchData();
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error...</p>;

    const p1 = data.filter(test => test.categoryId === 1);
    const p2 = data.filter(test => test.categoryId === 2);
    const p3 = data.filter(test => test.categoryId === 3);
    const ch2 = data.filter(test => test.categoryId === 4);
    const outras = data.filter(test => test.categoryId === 5);

    return (
        <Container>
            <TestsList title="P1" testsByTeacherAndCategory={p1} />
            {p1.length === 0 && <p>Não há testes cadastrados para essa categoria.</p>}
            <TestsList title="P2" testsByTeacherAndCategory={p2} />
            {p2.length === 0 && <p>Não há testes cadastrados para essa categoria.</p>}
            <TestsList title="P3" testsByTeacherAndCategory={p3} />
            {p3.length === 0 && <p>Não há testes cadastrados para essa categoria.</p>}
            <TestsList title="2ch" testsByTeacherAndCategory={ch2} />
            {ch2.length === 0 && <p>Não há testes cadastrados para essa categoria.</p>}
            <TestsList title="Outras" testsByTeacherAndCategory={outras} />
            {outras.length === 0 && <p>Não há testes cadastrados para essa categoria.</p>}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;