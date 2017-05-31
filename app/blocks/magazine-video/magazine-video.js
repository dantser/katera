import $ from 'jquery';
import dScroll from '../../scripts/common/dScroll';

export default function magazineVideo() {
  dScroll('.magazine-video__content', '.magazine-video__sidebar');
}

$(window).on('resize', magazineVideo);
