import $ from 'jquery';
import commonInput from './common/input';
import burger from '../blocks/burger/burger';
import upBtn from '../blocks/up-btn/up-btn';
import select from '../blocks/select/select';
import searchBar from '../blocks/search-bar/search-bar';
import mainSlider from '../blocks/main-slider/main-slider';
import filter from '../blocks/filter/filter';
import textField from '../blocks/text-field/text-field';
import timeline from '../blocks/timeline/timeline';
import models from '../blocks/models/models';
import selectCurrency from '../blocks/select-currency/select-currency';
import counter from '../blocks/counter/counter';
import modal from '../blocks/modal/modal';
import scrollSlider from '../blocks/scroll-slider/scroll-slider';
import catalogYacht from '../blocks/catalog-yacht/catalog-yacht';
import yachtSlider from '../blocks/yacht-slider/yacht-slider';
import hint from '../blocks/hint/hint';
import truncate from '../blocks/yacht-sale-page/yacht-sale-page';
import index from '../blocks/index/index';
import magazineLongrid from '../blocks/magazine-longrid/magazine-longrid';
import map from './common/map';
import eventsSlider from '../blocks/events/events';
import eventPage from '../blocks/event-page/event-page';
import filterModel from '../blocks/filter-model/filter-model';
import resetFilter from '../blocks/reset-filter/reset-filter';
import filterSale from '../blocks/filter-sale/filter-sale';
import additionalFilterParams from '../blocks/additional-filter-params/additional-filter-params';
import magazineRazdel from '../blocks/magazine-razdel/magazine-razdel';
import mobileSlidePopup from '../blocks/mobile-slide-popup/mobile-slide-popup';
import dottedDropdown from '../blocks/dotted-dropdown/dotted-dropdown';
import filterEngines from '../blocks/filter-engines/filter-engines';
import filterRest from '../blocks/filter-rest/filter-rest';
import accountSale from '../blocks/account-sale12/accountSale';

$(() => {
  index();
  burger();
  select();
  searchBar();
  mainSlider();
  filter();
  textField();
  upBtn();
  timeline();
  models();
  selectCurrency();
  counter();
  modal();
  scrollSlider();
  yachtSlider();
  commonInput();
  hint();
  truncate();
  eventsSlider();
  additionalFilterParams();
  filterSale();
  resetFilter();
  filterModel();
  magazineLongrid();
  eventPage();
  magazineRazdel();
  mobileSlidePopup();
  dottedDropdown();
  catalogYacht();
  filterEngines();
  filterRest();
  accountSale();
  map.then((googleMaps) => {
    // eslint-disable-next-line no-new
    new googleMaps.Map(document.getElementById('map'), {
      zoom: 8,
      center: new googleMaps.LatLng(59.942897, 30.247301),
      mapTypeId: googleMaps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#ffffff',
            },
          ],
        }, {
          featureType: 'all',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              visibility: 'on',
            }, {
              color: '#424b5b',
            }, {
              weight: 2,
            }, {
              gamma: '1',
            },
          ],
        }, {
          featureType: 'all',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        }, {
          featureType: 'administrative',
          elementType: 'geometry',
          stylers: [
            {
              weight: 0.6,
            }, {
              color: '#545b6b',
            }, {
              gamma: '0',
            },
          ],
        }, {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            {
              color: '#545b6b',
            }, {
              gamma: '1',
            }, {
              weight: '10',
            },
          ],
        }, {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#666c7b',
            },
          ],
        }, {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#545b6b',
            },
          ],
        }, {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#424a5b',
            }, {
              lightness: '0',
            },
          ],
        }, {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: '#666c7b',
            },
          ],
        }, {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#2e3546',
            },
          ],
        },
      ],
    });
  });
  catalogYacht();
});
