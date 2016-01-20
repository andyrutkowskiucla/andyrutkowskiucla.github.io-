// Set view of Leaflet map based on screen size
var layer = new L.StamenTileLayer('toner-background');
if ($(window).width() < 626) {
	var map = new L.Map('map').setView([33,-118],6);
} else {
	var map = new L.Map('map').setView([33,-118],7);
}
map.addLayer(layer);
