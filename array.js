/*function save(){
    var key=document.getElementById("key").value
    var value=document.getElementById("value").value
var arr=new Array()

 arr.push({
    [key]:value
 })
var send=arr[0][key]
alert(send)
document.getElementById("p").innerHTML="send"
}
cart_item=localStorage.getItem("cart")
  */

 
    const myURL= new URL(window.location.protocol+"//"+window.location.host+"/file.html")
    myURL.searchParams.append("code", "100001")
  var search=new URLSearchParams(myURL.search)
    console.log(search.get('code'))
 