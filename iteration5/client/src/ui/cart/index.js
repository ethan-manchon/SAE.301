import { genericRenderer } from "../../lib/utils.js"; 
import { CartProductsView } from "./CartProducts/index.js";

const templateFile = await fetch("src/ui/cart/template.html.inc");
const template = await templateFile.text();

let CartView = {
    render: function(data, i) {
        let html = "";
        let products = CartProductsView.render(data);
        let productList = template.replace('{{CartProducts}}', products);
        // Utiliser genericRenderer pour générer le contenu de base
        // Remplacer {{price}} par i dans le template
        let modifiedTemplate = productList.replace(/{{price}}/, i);
        html += genericRenderer(modifiedTemplate, data);


        return html;
    }
};


export { CartView };
