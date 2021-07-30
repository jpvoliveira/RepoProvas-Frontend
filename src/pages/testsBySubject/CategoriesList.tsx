import styled from 'styled-components';
import { useEffect } from 'react';
import useGetTestsBySubject from '../../requests/getTestsBySubject';
import TestsList from './TestsList';
import { useParams } from 'react-router-dom';

export default function CategoriesList() {


    const { subjectId } = useParams<{ subjectId: string }>();
    const { loading, error, data, fetchData } = useGetTestsBySubject(Number(subjectId));

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
            <TestsList title="P1" testsBySubjectAndCategory={p1} />
            {p1.length === 0 && <p>Não há testes cadastrados para essa categoria.</p>}
            <TestsList title="P2" testsBySubjectAndCategory={p2} />
            {p2.length === 0 && <p>Não há testes cadastrados para essa categoria.</p>}
            <TestsList title="P3" testsBySubjectAndCategory={p3} />
            {p3.length === 0 && <p>Não há testes cadastrados para essa categoria.</p>}
            <TestsList title="2ch" testsBySubjectAndCategory={ch2} />
            {ch2.length === 0 && <p>Não há testes cadastrados para essa categoria.</p>}
            <TestsList title="Outras" testsBySubjectAndCategory={outras} />
            {outras.length === 0 && <p>Não há testes cadastrados para essa categoria.</p>}
        </Container>
    );
}

const Container = styled.div`
    
`;