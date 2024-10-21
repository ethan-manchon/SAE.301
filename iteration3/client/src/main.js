// Import data (M)
import { ProductData } from "./data/product.js";

// Import UI (V)
import { ProductView } from "./ui/product/index.js";
import { CategView } from "./ui/navbar/index.js";
import { ProductpageView } from "./ui/productPage/index.js";

import { productOption } from "./ui/productPage/productOption/index.js";

// The controller (C)

let C = {}

C.init = async function(){
    C.AllProduct();
    C.NavBar();
    C.categFiltrer();
    C.ProductSelect();
}

// Affichage de tous les produits
C.AllProduct = async function(){
    let data = await ProductData.fetchAll();
    let html = ProductView.render(data);
    let main = document.querySelector("#main");
    main.innerHTML = html;
}

// Affichage de la barre de navigation
C.NavBar = async function(){ 
    let html = CategView.render();
    let navbar = document.querySelector("#navbar");
    navbar.innerHTML = html;
}

// Barre de navigation
C.categFiltrer = function(){
    let filtres = document.querySelector("#nav"); 
    filtres.addEventListener("click", C.handler_clickOnCategory);
}
C.handler_clickOnCategory = async function(ev){
    if(ev.target.nodeName == "BUTTON"){
        let id = ev.target.id;
        let data = await ProductData.fetchAllByCategory(id);
        let html = ProductView.render(data);
        let main = document.querySelector("#main");
        main.innerHTML = html;
    }
}

// Sélection d'un produit
C.ProductSelect = function(){
    document.querySelector("#main").addEventListener("click", C.handler_clickOnProduct);
}

C.handler_clickOnProduct = async function(ev){
    let article = ev.target.closest('article');
    if (article) {
        let id = article.dataset.id;
        let data = await ProductData.fetch(id);
        document.querySelector("#main").innerHTML = ProductpageView.render(data, data.options[0].value);
        C.OptionChange(); // Attach the change event after rendering the product page
    }
}

// Changement d'option
C.OptionChange = function(){
    let select = document.querySelector("#select");
    if (select) {
        select.addEventListener("change", C.handler_changeOnOption);
    }
}

C.handler_changeOnOption = async function(ev){
    console.dir(ev.target);
    let Value = ev.target.value;
    console.log("value de l'option", ev.target.value);
    let id = ev.target.closest('section').dataset.id;
    console.log("id", id);
    let data = await ProductData.fetch(id);
    document.querySelector("#main").innerHTML = ProductpageView.render(data, Value);
    C.OptionChange();
}

window.ProductData = ProductData;

C.init();
