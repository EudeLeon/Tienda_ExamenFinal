var altura = document.body.scrollHeight - window.innerHeight;
var fondo = document.getElementById('fondo');

window.onscroll = () => {
	var anchoFondo = (window.pageYOffset / altura) * 700;
	if(anchoFondo <= 100){
		fondo.style.width = anchoFondo + '%';
	}
};