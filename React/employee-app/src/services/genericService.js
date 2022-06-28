import axios from 'axios';

export function get(action, success, failed) {
  return axios.get(`${action}`, {
    params: {},
  }).then(data => success(data))
    .catch(error => failed(error))
}

export function post(action, params, success, failed) {
  return axios.post(`${action}`, { ...params })
    .then(data => success(data))
    .catch(error => failed(error))
}

export function deleteCall(action, id, success, failed) {
  return axios.delete(`${action}`, {...id})
    .then(data => success(data))
    .catch(error => failed(error))
    // TODO: investigate why axios.delete consider 204 as failed delete response? 
}