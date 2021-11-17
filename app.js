
var first= ""
var second= ""
var third= ""
var last= ""
function num(x){
    if(second==""){
    var plays= last;
    var play= first;
var plays =plays.concat(x);
var play =play.concat(x);
last= plays;
first=play;
document.getElementById("display-box").innerHTML= plays;
}else if(second!==""){
    var plays= last;
    var play= third;
var plays =plays.concat(x);
var play =play.concat(x);
last= plays;
third=play;
document.getElementById("display-box").innerHTML= plays;
}
}
function sign(n){
    var plays= last;
    var plays =plays.concat(n);
    last= plays;
    second=n;
    document.getElementById("display-box").innerHTML= plays;
}
const dbref=ref(db);
get(child(dbref,"upload/")).then((snapshot)=>{
  if(snapshot.exists()){
    var arr = snapshot.val()
  var lenth=Object.keys(arr).length
  var x= lenth--
  var key= Object.keys(arr)[x]
    var value=arr[key]
    var searchvalue=value["name"]
  do{
    
    if(searchvalue.includes(searchitem)){
        var list= document.createElement("li")
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
        price.innerHTML=value["price"]
        detail.appendChild(price)
        view.appendChild(detail)
        list.appendChild(view)
    var listview=document.getElementById("list")
    listview.appendChild(list)
    }
    x--
  }while(x>0)
}
})