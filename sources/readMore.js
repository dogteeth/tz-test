/*
html設定
每一個read more單元
1.以 box 為各單元的class
2.以 visible-content, invisible-content 做為class 分開read more , read less的文字。
3.以 readMore-btn 做為各單元btn的ID.
 */

$(document).ready(function () {
  $('.invisible-content').hide();

  $(document).on('click', '#readMore-btn', function () {
    var moreLessButton = $('.invisible-content').is(':visible')
      ? '展開'
      : '收合';
    $(this).text(moreLessButton);
    $(this).parent('.box').find('.invisible-content').toggle();
    $(this).parent('.box').find('.visible-content').toggle();

    var sectionAnchor = $(this).parent('.box').find('.sectionTitle');
    $('html, body').animate(
      { scrollTop: $(sectionAnchor).offset().top - 50 },
      500
    );
  });
});

//

/**
 * 
 * 


 var scrollLink = $('.scroll-btn');
  scrollLink.click(function () {
    $('body,html').animate({ scrollTop: $(this.hash).offset().top });
  });


$(document).ready(function () {
  var scrollLink = $('.scroll-btn');
  scrollLink.click(function (e) {
    e.preventDefault();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
  });
});

*/
// $(document).ready(function () {
//   var scrollLink = $('.scroll');
//   scrollLink.click(function () {
//     $(body, html).animate({ scrollTop: $(this.hash).offset().top });
//   });
// });
