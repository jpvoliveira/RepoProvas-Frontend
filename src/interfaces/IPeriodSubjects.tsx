export default interface IPeriodsSubjects {
    id: number,
    name: string,
    subjects: {
        id: number,
        name: string,
        periodId: number,
        courseId: number
    }[]
};