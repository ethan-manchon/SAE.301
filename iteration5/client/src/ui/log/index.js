import { genericRenderer } from "../../lib/utils.js"; 

const templateFile = await fetch("src/ui/log/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let LogView = {

    render: function(){
        let html = "";

            html += genericRenderer(template);
        
        return html;
    },

}


export {LogView};