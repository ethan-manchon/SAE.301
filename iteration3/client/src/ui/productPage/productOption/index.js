import { genericRenderer } from "../../../lib/utils.js"; 

const templateFile = await fetch("src/ui/productPage/productOption/template.html.inc");
const template = await templateFile.text();

// changer le template pour chaque template qui nous serront utilient


let productOption = {

    render: function(data){
        let html = "";
        html += genericRenderer(template, data);
        console.log(html);
        return html;
    },

    // handler_clickOnOption: function(){
    //     if (ev.target.closest('li')){
    //         // remplacer la li présente par le template voulu pour que cela fonctionnne A NE PAS OUBLLIER !!!
    //     }
    // },  return html;

}


export {productOption};