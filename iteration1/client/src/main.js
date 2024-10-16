import { ProductData } from "./data/product.js";
import { ProductView } from "./ui/product/index.js";

// import './index.css'; Erreur

let C = {}

C.init = async function(){
    let data = await ProductData.fetchAll();
    let html = ProductView.render(data);
    let main = document.querySelector("#main");
    console.log(main);
    main.innerHTML = html;
}

C.init();