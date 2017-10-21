/**
 * Created by MasterAnseen on 10/8/17.
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import FaHome from 'react-icons/lib/ti/home-outline'
import FaSearch from 'react-icons/lib/fa/search'
import FaHeart from 'react-icons/lib/fa/heart'

class Nav extends Component{
    render(){
        return(
            <nav className="">
                <NavLink to="/featured"><FaHome /> Home - Top Recipes</NavLink>
                <NavLink to="/search"><FaSearch /> Search</NavLink>
                <NavLink to="/storage"><FaHeart /> Your Recipes</NavLink>
            </nav>
        );
    }
}

export default Nav