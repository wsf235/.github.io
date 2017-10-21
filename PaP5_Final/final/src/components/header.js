/**
 * Created by MasterAnseen on 10/8/17.
 */
import React, { Component } from 'react'
import Nav from './nav'

class Header extends Component{
    render(){
        return(
            <header className="header">
                <h1>Recipe Re-Directory</h1>
                <Nav />
            </header>
        );
    }
}

export default Header