google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
  var mapOptions = {
    center: new google.maps.LatLng(48.9080032,2.3970397,21),
    zoom: 13,
    zoomControl: false,
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    scaleControl: false,
    scrollwheel: false,
    panControl: false,
    streetViewControl: false,
    draggable : true,
    overviewMapControl: false,
    overviewMapControlOptions: {
      opened: false,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [{"featureType":"water","stylers":[{"color":"#AAFFAA"},{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"color":"#FFFFFF"}]},{"featureType":"road","stylers":[{"saturation":-80},{"lightness":55}]},{"featureType":"road.highway","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#555555"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]}]
}
    var mapElement = document.getElementById('map_canvas');
  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
      position: map.getCenter(),
      icon: 'assets/images/icon.png',
      shadow : 'assets/images/icon_shadow.png',
      map: map,
      position: new google.maps.LatLng(48.9080032,2.3970397,21),
      size : new google.maps.Size(100, 200)
    });
  
  marker.addListener('click', toggleBounce);

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

}
