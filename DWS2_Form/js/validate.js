/**
 * Created by MasterAnseen on 5/22/17.
 */

const check = document.getElementById('validate_form');
var form_confirm= document.getElementById('form_confirm');
const name = document.getElementById('name');

//Get Email and check to see if it's valid
const email = document.getElementById("email");

//Get the Password and check for matching conditions
const pass = document.getElementById('pass');

var e_list = document.getElementById('error_list');

//Get Phone number (optional)
const phone = document.getElementById('phone');


class validate_form{
    constructor(input, type){
        this.input = input;
        this.type = type;
        this.errors = [];
    }

    add_error_msg(msg){
        this.errors.push(msg);
    }

    get_msgs()
    {
        const status = this.input.validity;

        if (status.typeMismatch)
        {
            this.add_error_msg("The entry isn't a password type.");
        }
        if (status.tooLong)
        {
            this.add_error_msg("Password is too long, must be 50 letters or less");
        }
        if (this.input.length < 8)
        {
            this.add_error_msg("Password is too short, must be at least 8 letters!");
        }
        if (!this.input.value.match(/[A-Z]/g))
        {
            this.add_error_msg("The password needs an uppercase letter.");
        }
        if (!this.input.value.match(/[a-z]/g))
        {
            this.add_error_msg("The password needs a lowercase letter.");
        }
        if (!this.input.value.match(/[0-9]/g))
        {
            this.add_error_msg("The password needs a numeral.");
        }

        return this.errors;
    }
}


check.addEventListener('submit', (event)=>{
    event.preventDefault();
    let validate_pass = new validate_form(pass, "password");
    let e_msg = validate_pass.get_msgs();
    console.log(e_msg);

    if (e_msg.length > 0)
    {
        e_msg.forEach( err => {
            e_list.innerHTML += "<li class='error'>"+err+"</li>";
        })
    }
    else
    {
        e_list.innerHTML = "";
        check.style.display = "none";
        form_confirm.style.display = "block";
    }



}, false);


