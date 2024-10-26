import { genericRenderer } from "../../../lib/utils.js"; 
const templateFile = await fetch("src/ui/cart/CartProducts/template.html.inc");
const template = await templateFile.text();

let CartProductsView = {

    render: function(data){
        let html = "";
        for (let obj of data){
            html += genericRenderer(template, obj);
        }
        return html;
    },
};

export { CartProductsView };
