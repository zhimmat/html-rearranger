var $oneH1 = $('<h1>');
var $belowveggies = $('<ul>');
var $aboveH1 = $('<h1>');
var $aboveveggies = $('<ul>');

$oneH1.html('Below ground veggies');
$('body').prepend($oneH1);

$('body').append($belowveggies);
$aboveH1.html('Above ground veggies');
$('body').append($aboveH1);

$('body').append($aboveveggies);

$('ul li').each(function () {
  if ($(this).hasClass('below')) {
    $belowveggies.append($(this));
  } else {
    $aboveveggies.append($(this));
  }
});
