import { genericRenderer } from "../../lib/utils.js";
import { OptionView } from './Promoliste/index.js'

const templateFile = await fetch("src/ui/promo/template.html.inc");
const template = await templateFile.text();

let BackofficeView = {
    render: function(data) {
        let html = "";

        html += genericRenderer(template);

        let option = OptionView.render(data);
        html = html.replace("{{option}}", option);

        return html;
    }
};


export { BackofficeView };
