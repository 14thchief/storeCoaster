/**
 * This Component returns the div where onSelect of Course in course view toggles div display from hidden to block
 * and populates the div/component with course Data: courseName, course Modules with checkedIfModulePassed calculation
 * 
 */

const FileUpload= ()=>{


    const courseName= "test 1";
    const moduleTitleFromZipFile= "newTestModule";
    const moduleTestResult= "blank"|| "pass" || "fail"; /**range of result to be gotten from API moduleTestCall*/
    const resultBasedColor= moduleTestResult === "pass"? "green" : "red";

    return(
        <div className="box-model" style={{padding: "5%"}}>
            <h2 style={{"font-size": "20px", display: "inline-block", color: "navy" }}>Course: <span style={{color: "black"}}>{courseName}</span></h2>
            <button style={{"margin": "3%", "backgroundColor":"navy", color: "white", minWidth: "25%", minHeight: "7vh", fontSize: "16px"}}>Add Module</button>
            <br/>
            <div style={{display: "flex", alignItems: "center", borderTop: "2px green solid", height: "25vh"}} >
                <h2 style={{"font-size": "18px", color: "blue", marginRight: "10%" }}>Module: <span style={{color: "black"}}>{moduleTitleFromZipFile}</span></h2>
                <br/>
                <button style={{backgroundColor: "green", color:"white", minWidth:"fit-content", width:"20%", height: "max-content", "min-height": "7vh", "max-height": "7vh", marginRight: "4%" }}>Launch test</button> {/**button to call testModuleForCompleteness API with (un)zipfile as payload */}
                <h3 style={{fontSize: "16px"}}>Test result: </h3>
                <div style={{width:"100px", height: "50px", border: `1.5px solid ${resultBasedColor}`, margin: "2%"}}>
                    <p style={{fontSize: "18px", margin: "15px"}}>{moduleTestResult}</p>
                </div>
            </div>
            
            <br/>
            <form className="col-lg-offset-1" style={{display: "flex", alignItems: "center"}}>
                <input type="file" name="zip-file" style={{"min-height": "10vh", border: "2px grey solid", display: "inline-block"}} />
                <input type="submit" value="Upload Zip file" style={{height: "max-content", "min-height": "7vh", "max-height": "7vh", minWidth: "15vw", backgroundColor: "black", color: "white", border: "2px grey solid", "margin-left": "2%"}}/>
            </form>
        </div>
    )
}

export default FileUpload;