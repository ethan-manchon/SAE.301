import { genericRenderer } from "../../../lib/utils.js"; 

async function getTemplate() {
    const templateFile = await fetch("src/ui/promo/Promoliste/template.html.inc");
    return await templateFile.text();
}

const template = await getTemplate();

let OptionView = {
    render: function(data) {

        // Utiliser genericRenderer pour remplacer les placeholders dans le template

        let html = genericRenderer(template, data);
        // Créer un élément div temporaire pour contenir le template
        let tempContainer = document.createElement('div');
        tempContainer.innerHTML = html;
        // Créer les options pour le select à partir des données
        let selectElement = tempContainer.querySelector('select');


            // Ajouter les autres options
            for (let k = 0; k < data.length; k++) {
                    let optionElement = document.createElement("option");
                    optionElement.value = data[k].id;
                    optionElement.textContent = data[k].name;
                    selectElement.appendChild(optionElement);
            }                    
                    

        // Sérialiser le modèle modifié en une chaîne HTML
        html = tempContainer.innerHTML;

        // Retourner le HTML
        return html;
    }
};


export { OptionView };
