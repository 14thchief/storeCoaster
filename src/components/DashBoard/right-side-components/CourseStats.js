import React, { useState, useEffect } from "react";
import Chart from 'react-apexcharts';
import { chartState, modulesChartState } from "../right-side-utils/chart";





const CourseStats= ({courseData, moduleData}) =>{

    //Getting assessment statistics
    const assessmentPassed= courseData.filter(course=>{
        return course.assessment
    })
    const modulesPassed= [];
    courseData.forEach(course=> {
        if(course.assessment){
            const completedModules= moduleData.filter(module=> module.course_id === course.course_id)
            modulesPassed.push(...completedModules);
        }
    })
    
    const [chart, setChart]= useState(chartState)
    useEffect(()=>{
        setChart((preValue)=>{
            return {series: [assessmentPassed.length, (courseData.length - assessmentPassed.length)], options: {...preValue.options }}
        })
    }, [courseData.length, assessmentPassed.length])


    const [moduleChart, setModuleChart]= useState(modulesChartState)
    useEffect(()=>{
        setModuleChart((prev)=>{
            return {series: [modulesPassed.length, moduleData.length- modulesPassed.length], options: {...prev.options}}
        })
    }, [modulesPassed.length, moduleData.length])

    console.log(assessmentPassed.length, courseData.length);



    return (
        <div className="box-model">
            <h4>Program: Rollercoaster</h4>
            <div className="row" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"center"}}>
                <div className="col-lg-6 col-xs-6 text-center" style={{backgroundColor: "", display: "flex", justifyContent:"center"}}>
                    <Chart options={chart.options} series={chart.series} type="donut" width="340" />
                </div>
                <div className="col-lg-6 col-xs-6 text-center justify-start" style={{border: "2px solid red", display: "flex", justifyContent:"center"}}>
                    <Chart options={moduleChart.options} series={moduleChart.series} type="donut" width="200" />
                </div>
                
            </div>
            <div className="row">
                <div className="col-lg-10 col-xs-12 d-flex justify-start">
                    <div className="amount">
                        <p>Assessment passed <span className="pull-right"></span><span id="" className="pull-right">{`${assessmentPassed.length}/ ${courseData.length}`}</span>
                        </p>
                        <div className="progress progress-striped active">
                            <div className="progress-bar progress-bar-primary"></div>
                        </div>
                        <p>Modules completed <span className="pull-right"></span><span id="" className="pull-right">10 out of 20</span>
                        </p>
                        <div className="progress progress-striped active">
                            <div className="progress-bar progress-bar-success"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CourseStats;