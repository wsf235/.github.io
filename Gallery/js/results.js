/**
 * Created by MasterAnseen on 5/15/17.
 */

var AppID = "375bf17fe5a2b5a84c20cec64a456e49af9cd73b567695467895b50e4716094d";


var result_holder = document.getElementById('img_gallery');
var query = "Travel";
var rand = Math.floor((Math.random() * 37) + 1);

//document.addEventListener('load', function(e){
//    Request(x.value);
//}, false);

/*
document.getElementById('form_submission').addEventListener('submit', function (e) {
    e.preventDefault();
    Request(document.getElementById('search_input').value);
}, false);
*/

//function Request(query) {
    var request = new XMLHttpRequest();

    var url = 'https://api.unsplash.com/search/photos';
    url += '?client_id='+AppID;
    url += '&query='+query;
    url += '&page='+rand;
    url += '&per_page=9';


    request.open('GET', url, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            if(data.total === 0){
                result_holder.innerHTML += "<p>Nothing Found</p>";
            }
            else{
                console.log(data);
                for(var i = 0; i < data.total; i++){
                    result_holder.innerHTML += "<div class=result>"+
                        "<img src='"+data.results[i].urls.regular+"' "+
                        "srcset='"+data.results[i].urls.thumb+" 320w,"+
                                   data.results[i].urls.small+" 600w' "+
                        "sizes='(max-width: 320px) 100vw, " +
                               "(max-width: 600px) 33vw, " +
                               "600px' "+
                        "alt='Nothing here'>"+
                        "<div id='photographer'>"+
                        "<h3>"+data.results[i].user.name+"</h3>"+
                        "<p>"+data.results[i].likes+"</p>"+
                        "</div>"+
                        "</div>";
                }
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