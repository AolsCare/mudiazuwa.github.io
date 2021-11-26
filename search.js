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
    var params=new URLSearchParams(window.location.search)
    var searchitem=params.get("search")
    document.getElementById("div2").value= searchitem
    const dbref=ref(db);
    get(child(dbref,"upload/")).then((snapshot)=>{
      if(snapshot.exists()){
        var arr = snapshot.val()
        var numb=  snapshot.val()
      var lenth=Object.keys(numb).length
      var x= lenth-1
      var evnt=1
      do{
        var key= Object.keys(arr)[x]
        var value=arr[key]
        var searchvalue=value["name"]
        if(searchvalue.toLowerCase().includes(searchitem.toLowerCase())){
            
            var view=document.createElement("div")
            view.classList.add("item_view")
            var image=document.createElement("img")
            image.classList.add("item_image")
            image.src=value["url0"]
            view.appendChild(image)
            var detail=document.createElement("div")
            detail.classList.add("item_detail")
            var text=document.createElement("p")
            text.classList.add("item_name")
            text.innerHTML=value["name"]
            detail.appendChild(text)
            var price=document.createElement("p")
            price.classList.add("item_price")
            price.innerHTML="₦"+value["price"]
            detail.appendChild(price)
            view.appendChild(detail)
           view.setAttribute('id', evnt)
        var listview=document.getElementById("list")
        listview.appendChild(view)
        load(evnt, value["code"])
        evnt++
      }
        x--
      }while(x>=0)
    }
    })
}
function sear(){
  var searchitem=document.getElementById("div2").value
  const myURL= new URL(window.location.protocol+"//"+window.location.host+"/search.html")
  myURL.searchParams.append("search",searchitem)
  window.location=myURL
}

 
  function load(view, code){
    document.getElementById(view).onclick=function() {
      const myURL= new URL(window.location.protocol+"//"+window.location.host+"/product.html")
      myURL.searchParams.append("product",code)
      window.location=myURL;
    }
  }
document.getElementById("div2").addEventListener('search', sear)
