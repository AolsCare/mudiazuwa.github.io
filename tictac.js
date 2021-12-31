var ctime;
var turn=0;
var pl="X";
var co="O";
var cscore=document.getElementById("c")
var pscore=document.getElementById("p")
function play(x){
    var but= document.getElementById(x).innerHTML
    if (but===""&& turn==0){
        document.getElementById(x).innerHTML=pl
        turn=1;
   pcheck()
   sfull()
    }
}
function comw(){
    turn=0
    var one= document.getElementById(1).innerHTML
    var two= document.getElementById(2).innerHTML
    var three= document.getElementById(3).innerHTML
    var four= document.getElementById(4).innerHTML
    var five= document.getElementById(5).innerHTML
    var six= document.getElementById(6).innerHTML
    var seven= document.getElementById(7).innerHTML
    var eight= document.getElementById(8).innerHTML
    var nine= document.getElementById(9).innerHTML
if(five===""&&((one===co&&nine===co)||(three===co&&seven===co)||(two===co&&eight===co)||(four===co&&six===co))){
    document.getElementById("5").innerHTML=co
    ccheck()
    sfull()
} else if(one===""&&((two===co&&three===co)||(five===co&&nine===co)||(four===co&&seven===co))){
    document.getElementById("1").innerHTML=co
    ccheck()
    sfull()
} else if(seven===""&&((four===co&&one===co)||(five===co&&three===co)||(eight===co&&nine===co))){
    document.getElementById("7").innerHTML=co
    ccheck()
    sfull()
} else if(three===""&&((six===co&&nine===co)||(five===co&&seven===co)||(one===co&&two===co))){
    document.getElementById("3").innerHTML=co
    ccheck()
    sfull()
} else if(nine===""&&((eight===co&&seven===co)||(three===co&&six===co)||(five===co&&one===co))){
    document.getElementById("9").innerHTML=co
    ccheck()
    sfull()
} else if(two===""&&((five===co&&eight===co)||(one===co&&three===co))){
    document.getElementById("2").innerHTML=co
    ccheck()
    sfull()
} else if(four===""&&((five===co&&six===co)||(one===co&&seven===co))){
    document.getElementById("4").innerHTML=co
    ccheck()
    sfull()
} else if(six===""&&((three===co&&nine===co)||(four===co&&five===co))){
    document.getElementById("6").innerHTML=co
    ccheck()
    sfull()
} else if(eight===""&&((five===co&&two===co)||(seven===co&&nine===co))){
    document.getElementById("8").innerHTML=co
    ccheck()
    sfull()
} else{
    com()
}
}
function com(){
    var one= document.getElementById(1).innerHTML
    var two= document.getElementById(2).innerHTML
    var three= document.getElementById(3).innerHTML
    var four= document.getElementById(4).innerHTML
    var five= document.getElementById(5).innerHTML
    var six= document.getElementById(6).innerHTML
    var seven= document.getElementById(7).innerHTML
    var eight= document.getElementById(8).innerHTML
    var nine= document.getElementById(9).innerHTML
if(five===""&&((one===pl&&nine===pl)||(three===pl&&seven===pl)||(two===pl&&eight===pl)||(four===pl&&six===pl))){
    document.getElementById("5").innerHTML=co
    ccheck()
    sfull()
} else if(one===""&&((two===pl&&three===pl)||(five===pl&&nine===pl)||(four===pl&&seven===pl))){
    document.getElementById("1").innerHTML=co
    ccheck()
    sfull()
} else if(seven===""&&((four===pl&&one===pl)||(five===pl&&three===pl)||(eight===pl&&nine===pl))){
    document.getElementById("7").innerHTML=co
    ccheck()
    sfull()
} else if(three===""&&((six===pl&&nine===pl)||(five===pl&&seven===pl)||(one===pl&&two===pl))){
    document.getElementById("3").innerHTML=co
    ccheck()
    sfull()
} else if(nine===""&&((eight===pl&&seven===pl)||(three===pl&&six===pl)||(five===pl&&one===pl))){
    document.getElementById("9").innerHTML=co
    ccheck()
    sfull()
} else if(two===""&&((five===pl&&eight===pl)||(one===pl&&three===pl))){
    document.getElementById("2").innerHTML=co
    ccheck()
    sfull()
} else if(four===""&&((five===pl&&six===pl)||(one===pl&&seven===pl))){
    document.getElementById("4").innerHTML=co
    ccheck()
    sfull()
} else if(six===""&&((three===pl&&nine===pl)||(four===pl&&five===pl))){
    document.getElementById("6").innerHTML=co
    ccheck()
    sfull()
} else if(eight===""&&((five===pl&&two===pl)||(seven===pl&&nine===pl))){
    document.getElementById("8").innerHTML=co
    ccheck()
    sfull()
} else{
  var x= Math.floor(Math.random()*9)+1
  var but= document.getElementById(x).innerHTML
  if (but===""){
    document.getElementById(x).innerHTML=co
    ccheck()
    sfull()
}else{
    com()
}
}
}
function pwin(x,y,z){
    var first=document.getElementById(x).innerHTML
    var second=document.getElementById(y).innerHTML
    var third=document.getElementById(z).innerHTML
if(first===pl&&second===pl&&third===pl){
    pscore.innerHTML=parseInt(pscore.innerHTML)+1
    setTimeout(clea, 1000)
    turn=2;
}
move++
if(move==8&&turn==1){
    ctime=setTimeout(comw, 1000)
}
}
function pcheck(){
    move=0
    pwin(1, 2, 3)
    pwin(2, 5, 8)
    pwin(3, 6, 9)
    pwin(7, 8, 9)
    pwin(4, 5, 6)
    pwin(1, 4, 7)
    pwin(3, 5, 7)
    pwin(1, 5, 9)
    
}
function cwin(x,y,z){
    var first=document.getElementById(x).innerHTML
    var second=document.getElementById(y).innerHTML
    var third=document.getElementById(z).innerHTML
if(first===co&&second===co&&third===co){
    cscore.innerHTML=parseInt(cscore.innerHTML)+1
    clearTimeout(ctime)
    setTimeout(clea, 1000)
}
}
function ccheck(){
    cwin(1, 2, 3)
    cwin(2, 5, 8)
    cwin(3, 6, 9)
    cwin(7, 8, 9)
    cwin(4, 5, 6)
    cwin(1, 4, 7)
    cwin(3, 5, 7)
    cwin(1, 5, 9)
}
function clea(){
    var cle=""
     document.getElementById(1).innerHTML=cle
     document.getElementById(2).innerHTML=cle
     document.getElementById(3).innerHTML=cle
     document.getElementById(4).innerHTML=cle
     document.getElementById(5).innerHTML=cle
    document.getElementById(6).innerHTML=cle
    document.getElementById(7).innerHTML=cle
    document.getElementById(8).innerHTML=cle
    document.getElementById(9).innerHTML=cle
    turn=0;
}
function sfull(){
    var one= document.getElementById(1).innerHTML
    var two= document.getElementById(2).innerHTML
    var three= document.getElementById(3).innerHTML
    var four= document.getElementById(4).innerHTML
    var five= document.getElementById(5).innerHTML
    var six= document.getElementById(6).innerHTML
    var seven= document.getElementById(7).innerHTML
    var eight= document.getElementById(8).innerHTML
    var nine= document.getElementById(9).innerHTML
    if(one!==""&&two!==""&&three!==""&&four!==""&&five!==""&&six!==""&&seven!==""&&eight!==""&&nine!==""){
        setTimeout(clea, 1000)
    }
}