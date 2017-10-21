/**
 * Created by MasterAnseen on 10/9/17.
 */

import Recipe from '../functions/recipe_class'


function Request(key) {
    console.log(key);
    if((key === "") || (key === "undefined")){
        return;
    }

    localStorage.search_item = JSON.stringify(key);

    var request = new XMLHttpRequest();
    var YOUR_APP_ID = '04297779';
    var YOUR_APP_KEY = 'a4131c0a3e15344e4d1979a83f0e370f';
    console.log("Made it");

    var url = 'https://api.edamam.com/search?q='+key+'&app_id='+YOUR_APP_ID+'&app_key='+YOUR_APP_KEY+'&from=0&to=6';

    var return_array = [];

    request.open('GET', url, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var data = JSON.parse(request.responseText);
            if(data.total === 0){
                return "<p>Nothing Found</p>";
            }
            else{
                console.log(data);
                //localStorage.removeItem('t_data_set');
                //localStorage.removeItem('temp_recipe_list');
                //if(!localStorage.t_data_set) {
                    localStorage.t_data_set = true;
                    for(var i = data.from; i < data.to; i++) {
                        var _new = new Recipe(
                            data.hits[i].recipe.label,
                            data.hits[i].recipe.image,
                            "Check link for description",
                            data.hits[i].recipe.url
                        );
                        return_array.push(_new);
                    }

                    console.log("Data created");
                    localStorage.setItem('temp_recipe_list', JSON.stringify(return_array));
                //}
                //window.location.reload(false);
                return return_array;
            }

        }
        else {
            console.log("Request Error!", request);
            return "<p>Nothing Found - Request Error</p>";

        }
    };

    request.onerror = function () {
        console.log("Connection Error!");
        return "<p>Nothing Found - Connection Error</p>";

    };

    request.send();
}

export default Request

/*
for(var i = data.from; i < data.to; i++){
    return_array.push("<div class=result>"+
        "<img src='"+data.hits[i].recipe.image+"' "+
        "alt='Nothing here'>"+
        "<div id='info'>"+
        "<h3>"+data.hits[i].recipe.label+"</h3>"+
        "<p>Recipe Link: <a href='"+data.hits[i].recipe.url+"'>Link</a></p>"+
        "</div>"+
        "</div>");
}*/