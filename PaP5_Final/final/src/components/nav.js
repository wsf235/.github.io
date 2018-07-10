/**
 * Created by MasterAnseen on 10/8/17.
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import FaHome from 'react-icons/lib/ti/home-outline'
import FaSearch from 'react-icons/lib/fa/search'
import FaHeart from 'react-icons/lib/fa/heart'

const url = process.env.PUBLIC_URL;

class Nav extends Component{
    render(){
        return(
            <nav className="">
                <NavLink to={url+"/featured"}><FaHome /> Home - Top Recipes</NavLink>
                <NavLink to={url+"/search"}><FaSearch /> Search</NavLink>
                <NavLink to={url+"/storage"}><FaHeart /> Your Recipes</NavLink>
            </nav>
        );
    }
}

export default Nav