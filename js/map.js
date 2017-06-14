ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.93927707, 30.31981439],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Nerds - Дизайн студия',
            balloonContent: 'Санкт-Петербург, ул. Б. Конюшенная, д. 19/8'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map-marker.png',
            iconImageSize: [231, 190],
            iconImageOffset: [100, -120],
			balloonContentOffset: [0, 100]
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});
