//YOUR FIREBASE LINKS

//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC3mfiQtQmDy3nKVpnrKA9_iNHTnHSB8-8",
      authDomain: "kwitterapp-2fbe2.firebaseapp.com",
      databaseURL: "https://kwitterapp-2fbe2-default-rtdb.firebaseio.com",
      projectId: "kwitterapp-2fbe2",
      storageBucket: "kwitterapp-2fbe2.appspot.com",
      messagingSenderId: "234864500142",
      appId: "1:234864500142:web:25e5ea4bc30f4aeb303c3f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var user_name=localStorage.getItem("user_name");
    var room_name=localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
