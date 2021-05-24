import React from 'react';
// import Searchapi from './Components/Searchapi';
function Welcomebanner(){

    const welcomestyle={
    //  display: "flex",
        height: "15em",
        width: "35em",
        margin:"auto",
        // flex_direction:"flex-end",
        align_content: "center",
        justify_content: "center",
        background: "black",
        color: "red",
        padding: "35px"
        

    }

    return (
        <div className="welcomeBanner" style={welcomestyle}>
           <p> WELCOME TO TWANS MOVIE SEARCH inspired by NETFLIX</p>
           <p> I hope you enjoy searching for all your favorite movies.</p>
           <p>Thanks for using this App.  I had fun creating it!</p>
           <p>Happy Searching!!!</p>
           <p>*****Twan Grant*****</p>

        
        </div>
        
    );
}

export default Welcomebanner;