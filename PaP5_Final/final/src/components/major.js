/**
 * Created by MasterAnseen on 10/9/17.
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const url = process.env.PUBLIC_URL;

class Major extends Component{



    render(){
        return(
            <nav className="major">
                <ul>
                    <li><NavLink to={url+"/featured/beef"}> Beef</NavLink></li>
                    <li><NavLink to={url+"/featured/eggs"}> Eggs</NavLink></li>
                    <li><NavLink to={url+"/featured/chicken"}> Chicken</NavLink></li>
                    <li><NavLink to={url+"/featured/pork"}> Pork</NavLink></li>
                    <li><NavLink to={url+"/featured/vegan"}> Vegan</NavLink></li>
                    <li><NavLink to={url+"/featured/vegitable"}> Vegitable</NavLink></li>
                    <li><NavLink to={url+"/featured/soup"}> Soup</NavLink></li>
                    <li><NavLink to={url+"/featured/italian"}> Italian</NavLink></li>
                    <li><NavLink to={url+"/featured/spanish"}> Spanish</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Major