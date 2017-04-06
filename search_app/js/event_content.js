/**
 * Created by MasterAnseen on 3/1/17.
 */
var request = new XMLHttpRequest();
request.open("GET", "data/data.json", true);
request.send(null);

request.onload = function() {
    //if(request.status === 200)
    //{
    var data = JSON.parse(request.responseText);

    var new_content = "";
    var old_content = document.querySelector("section#events_content");

    for(var i = 0; i < data.events.length; i++)
    {
        new_content += "<article id='event_content'>";
        new_content += "<button id='btn1'>"+data.events[i].date+"</button>";
        new_content += "<section>";
        new_content += "<h3>"+data.events[i].venue+"</h3>";
        new_content += "<h4>Sponsored by: "+data.events[i].sponsor+"</h4>";
        new_content += "<p>Located in: "+data.events[i].city+", "+data.events[i].state+"</p>";
        new_content += "<a href='"+data.events[i].locationURL+"'> Map</a>";
        new_content += "</section>";
        new_content += "<a href='"+data.events[i].ticketsURL+"' id='btn2'>Buy Tickets</a>";
        new_content += "</article>";
    }
    old_content.innerHTML = new_content;

    old_content = document.querySelector("#social");
    new_content = "<a href='news.html'>Newsletter</a>";
    new_content += "<a href='https://facebook.com'><img src='images/social.png' alt='#'></a> <a href='https://twitter.com'><img src='images/social.png' alt='#'></a> <a href='https://youtube.com'><img src='images/social.png' alt='#'></a> <a href='https://google.com'><img src='images/social.png' alt='#'></a> <a href='https://instagram.com'><img src='images/social.png' alt='#'></a>";
    new_content += "<a href='aboutus.html'>Contact</a>";
    old_content.innerHTML = new_content;

};
