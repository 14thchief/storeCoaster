/**
 * This is where data is produced to feed the components state
 */
import axios from "axios";

const baseURL= "http://localhost:8000/api";

export const fetchAllCourses= async()=>{ //returns array of course details objects [{}, {}]

    return await axios.get(`${baseURL}/courses`)
    .then(response=>{
        return response.data; //list of all courses
    })

}

export const addNewCourse= async({title, description, img, module, assessment})=>{ //returns data {success: true}
    console.log({"formData at API": {
        title, 
        description,
        img,
        module,
        assessment
    }})
    /*return await axios.post(`${baseURL}/add-new-courses`,
        {
            title, 
            description,
            img,
            module,
            assessment
        },
        {
            headers: {"content-type": "multipart/form-data"}
        }
    )
    .then(response=>{
        return response.data
    })*/
}

export const addNewModule= async(moduleFile)=>{

    return await axios.post(`${baseURL}/modules`, moduleFile)
    .then(response=>{
        return response.data
    })
}












export const asyncMockData= ()=>{// returns mock data of all courses

    const coursesArray= [
        {
            id: 0,
            title: "test_course 0",
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
            title: "test_course 1",
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
            title: "test_course 2",
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
            title: "test_course 3",
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
            title: "test_course 4",
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
            title: "test_course 5",
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
        },/*
        
        {
            id: 6,
            title: "test_course 6",
            description: "test_course described",
            image: "image link or whatnot",
            modules: [
                {
                    title: "test_module",
                    quizScore: 75,7878787                
                    course_id: 6
                },
                {
                    title: "test_module",
                    quizScore: 40,
                    quizStatus: "fail",
                    course_id: 6
                },
                {
                    title: "test_module",
                    quizScore: null,
                    quizStatus: null,
                    course_id: 6
                },
            ],
            isAssessmentPassed: false
        },
        
        {
            id: 7,
            title: "test_course 7",
            description: "test_course described",
            image: "image link or whatnot",
            modules: [
                {
                    title: "test_module",
                    quizScore: 75,
                    quizStatus: "pass",
                    course_id: 7
                },
                {
                    title: "test_module",
                    quizScore: 40,
                    quizStatus: "fail",
                    course_id: 7
                },
                {
                    title: "test_module",
                    quizScore: null,
                    quizStatus: null,
                    course_id: 7
                },
            ],
            isAssessmentPassed: false
        },
        {
            id: 8,
            title: "test_course 8",
            description: "test_course described",
            image: "image link or whatnot",
            modules: [
                {
                    title: "test_module",
                    quizScore: 75,
                    quizStatus: "pass",
                    course_id: 8
                },
                {
                    title: "test_module",
                    quizScore: 40,
                    quizStatus: "fail",
                    course_id: 8
                },
                {
                    title: "test_module",
                    quizScore: null,
                    quizStatus: null,
                    course_id: 8
                },
            ],
            isAssessmentPassed: false
        },*/
        
    ]

    return coursesArray;
};