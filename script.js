var pemain = "x";

function kliktombol(x){
    document.getElementById("btn"+x+"D").style.transform = "perspective(600px) rotateY(-180deg)";

    document.getElementById("btn"+x+"B").style.transform = "perspective(600px) rotateY(0deg)";

    document.getElementById("btn"+x+ "B").innerHTML= pemain;

    
}