export default interface ISubject {
    id: number;
    name: string;
    periodId: number;
    courseId: number;
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