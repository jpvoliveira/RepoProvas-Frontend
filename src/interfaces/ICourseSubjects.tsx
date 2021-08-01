export default interface ICourseSubjects {
    id: number,
    name: string,
    subjects: {
        id: number,
        name: string,
        periodId: number,
        courseId: number,
        period: {
            id: number,
            name: string,
        }
    }[]
};