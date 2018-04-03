

var circles=["fingerprint", "beach-access", "cake", "toys", "fingerprint", "pan-tool", "toys", "public","public", "cake", "beach-access", "pan-tool"];

var oneIcon = false;

var counter = 0;
var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

$('.circle').click(showIcon($(this)));

function showIcon(nr){
  var icon = "circles[nr]";
  $('#c'+nr).css('background', icon);
  if(oneIcon == false){
    oneIcon = true;
  } else {
    counter++;
    $('.counter').html('Turn counter: '+counter);
    oneIcon = false;
  }
}
