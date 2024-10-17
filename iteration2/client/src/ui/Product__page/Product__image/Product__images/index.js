import { genericRenderer } from "../../../../lib/utils.js"; 

const templateFile = await fetch("src/ui/Product__page/Product__image/Product__images/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let Productimages = {

    render: function(data){
        let html = "";
        for(let obj of data){
            html += genericRenderer(template, obj);
        }
        return html;
    },

}


export {Productimages};