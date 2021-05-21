import React from 'react';
//5.import link from react router dom so we can link pages
import {Link} from "react-router-dom"
function Navbr() {

 //   {/* style inside of component*/}
    // const navStyle ={

    //     // display: "flex", 
    //     // justifyContent:"space-around",
    //     // color: "white"
    // }

    return (

//<div className="testPic">
            <div className="sideMenu">
            {/* < nav > */}
            <ul>
                <Link to= "/">
                    <h3>HOME</h3>
                </Link>
                {/* <ul style = {navStyle}> */}
                {/*6.wrap each li in link tag*/}
                         
                <Link to = "/moviedescription">
                    <li>Movie Info</li>
                </Link>
                <Link to = "/credits">
                    <li>CREDITS</li>
                </Link>
            </ul>
            {/* </nav> */}
          </div>
 //       </div>
    );
}
export default Navbr;