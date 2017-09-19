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
    $('.graphs').hide();
  } else {
    $('.graphs').show();
  }
}


$('.graph-collapse-section button').on('click', hideGraphs);
