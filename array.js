function save(){
    var key=document.getElementById("key").value
    var value=document.getElementById("value").value
var arr=new Array()

 arr.push({
    [key]:value
 })
 localStorage.setItem("array", JSON.stringify(arr))
var retrieve=localStorage.getItem("array")
var send=JSON.parse(retrieve)
alert(send)
console.log(send[0]["mudia"])
document.getElementById("p").innerHTML="send"
}

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

view.classList.add("cart-view")
view.setAttribute("id", "cart-view")
image.classList.add("item-image")
name.classList.add("item-name")
price.classList.add("item-price")
controls.classList.add("controls")
remove.setAttribute("id", "remove")
controls.classList.add("flex")
add.setAttribute("id", "add")
minus.setAttribute("id", "minus")

remove_text.innerHTML="Remove"
remove_img.src="images/ic_delete_black.png"
add.src="images/ic_add_circle_black.png"
minus.src="images/ic_remove_circle_black.png"
image.src="images/PinClipart.com_fall-back-clip-art_5440422 (1).png"
name.innerHTML="mudia"
price.innerHTML="N29000"
cart_num.innerHTML="1"


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


 
    const myURL= new URL(window.location.protocol+"//"+window.location.host+"/file.html")
    myURL.searchParams.append("code", "100001")
  var search=new URLSearchParams(myURL.search)
    console.log(search.get('code'))
 