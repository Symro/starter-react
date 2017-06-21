import React, { Component } from 'react';

import logo from '../assets/images/logo.jpg'

export default class App extends Component{
  render() {
    return(
      <div style={{textAlign: 'center'}}>
        {/* <h1>App</h1> */}
        <img src={logo}/>
      </div>
    )
  }
}
