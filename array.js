function save(){
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
if(iden.length>0){
    
    if(iden.every(checkiden)){
      cont=1
    }
  }else{
    var key= Object.keys(arr)[x]
    var value=arr[key]
    document.getElementById("name"+n).innerHTML=value["name"]
    document.getElementById("price"+n).innerHTML="N"+value["price"]
    document.getElementById("img"+n).src=value["url0"]
    iden.push(x)
  }
  if(cont=0){
    var key= Object.keys(arr)[x]
    var value=arr[key]
    document.getElementById("name"+n).innerHTML=value["name"]
    document.getElementById("price"+n).innerHTML="N"+value["price"]
    document.getElementById("img"+n).src=value["url0"]
    iden.push(x)
  }else{
    sett(n)
    
  }