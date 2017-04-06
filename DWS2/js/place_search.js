/**
 * Created by MasterAnseen on 4/2/17.
 */
var PLACE_Search = document.querySelector("#place_search");
var PLACE_Request = document.querySelector("#place_search_input");
var PLACE_Button = document.querySelector(".place_search_go");

PLACE_Button.addEventListener('click', function(e){
    var place_name = PLACE_Request.value;
    var api = "http://pokeapi.co/api/v2/location/"+place_name+"";
    Request(api);
    //show_all();
});

function Request(url){
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function(){
        if(request.status >=200 && request.status < 400){
            var data = JSON.parse(request.responseText);
            render_place(data);
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

function render_place(results){

    var pkmn_of_the_day = "<section class='daily_pkmn'>"; //document.createElement("p");
    //pkmn_of_the_day.innerHTML = results.name;

    pkmn_of_the_day += "<h2>"+results.name+"</h2>";
    pkmn_of_the_day += "<p>"+results.region.name+"</p>";
    pkmn_of_the_day += "</section>";

    //ResultingElement.appendChild(pkmn_of_the_day);
    PLACE_Search.innerHTML = pkmn_of_the_day;
}