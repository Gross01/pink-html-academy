ymaps.ready(init);

let center = [59.93863106417265,30.323036499999905];

function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 18
  })

  let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/icons/map-marker.svg',
    iconImageSize: [36, 36],
    iconImageOffset: [-18, -18]
  })

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('rulerControl');

  map.geoObjects.add(placemark);
}
