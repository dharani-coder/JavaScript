let f=document.getElementById("fid");
let s=document.getElementById("sid");
let u=document.getElementById("userinput");
let g=document.getElementById("gameresult");

let anscorrect="WELL DONE YOU PASSED!";
let answrong="OH!YOU FAILED!";
f.style.color="white";
s.style.color="white";

function restartgame()
{
 let frnum=Math.random()*10;
 let srnum=Math.random()*10;
 f.textContent=Math.ceil(frnum);
 s.textContent=Math.ceil(srnum);
 g.textContent="";
 u.value="";
}
restartgame();

function checkresult(){
let frnum=parseInt(f.textContent);
let srnum=parseInt(s.textContent);
let userEnteredsum=parseInt(u.value);
let addrnum=frnum+srnum;
if(userEnteredsum===addrnum){
g.textContent=anscorrect;
g.style.backgroundColor="green";
}
else{
    g.textContent="Sorry! YOU FAILED- Please try Again";
    g.style.backgroundColor="red";
}
}