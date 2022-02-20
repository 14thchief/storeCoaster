import { useState } from "react";


const AddCourse= ()=>{
    const [courseFile, setCourseFile]= useState({});


    const courseTitleFromZipFile= "";
    const courseTestResult= "blank"|| "pass" || "fail"; /**range of result to be gotten from API moduleTestCall*/
    const resultBasedColor= courseTestResult === "pass"? "green" : "red";

    const handleUpload= (e)=>{
        
        e.preventDefault()
        if(!document.getElementById("zip-CourseFile").files[0]) return;

        const file= document.getElementById("zip-CourseFile").files[0];
        if (file.type !== "application/x-zip-compressed") {window.alert(`Please upload only zip file, you uploaded "${file.type}" instead!`)}
        else{setCourseFile(file)}
    }
    const courseTitle= courseFile.name? courseFile.name.split(".")[0] : "";

    return (
        <div className="box-model" id= "addCourseDiv" style={{padding: "5%", height: "max-content", display: "none"}}>
            <h2 style={{fontSize: "20px", display: "inline-block", color: "navy" }}>Course: <span style={{color: "black"}}>{courseTitle}</span></h2>
            <button style={{margin: "3%", backgroundColor:"navy", color: "white", minWidth: "25%", minHeight: "7vh", fontSize: "16px", borderRadius: "50px"}}>Confirm and Add Course +</button>
            <h2 onClick={()=>{document.getElementById("addCourseDiv").style.display = "none"}} style={{color: "red", position: "absolute", top:"30px", right:"50px"}}>x</h2>
            <br/>
            
            <div style={{display: "flex", alignItems: "center", borderTop: "2px green solid", height: "25vh"}} >
                <h2 style={{fontSize: "18px", color: "blue", marginRight: "10%" }}>File: <span style={{color: "black"}}>{courseFile.name || courseTitleFromZipFile}</span></h2>
                <br/>
                <button style={{backgroundColor: "green", color:"white", minWidth:"fit-content", width:"20%", height: "max-content", minHeight: "7vh", maxHeight: "7vh", marginRight: "4%", borderRadius: "18px" }}>Launch test</button> {/**button to call testModuleForCompleteness API with (un)zipfile as payload */}
                <h3 style={{fontSize: "16px"}}>Test result: </h3>
                <div style={{width:"100px", height: "50px", border: `5px solid ${resultBasedColor}`, margin: "2%", display:"flex", borderRadius: "50px"}}>
                    <p style={{fontSize: "18px", margin: "15px", alignSelf: "stretch"}}>{courseTestResult}</p>
                </div>
            </div>
            
            <br/>
            <form className="col-lg-offset-1" onSubmit={handleUpload} style={{display: "flex", alignItems: "center"}}>
                <input type="file" id="zip-CourseFile" name="zip-file" style={{minHeight: "10vh", border: "2px grey solid", display: "inline-block"}} />
                <input type="submit" value="Upload Zip file" style={{height: "max-content", minHeight: "7vh", maxHeight: "7vh", minWidth: "15vw", backgroundColor: "black", color: "white", border: "2px grey solid", marginLeft: "2%", borderRadius: "18px"}}/>
            </form>
        </div>
    )
}

export default AddCourse;