

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
document.getElementById("left").onclick=function() {
  displaySlides(slide_index += -1); 
}
document.getElementById("right").onclick=function() {
  displaySlides(slide_index += 1); 
}
document.getElementById("plus-box").onclick=function(){
  alert(window.innerWidth)
}

