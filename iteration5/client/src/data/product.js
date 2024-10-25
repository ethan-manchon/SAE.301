import {getRequest} from '../lib/api-request.js';

let ProductData = {};

ProductData.fetch = async function(id){
    let data = await getRequest('product/'+id);
    return data;
}

ProductData.fetchAll = async function(){
    let data = await getRequest('product');
    return data;
}

ProductData.fetchAllByCategory = async function(category){
    let data = await getRequest('product?category='+category);
    return data;
}

export {ProductData};



