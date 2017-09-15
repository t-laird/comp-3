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
