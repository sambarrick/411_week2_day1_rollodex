import React, { Component } from 'react'

//Kev and I worked on this the toggle button together. Found a really helpful video for this at:
//https://www.youtube.com/watch?time_continue=311&v=x5oiX93DeHA&feature=emb_logo
//Great resource.

export default class Toggle extends Component {
   state = {
       on: false,
       text: "Show"
   }

   toggle = () => {
       this.setState({
           on: !this.state.on,
       })
   }

   changeText = (text) => {
    this.setState({ text }); 
   }
   
    render() {
        return (
            <div>
            {this.state.on && this.props.children}
                <button onClick={this.toggle}>Show/Hide</button>
            </div> 
        );
    }
}