import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.jpg'

export default class Header extends Component{
  render() {
    return(
      <div className='main-navigation'>
        <img src={logo}/>
        <ul>
          <li>
            <Link to='/'>Index</Link>
            <Link to='/starter'>Starter</Link>
          </li>
        </ul>
      </div>
    )
  }
}
