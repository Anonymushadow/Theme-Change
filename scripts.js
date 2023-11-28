let btnSwitch = document.querySelector('.switch');
let color = document.querySelector(":root");

if(localStorage.getItem('active') === 'true'){
	dark();
	btnSwitch.classList.add('active');
} else {
	light();
}

function light() {
	color.style.setProperty('--fondo', '#f1f1f1');
    color.style.setProperty('--fondoNav', '#fefefe');
    color.style.setProperty('--links', '#222222');
    color.style.setProperty('--links__hover', '#707070');
    color.style.setProperty('--sombra', 'rgba(0, 0, 0, 0.16)');
}

function dark() {
	color.style.setProperty('--fondoNav', '#222');
	color.style.setProperty('--fondo', '#111111');
	color.style.setProperty('--links', '#c8c8c8');
	color.style.setProperty('--links__hover', '#fefefe');
    color.style.setProperty('--sombra', 'rgba(170, 170, 170, 0.16)');
} 


btnSwitch.addEventListener('click', () => {
	if(btnSwitch.classList.contains('active')) {
		light();
        btnSwitch.classList.remove('active');
	}else{
	    dark();
        btnSwitch.classList.add('active');
	}

	if(btnSwitch.classList.contains('active')){
		localStorage.setItem('active', 'true');
	} else {
		localStorage.setItem('active', 'false');
	}
})







