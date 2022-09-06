let a=document.getElementById("bulbon");
let b=document.getElementById("catfull");
let c=document.getElementById("switch");
let d=document.getElementById("btnoid");
let e=document.getElementById("btnofid");

function on()
{
    a.src="bulb-go-on-img.png";
    b.src="cat-img.png";
    c.textContent="Switched On";
    c.style.color="White";
    d.style.backgroundColor="green";
    e.style.backgroundColor="white";
    

}
function off()
{
    a.src="bulb-go-off-img.png";
    b.src="cat-eyes-img.png";
    c.textContent="Switched Off";
    c.style.color="White";
    e.style.backgroundColor="red";
    d.style.backgroundColor="white";






}
