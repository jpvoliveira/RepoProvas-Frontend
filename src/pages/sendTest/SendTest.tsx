import { useState } from "react";
import { useEffect } from "react";
import Button from "../../components/Button";
import PageSetup from "../../components/PageSetup";
import Select from "../../components/Select";
import styled from "styled-components";

import useGetCategories from "../../requests/getCategories";
import useGetCourses from "../../requests/getCourses";
import useGetCourseSubjects from "../../requests/getCourseSubjects";
import useGetCourseTeachers from "../../requests/getCourseTeachers";
import usePostNewTest from "../../requests/postNewTest";

export default function SendTest() {

    const { loading, error, sendTest } = usePostNewTest();
    const [courseId, setCourseId] = useState<number>(1);
    const [categoryId, setCategoryId] = useState<number>(1);
    const [teacherId, setTeacherId] = useState<number>(1);
    const [subjectId, setSubjectId] = useState<number>(1);

    const fetchCourses = useGetCourses();
    const fetchCategories = useGetCategories();
    const fetchTeachers = useGetCourseTeachers(courseId);
    const fetchSubjects = useGetCourseSubjects(courseId);

    useEffect(() => {
        fetchCourses.fetchData();
        fetchCategories.fetchData();
        fetchTeachers.fetchData();
        fetchSubjects.fetchData();
    }, [courseId]);

    function sendData(e: any) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        sendTest({
            name: String(data.name),
            categoryId: Number(categoryId),
            teacherId: Number(teacherId),
            subjectId: Number(subjectId),
            courseId: Number(courseId),
            pdf: String(data.pdf)
        });
    }

    function handleCategoryId(e: any) {
        setCategoryId(e.target.value)
    }

    function handleTeacherId(e: any) {
        setTeacherId(e.target.value)
    }

    function handleSubjectId(e: any) {
        setSubjectId(e.target.value)
    }

    function handleCourseId(e: any) {
        setCourseId(e.target.value)
    }

    if (loading) return <PageSetup> Enviando teste... </PageSetup>
    if (error) return <PageSetup> Erro ao enviar o teste! </PageSetup>

    return (
        <PageSetup>
            <Container>
                <form onSubmit={sendData}>
                    <input type="text" name="name" placeholder="2021.1 (ano.semestre)" />
                    <Select options={fetchCourses.data} loading={fetchCourses.loading} error={fetchCourses.error} selectedOption={courseId} handleChange={handleCourseId} />
                    <Select options={fetchCategories.data} loading={fetchCategories.loading} error={fetchCategories.error} selectedOption={categoryId} handleChange={handleCategoryId} />
                    <Select options={fetchTeachers.data?.teachers} loading={fetchTeachers.loading} error={fetchTeachers.error} selectedOption={teacherId} handleChange={handleTeacherId} />
                    <Select options={fetchSubjects.data?.subjects} loading={fetchSubjects.loading} error={fetchSubjects.error} selectedOption={subjectId} handleChange={handleSubjectId} />
                    <input type="text" name="pdf" placeholder="Link do PDF" />
                    <Button to="#" text="Enviar!" />;
                </form>
            </Container>
        </PageSetup>
    )
}

const Container = styled.div`
    > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        > * {
            margin: 8px auto;
        }
        input {
            padding: 4px;
            width: 100%;
            min-width: 200px;
            height: 30px;
            ::placeholder {
                color: rgba(16,41,120,0.5);
                font-size: 14px;
            } 
        }
    }
`;