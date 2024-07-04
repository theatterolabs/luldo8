
// firebase-analytics.js
var firebaseConfig = {
    apiKey: "AIzaSyC8XhK8w9Av4lJgRdPPPsbdU_ABZtJMnuk",
    authDomain: "zupee-ludo-fb76f.firebaseapp.com",
    projectId: "zupee-ludo-fb76f",
    storageBucket: "zupee-ludo-fb76f.appspot.com",
    messagingSenderId: "968838583328",
    appId: "1:968838583328:web:2ef9975c9449b67150d845",
    measurementId: "G-0NJG8J61L2"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function logEvent(eventName, eventParams) {
    firebase.analytics().logEvent(eventName, eventParams);
}
