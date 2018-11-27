const parallax = document.getElementById("box")

window.addEventListener('scroll', function () {
	let offset= window.pageYOffset;
	console.log('offset :' + offset);
	parallax.style.backgroundPositionY = offset * 0.5 +"px";
  	
  	

	})
	

	
