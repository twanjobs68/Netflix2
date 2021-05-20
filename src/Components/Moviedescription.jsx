import React from 'react';
// import Searchapi from './Components/Searchapi';
function Moviedescription(movieDescript) {
    return (
        <div>
            <ul>
                {/* <li> {this.state.data.Title}</li> */}
                     <li> <img src={this.state.data.Poster}/></li>
                    <br></br> 
                    <li>Overview : {this.state.data.Plot}</li> 
                    {/* <br></br>
                    <li>Rated:{this.state.data.Rated} Released Year: {this.state.data.Year}</li>  */}
                </ul>
        </div>
    );
}

export default Moviedescription;