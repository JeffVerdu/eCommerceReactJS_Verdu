import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAAALb9uev2ArQDVCiKb0MAf9tc7gVc6Xk",
  authDomain: "coderhouse-reactjs-verdu.firebaseapp.com",
  projectId: "coderhouse-reactjs-verdu",
  storageBucket: "coderhouse-reactjs-verdu.appspot.com",
  messagingSenderId: "170826427154",
  appId: "1:170826427154:web:758568df1358861d4361cb",
  measurementId: "G-Y9VPVWGHBP",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
