import $ from 'jquery';
import stickyBlock from '../../scripts/common/stickyBlock';

export default function events() {
  stickyBlock($('.events__submenu-wrapper'), true, false);
}
