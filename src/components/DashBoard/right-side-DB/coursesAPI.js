/**
 * This is where data is produced to feed the components state
 */
//import axios from 'axios';


/*const fetchAPIData= async()=>{

    return axios.get('http://localhost:3001/api/allcourses')
    .then(data=>{
        return data;
    })

}*/


export const asyncMockData= ()=>{

    const coursesArray= [
        {
            id: 0,
            title: "test_course",
            description: "test_course described",
            image: "image link or whatnot",
            modules: [
                {
                    title: "test_module",
                    quizScore: 75,
                    quizStatus: "pass",
                    course_id: 0
                },
                {
                    title: "test_module",
                    quizScore: 90,
                    quizStatus: "pass",
                    course_id: 0
                },
                {
                    title: "test_module",
                    quizScore: 75,
                    quizStatus: "pass",
                    course_id: 0
                },
            ],
            isAssessmentPassed: true
        },
        {
            id: 1,
            title: "test_course",
            description: "test_course described",
            image: "image link or whatnot",
            modules: [
                {
                    title: "test_module",
                    quizScore: 75,
                    quizStatus: "pass",
                    course_id: 1
                },
                {
                    title: "test_module",
                    quizScore: 90,
                    quizStatus: "pass",
                    course_id: 1
                },
                {
                    title: "test_module",
                    quizScore: 75,
                    quizStatus: "pass",
                    course_id: 1
                },
            ],
            isAssessmentPassed: true
        },
        {
            id: 2,
            title: "test_course",
            description: "test_course described",
            image: "image link or whatnot",
            modules: [
                {
                    title: "test_module",
                    quizScore: 75,
                    quizStatus: "pass",
                    course_id: 2
                },
                {
                    title: "test_module",
                    quizScore: 90,
                    quizStatus: "pass",
                    course_id: 2
                },
                {
                    title: "test_module",
                    quizScore: 75,
                    quizStatus: "failed",
                    course_id: 2
                },
            ],
            isAssessmentPassed: false
        },
        {
            id: 3,
            title: "test_course",
            description: "test_course described",
            image: "image link or whatnot",
            modules: [
                {
                    title: "test_module",
                    quizScore: 75,
                    quizStatus: "pass",
                    course_id: 3
                },
                {
                    title: "test_module",
                    quizScore: 90,
                    quizStatus: "pass",
                    course_id: 3
                },
                {
                    title: "test_module",
                    quizScore: 75,
                    quizStatus: "pass",
                    course_id: 3
                },
            ],
            isAssessmentPassed: false
        },
        {
            id: 4,
            title: "test_course",
            description: "test_course described",
            image: "image link or whatnot",
            modules: [
                {
                    title: "test_module",
                    quizScore: 75,
                    quizStatus: null,
                    course_id: 4
                },
                {
                    title: "test_module",
                    quizScore: null,
                    quizStatus: null,
                    course_id: 4
                },
                {
                    title: "test_module",
                    quizScore: null,
                    quizStatus: null,
                    course_id: 4
                },
            ],
            isAssessmentPassed: false
        },
        {
            id: 5,
            title: "test_course",
            description: "test_course described",
            image: "image link or whatnot",
            modules: [
                {
                    title: "test_module",
                    quizScore: 75,
                    quizStatus: "pass",
                    course_id: 5
                },
                {
                    title: "test_module",
                    quizScore: 40,
                    quizStatus: "fail",
                    course_id: 5
                },
                {
                    title: "test_module",
                    quizScore: null,
                    quizStatus: null,
                    course_id: 5
                },
            ],
            isAssessmentPassed: false
        },
    ]

    return coursesArray;
}

export default asyncMockData;