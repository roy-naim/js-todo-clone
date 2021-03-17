for (var i = 0; i < 5; i++) {
  var template = $('#todo li').clone();
  template.prepend(i);
  $('#todos').append(template);
}


$('#add').click(function() {
  var todoTitle = $('#todoTitle').val();
  var template = $('#todo li').clone();
  template.prepend(todoTitle);
  $('#todos').append(template);
});

// rimuovere qualcosa quando clicchi sullo schermo
$('#todos span').click(function() {
  $(this).parent().remove();
});
