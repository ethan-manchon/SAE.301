import { genericRenderer } from "../../../lib/utils.js"; 


const templateFile = await fetch("src/ui/navbar/disconnect/template.html.inc");
const template = await templateFile.text();


let disconnect = {

    render: function(){
        let html = "";
        html += genericRenderer(template);
        return html;
    },
}


export { disconnect };