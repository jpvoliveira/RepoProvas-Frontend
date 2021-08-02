import Button from "../../components/Button";
import PageSetup from "../../components/PageSetup";
import { useEffect, useState } from "react";
import useGetCourses from "../../requests/getCourses";
import Select from "../../components/Select";
import styled from "styled-components";
import usePostNewTeacher from "../../requests/postNewTeacher";
import usePostNewSubject from "../../requests/postNewSubject";
import usePostNewCourse from "../../requests/postNewCourse";

export default function NewRegister() {

    const { loading, error, data, fetchData } = useGetCourses();
    const [selectedCourseTeacher, setCourseTeacher] = useState<number>(1);
    const [selectedCourseSubject, setCourseSubject] = useState<number>(1);
    const [selectedPeriod, setPeriod] = useState<number>(1);

    const sendCourse = usePostNewCourse();
    const sendTeacher = usePostNewTeacher();
    const sendSubject = usePostNewSubject();

    useEffect(() => {
        fetchData();
    }, []);

    function handleCourseTeacher(e: any) {
        setCourseTeacher(e.target.value)
    }

    function handleCourseSubject(e: any) {
        setCourseSubject(e.target.value)
    }

    function handlePeriod(e: any) {
        setPeriod(e.target.value)
    }

    const periods = [
        { id: 1, name: "1" },
        { id: 2, name: "2" },
        { id: 3, name: "3" },
        { id: 4, name: "4" },
        { id: 5, name: "5" },
        { id: 6, name: "6" },
        { id: 7, name: "7" },
        { id: 8, name: "8" },
        { id: 9, name: "9" },
        { id: 10, name: "10" },
        { id: 11, name: "Eletiva" },
    ];

    function newCourse(e: any) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        sendCourse.sendTest({
            name: String(data.courseName)
        });
    }

    function newTeacher(e: any) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        sendTeacher.sendTest({
            name: String(data.teacherName),
            courseId: selectedCourseTeacher,
        });
    }

    function newSubject(e: any) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        sendSubject.sendTest({
            name: String(data.subjectName),
            courseId: selectedCourseSubject,
            periodId: selectedPeriod
        });
    }

    return (
        <PageSetup>
            <Container>
                <form onSubmit={newCourse}>
                    <input name="courseName" placeholder="Nome do curso" />
                    <Button to="#" text="Cadastrar curso" />
                </form>
                <form onSubmit={newTeacher}>
                    <input name="teacherName" placeholder="Nome do professor" />
                    <Select options={data} loading={sendTeacher.loading} error={sendTeacher.error} selectedOption={selectedCourseTeacher} handleChange={handleCourseTeacher} />
                    <Button to="#" text="Cadastrar professor" />
                </form>
                <form onSubmit={newSubject}>
                    <input name="subjectName" placeholder="Nome da disciplina" />
                    <Select options={data} loading={sendSubject.loading} error={sendSubject.error} selectedOption={selectedCourseSubject} handleChange={handleCourseSubject} />
                    <Select options={periods} loading={false} error={false} selectedOption={selectedPeriod} handleChange={handlePeriod} />
                    <Button to="#" text="Cadastrar disciplina" />
                </form>
            </Container>
        </PageSetup>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > form {
        border-top: 1px solid black;
        margin: 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        > * {
            margin: 9px 0;
        }
    }
`;