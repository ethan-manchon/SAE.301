import { genericRenderer } from "../../../lib/utils.js"; 

const templateFile = await fetch("src/ui/productPage/productOption/template.html.inc");
const template = await templateFile.text();

let productOption = {
    render: function(data) {
        // Créer un élément div temporaire pour contenir le template
        let tempContainer = document.createElement('div');
        tempContainer.innerHTML = template;
        

        // Créer les options pour le select à partir des données
        let selectElement = tempContainer.querySelector('#select');
        // Boucle à travers chaque objet dans les données
        for (let obj of data) {
            // Crée un nouvel élément option pour le select
            let option = document.createElement("option");
            // Définit la valeur de l'option à la valeur de l'objet
            option.value = obj.option_value;
            // Définit le texte affiché de l'option à la valeur de l'objet
            option.textContent = obj.option_value;
            // Ajoute l'option à l'élément select
            selectElement.appendChild(option);
        }

        // Ajouter les options à l'élément select
        selectElement.addEventListener('change', function() {
            let selectedOption = data.find(option => option.option_name === selectElement.name);
            console.log(option_name);
            console.log(selectElement.name);
            console.log(data.find(option => option.option_name === selectElement.name));
            // console.log(selectedOption);

            if (selectedOption !== undefined) {
                // Remplacer les placeholders dans le template avec les données de l'option choisie dans le select
                tempContainer.innerHTML = genericRenderer(template, selectedOption);
            }
            else {
                console.log("Option not found");
            }
        });

        // Sérialiser le modèle modifié en une chaîne HTML
        let html = tempContainer.innerHTML;

        // Retourner le HTML
        return html;

    }      
};

export { productOption };

