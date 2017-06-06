import $ from 'jquery';
import dScroll from '../../scripts/common/dScroll';

export default function magazineVideos() {
  if (!$('.magazine-videos').length) {
    return;
  }
  dScroll('.magazine-videos__videos-col', '.magazine-videos__sidebar');
}
