/**
 * Created by MasterAnseen on 6/11/17.
 */

var request;
var s_request;
var data;
//var s_data;

var pkmn_img = document.querySelector(".pkmn_img");
var pkmn_desc = document.querySelector(".pkmn_desc");
var pkmn_reset = document.querySelector(".reset_button");



    document.addEventListener('onload', function (e) {
        var id = Math.floor((Math.random() * 802)+1);

        var api = "https://pokeapi.co/api/v2/pokemon/" + id + "/";
        var api2 = "https://pokeapi.co/api/v2/pokemon-species/" + id + "/";

        Request(api, api2);

    });

function Request(url, url2) {
    request = new XMLHttpRequest();
    request.open('GET', url, true);

    s_request = new XMLHttpRequest();
    s_request.open('GET', url2, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {

            data = JSON.parse(request.responseText);
            console.log(data.name);
            pkmn_img.innerHTML = "<img src='"+data.sprites.front_default+"'>";

        }
        else {
            console.log("Request Error!", request);
        }
    };

    s_request.onload = function () {
        if (s_request.status >= 200 && s_request.status < 400) {

            data = JSON.parse(request.responseText);
            console.log(data.name);
            pkmn_desc.innerHTML = "<p>"+data2.flavor_text_entries.flavor_text+"</p>"

        }
        else {
            console.log("Request Error!", request);
        }
    };

    request.onerror = function () {
        console.log("Connection Error!");
    };

    request.send();
}





