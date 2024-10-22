// Import data (M)
import { ProductData } from "./data/product.js";
import { CartData } from "./data/cartData.js"; // Ensure the correct file path and case sensitivity




// Import UI (V)
import { ProductView } from "./ui/product/index.js";
import { CategView } from "./ui/navbar/index.js";
import { ProductpageView } from "./ui/productPage/index.js"; 
import { FooterView } from "./ui/footer/index.js";
import { HeadBackView } from "./ui/headerBackground/index.js";
import { CartView } from "./ui/cart/index.js";

// import { productOption } from "./ui/productPage/productOption/index.js";

// The controller (C)

let C = {}

C.init = async function(){
    C.NavBar();
    C.Home();
    C.Footer();
    C.Header();
    C.categFiltrer();
    C.ProductSelect();
    C.ViewCart ();
    C.LoadCartFromCookie(); // Load cart from cookie
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

// Affichage de la page d'accueil
C.Home = async function(){
    let Logo = document.querySelector("#Logo");
    Logo.addEventListener("click", C.Header);
}

// Affichage du footer
C.Footer = async function(){
    let html = FooterView.render();
    let footer = document.querySelector("#footer");
    footer.innerHTML = html;
}

// Affichage de la video du header
C.Header = async function(){
    let html = HeadBackView.render();
    let header = document.querySelector("#main");
    header.innerHTML = html;
}   

// Barre de navigation
C.categFiltrer = function(){
    let filtres = document.querySelector("#nav"); 
    filtres.addEventListener("click", C.handler_clickOnCategory);
}

C.handler_clickOnCategory = async function(ev){
    if(ev.target.dataset.id == "category"){
        let id = ev.target.id;
        let data = await ProductData.fetchAllByCategory(id);
        let html = ProductView.render(data);
        let main = document.querySelector("#main");
        main.innerHTML = html;
    }
}



// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// Gestion d'un produit
// ---------------------------------------------------------------------------------------------------------------------------------------------------------



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
        C.AddToCart();

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
    let Value = ev.target.value;
    let id = ev.target.closest('section').dataset.id;
    let data = await ProductData.fetch(id);
    document.querySelector("#main").innerHTML = ProductpageView.render(data, Value);
    C.OptionChange();

}



// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// Gestion du Panier
// ---------------------------------------------------------------------------------------------------------------------------------------------------------


// Ajout au panier
C.AddToCart = function(){
    let main = document.querySelector("#main");
    main.addEventListener("click", C.handler_clickOnAddToCart);
}

C.handler_clickOnAddToCart = async function(ev){
    if(ev.target.dataset.id == "addToCart"){
        let id = ev.target.closest('section').dataset.id;
        let value = document.querySelector("#select").value;
        let product = await ProductData.fetch(id);
        let i = product.options.findIndex(option => option.value === value);
        CartData.new({id : product.options[i].id, name: product.name, url: product.options[i].url, option: value, price: product.price, quantity: 1 });
        C.SaveCartToCookie(); // Save cart to cookie
    }
}

// Save cart to cookie
C.SaveCartToCookie = function() {
    document.cookie = `cart=${JSON.stringify(CartData.items)}; path=/; max-age=${48 * 60 * 60}`; // 48 hours expiration 
}

// Load cart from cookie
C.LoadCartFromCookie = function() {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [name, value] = cookie.split("=");
        if (name === "cart") {
            CartData.items = JSON.parse(value);
            break;
        }
    }
}

C.ViewCart = function(){
    let cart = document.querySelector("#cart");
    if (cart) {
        cart.addEventListener("click", C.handler_clickOnViewCart);
    }
}

C.handler_clickOnViewCart = function(){
    let i = CartData.total();
    let html = CartView.render(CartData.items, i);
    let main = document.querySelector("#main");
    if (main) {
        main.innerHTML = html;
    }
    C.UpdateCart();
}

C.UpdateCart = function() {
    let cartContainer = document.querySelector("#cart-container");
    if (cartContainer) {
        cartContainer.addEventListener("click", C.handler_clickOnUpdateCart);
    }
}
C.handler_clickOnUpdateCart = async function(ev) {
    let id = ev.target.closest("section").id;
    id = Number(id);
    
    const updateCartView = () => {
        let i = CartData.total();
        let html = CartView.render(CartData.items, i);
        let main = document.querySelector("#main");
        if (main) {
            main.innerHTML = html;
        }
        C.UpdateCart(); // Reattach event listeners
        C.SaveCartToCookie(); // Save updated cart to cookie
    };
    
    console.log("Section ID:", id);
    if (ev.target.dataset.id === "add") {
        console.log("Adding item to cart:", id);
        CartData.add(id);
        // console.log("Current items:", CartData.items);
        updateCartView();
    } else if (ev.target.dataset.id === "remove") {
        console.log("Removing item from cart:", id);
        CartData.remove(id);
        // console.log("Current items:", CartData.items);
        updateCartView();
    } else if (ev.target.dataset.id === "delete") {
        console.log("Deleting item from cart:", id);
        CartData.delete(id);
        // console.log("Current items:", CartData.items);
        updateCartView();
    }
}

C.init();

window.CartData = CartData;