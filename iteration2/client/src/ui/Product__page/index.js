import { genericRenderer } from "../../lib/utils.js"; 
import { Productoption } from "./Product__option/index.js";

const templateFile = await fetch("src/ui/Product__page/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let ProductpageView = {

    render: function(data){
        let html = "";
        for(let obj of data){
            html += genericRenderer(template, obj);
        }
        html += Productoption.render(data);
        return html;
    },
}


export {ProductpageView};