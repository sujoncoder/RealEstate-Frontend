import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFyRVlGGuyH4xBt_6zUxUtgdF0SYpM3_g",
  authDomain: "mern-estate.firebaseapp.com",
  projectId: "mern-estate",
  storageBucket: "mern-estate.appspot.com",
  messagingSenderId: "1078482850952",
  appId: "1:1078482850952:web:28f19139ab77246602fb3d",
};

console.log(firebaseConfig.apiKey);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
