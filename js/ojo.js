
let movimiento = document.getElementsByClassName('pupila')
document.onmousemove = function() {
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerWidth + "%";
    for(let i = 0; i < 2; i++) {
        movimiento[i].style.left = x;
        movimiento[i].style.top  = y;
        movimiento[i].style.transform = "translate(- " + x + ",-" + y + ")";
    }
}
