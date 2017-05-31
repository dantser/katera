import $ from 'jquery';
import dScroll from '../../scripts/common/dScroll';

export default function magazinePage() {
  dScroll('.magazine2__text', '.magazine2__sidebar');
  dScroll('.magazine-page__text', '.magazine-page__sidebar');
}

$(window).on('resize', magazinePage);
