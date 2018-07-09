/**
 * Created by MasterAnseen on 10/8/17.
 */
import React, { Component } from 'react'
import Data_Check from '../functions/data_check'
import Request from '../functions/search_recipe'

var arr = ["beef", "chicken", "pork", "vegan", "vegetable", "smoothie", "wrap", "potato", "cake", "egg"];

var path = Math.floor(Math.random()*10);
if(window.location.pathname.length> (process.env.PUBLIC_URL.length+10))
{
    var data = Request(window.location.pathname.substring(process.env.PUBLIC_URL.length+10));
    console.log(window.location.pathname.substring(process.env.PUBLIC_URL.length+10));
}
else{
    var data = Request(arr[path]);
}


class Featured extends Component{

    constructor(props){
        super(props);
        Data_Check();
        //Request(arr[path]);
        this.state = {
            disp: JSON.parse(localStorage.getItem('temp_recipe_list')),
            _new: "",
            _dat: JSON.parse(localStorage.getItem('recipe_list'))

        };

        //this.search_API = this.search_API.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.display = this.display.bind(this);
    }

    display(){


        console.log(data);
        console.log(this.state.disp);

        var arr = [];
        for(var i = 0; i < this.state.disp.length; i++){
            arr.push(<div key={i} className='result'>
                <img src={this.state.disp[i].img} alt='Nothing here' />
                <div id='info'>
                    <h3>{this.state.disp[i].title}</h3>
                    <p>Recipe Link: <a href={this.state.disp[i].link}>Link</a></p>
                    <button onClick={this.bookmark}>Bookmark</button>
                </div>
            </div>);
        }
        return arr;
    };

    bookmark(e){
        e.preventDefault();
        console.log(e);

        var rekt = e.target.parentNode.parentNode;
        var spot = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(rekt);

        console.log(spot);

        this.state._dat.push(this.state.disp[spot]);

        localStorage.setItem('recipe_list', JSON.stringify(this.state._dat));
        console.log(localStorage.getItem('recipe_list'));

    };


    render(){
        return(
            <section className="">
                <div className="wipe">{this.display()}</div>
            </section>
        );
    }
}



export default Featured