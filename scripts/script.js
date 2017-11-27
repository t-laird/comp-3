function checkboxToggle() {
  if ($($(this).children()[0]).hasClass('fa-square')) {
    $($(this).children()[0]).toggleClass('fa-square').toggleClass('fa-check-square');
  } else if ($($(this).children()[0]).hasClass('fa-check-square')) {
    $($(this).children()[0]).toggleClass('fa-square').toggleClass('fa-check-square');
  }
}

function sectionDeselect() {
  for (var i = 0; i < 10; i++) {
    $($('li.leftnav')[i]).removeClass('selected');
  }
}

function sectionSelect() {
  sectionDeselect();
  $(this).toggleClass('selected');
}

$('.checkbox').on('click', checkboxToggle);
$('li.leftnav').on('click', sectionSelect);

function hideNav() {
  if ($('header:visible').length === 1) {
    $('header').hide();
    $('.menu-caret1').toggleClass('fa-caret-left')
    $('.menu-caret2').toggleClass('fa-caret-right');
  } else {
    $('header').show();
    $('.menu-caret1').toggleClass('fa-caret-left');
    $('.menu-caret2').toggleClass('fa-caret-right');
    // $('.collapse-menu').attr('background-color','white');

  }
}

$('.collapse-menu').on('click',hideNav);

function hideGraphs() {
  $('.collapse-icon').toggleClass('fa-angle-up').toggleClass('fa-angle-down');
  if ($('.collapse-icon').hasClass('fa-angle-down')) {
    $('.graphs').hide(1000);
  } else {
    $('.graphs').show(1000);
  }
}


$('.graph-collapse-section button').on('click', hideGraphs);


const searchIcon = document.querySelector('.fa-search');
const searchInput = document.querySelector('.search');

function expandSearch() {
  searchInput.classList.add('expand');
  searchInput.value = "";
  searchInput.focus();
}

searchIcon.addEventListener('click', expandSearch);

function closeSearchWindow(event) {
  if (!$(event.target).hasClass('search') && !$(event.target).hasClass('fa-search')) {
    searchInput.classList.remove('expand');
  }
}

function closeSearchBlur() {
  console.log(document.activeElement);
  searchInput.classList.remove('expand');
}

function checkForSearchExpand() {
  if ($(document.activeElement).hasClass('search')) {
   searchInput.classList.add('expand');
  }
}



$('body').on('click', closeSearchWindow);
$(window).on('focus', checkForSearchExpand);

$(window).blur(closeSearchBlur);

