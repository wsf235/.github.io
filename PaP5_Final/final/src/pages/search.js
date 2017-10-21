/**
 * Created by MasterAnseen on 10/8/17.
 */
import React, { Component } from 'react'
import Data_Check from '../functions/data_check'
import Request from '../functions/search_recipe'


var path = "";

class Search extends Component{

    constructor(props){
        super(props);
        this.state = {
            page: true,
            //data: Request(path),
            disp: JSON.parse(localStorage.getItem('temp_recipe_list')),
            _new: "",
            _dat: JSON.parse(localStorage.getItem('recipe_list')),
            arr: [""]

        };

        this.search_API = this.search_API.bind(this);
        this.bookmark = this.bookmark.bind(this);
        this.display = this.display.bind(this);
        this.request = this.request.bind(this);
    }

    display(){


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

        return arr; //this.setState({arr: arr});
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

    search_API(e){
        e.preventDefault();
        this.setState({data: Request(document.getElementById('search_val').value)});
        var data = JSON.parse(localStorage.getItem('temp_recipe_list'));
        console.log(data);
        console.log(this.state.disp);
        this.setState({disp: data});


    };

    request(){
        return this.componentDidMount();
    };

    componentDidMount(){

        this.state = {
            page: true,
            data: Request(path),
            disp: JSON.parse(localStorage.getItem('temp_recipe_list')),
            _new: "",
            _dat: JSON.parse(localStorage.getItem('recipe_list'))

        };

        console.log("loaded");
        return this.display();
    };

    getInitialState(){
        return {
            page: true,
            //data: Request(path),
            disp: JSON.parse(localStorage.getItem('temp_recipe_list')),
            _new: "",
            _dat: JSON.parse(localStorage.getItem('recipe_list'))

        };
    }

    render(){
        Data_Check();

        return(
            <section className="">
                <form>
                    <label>Search: </label><input type="text" id="search_val"/>
                    <button onClick={this.search_API}>Search</button><br />
                </form>
                <div className="wipe">{this.request()}</div>
            </section>
        );
    }
}



export default Search