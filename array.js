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

  

 
    const myURL= new URL(window.location.protocol+"//"+window.location.host+"/file.html")
    myURL.searchParams.append("code", "100001")
  var search=new URLSearchParams(myURL.search)
    console.log(search.get('code'))
 