import Vue from 'vue'
import apis from '~/apis';
import { blackAxios } from "./config";
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/messaging";
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
Vue.prototype.$safari = isSafari;

var firebaseConfig = {
    apiKey: "AIzaSyB8SkhC3tLzTiBfBf1GQYDp4KvVuzna-Zk",
    authDomain: "staxave.firebaseapp.com",
    projectId: "staxave",
    storageBucket: "staxave.appspot.com",
    messagingSenderId: "110007352727",
    appId: "1:110007352727:web:9f71c8fadbb53a847598d2"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default (ctx, inject) => {
    let apiList = {}
    for (const key in apis) {
        apiList[key] = apis[key].default(blackAxios)
  }
    inject('api', apiList);
    inject('firebase', firebase)
};
