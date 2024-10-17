// Import data (M)
import { ProductData } from "./data/product.js";
import { POData } from "./data/PO.js";

// Import UI (V)
import { ProductView } from "./ui/product/index.js";
import { CategView } from "./ui/navbar/index.js";
import { ProductpageView } from "./ui/productPage/index.js";


// import { productOption} from "./ui/productPage/productOption/index.js";

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

// Selection d'un produit
C.ProductSelect = function(){
    let main = document.querySelector("#main"); 
    main.addEventListener("click", C.handler_clickOnProduct);
}

C.handler_clickOnProduct = async function(ev){
    if (ev.target.closest('article')) {
        let id = ev.target.dataset.id;
        let data = await ProductData.fetch(id);
        let data2 = await POData.fetchAllByIdProduct(id);
        console.log(data2);

        // html =+ productOption.render(data2);
        let html = ProductpageView.render(data);

        let main = document.querySelector("#main");
        main.innerHTML = html;

    }
}


C.init();