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

    var old_content = document.querySelector("section#band_content");

    new_content += "<table>";
    new_content += "<tr><th>Bandmate</th><th>Position</th></tr>";
    for(var i = 0; i < data.members.length; i++)
    {
        new_content += "<tr>";
        new_content += "<td><img src='"+data.members[i].imageURL+"'><p>"+data.members[i].firstname+" "+data.members[i].lastname+"</p></td>";
        new_content += "<td id='td2'>"+data.members[i].instrument+"</td>";
        new_content += "</tr>";
    }
    new_content += "</table>";

    old_content.innerHTML = new_content;

    old_content = document.querySelector("#social");
    new_content = "<a href='news.html'>Newsletter</a>";
    new_content += "<a href='https://facebook.com'><img src='images/social.png' alt='#'></a> <a href='https://twitter.com'><img src='images/social.png' alt='#'></a> <a href='https://youtube.com'><img src='images/social.png' alt='#'></a> <a href='https://google.com'><img src='images/social.png' alt='#'></a> <a href='https://instagram.com'><img src='images/social.png' alt='#'></a>";
    new_content += "<a href='aboutus.html'>Contact</a>";
    old_content.innerHTML = new_content;

};