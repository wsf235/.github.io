/**
 * Created by MasterAnseen on 10/8/17.
 */
import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import FaHome from 'react-icons/lib/ti/home-outline'
import FaSearch from 'react-icons/lib/fa/search'
import FaHeart from 'react-icons/lib/fa/heart'

class Footer extends Component{
    render(){
        return(
            <footer className="content footer">
                <NavLink to="/featured"><FaHome /></NavLink>
                <NavLink to="/search"><FaSearch /></NavLink>
                <NavLink to="/storage"><FaHeart /></NavLink>
            </footer>
        )
    }
}

export default Footer