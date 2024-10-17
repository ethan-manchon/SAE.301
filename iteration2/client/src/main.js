import { ProductData } from "./data/product.js";
import { ProductView } from "./ui/product/index.js";
import { CategView } from "./ui/navbar/index.js";

// import './index.css'; Erreur

let C = {}

C.init = async function(){
    C.AllProduct();
    C.NavBar();
    C.categFiltrer();
    C.ProductSelect();
}

C.AllProduct = async function(){
    let data = await ProductData.fetchAll();
    let html = ProductView.render(data);
    let main = document.querySelector("#main");
    main.innerHTML = html;

}

C.NavBar = async function(){ 
    let html = CategView.render();
    let navbar = document.querySelector("#navbar");
    navbar.innerHTML = html;
}

// Barre de navigation
C.categFiltrer = function(){
    let filtres = document.querySelector("#nav"); // changer car se ne sera pas forcément la même chose
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
    let main = document.querySelector("#main"); // changer car se ne sera pas forcément la même chose
    main.addEventListener("click", C.handler_clickOnProduct);
}

C.handler_clickOnProduct = async function(ev){
    if (ev.target.closest('article')) {
        let id = ev.target.dataset.id;
        let data = await ProductData.fetch(id);
        // let html = ProductView.render(data);
        let main = document.querySelector("#main");
        main.innerHTML = html;

    }
}


C.init();
export { C };
