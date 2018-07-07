
function scrollToResult() {
  if ($('.result-page').length == 0) return;
  var curPos = document.documentElement.scrollTop;
  var toPos = $('.result-page').offset().top;
  if (curPos < toPos) {
    var scrollTime = (toPos-curPos)/1.73;
    $('body,html').animate({'scrollTop': toPos}, scrollTime);
  }
}

$(document).ready(function () {
  $('body').on('click', '.js-go-to-results', function() {
    scrollToResult();
  });
});
