/**
 * Created by MasterAnseen on 10/13/17.
 */
export default class Recipe{
    constructor(a, b, c, d){
        this.title = a;
        if(b === ""){
            this.img = "#";
        }
        else
            this.img = b;
        this.desc = c;
        this.link = d;
    }
}