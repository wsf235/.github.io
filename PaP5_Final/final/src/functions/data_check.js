/**
 * Created by MasterAnseen on 10/9/17.
 */
import Recipe from '../functions/recipe_class'

function Data_Check() {

    //Uncomment if testing new code
    //localStorage.clear();
    var array = [];
    var t_array = [];
    var _new = "";
    if(!localStorage.data_set) {
        localStorage.data_set = true;
        _new = new Recipe(
            "Startline",
            "nothing",
            "Initial Recipe",
            "#"
        );
        array.push(_new);

        console.log("Data created");
        localStorage.setItem('recipe_list', JSON.stringify(array));
    }
    if(!localStorage.t_data_set) {
        localStorage.t_data_set = true;
        _new = new Recipe(
            "Startline",
            "nothing",
            "Initial Recipe",
            "#"
        );
        t_array.push(_new);

        console.log("Data created");
        localStorage.setItem('temp_recipe_list', JSON.stringify(t_array));
    }
    return array;
}

export default Data_Check