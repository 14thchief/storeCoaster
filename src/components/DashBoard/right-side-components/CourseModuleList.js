import { useEffect, useState } from "react";


const CourseModuleList= ({course, modules})=>{
    const [courseModules, setCourseModules]= useState([]);
    useEffect(()=>{
        const courseModules= modules.filter(mod=> mod.courseID === course.course_id);
        setCourseModules(courseModules);
    }, [course, modules])

    return (
        <div className="box-model" id="courseModulesDiv" style={{display: "none"}}>
            <h4>Course Modules</h4>
            <div className="row">
                <div className=" col-lg-12 col-xs-12">
                    <ul>
                        {
                            courseModules.length?
                                courseModules.map(module=>{
                                    return <li>{module.name}</li>
                                })
                                :
                                <p>Course has no modules</p>
                        } 
                    </ul>
                    
                </div>
            </div>
        </div>

    )
}

export default CourseModuleList;