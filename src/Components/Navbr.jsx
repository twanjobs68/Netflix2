import React from 'react';
// import moviedescription from './Moviedescription';
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
                <ul>
                    <Link to= "/">
                        <h3>HOME</h3>
                    </Link>
                    <Link to = "/moviedescription">
                        <li>Movie Info</li>
                    </Link>
                    <br></br>
                    <Link to = "/credits">
                        <li>CREDITS</li>
                    </Link>
                </ul>
            </div>
 //       </div>
    );
}
export default Navbr;