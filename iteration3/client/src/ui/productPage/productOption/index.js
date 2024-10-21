import { genericRenderer } from "../../../lib/utils.js"; 

const templateFile = await fetch("src/ui/productPage/productOption/template.html.inc");
const template = await templateFile.text();

let productOption = {

    render: function(data, i) {
        // Utiliser genericRenderer pour remplacer les placeholders dans le template
        let html = genericRenderer(template, data.options[i]);
        // Créer un élément div temporaire pour contenir le template
        let tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;

        // Créer les options pour le select à partir des données
        let selectElement = tempContainer.querySelector('#select');
        if (data.options && data.options.length > 0) {
            // Ajouter l'option correspondant à data.options[i] en premier
            let firstOption = document.createElement("option");
            firstOption.value = data.options[i].value;
            firstOption.textContent = data.options[i].value;
            selectElement.appendChild(firstOption);

            // Ajouter les autres options
            for (let j = 0; j < data.options.length; j++) {
            if (j !== i) {
                let optionElement = document.createElement("option");
                optionElement.value = data.options[j].value;
                optionElement.textContent = data.options[j].value;
                selectElement.appendChild(optionElement);
            }
            }
        }

        // Sérialiser le modèle modifié en une chaîne HTML
        html = tempContainer.innerHTML;

        // Retourner le HTML
        return html;
    }
}

export { productOption };
