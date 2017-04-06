/**
 * Created by MasterAnseen on 4/2/17.
 */
var PKMN_Search = document.querySelector("#pkmn_search");
var PKMN_Request = document.querySelector("#pkmn_search_input");
var PKMN_Button = document.querySelector(".pkmn_search_go");

PKMN_Button.addEventListener('click', function(e){
    var pkmn_name = PKMN_Request.value;
    var api = "http://pokeapi.co/api/v2/pokemon/"+pkmn_name+"";
    Request(api);
    //show_all();
});

function Request(url){
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function(){
        if(request.status >=200 && request.status < 400){
            var data = JSON.parse(request.responseText);
            render_pkmn(data);
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

function render_pkmn(results){

    var pkmn_of_the_day = "<section class='daily_pkmn'>"; //document.createElement("p");
    //pkmn_of_the_day.innerHTML = results.name;

    pkmn_of_the_day += "<h2>"+results.name+"</h2>";
    pkmn_of_the_day += "<img src='"+results.sprites.front_default+"'>";
    pkmn_of_the_day += "</section>";

    //ResultingElement.appendChild(pkmn_of_the_day);
    PKMN_Search.innerHTML = pkmn_of_the_day;
}

function show_all(){
    var full_request = new XMLHttpRequest();
    for(var i = 1; i <803; i++){
        full_request.open('GET', "http://pokeapi.co/api/v2/pokemon/"+i+"/", true);
        full_request.onload = function(){
            if(full_request.status >=200 && full_request.status < 400){
                var data = JSON.parse(full_request.responseText);
                render_pkmn(data);
            }
            else{
                console.log("Request Error!", full_request);
            }
        };

        full_request.onerror = function(){
            console.log("Connection Error!");
        };

        full_request.send();
        full_request = new XMLHttpRequest();
    }
}