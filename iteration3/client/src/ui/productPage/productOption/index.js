import { genericRenderer } from "../../../lib/utils.js"; 

const templateFile = await fetch("src/ui/productPage/productOption/template.html.inc");
const template = await templateFile.text();

let productOption = {

    render: function(data, i) {
        console.log("Data received:", data);
        console.log("Index received:", i);

        // Utiliser genericRenderer pour remplacer les placeholders dans le template
        let j = data.options.findIndex(option => option.value === i);
        console.log("Index of the selected option:", j);

        if (j === -1) {
            console.error("Option not found in data.options");
            return "";
        }

        let html = genericRenderer(template, data.options[j]);
        console.log("HTML after genericRenderer:", html);

        // Créer un élément div temporaire pour contenir le template
        let tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;

        // Créer les options pour le select à partir des données
        let selectElement = tempContainer.querySelector('#select');
        if (data.options && data.options.length > 0) {
            // Ajouter l'option correspondant à data.options[i] en premier
            let firstOption = document.createElement("option");
            firstOption.value = data.options[j].value;
            firstOption.textContent = data.options[j].value;
            selectElement.appendChild(firstOption);

            // Ajouter les autres options
            for (let k = 0; k < data.options.length; k++) {
                if (k !== j) {
                    let optionElement = document.createElement("option");
                    optionElement.value = data.options[k].value;
                    optionElement.textContent = data.options[k].value;
                    selectElement.appendChild(optionElement);
                }
            }
        }

        // Sérialiser le modèle modifié en une chaîne HTML
        html = tempContainer.innerHTML;
        console.log("Final HTML:", html);

        // Retourner le HTML
        return html;
    }
}

export { productOption };
