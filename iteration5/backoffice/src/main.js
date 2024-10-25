// Import data (M)

import { PromoData } from "./data/promo.js";


// Import UI (V)
import { BackofficeView } from "./ui/promo/index.js";


// import { productOption } from "./ui/productPage/productOption/index.js";

// The controller (C)

let C = {}

C.init = async function(){
    C.renderPromo();

    // C.reload();
};
// RENDER PROMO

C.renderPromo = async function(){
    let data = await PromoData.fetchAll();
    let html = BackofficeView.render(data);

    let main = document.querySelector("#main");
    main.innerHTML = html;
    C.Add();
    C.Remove();
}

// ADD PROMO

C.Add = async function() {
    let promoButton = document.querySelector("#addPromoButton");
    if (promoButton) {
        promoButton.addEventListener("click", C.handlerAddPromo);
    }
}

C.handlerAddPromo = async function(){
    let promo = document.querySelector("#addPromoForm");
    let form = new FormData(promo);
    await PromoData.add(form);
};

// REMOVE PROMO

C.Remove = async function() {
    let removePromo = document.querySelector("#deletePromoForm");
    removePromo.addEventListener("submit", C.handlerRemovePromo);
    };

C.handlerRemovePromo = async function(ev){
    // ev.preventDefault(); // Prevent the page from reloading
    let selectElement = document.querySelector("#deletePromoForm");
    // form.append("deletePromo", selectElement.value);
    let form = new FormData(selectElement);
    console.log(form);
    console.log(selectElement.value);
    let url = new URLSearchParams(form).toString();
    console.log("Promo to delete:", url);
    await PromoData.delete(url);
};

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
C.init(); // Initialise l'application