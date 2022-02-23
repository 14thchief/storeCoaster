/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from "react";
import CourseStats from "./right-side-components/CourseStats";
import CourseView from "./right-side-components/CourseView";
import ModuleUpload from "./right-side-components/ModuleUpload";
import AddCourse from "./right-side-components/AddCourse";
//import UserStats from "./right-side-components/UserStats";
import { asyncMockData, fetchAllCourses, addNewCourse, addNewModule } from "./right-side-DB/coursesAPI";


const RightSide= ()=>{
    const [selectedCourse, setSelectedCourse]= useState({});
    const [allCourses, setAllCourses]= useState([]);
    useEffect(()=>{
        /**
         * fetchAllCourses()
         * .then(data=>{
         *    setAllCourses(data)
         * })
         */
        setAllCourses(asyncMockData())
    }, [])

    
    const handleSelectCourse= (courseArr)=>{
        const courseObj= {
            id: courseArr[1],
            title: courseArr[2],
            description: courseArr[3],
            image: courseArr[4],
            modules: courseArr[5],
            assessment: courseArr[6],
            status: courseArr[7]
        };
        setSelectedCourse(courseObj);
        const fileUploadDiv= document.getElementById("fileUploadDiv");
        const addCourseDiv= document.getElementById("addCourseDiv");
        addCourseDiv.style.display= "none";
        fileUploadDiv.style.display= "block";
        fileUploadDiv.scrollIntoView({behavior: "smooth", block: "nearest"});
    }

    const handleClickAddCourse = ()=>{
        const fileUploadDiv= document.getElementById("fileUploadDiv");
        fileUploadDiv.style.display= "none";
        const addCourseDiv= document.getElementById("addCourseDiv");
        addCourseDiv.style.display = addCourseDiv.style.display === "block"? "none": "block";
        addCourseDiv.scrollIntoView({behavior: "smooth", block: "nearest"});
    }

    const handleUploadCourse= (formObject)=>{
        /**on UploadCourse button click
         * formdata is collected as formValue
         * uploadCourseAPI is called with formValue and formData for server is created
         * server: formData is inserted to allCourses table
         * all courses are refetched and set
         */
        addNewCourse(formObject)
        /*.then(data=>{
            if (data.success){
              window.alert("Course added successfully!")
            }
            return fetchAllCourses()
        })
        .then(data=> setAllCourses(data))*/
        
    }

    const handleUploadModule= (moduleFile)=>{
        return addNewModule(moduleFile)
        .then(data=>{
            if(data.success) return window.alert("Module uploaded successfully")
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
                        
                        <CourseStats data={asyncMockData()} />
                        

                        {/*User statistics component
                        <UserStats />

                        <div className="box-model">
                            <div className="row">
                                <div className=" col-lg-12 col-xs-12">
                                    <div className="example">
                                        <div className="example--label"></div>
                                        <div className="example-content">
                                            <div className="list-inline">
                                                <div>
                                                    <div id="custom-cells"></div>
                                                </div>
                                                <div className="calender-content-style" id="custom-cells-events"><strong className="text-primary"></strong>
                                                    <p className="light-color"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                    {/*Top-Left half of the page ends here */}



                    {/*Top-Right half of the page starts here */}
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-12">
                                {/*Course View Component */}
                                <CourseView courses={allCourses} handleAddCourse={handleClickAddCourse} handleSelectCourse={handleSelectCourse} />
                            </div>
                            
                            {/*<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                            <h4 className="modal-title" id="myModalLabel">
                                                <i className="fa fa-plus"></i> Create Event</h4>
                                        </div>
                                        <form role="form" name="eventform" id="eventform">
                                            <div className="modal-body">
                                                <div className="input-group">
                                                    <label htmlFor="new-event" className="mar-top">Event Name</label>
                                                    <input type="text" id="new-event" className="form-control" placeholder="Event" />
                                                </div>
                                                <label htmlFor="event_url" className="mar-top">Event URL</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control pull-right" id="event_url" placeholder="Enter The URL related to event" />
                                                </div>
                                                <label htmlFor="event_img" className="mar-top">Event Image URL</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control pull-right" id="event_img" placeholder="Enter The URL related to event image" />
                                                </div>
                                                <div className="input-group">
                                                    <label htmlFor="eventstartdate" className="mar-top">Date Range</label>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <input type="text" className="form-control" id="eventstartdate" placeholder="Start Date" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <input type="text" className="form-control" id="eventenddate" placeholder="End Date" />
                                                        </div>
                                                    </div>
                                                </div>
                                            {/*input-group}
                                            </div>
                                            <div className="modal-footer">
                                                <div className="row">
                                                    <div className="col-md-3 col-md-offset-3">
                                                        <button type="button" className="btn btn-success btn-block pull-left" id="add-new-event">
                                                            <i className="fa fa-plus"></i> Add
                                                        </button>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <button type="reset" className="btn btn-danger btn-block pull-right" id="close_calendar_event">
                                                            Reset
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>*/}

                        </div>
                    </div>
                    {/*Top-Right half of the page ends here */}

                    {/*Bottom part containing course module progress and file upload starts here*/}
                    <div className="col-lg-8 col-lg-offset-4">
                        <ModuleUpload targetCourse={selectedCourse} handleUploadModule={handleUploadModule} />
                        <AddCourse handleUploadCourse={handleUploadCourse}/>
                    </div>

                    {/*Bottom part containing course module progress and file upload starts here*/}

                </div>
            </div>
            {/*<!-- /#right -->
            <!-- /.content --> */}
        </aside>
    )
}

export default RightSide;