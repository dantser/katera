export default () => {
  $(document).on('change', '.account-shop-2-page__form .control', function () {
    const checkbox = $(this);
    const value = checkbox.parent().find('.text_price').text();
    const button = checkbox.parents('.account-shop-2-page__form').find('.item-wrapper_button .button');

    button.text(`Создать магазин ${value}`);
  });

  $('.account-shop-2-page__form .control:checked').change();
};
