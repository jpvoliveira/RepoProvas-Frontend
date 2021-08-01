export default interface ITeacher {
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
}