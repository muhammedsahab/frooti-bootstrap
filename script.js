let elem = document.querySelector("#animation");
window.addEventListener('scroll', function() {
	let value = window.scrollY * 0.35;
	elem.style.transform = `rotate(${value}deg)`; 
});