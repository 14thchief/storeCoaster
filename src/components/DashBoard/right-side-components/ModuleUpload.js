/**
 * This Component returns the div where onSelect of Course in course view toggles div display from hidden to block
 * and populates the div/component with course Data: courseName, course Modules with checkedIfModulePassed calculation
 * 
 */

import { useState } from "react";

const FileUpload= ({targetCourse, handleUploadModule})=>{
    const [moduleFile, setModuleFile]= useState({})


    const courseName= targetCourse.title;
    const moduleTitleFromZipFile= "";
    const moduleTestResult= "blank"|| "pass" || "fail"; /**range of result to be gotten from API moduleTestCall*/
    const resultBasedColor= moduleTestResult === "pass"? "green" : "red";

    const handleChange= (e)=>{
        e.preventDefault()
        if(!document.getElementById("zip-file").files[0]) return;

        const file= document.getElementById("zip-file").files[0];
        console.log(file);
        if (file.type !== "application/x-zip-compressed") {
            window.alert(`Please upload only zip file, you uploaded "${file.type}" instead!`)
            document.getElementById("zip-file").value= null;
        }
        else{setModuleFile(file)}
    }

    const handleSubmit= (e)=>{
        e.preventDefault()

        console.log(moduleFile)
        handleUploadModule(moduleFile)
        /*.then(response=>{
            if(response === "success"){*/
                document.getElementById("zip-file").value= null;
                setModuleFile({})
        /*    }
        })*/
    }



    return(
        <div className="box-model" id= "fileUploadDiv" style={{padding: "5%", height: "max-content", display: "none"}}>
            <h2 style={{fontSize: "20px", display: "inline-block", color: "navy" }}>Course: <span style={{color: "black"}}>{courseName}</span></h2>
            <h2 onClick={()=>{document.getElementById("fileUploadDiv").style.display = "none"}} style={{color: "red", position: "absolute", top:"30px", right:"50px"}}>x</h2>
            <br/>
            <div style={{display: "flex", alignItems: "center", borderTop: "2px green solid", height: "25vh"}} >
                <h2 style={{fontSize: "18px", color: "blue", marginRight: "10%" }}>Module: <span style={{color: "black"}}>{moduleFile.name || moduleTitleFromZipFile}</span></h2>
                <br/>
                <button style={{backgroundColor: "green", color:"white", minWidth:"fit-content", width:"20%", height: "max-content", minHeight: "7vh", maxHeight: "7vh", marginRight: "4%", borderRadius: "18px" }}>Launch test</button> {/**button to call testModuleForCompleteness API with (un)zipfile as payload */}
                <h3 style={{fontSize: "16px"}}>Test result: </h3>
                <div style={{width:"100px", height: "50px", border: `2px solid ${resultBasedColor}`, margin: "2%", display:"flex", borderRadius: "50px"}}>
                    <p style={{fontSize: "18px", margin: "15px", alignSelf: "stretch"}}>{moduleTestResult}</p>
                </div>
            </div>
            
            <br/>
            <form className="col-lg-offset-1" onChange={handleChange} onSubmit={handleSubmit} style={{display: "flex", alignItems: "center"}}>
                <input type="file" id="zip-file" name="zip-file" style={{minHeight: "10vh", border: "2px grey solid", display: "inline-block"}} />
                <input type="submit" value="Upload Zip file" style={{height: "max-content", minHeight: "7vh", maxHeight: "7vh", minWidth: "15vw", backgroundColor: "black", color: "white", border: "2px grey solid", marginLeft: "2%", borderRadius: "18px"}}/>
            </form>
        </div>
    )
}

export default FileUpload;