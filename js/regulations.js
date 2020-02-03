if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

let headerheight;
// Adapt spacer on pageload and window resize
function init() {
	headerheight = $('.masthead').height();
	$('#spacer').height(headerheight);
}
init();
$(window).resize(init);

// Jump to requested location
let hashpos = ($(window.location.hash).offset()) ? $(window.location.hash).offset().top : 0; 
$(window).scrollTop(hashpos - headerheight);
loc = (window.location.pathname == '/regulations/') ? '/lt/regulations' : '/regulations';
$('#lang').attr('href', loc + window.location.hash);

// Make header links regular font-weight on Chrome
if (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) {
  $('.masthead-nav > li > a').css('font-weight', '300');
}

// Prevent animations on pageload
window.setTimeout(function () {$('body').removeClass('preload'), 150});

function mail(arg) {
	return window.location.href = 'mailto:' + arg.dataset.user + '@' + arg.dataset.domain;
}