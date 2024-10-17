import { genericRenderer } from "../../../../lib/utils.js"; 

const templateFile = await fetch("src/ui/productPage/productOption/optionSelect/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let Productselect = {

    render: function(data){
        let html = "";
        // for(let obj of data){
            html += genericRenderer(template, data);
        // }
        return html;
    },
}


export {Productselect};