import React from 'react';

function Credits() {
  
     //   {/* style inside of component*/}
     const creditStyle ={
        
        display: "flex",
        color: "black",
        align: "center",
        background: "yellow",
        border: "2px solid green"
           
         }
         const infoStyle={
             background: "purple",
             border: "2px solid orange",
             height: "15em",
             width: "35em",
             margin: "auto"
             
         }
         const thanksStyle={
             border: "2px solid black",
             margin:"auto"
           
         }

        return (
            <div>
    
                <div style={creditStyle}>
                   <h3>CREDITS</h3>
                </div>
                <br></br>
                    <div classnName="thankYou">
                        <h2>Thank you to the following, for all your support and encouragement. I appreciate you!!  </h2>
                    </div>
                    <br></br>
                     <div className="who" style={infoStyle}>
                         <h3>Manara Ali- Advisory</h3>
                         <h3>Per Scholas Classmates-Encoragement</h3>
                         <h3>Shawn Harris- Inspiration</h3>
                         <h3> Per Scholas Instructor and TA - Guidance</h3>
                        <h3>Kaedin Grant(my son) - For keeping me awake when I want a NAP!!!</h3>
                    </div>    
            </div>
        );
    }
    
export default Credits;