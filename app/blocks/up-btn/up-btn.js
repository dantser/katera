import $ from 'jquery';

export default function upBtn() {
  const ELEMENT_CLASS = '.up-btn';
  const SHOW_ELEMENT_AT = 200;

  const btn = $(ELEMENT_CLASS);
  const w = $(window);

  if (!btn.length || w.width() <= 768) {
    return;
  }

  const branding = $('.branding');
  const pageHasBranding = branding && branding.length > 0;

  if (!pageHasBranding) {
    btn.addClass('up-btn_dark');
  }

  const footer = $('.footer');

  w.on('scroll', function (e) { // eslint-disable-line
    const scrollTop = w.scrollTop();
    // eslint-disable-next-line
    const stickToFooter = scrollTop + w.height() - footer.offset().top;

    if (stickToFooter >= 0) {
      // eslint-disable-next-line
      btn.css({ bottom: `${stickToFooter + 30}px` });
    } else {
      btn.css({ bottom: '20px' });
    }

    if (scrollTop > SHOW_ELEMENT_AT) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });

  btn.on('click', (e) => {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
  });
}

$(window).resize(upBtn);
