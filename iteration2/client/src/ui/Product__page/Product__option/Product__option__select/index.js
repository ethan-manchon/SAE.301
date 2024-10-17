import { genericRenderer } from "../../../../lib/utils.js"; 

const templateFile = await fetch("src/ui/Product__page/Product__option/Product__option__select/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let Productoptionselect = {

    render: function(data){
        let html = "";
        for(let obj of data){
            html += genericRenderer(template, obj);
        }
        return html;
    },
}


export {Productoptionselect};