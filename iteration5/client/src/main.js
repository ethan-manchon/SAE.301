// Importation des données (M)
import { ProductData } from "./data/product.js";
import { CartData } from "./data/cartData.js";
import { UsersData } from "./data/users.js";
import { PromoData } from "./data/promo.js";
import { OrdersData } from "./data/orders.js";

// Importation de l'UI (V)
import { ProductView } from "./ui/product/index.js";
import { NavView } from "./ui/navbar/index.js";
// import { NavLogView } from "./ui/navbarLogIn/index.js";
import { ProductpageView } from "./ui/productPage/index.js"; 
import { FooterView } from "./ui/footer/index.js";
import { HeadBackView } from "./ui/headerBackground/index.js";
import { CartView } from "./ui/cart/index.js";
import { LogView } from "./ui/log/index.js";
import { LogInView } from "./ui/logIn/index.js";
import { LogUpView } from "./ui/logUp/index.js";
import { OrderView } from "./ui/orderValidate/index.js";

// Le contrôleur (C)
let C = {}

C.init = async function(){
    C.NavBar();
    C.Home();
    C.Footer();
    C.Header();
    C.categFiltrer();
    C.ProductSelect();
    C.ViewCart();
    C.LoadCartFromLocalStorage();
    C.ValidateCart();
    C.useAccount();
}

// Affichage de tous les produits
C.AllProduct = async function(){
    let data = await ProductData.fetchAll();
    document.querySelector("#main").innerHTML = ProductView.render(data);
}

// Affichage de la barre de navigation
C.NavBar = async function(){ 
    let navbar = document.querySelector("#navbar");

    if (UsersData.connected[0].id !== "") {
        navbar.innerHTML = NavView.render(UsersData.connected[0]);
        C.logout();
    } else {
        navbar.innerHTML = NavView.render(null);
    }
}

// Affichage de la page d'accueil
C.Home = async function(){
    document.querySelector("#Logo").addEventListener("click", C.Header);
}

// Affichage du footer
C.Footer = async function(){
    document.querySelector("#footer").innerHTML = FooterView.render();
}

// Affichage de la vidéo du header
C.Header = async function(){
    document.querySelector("#main").innerHTML = HeadBackView.render();
}   

// Filtrage par catégorie
C.categFiltrer = function(){
    document.querySelector("#nav").addEventListener("click", C.handler_clickOnCategory);
}

