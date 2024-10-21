import { genericRenderer } from "../../lib/utils.js"; 
import { productOption } from "./productOption/index.js";


const templateFile = await fetch("src/ui/productPage/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let ProductpageView = {

    render: function(data, i){
        let html = "";
            html += genericRenderer(template, data);
        
        let option = productOption.render(data, i);
            html = html.replace("{{Option}}", option);
        return html;
    },
}


export {ProductpageView};