let headerheight;

// Adapt spacer on pageload and window resize
function init() {
	headerheight = $('.masthead').height();
	$('#spacer').height(headerheight);
}
init();
$(window).resize(init);


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

