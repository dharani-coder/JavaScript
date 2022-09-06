let rec={
    title:"Bulb",
    imgSrc:"pexels-photo-1437267.jpeg",
    ingridents:["bulb","wire","tungsten"]
};

let a=document.getElementById("hid");
let b=document.getElementById("imgdivid");
let c=document.getElementById("imgid");
let d=document.getElementById("listid");


a.textContent=rec.title;


c.setAttribute("src",rec.imgSrc);
c.classList.add("w-50");
b.appendChild(c);


let e =rec.ingridents;

for(let s of e)
{
    let list=document.createElement("li");
    list.textContent=s;
    list.classList.add("ingredients-container");
    d.appendChild(list);
}
