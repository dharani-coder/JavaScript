

function add()
{
let li = document.createElement("li");
let a=document.getElementById("textid").value;
let s =document.createTextNode(a);
li.appendChild(s);
 if(a=== "")
{
    alert("You must write...");
}
else{

    document.getElementById("ulid").appendChild(li);

}
document.getElementById("textid").value="";


let span1= document.createElement("span");
let cross=document.createTextNode("/u00d7");
span1.className="close";
let cross="\u00D7";
span1.append(cross);

li.appendChild(span1);
let span=docuement.getElementsByClassName("close");
for(i=0;i<span.length;i++)
{
    span[i].onclick=function()
     {
         let div=this.parentElement;
        div.style.display="none";
     }
}
}
