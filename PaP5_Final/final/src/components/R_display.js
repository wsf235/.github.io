/**
 * Created by MasterAnseen on 10/13/17.
 */
import React, { Component } from 'react'
import Recipe from '../functions/recipe_class'
//import Data_Check from '../functions/data_check'
import Modal from 'react-modal'

const styles={
    exObj:{
        margin: '20px',
        padding: '10px',
        width: '80%',
        height: '150px',
        float: 'left',
        backgroundColor: 'rgba(71,76,126,0.4)',
        backgroundImage: 'url("")',
        borderRadius: '5%',
        display: 'flex',
        flexDirection: 'column'
    }
};
const customStyles = {
    overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 100, 0.75)'
    },
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class List extends Component{
    constructor(props){
        super(props);
        //this.delete_symbol();
        this.state ={
            list: JSON.parse(localStorage.getItem('recipe_list')),
            data: JSON.parse(localStorage.getItem('recipe_list')),
            open: false,
            get_title: "",
            _new: "",
            position: 0
        };
        this.delete_symbol = this.delete_symbol.bind(this);
        this.Delete = this.Delete.bind(this);

        this.edit_symbol = this.edit_symbol.bind(this);
        this.Edit = this.Edit.bind(this);

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.exitModal = this.exitModal.bind(this);
        this.validator = this.validator.bind(this);
    }

    show_item(i){

        return <tr key={i} style={styles.exObj}>
            <td>Recipe: {this.state.list[i].title}</td>
            <td>Description: {this.state.list[i].desc}</td>
            <td>Link: <a href={this.state.list[i].link}>{this.state.list[i].link}</a></td>
            <td className="edit"><button onClick={this.edit_symbol}>"Edit"</button></td>
            <td className="remove"><button onClick={this.delete_symbol}>"Remove"</button></td>
        </tr>
    }

    edit_symbol(e){
        e.preventDefault();
        console.log(e);
        var rekt = e.target.parentNode.parentNode;
        var spot = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(rekt);

        console.log(spot);

        this.Edit(spot);
    }

    Edit(id){
        this.setState({position: id});

        this.openModal();
    }


    delete_symbol(e){

                e.preventDefault();
                console.log(e);

                var rekt = e.target.parentNode.parentNode;
                var spot = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(rekt);

                console.log(rekt);
                e.target.parentNode.parentNode.parentNode.removeChild(rekt);
                this.Delete(spot);
    };

    Delete(id){
        var count = JSON.parse(localStorage.getItem('recipe_list'));
        count.splice(id, 1);
        localStorage.setItem('recipe_list', JSON.stringify(count));
        window.location.reload(false);
    };

    show_list(){
        var obj = [];

        for(var i = 0; i < this.state.list.length; i++){
            obj.push(this.show_item(i));
        }
        return obj;
    }


    openModal() {
        this.setState({open: true})
    }

    afterOpenModal() {
        this.subtitle.style.color = '#50a'
    }

    closeModal() {
        this.setState({open: false});

        this.setState({_new: new Recipe(
            document.getElementById('title').value,
            "#",
            document.getElementById('description').value,
            document.getElementById('link').value
        )});

        var temp_array = this.state.data;

        temp_array[this.state.position] = this.state._new;

        this.setState({data: temp_array});

        localStorage.setItem('recipe_list', JSON.stringify(this.state.data));
        console.log(localStorage.getItem('recipe_list'));
        window.location.reload(false);
    }

    exitModal(){
        this.setState({open: false});
    }

    validator(title, amount) {
        let errors = [];
        if(document.getElementById('title').value.length === 0) {
            errors.push('The title cannot be empty.')
        }
        if(document.getElementById('description').value.length === 0) {
            errors.push('The description cannot be empty.')
        }
        if(errors.length>0){
            console.log(errors);
        }
        else
        {
            this.closeModal();
        }

    }


    render(){

        return(
            <section className="_Transaction">
                <table>
                    <tbody>
                    {this.show_list()}
                    </tbody>
                </table>
                <div>
                    <Modal
                        isOpen={this.state.open}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.exitModal}
                        style={customStyles}
                        contentLabel="Edit recipe"
                    >

                        <h2 ref={subtitle => this.subtitle = subtitle}>Edit a recipe</h2>

                        <form>
                            <label>Name of the Recipe: </label><br />
                            <input type="text" id="title" /><br /><br />
                            <label>Brief Description: </label><br />
                            <textarea id="description" /><br /><br />
                            <label>Link, if applicable</label><br />
                            <input type="text" id="link" />
                        </form>
                        <button onClick={this.validator}>Submit</button>
                        <button onClick={this.exitModal}>Cancel</button>
                    </Modal>
                </div>
            </section>
        );
    }
}

export default List