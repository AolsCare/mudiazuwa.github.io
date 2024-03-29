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
var arr, sect,lenth
window.onload=function() {
    get_database()
}
function get_category(category, view){
    var n=0
    var x=0
    document.getElementById("category_select"+view).style.backgroundColor="white"
    
    var body=document.getElementById("display")
    body.innerHTML=""
    do{
        var key= Object.keys(arr)[x]
  var value=arr[key]
  var searchitem= value["category"]
  console.log(searchitem)
        if(searchitem.toLowerCase().includes(category.toLowerCase())){
        n++
        if(n%3==1){
          sect=document.createElement("section")
        }
        const myURL= new URL(window.location.protocol+"//"+window.location.host+"/product.html")
        myURL.searchParams.append("product",value["code"])
        var anchr=document.createElement("a")
        anchr.href=myURL
        var view=document.createElement("div")
       anchr.classList.add("items_view")
        view.setAttribute('id', n)
        var image=document.createElement("img")
        image.classList.add("items_image")
        image.src=value["url0"]
        view.appendChild(image)
       var name=document.createElement("p")
       name.classList.add("item_name")
       name.innerHTML=value["name"]
       view.appendChild(name)
       var price=document.createElement("p")
       price.classList.add("item_price")
       price.innerHTML="₦"+value["price"]
       price.setAttribute('style', 'color:#FF9800')
       view.appendChild(price)
       anchr.appendChild(view)
       sect.append(anchr)
       body.append(sect)
    }
    x++
      }while(x<=lenth) 
   
}

function get_database(){
    const dbref=ref(db);
    get(child(dbref,"upload/")).then((snapshot)=>{
      if(snapshot.exists()){
        document.getElementById("loader").setAttribute("style", "display:none")
        arr = snapshot.val()
        lenth=Object.keys(arr).length
        lenth--
      get_category("phone accessories", 1)
       }
    })
    .catch((error)=>{
     get_database()
    })
}


  document.getElementById("category_view1").onclick=function() {
    get_category("phone accessories", 1)
  }
  document.getElementById("category_view2").onclick=function() {
    get_category("clothing", 2)
  }
  document.getElementById("category_view3").onclick=function() {
    get_category("perfume & oil", 3)
  }
  document.getElementById("category_view4").onclick=function() {
    get_category("shoes", 4)
  }
  document.getElementById("category_view5").onclick=function() {
    get_category("apartments", 5)
  }