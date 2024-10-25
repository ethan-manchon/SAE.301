import { genericRenderer } from "../../lib/utils.js"; 

const templateFile = await fetch("src/ui/footer/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let FooterView = {

    render: function(){
        let html = "";
        html += template;
        return html;
    },

}



export {FooterView};