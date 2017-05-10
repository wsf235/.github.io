/**
 * Created by MasterAnseen on 5/5/17.
 */

/*
var templateSource = document.getElementById('search_results_template').innerHTML;
var template = Handlebars.compile(templateSource);
*/

var result_holder = document.getElementById('search_results');


document.getElementById('form_submission').addEventListener('submit', function (e) {
    e.preventDefault();
    Request(document.getElementById('search_input').value);
}, false);

/*
var search = function (query) {


    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album',
            limit: 9
        },
        success: function (response) {
            if(response.albums.total === 0)
            {
                result_holder.innerHTML = "<h2>Results on "+query+"</h2>";
                result_holder.innerHTML += "<p>Nothing Found</p>";
            }
            else
                result_holder.innerHTML = "<h2>Results on "+query+"</h2>";
                result_holder.innerHTML += template(response);
        }
    });
};
*/

function Request(query) {
    var request = new XMLHttpRequest();

    var url = 'https://api.spotify.com/v1/search';
    url += '?q='+query;
    url += '&type=album';
    url += '&limit=9';

    request.open('GET', url, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            if(data.albums.total === 0){
                result_holder.innerHTML = "<h2>Results on "+query+"</h2>";
                result_holder.innerHTML += "<p>Nothing Found</p>";
            }
            else{
                result_holder.innerHTML = "<h2>Results on "+query+"</h2>";
                for(var i = 0; i < data.albums.limit; i++){
                    result_holder.innerHTML += "<div style=background-image:url("+data.albums.items[i].images[0].url+") data-album-id="+data.albums.items[i].id+" class=result>"+
                        "<div id='artist'>"+
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
