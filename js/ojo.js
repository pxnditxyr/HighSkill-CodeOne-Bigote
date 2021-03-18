
var movimiento= document.getElementsByClassName('pupilas12')
document.onmousemove= function(){
    var x= event.clientX * 100 / window.innerWidth + "%";
    var y= event.clientY * 100 / window.innerWidth + "%";
    for(var i=0;i<2;i++){
        movimiento[i].style.left=x;
        movimiento[i].style.top=y;
        movimiento[i].style.transform = "translate(- "+x+",-"+y+")";
    }
}
