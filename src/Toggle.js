import React, { Component } from 'react'

//Kev and I worked on the toggle button together. Found a really helpful video for this at:
//https://www.youtube.com/watch?time_continue=311&v=x5oiX93DeHA&feature=emb_logo and
//https://www.youtube.com/watch?time_continue=6&v=2Zz0K1U4Dk8&feature=emb_logo
//Great resource. Found the video when working together but worked on it separately so variable names may be different...
//Since this was a group project, we tag teamed it and rephrased things in a way we each understood on our own.

export default class Toggle extends Component {
   state = {
       on: false //set to false since nothing has been done yet.
   }

   toggle = () => {
    const newState = !this.state.on
        this.setState({on:newState})
   }

   changeText = () => {
    const newState = !this.state.switch
    this.setState({ switch:newState }); 
  } 
  
    render() {

        const { on } = this.state;
        const buttonText = on?"Hide":"Show";

        return (
            <div>
            {this.state.on && this.props.children}
                <button onClick= {this.toggle}>{buttonText}</button>
            </div> 
        );
    }
}