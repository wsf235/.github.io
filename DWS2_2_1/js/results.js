/**
 * Created by MasterAnseen on 5/5/17.
 */


var templateSource = document.getElementById('search_results_template').innerHTML;
var template = Handlebars.compile(templateSource);
var result_holder = document.getElementById('search_results');


document.getElementById('form_submission').addEventListener('submit', function (e) {
    e.preventDefault();
    search(document.getElementById('search_input').value);
}, false);

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
