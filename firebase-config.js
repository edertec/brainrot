// Substitua os valores abaixo pelo seu projeto Firebase
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    //@gmail.com
    // authDomain: "pizzabot-brainrot.firebaseapp.com",
    // databaseURL: "https://pizzabot-brainrot-default-rtdb.firebaseio.com",
    // projectId: "pizzabot-brainrot",
    // storageBucket: "pizzabot-brainrot.firebasestorage.app",
    // messagingSenderId: "460224642072",
    // appId: "1:460224642072:web:0195eb2fe221d67bacd76d"

    //@ucs.br
    authDomain: "cetec-teste.firebaseapp.com",
    databaseURL: "https://cetec-teste-default-rtdb.firebaseio.com",
    projectId: "cetec-teste",
    storageBucket: "cetec-teste.firebasestorage.app",
    messagingSenderId: "624122450938",
    appId: "1:624122450938:web:0377c090a94f708a61ca43"

};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
