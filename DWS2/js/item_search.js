/**
 * Created by MasterAnseen on 4/2/17.
 */
var ITEM_Search = document.querySelector("#item_search");
var ITEM_Request = document.querySelector("#item_search_input");
var ITEM_Button = document.querySelector(".item_search_go");

ITEM_Button.addEventListener('click', function(e){
    var item_name = ITEM_Request.value;
    var api = "http://pokeapi.co/api/v2/item/"+item_name+"";
    Request(api);
    //show_all();
});

function Request(url){
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function(){
        if(request.status >=200 && request.status < 400){
            var data = JSON.parse(request.responseText);
            render_item(data);
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

function render_item(results){

    var pkmn_of_the_day = "<section class='daily_pkmn'>"; //document.createElement("p");
    //pkmn_of_the_day.innerHTML = results.name;

    pkmn_of_the_day += "<h2>"+results.name+"</h2>";
    pkmn_of_the_day += "<img src='"+results.sprites.default+"'>";
    pkmn_of_the_day += "</section>";

    //ResultingElement.appendChild(pkmn_of_the_day);
    ITEM_Search.innerHTML = pkmn_of_the_day;
}