import { ProductData } from "./data/product.js";
import { ProductView } from "./ui/product/index.js";
import { ProductView } from "./ui/navbar/index.js";
import { ProductView } from "./ui/footer/index.js";

// import './index.css'; Erreur

let C = {}

C.init = async function(){
    let data = await ProductData.fetchAll();
    let html = ProductView.render(data);
    let main = document.querySelector("#main");
    console.log(main);
    main.innerHTML = html;
}

// regarder
C.handler_clickOnfilter = function(ev){
    if(ev.target.tagName === "BUTTON"){
        let name = document.querySelector(ev.target.name).value;
        let data = ProductData.filterCategory(name);
        ProductView.render(data);
    }
}

C.init();