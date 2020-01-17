let headerheight = $('.masthead').height();
$('#spacer').height(headerheight);
let hashpos = ($(window.location.hash).offset()) ? $(window.location.hash).offset().top : 0; 
$(window).scrollTop(hashpos - headerheight);
$('#lang').attr('href', '/regulations' + window.location.hash);
window.setTimeout(function () {$('body').removeClass('preload'), 150});

function mail(arg) {
	return window.location.href = 'mailto:' + arg.dataset.user + '@' + arg.dataset.domain;
}