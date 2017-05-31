import $ from 'jquery';
import dScroll from '../../scripts/common/dScroll';

export default function shopS() {
  dScroll('.shop-s__catalog', '.shop-s__shop-s-preview');
}

$(window).on('resize', shopS);
