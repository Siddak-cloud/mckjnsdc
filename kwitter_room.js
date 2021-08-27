var firebaseConfig = {
      apiKey: "AIzaSyAdUQCFZeCbfE8iq2daKujUnk-dU1J5Wlo",
      authDomain: "classtest-bd097.firebaseapp.com",
      databaseURL: "https://classtest-bd097-default-rtdb.firebaseio.com",
      projectId: "classtest-bd097",
      storageBucket: "classtest-bd097.appspot.com",
      messagingSenderId: "404099269592",
      appId: "1:404099269592:web:e459ab009c8d97e97e28ad",
      measurementId: "G-NCV5TGCYXT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+ Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose : "adding room name"
      });
      localStorage.getItem("room_name", room_name);

      window.location = "kwitter_page.html"
}
function redirectToRoomName(name) {
console.log(name)
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html"
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}