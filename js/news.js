let headerheight = $('.masthead').height();
$('#spacer').height(headerheight);
window.setTimeout(function () {$('body').removeClass('preload'), 150});

function imagesource(src){
	location.replace("#show");
	document.getElementById("imgsrc").setAttribute("src", src);
	document.getElementById("imgsrc").setAttribute("alt", "Image");
}

function hideimg(){
	location.replace("#/");
	setTimeout(function(){document.getElementById("imgsrc").setAttribute("src", "");}, 100);
	document.getElementById("imgsrc").setAttribute("alt", "");
}

function mail(arg) {
	return window.location.href = 'mailto:' + arg.dataset.user + '@' + arg.dataset.domain;
}