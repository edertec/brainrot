// Substitua os valores abaixo pelo seu projeto Firebase
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "pizzabot-brainrot.firebaseapp.com",
    databaseURL: "https://pizzabot-brainrot-default-rtdb.firebaseio.com",
    projectId: "pizzabot-brainrot",
    storageBucket: "pizzabot-brainrot.appspot.app",
    messagingSenderId: "460224642072",
    appId: "1:460224642072:web:0195eb2fe221d67bacd76d"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
