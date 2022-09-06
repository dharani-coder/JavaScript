let recipe = {
    title : "Tomato Pasta",
    imgSrc : "pasta.jpg",
    heading : "Ingredients",
    ingredients :[ "Pasta","oil","Onions","salt","Tomato Pasta Sauce","Cheese"]
};

let body = document.getElementById("mainid");
let head = document.getElementById("headingid");
let imgdiv = document.getElementById("imagedivid");
let image =  document.getElementById("imgid");
let para = document.getElementById("textid");
let box = document.getElementById("box");
let listdetails = document.getElementById("listid");

head.textContent=recipe.title;
head.classList.add("heading");

image.setAttribute("src",recipe.imgSrc);
image.classList.add("imagesize");
imgdiv.appendChild(image);

box.classList.add("boxclass");
para.textContent=recipe.heading;

let i =recipe.ingredients;
for( let s of i)
{
let list =document.createElement("li");
list.textContent=s;
list.classList.add("list_items");
listdetails.appendChild(list);
}



