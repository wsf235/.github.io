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

    var old_content = document.querySelector("section#aboutus_content");
    
    new_content += "<section id='aboutus_content'>";
    new_content += "<p>" + data.about.quote + "</p>";
    new_content += "<p>" + data.about.copy + "</p>";
    new_content += "</section>";
    

    old_content.innerHTML = new_content;

    old_content = document.querySelector("#social");
    new_content = "<a href='news.html'>Newsletter</a>";
    new_content += "<a href='https://facebook.com'><img src='images/social.png' alt='#'></a> <a href='https://twitter.com'><img src='images/social.png' alt='#'></a> <a href='https://youtube.com'><img src='images/social.png' alt='#'></a> <a href='https://google.com'><img src='images/social.png' alt='#'></a> <a href='https://instagram.com'><img src='images/social.png' alt='#'></a>";
    new_content += "<a href='aboutus.html'>Contact</a>";
    old_content.innerHTML = new_content;
};