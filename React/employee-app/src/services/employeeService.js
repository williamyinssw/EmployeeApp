import {deleteCall, get, post} from './genericService';

export function getEmployeeList (success, failed) {
    console.log("getting...");
    return get("https://localhost:7026/api/Employees", success, failed);    
}

export function addEmployee(params, success, failed) {
    // console.log(params);
    return post('https://localhost:7026/api/Employees', params, success, failed)
}

export function removeEmployee(id, success, failed) {
    debugger;
    console.log("id");   
    console.log(id);   
    return deleteCall('https://localhost:7026/api/Employees/'+ id , success, failed);
}

export function updateEmployee(params, success, failed) {

    return post('/api/xxx', params, success, failed)
}