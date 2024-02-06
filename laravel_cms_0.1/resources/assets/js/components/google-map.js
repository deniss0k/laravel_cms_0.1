// $(function() {
//     "use strict";
//
//     var map = $("#map");
//
//     if(map.length) {
//         google.maps.event.addDomListener(window, 'load', init);
//
//         var mapZoom = 15;
//
//         function init() {
//             // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//             var mapOptions = {
//                 // How zoomed in you want the map to start at (always required)
//                 zoom: mapZoom,
//                 scrollwheel: false,
//                 mapTypeControl: false,
//                 streetViewControl: false,
//                 zoomControl: false,
//
//                 center: new google.maps.LatLng(56.9494287,24.1211021),
//
//                 // styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f5f5f5"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#aed36c"},{"lightness":"71"}]},{"featureType":"landscape.man_made","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":"21"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#aed36c"},{"visibility":"on"}]}]
//             };
//
//
//
//             var mapElement = document.getElementById('map');
//             var map = new google.maps.Map(mapElement, mapOptions);
//
//             // Add a marker
//             var marker = new google.maps.Marker({
//                 position: new google.maps.LatLng(56.9494287,24.1211021),
//                 map: map,
//                 title: 'Shop',
//                 icon: window.location.origin + "/images/map-pointer.png"
//             });
//
//
//             // Enable scroll zoom after click on map
//             map.addListener('click', function() {
//                map.setOptions({
//                    scrollwheel: true
//                });
//             });
//
//
//             map.addListener('drag', function() {
//                map.setOptions({
//                    scrollwheel: true
//                });
//             });
//
//
//             // Disable scroll zoom when mouse leave map
//             map.addListener('mouseout', function() {
//                map.setOptions({
//                    scrollwheel: false
//                });
//             });
//
//             var getCen = map.getCenter();
//
//             google.maps.event.addDomListener(window, 'resize', function() {
//                 map.setCenter(getCen);
//             });
//         }
//     }
// });
//
//
// // When the window has finished loading create our google map below
// // google.maps.event.addDomListener(window, 'load', init);
// //
// // function init() {
// //     // Basic options for a simple Google Map
// //     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
// //     var mapOptions = {
// //         // How zoomed in you want the map to start at (always required)
// //         zoom: 11,
// //
// //         // The latitude and longitude to center the map (always required)
// //         center: new google.maps.LatLng(40.6700, -73.9400), // New York
// //
// //         // How you would like to style the map.
// //         // This is where you would paste any style found on Snazzy Maps.
// //         styles: []
// //     };
// //
// //     // Get the HTML DOM element that will contain your map
// //     // We are using a div with id="map" seen below in the <body>
// //     var mapElement = document.getElementById('map');
// //
// //     // Create the Google Map using our element and options defined above
// //     var map = new google.maps.Map(mapElement, mapOptions);
// //
// //     // Let's also add a marker while we're at it
// //     var marker = new google.maps.Marker({
// //         position: new google.maps.LatLng(40.6700, -73.9400),
// //         map: map,
// //         title: 'Snazzy!'
// //     });
// // }