if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Set height of start cover, push header up and set variables for relevant object positions
let lang = $('#lang');
let loc, hashpos, headerheight, startBottom, aboutpos, newspos, participantspos, sponsorspos, contactpos, scrollBottom;
function init() {
  $('.start').height($(window).height());
  $('.masthead').css('margin-top', -$('.masthead').height() - 2);
  loc = (window.location.pathname == '/') ? '/lt' : '/';
  hashpos = ($(window.location.hash).offset()) ? $(window.location.hash).offset().top : $('#start').offset().top; 
  headerheight = $('.masthead').height();
  startBottom = Math.floor($('.start').height() - $('.masthead').height() - 1);
  aboutpos = Math.floor($('#about').offset().top - 150)
  newspos = Math.floor($('#news').offset().top - 150);
  participantspos = Math.floor($('#participants').offset().top - 150);
  sponsorspos = Math.floor($('#sponsors').offset().top - 150);
  contactpos = Math.floor($('#contacts').offset().top - 150);
  scrollBottom = $(document).height() - $(window).height();
  setHeader();
}
init();
$(window).resize(init);
$(window).scroll(setHeader);
$(window).scrollTop(hashpos - headerheight);

// Prevent animations on pageload
window.setTimeout(function () {$('body').removeClass('preload'), 150});

// Make header links regular font-weight on Chrome
if (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)) {
  $('.masthead-nav > li > a').css('font-weight', '300');
  $('.mastfoot').css('font-weight', '300');
}

// Use Web Font Loader if IE 11
if (!!window.document.documentMode) {
  document.write('<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script><script>WebFont.load({google: {families: ["Audiowide", "Open Sans"]}});</script>');
}

// Dark favicon for light mode
if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = 'favicon-dark-32x32.png';
  document.getElementsByTagName('head')[0].appendChild(link)
}

// Helper functions

// Change Header appearance according to position
function setHeader() {
  if ($(window).scrollTop() >= startBottom) {
    $('.masthead').addClass('active');  
    $('.masthead').css('top', $('.masthead').height() + 2);
    $('.back').addClass('active');     
    $('.mastfoot').addClass('active');    
    setActive();
    return;
  } 
  $('.masthead').removeClass('active');
  $('.masthead').css('top', '');
  $('.back').removeClass('active');     
  $('.mastfoot').removeClass('active');
  removeActive();
}

// Remove active from all nav links and reset language link
function removeActive() {
  $('#aboutlink').removeClass('active');
  $('#newslink').removeClass('active');
  $('#participantslink').removeClass('active');
  $('#sponsorslink').removeClass('active');
  $('#contactslink').removeClass('active');
  lang.attr('href', loc);
}

// Add active to the correct nav link and set language link
function setActive() {
  removeActive();
  if (aboutpos <= $(window).scrollTop() && $(window).scrollTop() < newspos) {
    $('#aboutlink').addClass('active');
    lang.attr('href', loc + '#about');
  } else if (newspos <= $(window).scrollTop() && $(window).scrollTop() < participantspos) {
    $('#newslink').addClass('active');
    lang.attr('href', loc + '#news');
  } else if (participantspos <= $(window).scrollTop() && $(window).scrollTop() < sponsorspos) {
    $('#participantslink').addClass('active');
    lang.attr('href', loc + '#participants');
  } else if (sponsorspos <= $(window).scrollTop() && $(window).scrollTop() < contactpos) {
    $('#sponsorslink').addClass('active');
    lang.attr('href', loc + '#sponsors');
  } else if (contactpos <= $(window).scrollTop()) {
    $('#contactslink').addClass('active');
    lang.attr('href', loc + '#contacts');
  }
}

// Smooth scrolling script from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    let target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('.clicked').removeClass('clicked');
      $(this.hash + 'link').addClass('clicked');
      scroll = target.offset().top - headerheight;
      $('html, body').animate({
        scrollTop: scroll
      }, 1000, function() {
        let $target = $(target);
        $target.focus();
        if ($target.is(':focus')) {
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus();
        }
      });
    }
    history.pushState(null, null, this.hash == '#start' ? ' ' : this.hash);
  }
});

function readmore(arg) {
  var button = $(arg + 'button');
  if ($(arg).css('display') == 'none') {
    $(arg).show();
    if (button.text() == 'Read more') {
      button.text('Read less');
    } else {
      button.text('Skaityti maziau');
    }
  } else {
    $(arg).hide();
    if (button.text() == 'Read less') {
      button.text('Read more');
    } else {
      button.text('Skaityti daugiau');
    }
  }
}

function mail(arg) {
  return window.location.href = 'mailto:' + arg.dataset.user + '@' + arg.dataset.domain;
}