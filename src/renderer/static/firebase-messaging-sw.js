
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.3/firebase-messaging.js')

var firebaseConfig = {
    apiKey: "AIzaSyB8SkhC3tLzTiBfBf1GQYDp4KvVuzna-Zk",
    authDomain: "staxave.firebaseapp.com",
    projectId: "staxave",
    storageBucket: "staxave.appspot.com",
    messagingSenderId: "110007352727",
    appId: "1:110007352727:web:9f71c8fadbb53a847598d2"
  }

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
// Initialize Firebase
if (!isSafari) {
  firebase.initializeApp(firebaseConfig)
    const messaging = firebase.messaging()
    messaging.onBackgroundMessage(function(payload) {
        // Customize notification here
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
          body: payload.notification.body,
          icon: '/icon.png'
        };
      
        self.registration.showNotification(notificationTitle,
          notificationOptions);
      });
}
