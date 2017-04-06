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

    var old_content = document.querySelector("#news_content");

    for(var i = 0; i < data.news.length; i++)
    {
        new_content += "<article id='news_content'>";
        new_content += "<img src='"+data.news[i].imageURL+"'>";
        new_content += "<h2>"+data.news[i].title+"</h2>";
        new_content += "<p>"+data.news[i].postDate+"</p>";
        new_content += "<p>"+data.news[i].text+"</br>Read More: <a href='"+data.news[i].moreLink+"'>Click Here</a> </p>";
        new_content += "</article>";
    }
    old_content.innerHTML = new_content;

    old_content = document.querySelector("#social");
    new_content = "<a href='news.html'>Newsletter</a>";
    new_content += "<a href='https://facebook.com'><img src='images/social.png' alt='#'></a> <a href='https://twitter.com'><img src='images/social.png' alt='#'></a> <a href='https://youtube.com'><img src='images/social.png' alt='#'></a> <a href='https://google.com'><img src='images/social.png' alt='#'></a> <a href='https://instagram.com'><img src='images/social.png' alt='#'></a>";
    new_content += "<a href='aboutus.html'>Contact</a>";
    old_content.innerHTML = new_content;

};