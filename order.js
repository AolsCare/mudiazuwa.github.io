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
var newcart_item=new Array;
var cart_list=new Array
var order_details= new Object
   
var  length,num, amount, item_name,item_price,item_image,item_num, cn, item_code, key, cart_number;
var price=0


var details=JSON.parse( localStorage.getItem("details"))
cart_list=JSON.parse(localStorage.getItem("cart"))

window.onload=function(){
  if(cart_list===null||cart_list.length===0){
    window.location="cart.html"
   }else{
    if(details===null){
      window.location="signin.html"
     }else{
     
      get_values()
     }
      
   }
       
}
function get_values(){
  document.getElementById("body").style.display = "none"; 
  document.getElementById("loader").style.display = "block"; 
  const dbref=ref(db);
  get(child(dbref,"upload/")).then((snapshot)=>{
    if(snapshot.exists()){
      document.getElementById("loader").style.display = "none"; 
      document.getElementById("body").style.display = "block"; 
      length=cart_list.length-1
      var evet=1
      newcart_item=JSON.parse(localStorage.getItem("cart"))
    do{
      var arr = snapshot.val()
      var numb=  snapshot.val()
    var lenth=Object.keys(numb).length
    var x= 0
    do{
      var cartcode= cart_list[length]["code"]
      var key= Object.keys(arr)[x]
      var value=arr[key]
      var searchvalue=value["code"]
      if(cartcode===searchvalue){
          item_num=cart_list[length]["number"]
          item_price=value["price"]
         price+=parseInt(item_price)*parseInt(item_num)
          
          cn=length
          
      }
     x++
    }while(x<lenth)
    length--
  }while(length>=0)
    }
    amount=price+100
    document.getElementById("subtotal").innerHTML="₦"+price
    document.getElementById("name").innerHTML=details["name"]
    document.getElementById("phone").innerHTML=details["phone"]
    document.getElementById("hostel").innerHTML=details["hostel"]
    document.getElementById("total").innerHTML="₦"+amount
  sessionStorage.setItem("amount", amount)
  })
 .catch((error)=>get_values())
}

function upload_orderadmin(){
  num= Math.floor(Math.random()*3999999)+1
  getadmin_value()
 }
function getadmin_value(){
  const dbref=ref(db);
  get(child(dbref,"adminorder/")).then((snapshot)=>{
    if(snapshot.exists()){
      var avail=0
      var arr = snapshot.val()
      var numb=  snapshot.val()
    var lenth=Object.keys(numb).length
    var x= 0
    do{
      var key= Object.keys(arr)[x]
      var value=arr[key]
      var searchvalue=value["order"]
      if(num===searchvalue){
          avail=1
      }
     x++
    }while(x<lenth)
    if(avail===0){
      var cart_length=cart_list.length
      var date= new Date()
      var month=parseInt(date.getMonth())+1
      var date_time=date.getHours()+":"+date.getMinutes()+", "+date.getDate()+"/"+month+"/"+date.getFullYear()
      order_details={
      name:details["name"],
      hostel:details["hostel"],
      user:details["user"],
      phone:details["phone"],
      order:num,
      status:"Confirming Payment",
      total:amount,
      num:cart_length,
      date:date_time
    }
    for(let i=1;i<=cart_length; i++ ){
      var position=i-1
      order_details['code'+i]=cart_list[position]["code"]
      order_details['num'+i]=cart_list[position]["number"]
    }
    uploadadmin_value()
    }else{
      upload_orderadmin
    }
    }
  })
  .catch((error)=>getadmin_value())
function uploadadmin_value(){
  set(ref(db, 'adminorder/'+num),order_details)
  .then(()=>{
    localStorage.removeItem("cart");
    window.location="index.html"
  })
  .catch((error)=>uploadadmin_value()) 
}
}
export {upload_orderadmin};
