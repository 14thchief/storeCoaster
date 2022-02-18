import React from "react";


const CourseView= ({courses})=>{

    
    return (
        <div className="box-model">
            <h4>COURSE VIEW</h4>
            <div className="table-responsive">
                <table className="table table-bordered trainer">
                    <thead>
                        <tr className="bg-primary">
                            <th>Course Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Modules</th>
                            <th>Assessment status</th>
                            <th>Course Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map((course, i)=>{
                                const isImage= course.image? "IMAGE" : "NO IMAGE";
                                const isAssessmentPassed= course.isAssessmentPassed? "Passed": "Not passed";
                                const isCourseStatus= isAssessmentPassed === "Passed"? "COMPLETED": "NOT COMPLETED";
                                return (
                                    <tr key={i}>
                                        <td>{course.id}</td>
                                        <td>{course.title}</td>
                                        <td>{course.description}</td>
                                        <td>{isImage}</td>
                                        <td>{course.modules.length}</td>
                                        <td>{isAssessmentPassed}</td>
                                        <td>{isCourseStatus}</td>
                                    </tr>
                                )
                            })
                        }
                    
                    
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CourseView;