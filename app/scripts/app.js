/*eslint-disable*/
import $ from 'jquery';
import 'babel-polyfill';
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import './common/device';
// import commonInput from './common/input';
import burger from '../blocks/burger/burger';
// import upBtn from '../blocks/up-btn/up-btn';
import select from '../blocks/select/select';
import searchBar from '../blocks/search-bar/search-bar';
// import mainSlider from '../blocks/main-slider/main-slider';
// import filter from '../blocks/filter/filter';
import textField from '../blocks/text-field/text-field';
// import timeline from '../blocks/timeline/timeline';
// import models from '../blocks/models/models';
// import counter from '../blocks/counter/counter';
// import modal from '../blocks/modal/modal';
// import scrollSlider from '../blocks/scroll-slider/scroll-slider';
// import catalogYacht from '../blocks/catalog-yacht/catalog-yacht';
// import yachtSlider from '../blocks/yacht-slider/yacht-slider';
// import hint from '../blocks/hint/hint';
// import truncate from '../blocks/yacht-page/yacht-page';
// import index from '../blocks/index/index';
// import magazineLongrid from '../blocks/magazine-longrid/magazine-longrid';
// import map from './common/map';
// import eventsSlider from '../blocks/events/events';
// import eventPage from '../blocks/event-page/event-page';
// import filterModel from '../blocks/filter-model/filter-model';
// import resetFilter from '../blocks/reset-filter/reset-filter';
// import filterSale from '../blocks/filter-sale/filter-sale';
// import additionalFilterParams from '../blocks/additional-filter-params/additional-filter-params';
// import magazineRazdel from '../blocks/magazine-razdel/magazine-razdel';
// import mobileSlidePopup from '../blocks/mobile-slide-popup/mobile-slide-popup';
// import customSlider from '../blocks/custom-slider/custom-slider';
// import filterEngines from '../blocks/filter-engines/filter-engines';
import accountSale from '../blocks/account-sale12/accountSale';
// import accountShop from '../blocks/account-shop-3-page/account-shop-3-page';
// import yachtClub from '../blocks/yacht-club/yachtClub';
// import tarif from '../blocks/tarif/tarif';
// import shop1 from '../blocks/shop1/shop1';
// import accountFaq from '../blocks/account-faq/accountFaq';
import accountNavigation from '../blocks/account-navigation/account-navigation';
// import saleRaznoe from '../blocks/sale-raznoe/sale-raznoe';
// import branding from '../blocks/branding/branding';
import header from '../blocks/header/header';
import burgerDropdown from '../blocks/burger-dropdown/burger-dropdown';
import subscribe from '../blocks/subscribe/subscribe';
// import verphe from '../blocks/verphe/verphe';
// import join from '../blocks/join/join';
// import scrollable from '../blocks/scrollable/scrollable';
import accountSale3 from '../blocks/account-sale3/account-sale3';
// import catalogVerphePage from '../blocks/catalog-verphe-page/catalog-verphe-page';
// import shops from '../blocks/shop-s/shop-s';
// import magazinePage from '../blocks/magazine-page/magazine-page';
// import accountProposePopup from '../blocks/account-propose-popup/account-propose-popup';
// import buyMagazineForm from '../blocks/buy-magazine-form/buy-magazine-form';
// import accountMessages1 from '../blocks/account-messages-1/account-message-1';
// import forgotPassword from '../blocks/forgot-password/forgot-password';
// import gallerySliderPopup from '../blocks/gallery-slider-popup/gallery-slider-popup';
// import magazineVideo from '../blocks/magazine-video/magazine-video';
// import magazineVideos from '../blocks/magazine-videos/magazine-videos';

// $(window).on('load', () => {
//   scrollable();
// });

$(() => {
  objectFitImages('.image-bg__img');
  svg4everybody();
  // index();
  // scrollable();
  textField();
  header();
  burger();
  select();
  searchBar();
  // mainSlider();
  // filter();
  // upBtn();
  // timeline();
  // models();
  // counter();
  // modal();
  // accountFaq();
  // scrollSlider();
  // yachtSlider();
  // commonInput();
  // hint();
  // truncate();
  // eventsSlider();
  // additionalFilterParams();
  // filterSale();
  // resetFilter();
  // filterModel();
  // magazineLongrid();
  // eventPage();
  // magazineRazdel();
  // mobileSlidePopup();
  // customSlider();
  // catalogYacht();
  // filterEngines();
  // yachtClub();
  accountSale();
  // accountShop();
  // tarif();
  // shop1();
  accountNavigation();
  // saleRaznoe();
  // branding();
  burgerDropdown();
  subscribe();
  // verphe();
  // join();
  accountSale3();
  // catalogVerphePage();
  // shops();
  // magazinePage();
  // accountProposePopup();
  // buyMagazineForm();
  // accountMessages1();
  // forgotPassword();
  // gallerySliderPopup();
  // magazineVideo();
  // magazineVideos();
  // const mapElement = document.getElementById('map');
  //
  // if (!mapElement) {
  //   return;
  // }
  //
  // map.then((googleMaps) => {
  //   // eslint-disable-next-line no-new
  //   new googleMaps.Map(mapElement, {
  //     zoom: 8,
  //     center: new googleMaps.LatLng(59.942897, 30.247301),
  //     mapTypeId: googleMaps.MapTypeId.ROADMAP,
  //     scrollwheel: false,
  //     styles: [
  //       {
  //         featureType: 'all',
  //         elementType: 'labels.text.fill',
  //         stylers: [
  //           {
  //             color: '#ffffff',
  //           },
  //         ],
  //       }, {
  //         featureType: 'all',
  //         elementType: 'labels.text.stroke',
  //         stylers: [
  //           {
  //             visibility: 'on',
  //           }, {
  //             color: '#424b5b',
  //           }, {
  //             weight: 2,
  //           }, {
  //             gamma: '1',
  //           },
  //         ],
  //       }, {
  //         featureType: 'all',
  //         elementType: 'labels.icon',
  //         stylers: [
  //           {
  //             visibility: 'off',
  //           },
  //         ],
  //       }, {
  //         featureType: 'administrative',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             weight: 0.6,
  //           }, {
  //             color: '#545b6b',
  //           }, {
  //             gamma: '0',
  //           },
  //         ],
  //       }, {
  //         featureType: 'landscape',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#545b6b',
  //           }, {
  //             gamma: '1',
  //           }, {
  //             weight: '10',
  //           },
  //         ],
  //       }, {
  //         featureType: 'poi',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#666c7b',
  //           },
  //         ],
  //       }, {
  //         featureType: 'poi.park',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#545b6b',
  //           },
  //         ],
  //       }, {
  //         featureType: 'road',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#424a5b',
  //           }, {
  //             lightness: '0',
  //           },
  //         ],
  //       }, {
  //         featureType: 'transit',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#666c7b',
  //           },
  //         ],
  //       }, {
  //         featureType: 'water',
  //         elementType: 'geometry',
  //         stylers: [
  //           {
  //             color: '#2e3546',
  //           },
  //         ],
  //       },
  //     ],
  //   });
  // }).catch(f => f);
});
