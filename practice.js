// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA7x1mj84a9qrjy2jdnaOSqGOqMu4Qx_nk",
    authDomain: "c94-student-activity.firebaseapp.com",
    databaseURL: "https://c94-student-activity-default-rtdb.firebaseio.com",
    projectId: "c94-student-activity",
    storageBucket: "c94-student-activity.appspot.com",
    messagingSenderId: "115852012045",
    appId: "1:115852012045:web:04e2860fc03c8120140344"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
  username = document.getElementById("username").value;
  firebase.database().ref("/").child(username).update({
    purpose:"adding user"
  });
}