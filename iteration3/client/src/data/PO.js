import {getRequest} from '../lib/api-request.js';


let POData = {};

POData.fetch = async function(id){
    let data = await getRequest('PO/'+id);
    return data;
}

POData.fetchAll = async function(){
    let data = await getRequest('PO');
    return data;
}
POData.fetchAllByIdProduct = async function(id){
    let data = await getRequest('PO?product_id='+id); 
    return data;
}
export {POData};


