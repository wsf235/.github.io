/**
 * Created by MasterAnseen on 5/15/17.
 */

//var AppID = "375bf17fe5a2b5a84c20cec64a456e49af9cd73b567695467895b50e4716094d";


var result_holder = document.getElementById('img_gallery');

//function Request(query) {
    var request = new XMLHttpRequest();

    var url = 'https://api.unsplash.com/search/photos';
    url += '?client_id='+"375bf17fe5a2b5a84c20cec64a456e49af9cd73b567695467895b50e4716094d";
    url += '&query='+"Travel";
    url += '&page='+Math.floor((Math.random() * 37) + 1);
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
                               "(max-width: 601px) 33vw, " +
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




document.getElementById('item_flash').addEventListener('click', function (e) {
    var request = new XMLHttpRequest();
    result_holder.innerHTML = '';
    var url = 'https://api.unsplash.com/search/photos';
    url += '?client_id='+"375bf17fe5a2b5a84c20cec64a456e49af9cd73b567695467895b50e4716094d";
    url += '&query='+"Travel";
    url += '&page='+Math.floor((Math.random() * 37) + 1);
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
                        "(max-width: 601px) 33vw, " +
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
}, false);


