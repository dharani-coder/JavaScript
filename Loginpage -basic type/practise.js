/*function call()
{
    let a=document.f1.iname.value;
    alert("welcome"+a);
}*/
/*function getcube()
{
    a=document.getElementById("car").value;
    alert(a*a*a);
}*/
let a=document.getElementById("box1");
let b=document.getElementById("box2");
let c=document.getElementById("inside");
function password()
{
    let hi;
    if(b.value.length>5)
    {
        hi="good";
        c.style.color="green";
    }
    else{
        hi="weak";
        c.style.color="red";
    }
    c.innerText=hi;
}
function navbar()
{
    alert("Hi "+ a.value +" Press Navi button to find Navigational Bar....");
}
function show()
{
    let data ="<b> Name: </b><br><input type='text' name='name'><br><b> DOB: </b><br><input type='date' name='dob'><br><b> Email:</b><br><input type='text' name='email'><br><b> PhoneNum     : </b><br><input type='number' name='number'><br>"
    document.getElementById('my').innerHTML=data;
}
