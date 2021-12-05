import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1eIsNv6jgME94d8ptQT45JxCk2HswuyY",
  authDomain: "project-109e2.firebaseapp.com",
  databaseURL: "https://project-109e2.firebaseio.com",
  projectId: "project-109e2",
  storageBucket: "project-109e2.appspot.com",
  messagingSenderId: "994321863318",
  appId: "1:994321863318:web:10d3b180f8ff995d9ba8b7",
  measurementId: "G-Y83PD3D9Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import{getDatabase, ref, set, get, child, update, remove}
  from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";
import { getAuth,signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
const db= getDatabase();
var  email, password;

document.getElementById("submit").onclick=function(){
   Ready()
   document.getElementById("loader").setAttribute("style", "display:block");
if(email!==""&&password!==""){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        set_info()
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}
}
function Ready(){
    email= document.getElementById("email").value;
    password= document.getElementById("password").value;
}
function set_info(){
    get(child(dbref,"user/")).then((snapshot)=>{
        if(snapshot.exists()){
            var arr = snapshot.val()
            var numb=  snapshot.val()
          var lenth=Object.keys(numb).length
          var x= lenth-1
          var evnt=1
          do{
            var key= Object.keys(arr)[x]
            var value=arr[key]
            var searchvalue=value["email"]
            if(email===searchvalue){
         var info= new Object
          info={
            user: value["code"],
            email:value["email"],
            first:value["first"],
            name:value["first"]+" "+value["second"],
            hostel:value["hostel"],
            gender:value["gender"],
            phone:value["phone"],
            login: "yes",
            key: value["key"]
          }
          localStorage.setItem("details", JSON.stringify(info) )
          window.location="index.html"
        }
        x--
        }while(x>=0)
        }
      })
  
}