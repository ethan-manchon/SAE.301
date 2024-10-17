import { genericRenderer } from "../../lib/utils.js"; 


const templateFile = await fetch("src/ui/productPage/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let ProductpageView = {

    render: function(data){
        let html = "";
            html += genericRenderer(template, data);
        return html;
    },
}


export {ProductpageView};