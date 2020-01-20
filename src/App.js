import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';

class App extends React.Component { 
  state = { 
      isLoading: true, //take this syntax for granted. Default value for fetch in React for state
      results: [], //default value showing blank array since we are assuming we haven't written any code below

    }
  

  componentDidMount() { //take this synxtax for granted
    this.fetchData(); //take this synxtax for granted
  }
  fetchData() {
    fetch ('https://randomuser.me/api?results=25') //take this synxtax for granted
    .then(response => response.json()) //take this synxtax for granted
    .then(parsedJSON => parsedJSON.results.map(result => ({ 
      name: `${result.name.first} ${result.name.last}`,
      thumbnail: `${result.picture.large}`,
      phonenumber: `${result.phone}`,
      address: `${result.location.street.number} ${result.location.street.name}`,
      location: `${result.location.city} ${result.location.state} ${result.location.country} ${result.location.postcode}`,
      email: `${result.email}`,
      username: `${result.login.username}`
    })))
  
    .then(results => 
    this.setState({
      results,
      isLoading: false //take this syntax for granted. Default value for fetch in React for setState
    }))

    .catch(error => console.log("Could not parse correctly", error)) //take this syntax for granted. It catches errors
    //if the code doesn't load right.

    }
    render() {
      const {isLoading, results} = this.state;
      return (
      
        <div>
          <header>Address Book Rollodex</header>
     
         <div className={`content ${isLoading ? 'is-loading' : ''}`}> 
            <div>
              {
               
                !isLoading && results.length > 0 ? results.map(result => { //take this line for granted
                  const {name, thumbnail, phonenumber, address, location, email, username} = result; //take this line for granted
                  return <div key={result} title={name}> {/*take this line for granted */}
                    <p id="name">{name}</p> 
                    <img src={thumbnail}/>
                    <Toggle>
                    <p><span>Phone Number: </span> {phonenumber}</p>
                    <p> <span>Address: </span>{address}</p>
                    <p><span>Location: </span>{location}</p>
                    <p><span>Email: </span>{email}</p>
                    <p><span>Username: </span>{username}</p>
                    </Toggle>
                    <br></br>
                    </div>
                }) : null
              }
            </div>
          </div>
        </div>
      )
    }
  }



export default App;