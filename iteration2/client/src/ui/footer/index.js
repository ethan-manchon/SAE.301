import { genericRenderer } from "../../lib/utils.js"; 

const templateFile = await fetch("src/ui/footer/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let ProductView = {

    render: function(data){
        let html = "";
        for(let obj of data){
            html += genericRenderer(template, obj);
        }
        return html;
    },

}



export {ProductView};