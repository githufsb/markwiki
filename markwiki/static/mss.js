$(document).ready(function() {
  var alllinks='';
$('a').each(function () {
  href=$(this).attr('href');
  txt=$(this).text();
  if (~href.indexOf("%s")) {
    $(this).attr('href',"javascript:sstr=prompt('Search%20term');window.open('" + $(this).attr('href').replace("%s","' + sstr + '") + "');");
  }
  var regExp = /\/([^/]+)\//;
  var matches = regExp.exec(txt);
  if (matches != null) {
    $(this).attr('keycode',matches[1]);
    console.log('Added keycode: '+txt);
  }
  alllinks+= $(this).text();
});
$('body').keypress(function(e) {
  //console.log('keypress'+e.keyCode + " charcode:" + String.fromCodePoint(e.keyCode));
  hrf = $('[keycode="' + String.fromCodePoint(e.keyCode) + '"]').attr('href');
  if (typeof hrf !== "undefined") {
    window.location.href = hrf;
  }
});
});

