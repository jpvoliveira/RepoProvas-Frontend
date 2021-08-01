export default interface ITest {
    "id": number,
    "name": string,
    "categoryId": number,
    "teacherId": number,
    "subjectId": number,
    "courseId": number,
    "pdf": string,
    "category": {
        "id": number,
        "name": string
    },
    "subject": {
        "id": number,
        "name": string,
        "periodId": number,
        "courseId": number
    },
    "teacher": {
        "id": number,
        "name": string,
        "courseId": number

    }
};