function logout() {
    window.location="index.html"
}

var user_name = localStorage.getItem("user_name");
console.log(localStorage.getItem("user_name"));
document.getElementById("wlcm-h1").innerHTML='Welcome to SocToc, '+user_name;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBueIf7XYXjHZ6jJNBJ27RG6DzF9L6GWhU",
    authDomain: "codeghost-1.firebaseapp.com",
    databaseURL: "https://codeghost-1-default-rtdb.firebaseio.com",
    projectId: "codeghost-1",
    storageBucket: "codeghost-1.appspot.com",
    messagingSenderId: "42662496755",
    appId: "1:42662496755:web:eb8a3905c4a843c0cbea86"
  };
firebase.initializeApp(firebaseConfig);

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "Adding the Roomname"
  });
  localStorage.setItem("room_name", room_name)
  window.location="soctoc_page.html";
};