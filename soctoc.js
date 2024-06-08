// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBueIf7XYXjHZ6jJNBJ27RG6DzF9L6GWhU",
    authDomain: "codeghost-1.firebaseapp.com",
    projectId: "codeghost-1",
    storageBucket: "codeghost-1.appspot.com",
    messagingSenderId: "42662496755",
    appId: "1:42662496755:web:eb8a3905c4a843c0cbea86"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  user_name = document.getElementById("user_name").value;
  localStorage.setItem("user_name", user_name);
  window.location = "soctoc_room.html"
}

function checked() {
    document.getElementById("user_name").style.opacity = "0.5";
    document.getElementById("pwd").style.opacity = "0.5";
    document.getElementById("login_button").style.opacity = "1";
}