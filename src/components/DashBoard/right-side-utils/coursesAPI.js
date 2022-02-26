/**
 * This is where data is produced to feed the components state
 */
import axios from "axios";

//const baseURL= "http://3.10.53.138//var/www/paintball/rollercoster/public/api";
const baseURL= "https://test.litepahmultimedia.com/public/api"

export const fetchAllCourses= async()=>{ //returns array of course details objects [{}, {}]

    return await axios.get(`${baseURL}/courses`)
    .then(response=>{
        console.log(response);
        const data= [];
        response.data.forEach(course=>{
            const { courseID, title, description, img, status} = course;
            data.push({
                course_id: courseID,
                title,
                description,
                image: img,
                assessment: status === "Completed"? true : false
            })
        })
        
        return data; //list of all courses
    })

}

export const fetchAllModules= async()=>{ //returns array of module details objects [{}, {}]

    return await axios.get(`${baseURL}/modules`)
    .then(response=>{
        const data= [];
        response.data.map(module=>{
            return data.push({
                ...module,
                course_id: module.courseID
            })
        })
        return data; //list of all modules
    })

}

export const addNewCourse= async({title, description, img, moduleFile, assessment})=>{ //returns data {success: true}
    console.log({"formData at API": {
        title, 
        description,
        img,
        moduleFile,
        assessment
    }})
    return await axios.post(`${baseURL}/add-new-courses`,
        {
            title, 
            description,
            img,
            moduleFile,
            assessment
        }
    )
    .then(response=>{
        return response.ok? response.data : window.alert("Error Adding course, try again!")
    })
}

export const addNewModule= async(moduleFile, courseID)=>{

    return await axios.post(`${baseURL}/modules`, {file: moduleFile, courseID: courseID})
    .then(response=>{
        return response.data
    })
}












export const asyncMockData= async()=>{// returns mock data of all courses

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
            assessment: true
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
            assessment: true
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
            assessment: false
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
            assessment: false
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
            assessment: false
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
            assessment: false
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
            assessment: false
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
            assessment: false
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
            assessment: false
        },*/
        
    ]

    return coursesArray;
};

export const mockModuleData= async()=>{
    return (
        [
            {course_id: 0,}, {course_id: 0,}, {course_id: 0,}, {course_id: 1}, {course_id: 3}
            , {course_id: 1}, {course_id: 1}, {course_id: 3}, {course_id: 3}
        ]
    )
}