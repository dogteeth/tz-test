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
  });
});
