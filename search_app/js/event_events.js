/**
 * Created by MasterAnseen on 3/1/17.
 */

function recolor(event){
    var color = this.style.backgroundColor;
    if(event.type === "mouseover"){
        new_color.style.backgroundColor = "white";
    }else{
        new_color.style.backgroundColor = color;
    }
}
//function bg_change(){
var rows = document.querySelectorAll("article");
var new_color = document.getElementById("#event_content");

for(var i = 0; i < rows.length; i++){
    rows[i].addEventListener("mouseover", recolor ,false);
    rows[i].addEventListener("mouseout", recolor ,false);
}

//}


//addEventListener("mouseover", bg_change, false);