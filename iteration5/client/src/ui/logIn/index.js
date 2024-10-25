import { genericRenderer } from "../../lib/utils.js"; 

const templateFile = await fetch("src/ui/logIn/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let LogInView = {

    render: function(){
        let html = "";
            html += genericRenderer(template);

        return html;
    },

}


export {LogInView};