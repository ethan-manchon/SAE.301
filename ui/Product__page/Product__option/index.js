import { genericRenderer } from "../../../lib/utils.js"; 
import { Productoptionselect } from "./Product__option__select/index.js";

const templateFile = await fetch("src/ui/Product__page/Product__option/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let Productoption = {

    render: function(data){
        let html = "";
        for(let obj of data){
            html += genericRenderer(template, obj);
        }
        html =+ Productoptionselect.render(data);
        return html;
    },

}


export {Productoption};