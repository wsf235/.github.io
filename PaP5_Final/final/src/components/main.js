/**
 * Created by MasterAnseen on 10/8/17.
 */
import React, { Component } from 'react'

import {
    Route
} from 'react-router-dom'

import Featured from '../pages/featured'
import Search from '../pages/search'
import Storage from '../pages/storage'

class Main extends Component{
    render() {
        return(
            <section className="content main-content main">
                <Route path='/featured' render={(props) => (<Featured {...props}/>)} />
                <Route path='/search' render={(props) => (<Search {...props}/>)} />
                <Route path='/storage' component={Storage} />
            </section>
        );
    }
}
//<Route path='/featured' component={Featured} />
export default Main