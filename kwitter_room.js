var user = localStorage.getItem("username");
function welcomeUser(){
      var welcome_user = "Welcome, " + user + "!";
      document.getElementById("username").innerHTML = welcome_user;
}
welcomeUser();

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDa5veQodn8TDeEWV3cNIEgkQxe2UwOLdU",
      authDomain: "letschat-2afe3.firebaseapp.com",
      databaseURL: "https://letschat-2afe3-default-rtdb.firebaseio.com",
      projectId: "letschat-2afe3",
      storageBucket: "letschat-2afe3.appspot.com",
      messagingSenderId: "391089682617",
      appId: "1:391089682617:web:ea63c18886675e90704368"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      window.location = "index.html";
      localStorage.removeItem("username");
}

var room = document.getElementById("room_name").value;

function addRoom(){
      localStorage.setItem("current_room", room);
}