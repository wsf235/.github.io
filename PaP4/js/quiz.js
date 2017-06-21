/**
 * Created by MasterAnseen on 6/17/17.
 */

var result_holder = document.querySelector(".container");
result_holder.innerHTML = "";

//function Request(query) {
var request = new XMLHttpRequest();

request.open('GET', 'data/data.json', true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var _data = JSON.parse(request.responseText);

        console.log(_data);
        for(var i = 0; i < _data.data.length; i++){
            result_holder.innerHTML += "<div class='row'>"+
                "<h2>"+_data.data[i].title+"</h2>"+
                "<p>"+_data.data[i].question+"</p>"+
                "<ul>";
            var correct = Math.floor((Math.random() * 3));
            for(var j=0; j < 3; j++)
            {
                if(j === correct)
                    result_holder.innerHTML += "<input type='radio' name='quiz"+(i+1)+"' value='"+_data.data[i].correct+"'><label>"+_data.data[i].correct+"</label><br>";
                else
                    result_holder.innerHTML += "<input type='radio' name='quiz"+(i+1)+"' value='"+_data.data[i].wrong[i]+"'><label>"+_data.data[i].wrong[j]+"</label><br>";

            }

                result_holder.innerHTML += "</ul>"+
                "<a href='"+_data.data[i].hint+"'>Here's a hint</a>"+
                "</div>"
            ;
        }

    }
    else {
        console.log("Request Error!", request);
        result_holder.innerHTML += "<p>Nothing Found - Request Error</p>";

    }
};

request.onerror = function () {
    console.log("Connection Error!");
    result_holder.innerHTML += "<p>Nothing Found - Connection Error</p>";

};

request.send();
//}

/*

var mobile_menu = document.getElementById('mobile');
var result_holder = document.getElementById('search_results');
var x = 0;

document.getElementById('form_submission').addEventListener('submit', function (e) {
    e.preventDefault();
    Request(document.getElementById('search_input').value);
}, false);

mobile_menu.addEventListener('click', function(e){
    if(x === 1) {
        this.innerHTML="<img src='img/hamburger.png'>";
        x = 0;
    }
    else{
        this.innerHTML="<ul> <li><a href='index.html'>Home</a></li> <li><a href='about.html'>About</a></li> <li><a href='contact.html'>Contact</a></li> <li><img src='img/close.png'></li> </ul>";
        x = 1;
    }
});



function Request(query) {
    var request = new XMLHttpRequest();

    var url = 'https://api.spotify.com/v1/search';
    url += '?q='+query;
    url += '&type=album';
    url += '&limit=9';
    document.getElementById('result_tag').innerHTML = "<h2>Showing results for "+query+"</h2>";


    request.open('GET', url, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            if(data.albums.total === 0){
                result_holder.innerHTML += "<p>Nothing Found</p>";
            }
            else{
                for(var i = 0; i < data.albums.limit; i++){
                    result_holder.innerHTML += "<div data-album-id="+data.albums.items[i].id+" class=result>"+
                        "<div id='artist'>"+
                        "<img src='"+data.albums.items[i].images[0].url+"'>"+
                        "<h3>"+data.albums.items[i].name+"</h3>"+
                        "<p>"+data.albums.items[i].artists[0].name+"</p>"+
                        "</div>"+
                        "</div>";
                }
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

*/