C.handler_clickOnCategory = async function(ev){
    if(ev.target.dataset.id == "category"){
        let id = ev.target.id;
        let data = await ProductData.fetchAllByCategory(id);
        document.querySelector("#main").innerHTML = ProductView.render(data);
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
        C.OptionChange();
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

// Ajout au panier
C.AddToCart = function(){
    document.querySelector("#main").addEventListener("click", C.handler_clickOnAddToCart);
}

C.handler_clickOnAddToCart = async function(ev){
    if(ev.target.dataset.id == "addToCart"){
        let id = ev.target.closest('section').dataset.id;
        let value = document.querySelector("#select").value;
        let product = await ProductData.fetch(id);
        let i = product.options.findIndex(option => option.value === value);
        CartData.new({id: product.options[i].id, name: product.name, url: product.options[i].url, option: value, price: product.price, quantity: 1 });
        C.SaveCartToLocalStorage();
    }
}

// Sauvegarder le panier dans le local storage
C.SaveCartToLocalStorage = function() {
    localStorage.setItem("cart", JSON.stringify(CartData.items));
}

// Charger le panier depuis le local storage
C.LoadCartFromLocalStorage = function() {
    let cart = localStorage.getItem("cart");
    if (cart) {
        CartData.items = JSON.parse(cart);
    }
}

// Afficher le panier
C.ViewCart = function(){
    document.querySelector("#cart").addEventListener("click", C.handler_clickOnViewCart);
}

C.handler_clickOnViewCart = async function(){
    let i = await C.renderPrice();
    document.querySelector("#main").innerHTML = CartView.render(CartData.items, i);
    C.UpdateCart();
    C.attachPromoListener();
}

// Mettre à jour le panier
C.UpdateCart = function() {
    let cartContainer = document.querySelector("#cart-container");
    if (cartContainer) {
        cartContainer.addEventListener("click", C.handler_clickOnUpdateCart);
    }
}

C.handler_clickOnUpdateCart = async function(ev) {
    let id = Number(ev.target.closest("section").id);
    const updateCartView = async () => {
        let i = await C.renderPrice();
        document.querySelector("#main").innerHTML = CartView.render(CartData.items, i);
        C.UpdateCart();
        C.SaveCartToLocalStorage();
    };
    if (ev.target.dataset.id === "add") {
        CartData.add(id);
        updateCartView();
    } else if (ev.target.dataset.id === "remove") {
        CartData.remove(id);
        updateCartView();
    } else if (ev.target.dataset.id === "delete") {
        CartData.delete(id);
        updateCartView();
    }
}

// Appliquer le code promo
C.renderPrice = async function(ev) {
    if (ev) {
        ev.preventDefault();
        let formData = new FormData(ev.target);
        let promo = formData.get("promo");
        let promoData = await PromoData.fetchAll();
        if (promo) {
            for (let obj of promoData) {
                if (promo === obj.name) {
                    let total = CartData.total();
                    let discount = total * (obj.discount / 100);
                    let discountedTotal = total - discount;
                    document.querySelector("#main").innerHTML = CartView.render(CartData.items, discountedTotal);
                    C.UpdateCart();
                    C.attachPromoListener();
                    localStorage.setItem("total", JSON.stringify(discountedTotal));
                    return;
                }
            }
        }
    }
    localStorage.setItem("total", JSON.stringify(CartData.total()));
    return CartData.total();
}

C.attachPromoListener = function() {
    document.querySelector("#addPromo").addEventListener("submit", C.renderPrice);
}

// Validation du panier
C.ValidateCart = function(){
    document.querySelector("body").addEventListener("click", C.handler_clickOnValidateCart);
}

C.handler_clickOnValidateCart = async function(ev){
    if(ev.target.dataset.id == "validateCart"){
        if (CartData.items.length > 0) {
            if (UsersData.connected[0].id) {
                C.handler_checkOut();
            } else {
                alert("Vous devez être connecté pour valider votre commande");
                C.connection();
            }
        } else {
            alert("Panier vide");
        }
    }
}

C.handler_checkOut = function(){
    document.querySelector("#main").innerHTML = OrderView.render();
    let data = new FormData();
    data.append("cart", JSON.stringify(CartData.items));
    data.append("total", localStorage.getItem("total"));
    OrdersData.add(data);
    CartData.clear();
    localStorage.removeItem("cart");
}

// Gestion d'un compte
C.useAccount = function(){
    document.querySelector("#account").addEventListener("click", C.connection);
}

C.connection = function(){
    document.querySelector("#main").innerHTML = LogView.render();
    document.querySelector("#connection").addEventListener("submit", C.handler_sortUser);
}

C.handler_sortUser = async function(ev){
    ev.preventDefault();

    let formData = new FormData(ev.target);
    let mail = formData.get("mail");
    if (!mail) {
        alert("Email est requis");
        return;
    }
    UsersData.saveMail(mail);
    let user = await UsersData.fetchByMail(mail);
    document.querySelector("#main").innerHTML = user ? LogInView.render() : LogUpView.render();
    user ? C.uselogIn() : C.useLogUp();
}
C.uselogIn = function(){
    document.querySelector("#login").addEventListener("submit", C.handler_SignIn);
}

C.handler_SignIn = async function(ev){
    ev.preventDefault();
    let formData = new FormData(document.querySelector("#login"));
    formData.append("mail", UsersData.connected[0].mail);
    let user = await UsersData.signIn(formData);
    if (user) {
        await UsersData.saveConnected(UsersData.connected[0].mail);
        C.init();
    } else {
        alert("Erreur, veuillez réessayer");
    }
}

C.useLogUp = function(){
    document.querySelector("#register").addEventListener("submit", C.handler_SignUp);
}

C.handler_SignUp = async function(ev){
    ev.preventDefault();
    let formData = new FormData(document.querySelector("#register"));
    formData.append("mail", UsersData.connected[0].mail);
    let user = await UsersData.signUp(formData);
    console.log(user);
    if (user) {
        await UsersData.saveConnected(UsersData.connected[0].mail);
        C.init();
    } else {
        alert("Erreur, veuillez réessayer");
    }
}

C.logout = function(){
    document.querySelector("#logout").addEventListener("click", C.handler_logout);
}

C.handler_logout = function(){
    UsersData.clearConnected();
    C.init();
}

C.init(); // Initialise l'application
