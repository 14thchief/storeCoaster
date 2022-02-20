import React from "react";



const CourseStats= ({data}) =>{

    //Getting assessment statistics
    const assessmentPassed= data.filter(course=>{
        return course.isAssessmentPassed
    })

    const percentAssessmentPass= Math.round((assessmentPassed.length/data.length) * 100);

    
    const assessmentAttributes={
        id:"myStat3",
        "data-dimension":"210", 
        "data-width":"20", 
        "data-text":`${percentAssessmentPass}%`, 
        "data-fontsize":"20", 
        "data-percent": `${percentAssessmentPass}`, 
        "data-fgcolor": "#65a800", 
        "data-bgcolor": "#f7f7f7"
    }

    const modulesAttributes={
        id:"myStat2",
        "data-dimension":"210", 
        "data-width":"20", 
        "data-text":`${percentAssessmentPass}%`, 
        "data-fontsize":"20", 
        "data-percent": `${percentAssessmentPass}`, 
        "data-fgcolor": "#65a800", 
        "data-bgcolor": "#f7f7f7"
    }
    //console.log(assessmentAttributes)

    window.addEventListener("load", ()=>{
        const divSpan= document.getElementById("myStat3").querySelector("span");
        divSpan.innerHTML= `${percentAssessmentPass}%`;
        

    })



    return (
        <div className="box-model">
            <h4>Quick Stats</h4>
            <div className="row">
                <div className="col-lg-6 col-xs-6 text-center">
                    <p className="income">Modules Complete</p>
                    <div id="myStat2" data-dimension="210" data-width="20" data-text="50%" data-fontsize="20" data-percent="50" data-fgcolor="#33a4d8" data-bgcolor="#f7f7f7"></div>
                </div>
                <div className="col-lg-6 col-xs-6 text-center">
                    <p className="income">Assessment Passed</p>
                    <div {...assessmentAttributes}></div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 col-xs-12">
                    <div className="amount">
                        <p>Assessment passed <span className="pull-right"></span><span id="" className="pull-right">{`${assessmentPassed.length} out of ${data.length}`}</span>
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