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
    var old_content = document.querySelector("#latest>section");
    var stopper = 0;
    var i=0;
    if(data.news.length > 5)
    {
        stopper = 5;
    }


    //new_content += "<aside>";
    new_content += "<article id='latest_news_content'>";
    new_content += "<h2>"+data.news[0].title+"</h2>";
    new_content += "<p>"+data.news[0].postDate+"</p>";
    new_content += "<img src='"+data.news[0].imageURL+"'>";
    //new_content += "<p>"+data.news[0].text+"</br>Read More: <a href='"+data.news[0].moreLink+"'>Click Here</a> </p>";
    new_content += "</article>";
    //new_content += "</aside>";
    new_content += "<aside>";
    if(stopper>0) {
        for (i = 1; i < stopper; i++) {


            new_content += "<article id='news_content'>";
            new_content += "<h2>" + data.news[i].title + "</h2>";
            new_content += "<p>" + data.news[i].postDate + "</p>";
            new_content += "<img src='" + data.news[i].imageURL + "'>";
            //new_content += "<p>" + data.news[i].text + "</br>Read More: <a href='" + data.news[i].moreLink + "'>Click Here</a> </p>";
            new_content += "</article>";


        }
        new_content += "</aside>";
    }
    old_content.innerHTML = new_content;


    stopper = 0;
    if(data.events.length > 4)
    {
        stopper = 4;
    }
    new_content = "";
    old_content = document.querySelector("#tours>section");
    for(i = 0; i < stopper; i++)
    {
        new_content += "<article id='event_content'>";
        new_content += "<button id='btn1'>"+data.events[i].date+"</button>";
        new_content += "<section>";
        new_content += "<h3>"+data.events[i].venue+"</h3>";
        new_content += "<h4>Sponsored by: "+data.events[i].sponsor+"</h4>";
        new_content += "Located in: "+data.events[i].city+", "+data.events[i].state+"";
        new_content += "<a href='"+data.events[i].locationURL+"'> Map</a>";
        new_content += "</section>";
        new_content += "<a href='"+data.events[i].ticketsURL+"' id='btn2'>Buy Tickets</a>";
        new_content += "</article>";
    }
    old_content.innerHTML = new_content;

    new_content = "";
    old_content = document.querySelector("#about_the_band>section");
    new_content += "<section id='about_content'>";
    new_content += "<p>"+data.about.quote+"</p>";
    new_content += "<p>"+data.about.copy+"</p>";
    new_content += "</section>";

    old_content.innerHTML = new_content;

    old_content = document.querySelector("#social");
    new_content = "<a href='news.html'>Newsletter</a>";
    new_content += "<a href='https://facebook.com'><img src='images/social.png' alt='#'></a> <a href='https://twitter.com'><img src='images/social.png' alt='#'></a> <a href='https://youtube.com'><img src='images/social.png' alt='#'></a> <a href='https://google.com'><img src='images/social.png' alt='#'></a> <a href='https://instagram.com'><img src='images/social.png' alt='#'></a>";
    new_content += "<a href='aboutus.html'>Contact</a>";
    old_content.innerHTML = new_content;

};