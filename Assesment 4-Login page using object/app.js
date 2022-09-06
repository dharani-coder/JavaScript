let profile ={
    heading:"RAHUL ATTULARI",
    imgSrc:"user-profile-img.png",
    age : "AGE : 25"
};

let a=document.getElementById("mainid");
let c=document.getElementById("imgid");
let b=document.getElementById("imgdivid");
let d=document.getElementById("hid");
let e=document.getElementById("ageid");

a.style.backgroundColor="#c59fd1";
a.style.marginLeft="500px";
a.style.height="500px";

 a.style.marginTop="30px";


a.classList.add("w-25");


c.setAttribute("src",profile.imgSrc);
c.style.marginLeft="70px";
c.style.marginTop="60px";
c.style.borderRadius="70%";
c.style.height="200px";
c.style.width="200px";



d.textContent=profile.heading;
d.style.textAlign="center";
d.style.color="white";

e.textContent=profile.age;
e.style.textAlign="center";
e.style.color="white";
e.style.fontWeight="bolder";




