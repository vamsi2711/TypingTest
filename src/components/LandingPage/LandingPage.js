
import { useState } from "react";
import "./LandingPage.css";
import App from '../App/App';


function LandingPage() {

    const [bool1,setBool]=useState(false);    
    return (
        bool1 ? <App/> : 
        <div className="landingPage">
            <div className="leftSection">
                <img
                    src="./typingtest_image.jpg"
                    className="homePageImage"
                />
            </div>
            <div className="rightSection">
                <div className="rightSideContent">
                    
                    <button className="startTestButton" onClick={()=>setBool(true)}>Start Test</button>
                    
                </div>
            </div>
        </div>
    );
}

export default LandingPage;