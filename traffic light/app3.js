let a=document.getElementById("div1");
let b=document.getElementById("span1");
let c=document.getElementById("btn1");
let d=document.getElementById("btn2");
let e=document.getElementById("btn3");

function red()
{
    c.style.backgroundColor="red";
    d.style.backgroundColor="white";
    e.style.backgroundColor="white";

}
function green()
{
    d.style.backgroundColor="green";
    c.style.backgroundColor="white";
    e.style.backgroundColor="white";
    
}
function yellow()
{
    e.style.backgroundColor="yellow";
    c.style.backgroundColor="white";
    d.style.backgroundColor="white";
}