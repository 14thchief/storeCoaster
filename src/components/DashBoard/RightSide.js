/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from "react";
import CourseStats from "./right-side-components/CourseStats";
import CourseView from "./right-side-components/CourseView";
import ModuleUpload from "./right-side-components/ModuleUpload";
import AddCourse from "./right-side-components/AddCourse";
import CourseModuleList from "./right-side-components/CourseModuleList";

import { asyncMockData, fetchAllCourses, fetchAllModules, addNewCourse, addNewModule } from "./right-side-utils/coursesAPI";




const RightSide= ()=>{

    const [allCourses, setAllCourses]= useState([]); //CHECKED
    const [allModules, setAllModules]= useState([]); //CHECKED
    useEffect(()=>{
        fetchAllCourses()
        .then(data=>{
            setAllCourses(data);
        })
         
        fetchAllModules()
        .then(data=> setAllModules(data))
         
        //setAllCourses(asyncMockData())
    }, []) //CHECKED


    const [selectedCourse, setSelectedCourse]= useState({}); //CHECKED

    
    const handleSelectCourse= (courseArr)=>{ //CHECKED
        const courseObj= {
            course_id: courseArr[1],
            title: courseArr[2],
            status: courseArr[7]
        };

        setSelectedCourse(courseObj);
        const courseModulesDiv= document.getElementById("courseModulesDiv");
        const fileUploadDiv= document.getElementById("fileUploadDiv");
        const addCourseDiv= document.getElementById("addCourseDiv");
        //Changing the display of these divs to react to course selection
        addCourseDiv.style.display= "none";
        courseModulesDiv.style.display= "block";
        fileUploadDiv.style.display= "block";
        fileUploadDiv.scrollIntoView({behavior: "smooth", block: "nearest"});
    } 

    const handleClickAddCourse = ()=>{ //CHECKED
        const fileUploadDiv= document.getElementById("fileUploadDiv");
        const addCourseDiv= document.getElementById("addCourseDiv");
        //Set divs display to react to button click
        fileUploadDiv.style.display= "none";
        addCourseDiv.style.display = addCourseDiv.style.display === "block"? "none": "block";
        addCourseDiv.scrollIntoView({behavior: "smooth", block: "nearest"});
    } 

    const handleUploadCourse= (formObject)=>{ //CHECKED
        /**on UploadCourse button click
         * formdata is collected as formObject
         * addNewCourse API is called with formObject and formData for server is curated
         * server: formData is inserted to allCourses table
         * all courses are refetched and set for view
         */
        addNewCourse(formObject)
        .then(data=>{
            if (data.success){
              window.alert("Course added successfully!")
            }
            else{window.alert("Course upload unsuccessful, please try again!")}
            return fetchAllCourses().then(courses=> setAllCourses(courses))
        })
        
    } 

    const handleUploadModule= (moduleFile, courseID)=>{//CHECKED
        return addNewModule(moduleFile, courseID)
        .then(data=>{
            data.success? window.alert("Module uploaded successfully"): window.alert("Module upload Unsuccessful, please try again!")
        })
        .then(refetch=>{
            fetchAllCourses()
            .then(data=>{
                setAllCourses(data)
                return "success"
            })
        })
    }



    return(
        <aside className="right-side">



            {/* Content Header (Page header) */}

            <div className="container-fluid">
                <div className="row bg-color">

                    {/*Top-Left half of the page starts here */}
                    <div className="col-lg-4">
                        <h2>Courses</h2>
                        <h3 style={{color: "deepskyblue", fontWeight: "bold", fontSize: "18px"}}>Dashboard<span style={{color: "grey", }} >/Courses</span></h3>
                        {/*Course Assessment and modules statistics component*/}

                        <CourseStats courseData={allCourses} moduleData={allModules}/>
                        <CourseModuleList course={selectedCourse} modules={allModules}/>

                    </div>
                    {/*Top-Left half of the page ends here */}



                    {/*Top-Right half of the page starts here */}
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-12">
                                {/*Course View Component //CHECKED */}
                                <CourseView allCourses={allCourses} allModules={allModules} handleAddCourse={handleClickAddCourse} handleSelectCourse={handleSelectCourse} />
                            </div>
                            <div className="col-lg-9 col-lg-offset-1">
                                <ModuleUpload targetCourse={selectedCourse} handleUploadModule={handleUploadModule} />
                                <AddCourse handleUploadCourse={handleUploadCourse}/>
                            </div>
                        </div>
                    </div>
                    {/*Top-Right half of the page ends here */}

                    {/*Bottom part containing course module progress and file upload starts here*/}
                    

                    {/*Bottom part containing course module progress and file upload starts here*/}

                </div>
            </div>
            {/*<!-- /#right -->
            <!-- /.content --> */}
        </aside>
    )
}

export default RightSide;