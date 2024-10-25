import {getRequest} from '../lib/api-request.js';
import {postRequest} from '../lib/api-request.js';
import {deleteRequest} from '../lib/api-request.js';

let PromoData = {};

PromoData.fetch = async function(id){
    let data = await getRequest('promo/' + id);
    return data;
}
PromoData.fetchAll = async function(){
    let data = await getRequest('promo');
    return data;
}

PromoData.add = async function(promo){
    let data = await postRequest('promo/add', promo);
    return data;
}

PromoData.delete = async function(promo){
    let data = await deleteRequest('promo/delete', promo);
    return data;
}


export { PromoData };



