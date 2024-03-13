// firebase.ts

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyBpAI9R005P7QELe3SCSGVzGVZ2VAtZ2lc",
    authDomain: "farmapp-74be0.firebaseapp.com",
    projectId: "farmapp-74be0",
    storageBucket: "farmapp-74be0.appspot.com",
    messagingSenderId: "202153248239",
    appId: "1:202153248239:web:42509c5f3d4b4e5a02221a"
};


const app = initializeApp(firebaseConfig);


const firestore = getFirestore(app);

export { firestore }; 






   
    
