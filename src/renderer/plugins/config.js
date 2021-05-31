/* eslint-disable */
import axios from "axios";
import Vue from "vue";


var api = "https://quiet-anchorage-17876.herokuapp.com/users/";

if (process.env.NODE_ENV === 'development') {
    api = 'http://localhost:3980/users/'
}
// Live Server
export const API = api;
console.log(API);

Vue.prototype.$API = API;

export var blackAxios = axios.create({
  baseURL: API
});
Vue.prototype.$blackAxios = blackAxios;
