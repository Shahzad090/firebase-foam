
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
  import { getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAAShfP_BsstozyXIdG9ux4Oq66bBsQMwA",
    authDomain: "my-project-new-d59b6.firebaseapp.com",
    projectId: "my-project-new-d59b6",
    storageBucket: "my-project-new-d59b6.appspot.com",
    messagingSenderId: "692405590950",
    appId: "1:692405590950:web:da22fa0c420bddccfdcd67",
    measurementId: "G-T889WJRHTK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//  console.log(app);
  const analytics = getAnalytics(app);

  

  const auth = getAuth(app);
  // console.log(auth);


// const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is loged in===>")
  
    const uid = user.uid;
    // ...
  } else {
    console.log("user is not loged in===>")
    // ...
  }
});