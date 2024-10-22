import { genericRenderer } from "../../lib/utils.js"; 
const templateFile = await fetch("src/ui/navbar/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let CategView = {

    render: function(){
        let html = "";

        html += genericRenderer(template);

        return html;
    },

};

export { CategView };

