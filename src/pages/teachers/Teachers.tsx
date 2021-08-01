import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useGetCourseTeachers from "../../requests/getCourseTeachers";
import TeacherOption from "./TeacherOption";
import PageSetup from "../../components/PageSetup";

export default function Subjects() {

    const { courseId } = useParams<{ courseId: string }>();
    const { loading, error, data, fetchData } = useGetCourseTeachers(Number(courseId));

    useEffect(() => {
        fetchData();
    }, [courseId])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    const teachers = data[0]?.teachers;

    return (
        <PageSetup>
            <>
                {teachers?.map(teacher => <TeacherOption key={teacher.id} data={teacher} />)}
            </>
        </PageSetup>
    );
}