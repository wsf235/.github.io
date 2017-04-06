/**
 * Created by MasterAnseen on 4/2/17.
 */
var GAME_Search = document.querySelector("#game_search");
var GAME_Request = document.querySelector("#game_search_input");
var GAME_Button = document.querySelector(".game_search_go");

GAME_Button.addEventListener('click', function(e){
    var game_name = GAME_Request.value.toLowerCase();
    var api = "http://pokeapi.co/api/v2/generation/"+game_name+"";
    Request(api);
    //show_all();
});

function Request(url){
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function(){
        if(request.status >=200 && request.status < 400){
            var data = JSON.parse(request.responseText);
            render_game(data);
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

function render_game(results){

    var pkmn_of_the_day = "<section class='daily_pkmn'>"; //document.createElement("p");
    //pkmn_of_the_day.innerHTML = results.name;

    pkmn_of_the_day += "<h2>"+results.name+"</h2>";
    pkmn_of_the_day += "<p>"+results.main_region.name+"</p>";
    pkmn_of_the_day += "</section>";

    //ResultingElement.appendChild(pkmn_of_the_day);
    GAME_Search.innerHTML = pkmn_of_the_day;
}