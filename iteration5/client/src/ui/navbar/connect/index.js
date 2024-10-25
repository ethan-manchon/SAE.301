import { genericRenderer } from "../../../lib/utils.js"; 


const templateFile = await fetch("src/ui/navbar/connect/template.html.inc");
const template = await templateFile.text();

let connect = {

    render: function(data){
        let html = "";
        html += genericRenderer(template, data);
        return html;
    },
}


export { connect };