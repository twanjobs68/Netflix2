import React, { Component } from 'react';

class Searchapi extends Component {
    constructor(){
        super()
            // 5.code state to keep track of api call data(placeholder for api) if you will use data to display it needs to go into state.
            this.state={
                data: [],
                userinput:""

            
            }    
    }
      
  //1. create function to make api request.  check console for data
    fetchItems = async (query) =>{
    //define query for api call and change data to json 
    

   //2. api call
    const response= await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=fc3ada66&t=${query}`);
    
    //3. get api data 
    const data = await response.json();
   //4. Check point. set data from api with setState. state is object. console.log to see if you get data
    console.log(data)


     //6.push data to state so you can use in code and console log results
    this.setState({
          data: data
        
    })
    //7.data is now in code - check point..is data in code
    console.log(this.state.data)
    
    }
    //8.see response from api-view console to make sure you are getting data.  If not check what you are receiving
    //as soon as web page loads (mount)
    //componentDidMount(){
     //   this.fetchItems("Twilight")
    //}

    //***************************create web page first*************************************************** */

    //Es6
    //e=event which is an object that is input
    handleinputChange = (e) =>{
        //whatever user is typing will be saved.  this is declared in state at top. data is now in line 8
        this.setState({userinput:e.target.value})


    }
    
    handleOnSubmit = (e) =>{
        e.preventDefault()
       this.fetchItems(this.state.userinput) 
                 
    }
 //. render data for output to Dom
    render() {
    return (
       
        <div  className="bgPicture" >
            <div className="searchcss">
           
            {/* <nav> */}
            {/*} {data.results.map(data.results => (*/}

                <h3> {this.state.data.Title} </h3>
                <ul>
                <li> {this.state.data.Title}</li>
                    <li> <img src={this.state.data.Poster}/></li>
                    <br></br>
                    <li>Overview : {this.state.data.Plot}</li> 
                    <br></br>
                    <li>Rated:{this.state.data.Rated} Released Year: {this.state.data.Year}</li> 
                </ul>
         
                {/* //. create buttons and input for data search*/}
                {/* <input type="text" name="query" className="input"/> */}
               
                <form onSubmit ={this.handleOnSubmit}>
                     <input type="text" name="query" placeholder="Enter Movie Name Here: " onChange={this.handleinputChange} value={this.state.userinput}/>
                     {/* <input type="submit" value="Movie Info"/> */}
                     <button className="button" >Search</button>
                </form>

                {/* <button className= "button" type="submit"> SEARCH</button>   */}
                {/* </nav> */}
            
                <div class="tgFlixbx">
                    <h1>NETFLIX</h1>
                </div>
            </div>
        </div>
      );
    
    }
}


export default Searchapi;