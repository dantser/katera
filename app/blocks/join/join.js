// import $ from 'jquery';

export default () => {
  const join = $('.join');

  if (!join.length) {
    return;
  }

  $('.tabs').children().css({ display: 'none' });
  $($('.nav').data('tab')).show();

  $('.nav').find('input').on('change', function () {
    $('.tabs').children().hide();
    $($(this).parent().data('tab')).fadeIn();
  });
};
