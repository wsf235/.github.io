/**
 * Created by MasterAnseen on 4/1/17.
 */

var ResultingElement = document.querySelector("#daily");

ResultingElement.addEventListener('click', function(e){
    var type = "pokemon";
    var id = Math.floor((Math.random() * 802) + 1);
    var api = "https://pokeapi.co/api/v2/"+type+"/"+id+"/";
    Request(api, type);
});







    //functions


function Request(url, section){
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function(){
        if(request.status >=200 && request.status < 400){
            if(section === "pokemon") {
                var data = JSON.parse(request.responseText);
                console.log(data.name);
                render_pkmn(data);
            }else if(section === "item"){

            }
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
    ResultingElement.innerHTML = pkmn_of_the_day;
}