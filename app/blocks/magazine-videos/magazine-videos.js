import $ from 'jquery';
import dScroll from '../../scripts/common/dScroll';

export default function magazineVideos() {
  dScroll('.magazine-videos__videos-col', '.magazine-videos__sidebar');
}

$(window).on('resize', magazineVideos);
