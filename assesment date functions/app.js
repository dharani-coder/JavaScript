/*function add()
{
    let d1 =document.getElementById("dateadd").value;
    let d =new Date(d1);
    
    let s1=(d.getDate()+2);
    let s2=d.getMonth(d);
    let s3=d.getFullYear();
    alert(s3);
}

function add7()
{
    let d=document.getElementById("dateadd").value;
    let h=new Date(d);
    let d1=(h.getDate()+7);
    alert(d1);
}*/


function add(s)
{
    var a=document.getElementById("twodays");
    var b=document.getElementById("Sevendays");
    var c=document.getElementById("dateadd").value;

    if(s== "twovalue")
    {
        var x=new Date(startdate);
        var y =x.setDate(x.getDate()+2);
        var z= new Date(y);
        var p=z.getDate();
        var q= z.getMonth();
        var r=z.getFullYear();
        document.getElementById("twodays").value=


    }




}