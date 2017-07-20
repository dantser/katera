/* eslint-disable */
export default () => {
  if (!$('.account-sale3').length) {
    return;
  }

  // center tabs
  const tabs = $('.account-sale3 .magazine-subscribe-popup__types');

  if (tabs.length) {
    tabs.scrollLeft(tabs.width() / 2 + 20);
  }

  // additioanl engine checkbox dependencies
  const hasAdditionalEngine = $('.js-has-additional-engine');

  if (hasAdditionalEngine.length > 0) {
    const typeContainer = $('.js-type-of-additional-engine');
    const control = hasAdditionalEngine.find('.checkbox__control');

    const changeAdditionalEngineState = () => {
      if (!typeContainer.length) {
        return;
      }

      const select = typeContainer.find('.select');

      if (control.prop('checked')) {
        typeContainer.removeClass('input-group__item_disabled');
        select.trigger('enable');
      } else {
        typeContainer.addClass('input-group__item_disabled');
        select.trigger('disable');
      }
    };

    changeAdditionalEngineState();

    control.on('change', changeAdditionalEngineState);
  }

  // pricing item sale dependencies
  const pricingItemSale = $('.js-pricing__item-sale');

  if (pricingItemSale.length) {
    const changePricingItemSaleState = function () {
      const checkbox = $(this);
      const item = checkbox.parents('.js-pricing__item-sale');
      const priceElement = item.find('.pricing__price');
      const btnPrice = $('.js-sale3-submit-proposal span');

      if (!item.length || !priceElement.length || !btnPrice.length) {
        return;
      }

      if (checkbox.prop('checked')) {
        priceElement.addClass('pricing__price_active');
      } else {
        priceElement.removeClass('pricing__price_active');
      }

      // update price
      const nextPrice = Array.from(item
        .parent()
        .find('.pricing__price_active')
        .map(function() {
          return parseInt($(this).text(), 10);
        }))
        .reduce((a, b) => a + b, 0);

      btnPrice.text(nextPrice);
    };

    pricingItemSale
      .find('.checkbox__control')
      .each(changePricingItemSaleState)
      .on('change', changePricingItemSaleState);
  }
};
