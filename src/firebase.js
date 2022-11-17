import { initializeApp } from 'firebase/app';
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore} from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {

    apiKey: "AIzaSyDHb3ndosnCvpy0C3kKYCMGHDvuS70IDf4",
  
    authDomain: "diseny-clone-597c5.firebaseapp.com",
  
    projectId: "diseny-clone-597c5",
  
    storageBucket: "diseny-clone-597c5.appspot.com",
  
    messagingSenderId: "905254786463",
  
    appId: "1:905254786463:web:e542b425193f3df2a999aa",
  
    measurementId: "G-8XP7N2F0JG"
  
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app)
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const storage = getStorage();
  
  export {auth, storage, provider ,analytics};
  export default db;