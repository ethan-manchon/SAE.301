import { genericRenderer } from "../../lib/utils.js";
import { HeadBackView } from "../headerBackground/index.js";

const templateFile = await fetch("src/ui/orderValidate/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let OrderView = {

    render: function(){
        let html = "";

        html += genericRenderer(template);

        return html;

    },

}


export {OrderView};