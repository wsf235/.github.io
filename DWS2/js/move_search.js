/**
 * Created by MasterAnseen on 4/2/17.
 */
var MOVE_Search = document.querySelector("#move_search");
var MOVE_Request = document.querySelector("#move_search_input");
var MOVE_Button = document.querySelector(".move_search_go");

MOVE_Button.addEventListener('click', function(e){
    var move_name = MOVE_Request.value;
    var api = "http://pokeapi.co/api/v2/move/"+move_name+"";
    Request(api);
    //show_all();
});

function Request(url){
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function(){
        if(request.status >=200 && request.status < 400){
            var data = JSON.parse(request.responseText);
            render_move(data);
        }
        else{
            console.log("Request Error!", request);
        }
    };

    request.onerror = function(){
        console.log("Connection Error!");
    };

    request.send();
}

function render_move(results){

    var pkmn_of_the_day = "<section class='daily_pkmn'>"; //document.createElement("p");
    //pkmn_of_the_day.innerHTML = results.name;

    pkmn_of_the_day += "<h2>"+results.name+"</h2>";
    pkmn_of_the_day += "<p>"+results.type.name+"</p>";
    pkmn_of_the_day += "</section>";

    //ResultingElement.appendChild(pkmn_of_the_day);
    MOVE_Search.innerHTML = pkmn_of_the_day;
}