//set height of start cover, push header up and set variables for relevant object positions
$('.start').height($(window).height());
$('.masthead').css('margin-top', -$('.masthead').height() - 2);
const loc = (window.location.pathname == '/') ? '/lt' : '/';
const hashpos = ($(window.location.hash).offset()) ? $(window.location.hash).offset().top : $('#start').offset().top; 
const lang = $('#lang');
const headerpos = Math.floor($('.masthead').offset().top);
const headerheight = $('.masthead').height();
const homepos = Math.floor($('#home').offset().top - 150)
const newspos = Math.floor($('#news').offset().top - 150);
const aboutpos = Math.floor($('#about').offset().top - 150);
const applypos = Math.floor($('#apply').offset().top - 150);
const contactpos = Math.floor($('#contacts').offset().top - 150);
const scrollBottom = $(document).height() - $(window).height();

//prevent animations on pageload
window.setTimeout(() => $('body').removeClass('preload'), 150);

//fire setHeader on pageload and on every scroll event
setHeader();
$(window).scroll(setHeader);
$(window).scrollTop(hashpos - headerheight);

//helper functions

//change Header appearance according to position
function setHeader() {
  if ($(window).scrollTop() > headerpos) {
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
  $('#homelink').removeClass('active');
  $('#newslink').removeClass('active');
  $('#aboutlink').removeClass('active');
  $('#applylink').removeClass('active');
  $('#contactslink').removeClass('active');
  lang.attr('href', loc);
}

//add active to the correct nav link and set language link
function setActive() {
  removeActive();
  if (homepos <= $(window).scrollTop() && $(window).scrollTop() < newspos) {
    $('#homelink').addClass('active');
    lang.attr('href', loc + '#home');
  } else if (newspos <= $(window).scrollTop() && $(window).scrollTop() < aboutpos) {
    $('#newslink').addClass('active');
    lang.attr('href', loc + '#news');
  } else if (aboutpos <= $(window).scrollTop() && $(window).scrollTop() < applypos) {
    $('#aboutlink').addClass('active');
    lang.attr('href', loc + '#about');
  } else if (applypos <= $(window).scrollTop() && $(window).scrollTop() < contactpos) {
    $('#applylink').addClass('active');
    lang.attr('href', loc + '#apply');
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

//include about text
function textarea() {
  var xmlhttp, text;
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', 'about.html?1', false);
  xmlhttp.send();
  text = xmlhttp.responseText;
  $('.textarea').html(text);
}

textarea();

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