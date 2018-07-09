/**
 * Created by MasterAnseen on 10/9/17.
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Major extends Component{
    render(){
        return(
            <nav className="major">
                <ul>
                    <li><NavLink to={"/featured/beef"}> Beef</NavLink></li>
                    <li><NavLink to={process.env.PUBLIC_URL.length+"/featured/eggs"}> Eggs</NavLink></li>
                    <li><NavLink to={process.env.PUBLIC_URL.length+"/featured/chicken"}> Chicken</NavLink></li>
                    <li><NavLink to={process.env.PUBLIC_URL.length+"/featured/pork"}> Pork</NavLink></li>
                    <li><NavLink to={process.env.PUBLIC_URL.length+"/featured/vegan"}> Vegan</NavLink></li>
                    <li><NavLink to={process.env.PUBLIC_URL.length+"/featured/vegitable"}> Vegitable</NavLink></li>
                    <li><NavLink to={process.env.PUBLIC_URL.length+"/featured/soup"}> Soup</NavLink></li>
                    <li><NavLink to={process.env.PUBLIC_URL.length+"/featured/italian"}> Italian</NavLink></li>
                    <li><NavLink to={process.env.PUBLIC_URL.length+"/featured/spanish"}> Spanish</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Major