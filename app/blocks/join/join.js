import $ from 'jquery';

export default () => {
  const join = $('.join');

  if (!join) {
    return;
  }

  $('.tabs').children().css({ display: 'none' });
  $($('.nav:checked').data('tab')).show();

  $('.nav').on('change', function () {
    $('radio__control').parent().hide();
    $($(this).data('tab')).fadeIn();
  });
};
