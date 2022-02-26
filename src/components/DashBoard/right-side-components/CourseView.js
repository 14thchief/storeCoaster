import React from "react";


const CourseView= ({allCourses, allModules, handleSelectCourse, handleAddCourse})=>{

    const moduleCounter= (course)=>{
        const modulesOfCourse= allModules.map(modules=>{
            return course.course_id === modules.course_id
        })
        return modulesOfCourse.length;
    }

    const handleCourseHighlight= (e)=>{
        const row= e.target.parentNode; //The whole row
        let selectBox= row.querySelector("td"); //the first td element of each selected row: the select box
        const otherBoxes= []; //all other td elements of the selected row (to be styled differently)

        const allSelectBox= document.getElementsByTagName("td"); //ALL [non-selected] td element of the table (to be styled differently)
        
        
        /**Styling: for highlight of selected row */
        for (const box of allSelectBox){  //reset all other box highlight style
            box.style.backgroundColor= "white";
            selectBox.style.backgroundColor = "blue"; //set highlighted selectSpace: i.e. the first and empty cell of the row
        }

        while(selectBox.nextElementSibling){  //get the remaining cells of the selected row and style them 
            otherBoxes.push(selectBox.nextElementSibling);
            selectBox= selectBox.nextElementSibling;
            otherBoxes.forEach(box=> box.style.backgroundColor= "#999900"); //styling of other boxes in selected row
        }

        /** Functionality: for setting parent (RightSide.js) Component state with selected row's data */
        const dataArr= [];
        for (const box of row.children){
            dataArr.push(box.innerHTML)
        }
        handleSelectCourse(dataArr); //handler
    }

    
    return (
        <div className="box-model" style={{display: "flex", flexDirection: "column", marginBottom: "2%"}}>
            <div style={{display: "flex", justifyContent:"space-between", alignItems: "center"}}>
                <h4>COURSE VIEW</h4>
                <button onClick={handleAddCourse} style={{margin: "3%", backgroundColor:"navy", color: "white", width:"30%", maxWidth: "30%", minWidth: "fit-content", minHeight: "7vh", fontSize: "18px", borderRadius: "50px"}}>Add Course</button>
            </div>
            
            <div className="table-responsive">
                <table className="table table-bordered trainer" onClick={handleCourseHighlight}>
                    <thead>
                        <tr className="bg-primary">
                            <th style={{minWidth: "40px"}}></th>
                            <th>Course Id</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Modules</th>
                            <th>Assessment status</th>
                            <th>Course Status</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        {
                            allCourses.map((course, i)=>{
                                const isImage= course.image? "IMAGE" : "NO IMAGE";
                                const isAssessmentPassed= course.assessment? "Passed": "Not passed";
                                const isCourseStatus= isAssessmentPassed === "Passed"? "COMPLETED": "NOT COMPLETED";
                                return (
                                    <tr key={i} id={`course${i}`} >
                                        <td style={{backgroundColor: "white", border: "1px solid grey"}} ></td>
                                        <td>{course.course_id}</td>
                                        <td>{course.title}</td>
                                        <td>{course.description}</td>
                                        <td>{isImage}</td>
                                        <td>{moduleCounter(course)}</td>
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