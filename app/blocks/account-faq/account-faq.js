$(document).ready(function(){
  $('.account-faq__item-showbutton').click(function(){
    var block = $(this).parents('.account-faq__item');
    var details = block.find('.account-faq__item-details');
    if (block.hasClass('active')) {
      block.removeClass('active');
      details.height(0);
    } else {
      block.addClass('active');
      var detailsHeight = 0;
      details.children().each(function(){
        var textHeight = $(this).outerHeight(true);
        detailsHeight += textHeight;
      });
      details.height(detailsHeight);
    }
  });
});