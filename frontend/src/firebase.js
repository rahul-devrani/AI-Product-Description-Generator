import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSZ8XDCeUQn8IvYA3EOJSb8M0oFtuuLn0",
  authDomain: "prodescription-ai.firebaseapp.com",
  projectId: "prodescription-ai",
  storageBucket: "prodescription-ai.firebasestorage.app",
  messagingSenderId: "409082890117",
  appId: "1:409082890117:web:338b07242f4684535466ec"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);