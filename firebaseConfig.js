import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCBSU6XvZqGpgX3CrTih_bKV2alEQE3iYM",
  authDomain: "free-game-webapp.firebaseapp.com",
  databaseURL: "https://free-game-webapp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "free-game-webapp",
  storageBucket: "free-game-webapp.appspot.com",
  messagingSenderId: "547444412806",
  appId: "1:547444412806:web:9c95778e1d211f35addc07",
  measurementId: "G-TV4YZKMCKN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);