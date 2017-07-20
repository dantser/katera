import dScroll from '../../scripts/common/dScroll';

export default function magazineVideo() {
  if (!$('.magazine-video').length) {
    return;
  }

  dScroll('.magazine-video__content', '.magazine-video__sidebar');
}
