import {getRequest} from '../lib/api-request.js';

let PromoData = {};

PromoData.fetchAll = async function(){
    let data = await getRequest('promo');
    return data;
}


export {PromoData};



