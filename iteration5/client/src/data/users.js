import {getRequest, postRequest} from '../lib/api-request.js';

let UsersData = {};

UsersData.connected = [
    {
        id: '',
        firstname: '',
        name: '',
        phone: '',
        mail: '',
    }
];

UsersData.fetchByMail = async function(mail) {
    let data = await getRequest('users?mail=' + mail);
    return data;
}

UsersData.signUp = async function(formdata) {
    let data = await postRequest('users/signup', formdata);
    return data;
}

UsersData.signIn = async function(formdata) {
    let data = await postRequest('users/signin', formdata);
    return data;
}

UsersData.saveMail = async function(mail) {
    UsersData.connected[0].mail = mail;
}
UsersData.saveConnected = async function(mail) {
    let userData = await UsersData.fetchByMail(mail);
    UsersData.connected[0].id = userData.id;
    UsersData.connected[0].firstname = userData.firstname;
    UsersData.connected[0].name = userData.name;
    UsersData.connected[0].phone = userData.phone;
    UsersData.connected[0].mail = mail;
}

UsersData.clearConnected = function() {
    UsersData.connected[0].id = '';
    UsersData.connected[0].firstname = '';
    UsersData.connected[0].name = '';
    UsersData.connected[0].phone = '';
    UsersData.connected[0].mail = '';
}

export {UsersData};



