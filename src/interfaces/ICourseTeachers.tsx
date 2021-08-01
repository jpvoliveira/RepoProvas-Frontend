export default interface ICourseTeachers {
    id: number,
    name: string,
    teachers: {
        id: number,
        name: string,
        courseId: number,
        tests: {
            id: number,
            name: string,
            courseId: number,
            subjectId: number,
            teacherId: number,
            categoryId: number,
            pdf: string
        }[]
    }[]
};