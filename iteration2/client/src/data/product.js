import {getRequest} from '../lib/api-request.js';


let ProductData = {};

ProductData.fetch = async function(id){
    let data = await getRequest('product/'+id);
    return data;
    // return data==false ? fakeProducts.pop() : [data];
}

ProductData.fetchAll = async function(){
    let data = await getRequest('product');
    return data;
    // return data==false ? fakeProducts : data;
}
ProductData.fetchAllByCategory = async function(category){
    let data = await getRequest('product?category='+category);
    return data;
    // return data==false ? fakeProducts : data;
}


// // regarder
// ProductData.filterCategory = async function(category){
//     return ProductData.filter(product => product.category === category);
// }

export {ProductData};


