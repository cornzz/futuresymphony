let browser = navigator.userAgent.toLowerCase().indexOf('chrome') > -1 ? 'chrome' : 'other';
if (browser === 'chrome') {
  $('.masthead-nav > li > a').css('font-weight', '300');
}

//set height of start cover, push header up and set variables for relevant object positions
let lang = $('#lang');
let loc, hashpos, headerheight, startbottom, aboutpos, newspos, participantspos, sponsorspos, contactpos, scrollBottom;
function init() {
  $('.start').height($(window).height());
  $('.masthead').css('margin-top', -$('.masthead').height() - 2);
  loc = (window.location.pathname == '/') ? '/lt' : '/';
  hashpos = ($(window.location.hash).offset()) ? $(window.location.hash).offset().top : $('#start').offset().top; 
  headerheight = $('.masthead').height();
  startbottom = Math.floor($('.start').height() - $('.masthead').height());
  aboutpos = Math.floor($('#about').offset().top - 150)
  newspos = Math.floor($('#news').offset().top - 150);
  participantspos = Math.floor($('#participants').offset().top - 150);
  sponsorspos = Math.floor($('#sponsors').offset().top - 150);
  contactpos = Math.floor($('#contacts').offset().top - 150);
  scrollBottom = $(document).height() - $(window).height();
  setHeader();
}
init();

//prevent animations on pageload
window.setTimeout(() => $('body').removeClass('preload'), 150);

//fire setHeader on pageload and on every scroll event
$(window).resize(init);
$(window).scroll(setHeader);
$(window).scrollTop(hashpos - headerheight);

//helper functions

//change Header appearance according to position
function setHeader() {
  if ($(window).scrollTop() >= startbottom) {
    $('.masthead').addClass('active');  
    $('.masthead').css('top', $('.masthead').height() + 2);
    $('.back').addClass('active');     
    
    $('.mastfoot').addClass('active');    
    if ($(window).scrollTop() >= (scrollBottom - 20)) {
      $('.mastfoot').addClass('active2');
      $('.mastfoot2').addClass('active');
    } else {
      $('.mastfoot').removeClass('active2');
      $('.mastfoot2').removeClass('active');
    }
    setActive();
    return;
  } 
  $('.masthead').removeClass('active');
  $('.masthead').css('top', '');
  $('.back').removeClass('active');     

  $('.mastfoot').removeClass('active');         
  $('.mastfoot').removeClass('active2'); 
  $('.mastfoot2').removeClass('active');
  removeActive();
}

//remove active from all nav links and reset language link
function removeActive() {
  $('#aboutlink').removeClass('active');
  $('#newslink').removeClass('active');
  $('#participantslink').removeClass('active');
  $('#sponsorslink').removeClass('active');
  $('#contactslink').removeClass('active');
  lang.attr('href', loc);
}

//add active to the correct nav link and set language link
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
$('a[href*="#"]')
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
    ) {
    let target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  if (target.length) {
    event.preventDefault();
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
      };
    });
  }
  history.pushState(null, null, this.hash == '#start' ? ' ' : this.hash);
}
});

function readmore(arg) {
  var button = $(arg + 'button');
  if (button.text() == 'Read more' || button.text() == 'Skaityti daugiau') {
    $(arg).show();
    if (button.text() == 'Read more') {
      button.text('Read less');
    } else {
      button.text('Skaityti maziau');
    }
  } else if (button.text() == 'Read less' || button.text() == 'Skaityti maziau') {
    $(arg).hide();
    if (button.text() == 'Read less') {
      button.text('Read more');
    } else {
      button.text('Skaityti daugiau');
    }
  }
}