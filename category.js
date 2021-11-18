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
window.onload=function(){
  var searchitem= sessionStorage.getItem("loaditem")
  const dbref=ref(db);
  get(child(dbref,"upload/")).then((snapshot)=>{
    if(snapshot.exists()){
      var arr = snapshot.val()
      var numb=  snapshot.val()
    var lenth=Object.keys(numb).length
    var x= lenth-1
    
    do{
      var key= Object.keys(arr)[x]
      var value=arr[key]
      var searchvalue=value["code"]
      if(searchvalue===searchitem){
          document.getElementById("item_name").innerHTML=value["name"]
          document.getElementById("item_price").innerHTML="₦"+value["price"]
          document.getElementById("item_description").innerHTML=value["description"]
          document.getElementById("1").src=value["url0"]
          var urln=1
          var urlx=value["num"]
          do{
            var cont= document.createElement("div")
            cont.classList.add("container")
            var slide=document.createElement("div")
            slide.classList.add("showSlide")
            var main=document.getElementById("slidercontainer")
            var image= document.createElement("img")
            image.classList.add("item_images")
            image.src=value["url"+urln]
            cont.appendChild(image)
            slide.appendChild(cont)
            main.appendChild(slide)
            urln++
          }while(urln>urlx)
    }
      x--
    }while(x>=0)
  }
  })
}