/**
 * Created by MasterAnseen on 10/8/17.
 */
import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import Nav from './nav'

import FaHome from 'react-icons/lib/ti/home-outline'
import FaSearch from 'react-icons/lib/fa/search'
import FaHeart from 'react-icons/lib/fa/heart'

class Footer extends Component{
    render(){
        return(
            <footer className="content footer">
                <Nav />
            </footer>
        )
    }
}

export default Footer