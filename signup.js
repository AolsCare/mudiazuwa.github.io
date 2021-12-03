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
var first, last, hostel, email, password, gender, hostel, phone;
document.getElementById("submit").onclick=function(){
   Ready()
   if(first!==null&&last!==null&&email!==null&&password!==null&&phone!==null&&gender!==null&&hostel!==null){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        InsertData(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
    }

}
function Ready(){
    first= document.getElementById("first").value;
    last= document.getElementById("last").value;
   email= document.getElementById("email").value;
   password= document.getElementById("password").value;
   phone= document.getElementById("phone").value;
  gender= document.getElementById("gender").value;
  hostel= document.getElementById("hostel").value;
}
function InsertData(user){
          Ready();
          const dbref=ref(db);
          get(child(dbref,"user/")).then((snapshot)=>{
            if(snapshot.exists()){
                var arr = snapshot.val()
                var numb=  snapshot.val()
              var lenth=Object.keys(numb).length
             if(lenth>0){ 
                var x= lenth-1
            var key= Object.keys(arr)[x]
            var value=arr[key]
            var code=value["code"]+1
            }else{
                var code=100001
            }
           
              set(ref(db, 'user/'+user),{
                  code:code,
                  first: first,
                  second: last,
                  email:email,
                  hostel: hostel,
                  gender: gender,
                  phone:`+234$[phone]`
              })
            }
          })
         
}

