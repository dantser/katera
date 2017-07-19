// import $ from 'jquery';

export default () => {
  $(document).on('click', '.upload-form', function (e) { // eslint-disable-line func-names
    if ($(e.target).hasClass('upload-form__file')) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    $(this).find('.upload-form__file').trigger('click');
  });

  $(document).on('change', '.upload-form__file', function () { // eslint-disable-line func-names
    const f = $(this);
    f
      .siblings('.text-field')
      .find('.text-field__control')
      .val([...f[0].files].map(item => item.name).join(', '));
  });
};
