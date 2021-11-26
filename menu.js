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

const db= getDatabase();

function item(){
    window.location="product.html"
}
 function sear(){
  var searchitem=document.getElementById("div2").value
  const myURL= new URL(window.location.protocol+"//"+window.location.host+"/search.html")
  myURL.searchParams.append("search",searchitem)
  window.location=myURL
}

var x;

function sett(n){
  
  const dbref=ref(db);
  get(child(dbref,"upload/")).then((snapshot)=>{
    if(snapshot.exists()){
      var arr = snapshot.val()
    var lenth=Object.keys(arr).length
    lenth--
    x= Math.floor(Math.random()*lenth)+0
    var key= Object.keys(arr)[x]
    var value=arr[key]
    document.getElementById("name"+n).innerHTML=value["name"]
    document.getElementById("price"+n).innerHTML="₦"+value["price"]
    document.getElementById("img"+n).src=value["url0"]
  }
  })
}
document.getElementById("div2").addEventListener('search', sear);
window.onload=function(){
  var i=0;
  do{
    var p=i
    i++
    sett(i)
  }while(i<=3) 
 }
