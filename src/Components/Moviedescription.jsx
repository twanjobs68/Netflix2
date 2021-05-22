import React from 'react';


function Moviedescription(props) {
    return (
        <div>
              <form onSubmit={this.handleOnSubmit}>
                <input type="text" name="query" placeholder="Movie Name-combine words with +: " onChange={this.handleinputChange} 
                    value={this.state.userinput} />
                {/* <input type="submit" value="Movie Info"/> */}
                <button className="button" >Search</button>
            </form>

            <div class="tgFlixbx">
                <h1>NETFLIX</h1>
            </div>
        </div>
    );
}

export default Moviedescription;

