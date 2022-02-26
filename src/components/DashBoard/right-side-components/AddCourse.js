import { useState } from "react";




const AddCourse= ({handleUploadCourse})=>{
    const [courseFormData, setCourseFormData]= useState({});

    const handleFormChange= (e)=>{ //CHECKED old
        /**
         * const data= [document.querySelector("#addCourseDiv")]
        setCourseFormData(data);
        console.log(courseFormData);
         */
        const rawFormObj= {};

        [...e.target.parentNode.parentNode].forEach(input=>{
            console.log([input.name, input.files? input.files[0] : input.value])
            rawFormObj[`${input.name}`]= input.files? input.files[0] : input.value;
        })
        setCourseFormData(rawFormObj)
        console.log(courseFormData);
        
    }

    const onUploadCourse= (e)=>{ //CHECKED normal old
        e.preventDefault()
        console.log(courseFormData)

        handleUploadCourse(courseFormData);
    }
    
    

    const labelStyle= {
        "fontSize": "18px",
        "fontWeight": "bold",
        display: "inline-block"
    };

    



    return (
        <div className="box-model" id= "addCourseDiv" style={{padding: "3% 5%", margin:"0 auto", width: "90%", height: "max-content", display: "none", border: "2px lightGreen solid"}}>
            <h2 style={{fontSize: "25px", display: "inline-block", color: "navy" }}>Create a Course Directory</h2>
            <h2 onClick={()=>{document.getElementById("addCourseDiv").style.display = "none"}} style={{color: "red", position: "relative", top:"-80px", right:"-98%"}}>x</h2>
            <br/>
            
            <form onSubmit={onUploadCourse} onChange={handleFormChange} style={{display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "2%", borderTop:"1px solid grey", width: "100%"}} >
                <div>
                    <label htmlFor="course-title" style={labelStyle}>{"Title: "}</label>
                    <input type="text" id="course-title" name="title" placeholder="  Enter Course Title: e.g 'Customer Service'" required/>
                    <br />
                </div>
                <div>
                    <label htmlFor="course-title" style={labelStyle}>Description: </label><br/>
                    <textarea type="text" id="course-desc" name="description" placeholder=" What is the course about? " required/>
                    <br />
                </div>
                <div>
                    <label htmlFor="course-img" style={labelStyle}>Image JPG File: </label>
                    <input type="file" id="course-img" name="img" />
                    <br />
                </div>
                <div>
                    <label htmlFor="course-modules" style={labelStyle}>Zipped Module Folders: </label>
                    <input type="file" id="course-modules" name="moduleFile" />
                    <br />
                </div>
                <div>
                    <label htmlFor="course-assessment" style={labelStyle}>Assessment Folder: </label>
                    <input type="file" id="course-assessment" name="assessment" />
                </div>
                <div id="formActions" style={{width: "100%", height: "fit-content", margin: "2% auto", padding: "0 15%", display: "flex"}}>
                    <input type="submit" value="Upload Course" style={{height: "max-content", minHeight: "7vh", maxHeight: "7vh", minWidth: "60%", width:"15vw", backgroundColor: "blue", color: "white", margin: "1%", borderRadius: "18px", fontSize: "17px"}}/>
                    <input type="reset" value="Clear Form" style={{height: "max-content", minHeight: "7vh", maxHeight: "7vh", minWidth: "40%", width:"12vw", backgroundColor: "navy", color: "white", margin: "1%", borderRadius: "18px", fontSize:"17px"}}/>
                </div>
                
            </form>
        </div>
    )
}

export default AddCourse;