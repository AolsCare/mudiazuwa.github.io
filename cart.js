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
var cart_item=new Array;
const db= getDatabase();

var cart_list=new Array
var length, item_name,item_price,item_image,item_num
window.onload=function(){
cart_list=localStorage.getItem("cart")
length=cart_list.length
var evet=1
if(cart_list!==null){
do{
    const dbref=ref(db);
    get(child(dbref,"upload/")).then((snapshot)=>{
      if(snapshot.exists()){
        var arr = snapshot.val()
        var numb=  snapshot.val()
      var lenth=Object.keys(numb).length
      var x= lenth-1
      var cartcode= cart_list[length]["code"]
      do{
        var key= Object.keys(arr)[x]
        var value=arr[key]
        var searchvalue=value["code"]
        if(cartcode===searchvalue){
            item_num=cart_list[length]["number"]
            item_price=value["price"]
            item_name=value["name"]
            item_image=value["url0"]
           var item_code=value["code"]
            createlist(evet, item_code)
            evet++
        }
       x--
      }while(x>=0)
      }
    })
    length--
}while(length>=0)
}
    
    
}
function createlist(num, code){
    var cart=document.getElementById("cart")
    var image=document.createElement("img")
    var view= document.createElement("div")
   var name=document.createElement("p")
   var price=document.createElement("p")
   var add= document.createElement("img")
   var minus=document.createElement("img")
   var remove_img= document.createElement("img")
  var cart_num=document.createElement("p")
  var remove_text=document.createElement("p")
  var remove= document.createElement("div")
  var controls= document.createElement("div")
   
    view.classList.add("cart-view"+num)
    view.setAttribute("id", "cart-view")
    image.classList.add("item-image")
    name.classList.add("item-name")
    price.classList.add("item-price")
    controls.classList.add("controls")
    remove.setAttribute("id", "remove"+num)
    controls.classList.add("flex")
    remove.classList.add("remove")
    add.setAttribute("id", "add"+num)
    minus.setAttribute("id", "minus"+num)
    cart_num.setAttribute("id","cartnum"+num)

    remove_text.innerHTML="Remove"
    remove_img.src="images/ic_delete_black.png"
    add.src="images/ic_add_circle_black.png"
    minus.src="images/ic_remove_circle_black.png"
    image.src=item_image
    name.innerHTML=item_name
    price.innerHTML=item_price
    cart_num.innerHTML=item_num


    var flex= document.createElement("div")
    var div= document.createElement("div")
    flex.classList.add("flex")
    div.appendChild(name)
    div.appendChild(price)
    flex.appendChild(image)
    flex.appendChild(div)
    view.appendChild(flex)

    var flex= document.createElement("div")
    flex.classList.add("flex")
    remove.appendChild(remove_img)
    remove.appendChild(remove_text)
    controls.appendChild(remove)
    controls.appendChild(flex)
    controls.appendChild(minus)
    controls.appendChild(cart_num)
    controls.appendChild(add)
    view.appendChild(controls)

    cart.appendChild(view)
    add("add"+num, "cartnum"+num, code)
    minus("minus"+num, "cartnum"+num, code)
    remove("remove"+num,code)
}