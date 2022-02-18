/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState, useEffect } from "react";
import CourseStats from "./right-side-components/CourseStats";
import CourseView from "./right-side-components/CourseView";
import FileUpload from "./right-side-components/FileUpload";
import UserStats from "./right-side-components/UserStats";
import { asyncMockData } from "./right-side-DB/coursesAPI";


const RightSide= ()=>{

    const [programData, setProgramData]= useState([]);
    useEffect(()=>{
        setProgramData(asyncMockData())
    }, [])



    return(
        <aside className="right-side">



            {/* Content Header (Page header) */}

            <div className="container-fluid">
                <div className="row bg-color">

                    {/*Top-Left half of the page starts here */}
                    <div className="col-lg-4">

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
                                <CourseView courses={programData} />
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
                    <div className="col-lg-9 col-lg-offset-3">
                        <FileUpload />
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