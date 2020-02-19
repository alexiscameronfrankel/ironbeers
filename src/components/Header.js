import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";



//add a header with a link to the root of the app iteration 2

class Header extends Component {
    render() {
        return (
            <div>
            <Link to="/">
            <img src="images/header.png" alt="header"/>
            </Link>  
                
            </div>
        );
    }
}

export default Header;