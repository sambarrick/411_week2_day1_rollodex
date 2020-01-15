import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  // constructor(props) { 
  //   super(props);  
  state = { 
      isLoading: true, //take this syntax for granted. Default value for fetch in React for state
      results: [] //default value showing blank array since we are assuming we haven't written 
      //any code below
    }
  

  componentDidMount() { //take this synxtax for granted
    this.fetchData(); //take this synxtax for granted
  }
  fetchData() {
    fetch ('https://randomuser.me/api?results=25') //take this synxtax for granted
    .then(response => response.json()) //take this synxtax for granted
    .then(parsedJSON => parsedJSON.results.map(result => ({ //take this synxtax for granted. Map runs through all options
      //IMPORTANT**: All "beer" does is establish the baseline for dot notation. I changed the word to bee and it does the same thing.
      //It is not specific term needing to be used, you can use anything. Beer, essentially, is your starter
      //word to accessing specific terms you do need, like name, iby, abv, etc.
      name: `${result.name.first} ${result.name.last}`,
      thumbnail: `${result.picture.thumbnail}`,
      phonenumber: `${result.phone}`
    })))
  
    .then(results => 
    this.setState({
      results,
      isLoading: false //take this syntax for granted. Default value for fetch in React for setState
    }))

    .catch(error => console.log("parsing failed", error)) //take this syntax for granted. It catches errors
    //if the code doesn't load right.

    }
    render() {
      const {isLoading, results} = this.state;
      return (
        <div className="whole-page">
          <header>Rollodex</header>
        
         <div className={`content ${isLoading ? 'is-loading' : ''}`}> {/*comment take this line for granted here*/}
            <div className="rollodex-info">
              {
               
                !isLoading && results.length > 0 ? results.map(result => { //take this line for granted
                  const {name, thumbnail, phonenumber} = result; //take this line for granted
                  return <div key={result} title={name}> {/*take this line for granted */}
                    <p className="name-line">{name} <button>Details</button> </p>
                    <img src={thumbnail}/> 
                    <p className="phonenumber-line">{phonenumber}</p>
                    <br></br>
                    </div>
                }) : null //take this line for granted
              }
            </div>
          </div>
        </div>
      )
    }
  }



export default App;


// use isHidden for showing photos and such