/**
 * Created by MasterAnseen on 4/1/17.
 */

//document.addEventListener('load',function(){
    var request;
    //var s_request;
    var data;
    //var s_data;
    var SEARCH_CATEGORY = document.querySelector("#search_category");
    var SEARCH_INPUT = document.querySelector("#search_input");
    var SEARCH_GO = document.querySelector(".search_go");
    var SEARCH_RESULTS = document.querySelector("#search_results");
    var links = [SEARCH_CATEGORY.length];

    for(var i = 0; i < SEARCH_CATEGORY.length; i++)
    {
        links.push("https://pokeapi.co/api/v2/"+SEARCH_CATEGORY.options[i].value.toLowerCase()+"/");
    }

if(SEARCH_GO)
    SEARCH_GO.addEventListener('click', function (e) {
        var type = SEARCH_CATEGORY.value.toLowerCase();
        var id = SEARCH_INPUT.value.toLowerCase();

        if (type === "pokemon") {
            if (id < 1) {
                id = 1;
            } else if (id > 721) {
                id = 721;
            }
        }
        else if(type === "item") {
            if (id < 1) {
                id = 1;
            } else if (id > 749) {
                id = 749;
            }
        }
        else if(type === "move") {
            if (id < 1) {
                id = 1;
            } else if (id > 621) {
                id = 621;
            }
        }
        else if(type === "location") {
            if (id < 1) {
                id = 1;
            } else if (id > 678) {
                id = 678;
            }
        }
        else if(type === "generation") {
            if (id < 1) {
                id = 1;
            } else if (id > 6) {
                id = 6;
            }
        }


                var api = "https://pokeapi.co/api/v2/" + type + "/" + id + "/";

        /*
        for (i = 1; i < links.length; i++){
            console.log(links[i]);
            s_request = new XMLHttpRequest();
            s_request.open('GET', links[i], true);
            s_request.onload = function(){
                if (request.status >= 200 && request.status < 400) {
                    s_data = JSON.parse(s_request.responseText);
                    console.log(s_data.count);
                }
            };
            s_request.send();
            s_data = "";
        }
        */
        Request(api, type);

    });


    //functions


    function Request(url, section) {
        request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                if (section === "pokemon") {
                    data = JSON.parse(request.responseText);
                    console.log(data.name);
                    render_pkmn(data);
                } else if (section === "item") {
                    data = JSON.parse(request.responseText);
                    console.log(data.name);
                    render_item(data);
                } else if (section === "move") {
                    data = JSON.parse(request.responseText);
                    console.log(data.name);
                    render_move(data);
                } else if (section === "location") {
                    data = JSON.parse(request.responseText);
                    console.log(data.name);
                    render_place(data);
                } else {
                    data = JSON.parse(request.responseText);
                    console.log(data.name);
                    render_game(data);
                }
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

    function render_pkmn(results) {

        var pkmn_of_the_day = "<section class='pkmn'>"; //document.createElement("p");
        //pkmn_of_the_day.innerHTML = results.name;

        pkmn_of_the_day += "<h2>" + results.name + "</h2>";
        pkmn_of_the_day += "<img src='" + results.sprites.front_default + "'>";
        pkmn_of_the_day += "</section>";

        //ResultingElement.appendChild(pkmn_of_the_day);
        SEARCH_RESULTS.innerHTML = pkmn_of_the_day;
    }


    function render_move(results) {

        var pkmn_of_the_day = "<section class='move'>"; //document.createElement("p");
        //pkmn_of_the_day.innerHTML = results.name;

        pkmn_of_the_day += "<h2>" + results.name + "</h2>";
        pkmn_of_the_day += "<p>" + results.type.name + "</p>";
        pkmn_of_the_day += "</section>";

        //ResultingElement.appendChild(pkmn_of_the_day);
        SEARCH_RESULTS.innerHTML = pkmn_of_the_day;
    }


    function render_item(results) {

        var pkmn_of_the_day = "<section class='item'>"; //document.createElement("p");
        //pkmn_of_the_day.innerHTML = results.name;

        pkmn_of_the_day += "<h2>" + results.name + "</h2>";
        pkmn_of_the_day += "<img src='" + results.sprites.default + "'>";
        pkmn_of_the_day += "</section>";

        //ResultingElement.appendChild(pkmn_of_the_day);
        SEARCH_RESULTS.innerHTML = pkmn_of_the_day;
    }


    function render_game(results) {

        var pkmn_of_the_day = "<section class='game'>"; //document.createElement("p");
        //pkmn_of_the_day.innerHTML = results.name;

        pkmn_of_the_day += "<h2>" + results.name + "</h2>";
        pkmn_of_the_day += "<p>" + results.main_region.name + "</p>";
        pkmn_of_the_day += "</section>";

        //ResultingElement.appendChild(pkmn_of_the_day);
        SEARCH_RESULTS.innerHTML = pkmn_of_the_day;
    }


    function render_place(results) {

        var pkmn_of_the_day = "<section class='place'>"; //document.createElement("p");
        //pkmn_of_the_day.innerHTML = results.name;

        pkmn_of_the_day += "<h2>" + results.name + "</h2>";
        pkmn_of_the_day += "<p>" + results.region.name + "</p>";
        pkmn_of_the_day += "</section>";

        //ResultingElement.appendChild(pkmn_of_the_day);
        SEARCH_RESULTS.innerHTML = pkmn_of_the_day;
    }



//});
