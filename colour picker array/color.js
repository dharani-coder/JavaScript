let a=document.getElementById("headingid");
let b=document.getElementById("buttonid");
let c=document.getElementById("divid");

let array=["red","blue","green","yellow","pink","#eb4034","#eb4034","#000000"];

function pressme()
{
    let number =array.length;
    let randomnumber =Math.ceil(Math.random() * number);
    c.style.backgroundColor=array[randomnumber];
}

