import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
        apiKey: "AIzaSyBQ-VZXr7QThMCwLbqvV_WGU7uxvAQwjjI",
        authDomain: "twitter-clone-899d8.firebaseapp.com",
        projectId: "twitter-clone-899d8",
        storageBucket: "twitter-clone-899d8.appspot.com",
        messagingSenderId: "1092805232377",
        appId: "1:1092805232377:web:b05b4b32221420d5660428"
  };


  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  export default db;