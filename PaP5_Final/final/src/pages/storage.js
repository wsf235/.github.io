/**
 * Created by MasterAnseen on 10/8/17.
 */
import React, { Component } from 'react'
import Recipe from '../functions/recipe_class'
import Data_Check from '../functions/data_check'
import List from '../components/R_display'

import Modal from 'react-modal'

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

class Storage extends Component{

    constructor(props){
        super(props);

        this.state = {
            data: JSON.parse(localStorage.getItem('recipe_list')),
            open: false,
            get_title: "",
            _new: ""
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.exitModal = this.exitModal.bind(this);
        this.validator = this.validator.bind(this);

    }

    openModal() {
        this.setState({open: true})
    }

    afterOpenModal() {
        this.subtitle.style.color = '#50a'
    }

    closeModal() {
        this.setState({open: false});

        this.setState({_new: new Recipe(document.getElementById('title').value, "#", document.getElementById('description').value, document.getElementById('link'))});
        this.state.data.push(this.state._new);

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
            errors.push('The amount cannot be empty.')
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
        Data_Check();
        return(
            <section className="">
                <div>
                    <button onClick={this.openModal}>New Recipe</button>
                    <Modal
                        isOpen={this.state.open}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.exitModal}
                        style={customStyles}
                        contentLabel="Save a new recipe"
                    >

                        <h2 ref={subtitle => this.subtitle = subtitle}>Add a new recipe</h2>

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
                <List />
            </section>
        );
    }
}






export default Storage