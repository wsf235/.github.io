/**
 * Created by MasterAnseen on 5/5/17.
 */


var templateSource = document.getElementById('results-template').innerHTML;
var template = Handlebars.compile(templateSource);
var result_holder = document.getElementById('search_results');
var playingCssClass = 'playing';
var audioObject = null;

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
                result_holder.innerHTML = "<p>Nothing Found</p>";
            }
            else
                result_holder.innerHTML = template(response);
        }
    });
};
/*

var fetchTracks = function (albumId, callback) {
    $.ajax({
        url: 'https://api.spotify.com/v1/albums/' + albumId,
        success: function (response) {
            callback(response);
        }
    });
};



result_holder.addEventListener('click', function (e) {
    var target = e.target;
    if (target !== null && target.classList.contains('cover')) {
        if (target.classList.contains(playingCssClass)) {
            audioObject.pause();
        } else {
            if (audioObject) {
                audioObject.pause();
            }
            fetchTracks(target.getAttribute('data-album-id'), function (data) {
                audioObject = new Audio(data.tracks.items[0].preview_url);
                audioObject.play();
                target.classList.add(playingCssClass);
                audioObject.addEventListener('ended', function () {
                    target.classList.remove(playingCssClass);
                });
                audioObject.addEventListener('pause', function () {
                    target.classList.remove(playingCssClass);
                });
            });
        }
    }
});

*/