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
var add=document.getElementById("plus-box")
var minus=document.getElementById("minus-box")
var cart =document.getElementById("add-box")
var avail="no"
var cart_num;
var item_code;
window.onload=function(){
  var searchitem= sessionStorage.getItem("loaditem")
   get_cart(searchitem)
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
          item_code=value["code"]
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
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;                                                        

function handleTouchStart(evt) {                                         
    xDown = evt.originalEvent.touches[0].clientX;                                      
    yDown = evt.originalEvent.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.originalEvent.touches[0].clientX;                                    
    var yUp = evt.originalEvent.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            displaySlides(slide_index += 1);
        } else {
            /* right swipe */
            displaySlides(slide_index +=-1);
        }                       
    } 
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
var slide_index = 1;  
displaySlides(slide_index);  


function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  

function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("showSlide");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";  
}  

var pos;
function sett(n){
  
    const dbref=ref(db);
    get(child(dbref,"upload/")).then((snapshot)=>{
      if(snapshot.exists()){
        var arr = snapshot.val()
      var lenth=Object.keys(arr).length
      lenth--
      pos= Math.floor(Math.random()*lenth)+0
      var key= Object.keys(arr)[pos]
      var value=arr[key]
      document.getElementById("name"+n).innerHTML=value["name"]
      document.getElementById("price"+n).innerHTML="₦"+value["price"]
      document.getElementById("img"+n).src=value["url0"]
    }
    })
  }
  function get_cart(code){
  var cart_length=cart_item.length
  var cn=0
  add.style.display="none"
  minus.style.display="none"
  avail="no"
  console.log(cart_item)
  do{
    if(code==cart_item[cn][code]){
      avail="yes"
      cart.innerHTML=cart_item[cn].code
      cart.style.backgroundColor="white"
      add.style.display="flex"
  minus.style.display="flex"
  cart_num=cart_item[cn].number
    }
    cn++
  }while(cn<cart_length)
}
document.getElementById("left").onclick=function() {
  displaySlides(slide_index += -1); 
}
document.getElementById("right").onclick=function() {
  displaySlides(slide_index += 1); 
};
cart.onclick=function(){
if(avail==="no"){
  add.style.display="flex"
  minus.style.display="flex"
  avail="yes"
  cart.style.backgroundColor="white"
  cart_item.push({
    code:item_code,
    number:1
 })
    cart.innerHTML=1
    cart_num=1
    localStorage.setItem("cart", cart_item)
}
};
add.onclick=function(){
  cart_num++
  var cn=cart_item.length-1
  cart.innerHTML=cart_num
  cart_item[cn].code=cart_num
  localStorage.setItem("cart", cart_item)
};
minus.onclick=function(){
  cart_num--
  if(cart_num==0){
    var cn=cart_item.length-1
    cart_item.splice(cn, 1)
    add.style.display="none"
  minus.style.display="none"
  avail="no"
  cart.style.backgroundColor="#FF9800"
  cart.innerHTML="Add to cart"
  }else{
    var cn=cart_item.length-1
    cart.innerHTML=cart_num
    cart_item[cn].code=cart_num
    localStorage.setItem("cart", cart_item)
  }
};