import React from "react";


const CourseView= ({courses, handleSelectCourse, handleAddCourse})=>{


    const handleCourseHighlight= (e)=>{
        const row= e.target.parentNode; //The whole row
        let selectBox= row.querySelector("td"); //the first td eleement of each row: the select box

        const allSelectBox= document.getElementsByTagName("td"); //ALL td element of the table
        const otherBoxes= []; //all other td elements of the selected row

        
        /**Styling: for highlight of selected row */
        for (const box of allSelectBox){  //reset all other cell highlight
            box.style.backgroundColor= "white";
            selectBox.style.backgroundColor = "blue"; //set highlighted selectSpace: i.e. the first and empty cell of the row
        }

        while(selectBox.nextElementSibling){  //get the remaining cells of the row and 
            otherBoxes.push(selectBox.nextElementSibling);
            selectBox= selectBox.nextElementSibling;
            otherBoxes.forEach(box=> box.style.backgroundColor= "#999900");
        }

        /** Functionality: for setting parent Component state with selected row's data */
        const dataArr= [];
        for (const data of row.children){
            dataArr.push(data.innerHTML)
        }
        handleSelectCourse(dataArr); //handler
    }

    
    return (
        <div className="box-model" style={{display: "flex", flexDirection: "column"}}>
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
                            courses.map((course, i)=>{
                                const isImage= course.image? "IMAGE" : "NO IMAGE";
                                const isAssessmentPassed= course.isAssessmentPassed? "Passed": "Not passed";
                                const isCourseStatus= isAssessmentPassed === "Passed"? "COMPLETED": "NOT COMPLETED";
                                return (
                                    <tr key={i || course.id} id={`course${i}`} >
                                        <td style={{backgroundColor: "white", border: "1px solid grey"}} ></td>
                                        <td>{i || course.id}</td>
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