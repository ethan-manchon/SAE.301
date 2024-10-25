import { genericRenderer } from "../../lib/utils.js"; 
import { disconnect } from "./disconnect/index.js";
import { connect } from "./connect/index.js";

async function fetchTemplate() {
    const templateFile = await fetch("src/ui/navbar/template.html.inc");
    return await templateFile.text();
}

const template = await fetchTemplate();

// changer le template pour chaque template qui nous serront utilient


let NavView = {

    render: function(data){
        let tmpl = "";

        if (data === null) {
            tmpl = disconnect.render();
        } else {
            tmpl = connect.render(data);
        }

        let html = genericRenderer(template);

        html = html.replace('{{account}}', tmpl);

        return html;
    },

};

export { NavView };

