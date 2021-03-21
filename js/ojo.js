/*
var movimiento = document.getElementsByClassName('pupila')
document.onmousemove = function() {
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerWidth + "%";
    for(let i = 0; i < 2; i++) {
        movimiento[i].style.left = x;
        movimiento[i].style.top  = y;
        movimiento[i].style.transform = "translate(- " + x + ",-" + y + ")";
    }
}
*/

const pupila = document.querySelector(".pupila");

document.addEventListener("mousemove", (event) => {
	let x = event.clientX * 100 / window.innerWidth - 30;
	let y = event.clientY * 100 / window.innerHeight - 30;
	pupila.style.left = x + "%";
	pupila.style.top = y + "%";
})
