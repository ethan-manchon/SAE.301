import {getRequest, postRequest} from '../lib/api-request.js';

let OrdersData = {};

// OrdersData.connected = function() {

// }


OrdersData.fetch = async function(id) {
    let data = await getRequest('orders?id=' + id);
    return data;
}

OrdersData.fetchAll = async function() {
    let data = await getRequest('orders');
    return data;
}

OrdersData.add = async function(cart) {
    let data = await postRequest('orders/add', cart);
    return data;
}

export {OrdersData};



