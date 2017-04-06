/**
 * Created by MasterAnseen on 3/1/17.
 */



//el.addEventListener('event', function, false);
/*
//Event listener
//create function
function emptyName(){

    var noName = document.querySelector("#checkName");

    if(this.value.length === 0) {
        noName.innerHTML = "You're cool right? You gotta have a name!<br>";
    }else{
        noName.innerHTML = "";
    }

}

//select a thing for it to react to
var usrName = document.querySelector("#Name");
//bind it to that thing
usrName.addEventListener("blur", emptyName, false);
*/

//////////////////////////////////////

/*
//Anonymous function version//
//select a thing for it to react to
var usrName = document.querySelector("#Name");
//bind it to that thing
usrName.addEventListener("blur", function(){
    var noName = document.querySelector("#checkName");

    if(this.value.length === 0) {
        noName.innerHTML = "You're cool right? You gotta have a name!<br>";
    }else{
        noName.innerHTML = "";
    }
}, false);
*/

/////////////////////////////////////

//Parameter function version//
function emptyName(chars){

    if(usrName.value.length < chars && usrName.value.length > 0) {
        noName.innerHTML = "You're cool right? You gotta have "+chars+" or more letters in your name!<br>";

    }else if(usrName.value.length === 0) {
        noName.innerHTML = "You're cool right? You need a name!<br>";
    }else {
        noName.innerHTML = "";
        return true;
    }

}

var noName = document.querySelector("#checkName");
var usrName = document.querySelector("#Name");
//bind it to that thing
usrName.addEventListener("blur", function(){emptyName(5);}, false);


//////////////////////////////////////

//event target ver//
/*
function emptyName(e){

    var elements = e.target;

    if(elements.value.length < 5 && elements.value.length > 0) {
        noName.innerHTML = "You're cool right? You gotta have more letters in your name!<br>";
    }else if(elements.value.length === 0) {
        noName.innerHTML = "You're cool right? You need a name!<br>";
    }else {
        noName.innerHTML = "";
    }

}

var noName = document.querySelector("#checkName");
var usrName = document.querySelector("#Name");
//bind it to that thing
usrName.addEventListener("blur", function(){emptyName(usrName);}, false);
*/
////////////////////////////////////////

//form check event//
var form_check = document.querySelector("form");
var term_check = document.querySelector("#major_term");
var terms = document.querySelector("#passion");
function submission(event){
    if((!terms.checked) && (!emptyName(5))){
        term_check.innerHTML = "Whoa whoa, you gotta have some passion to join this group!";
        event.preventDefault();
    }
}

form_check.addEventListener("submit", submission, false);