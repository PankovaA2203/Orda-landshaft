var ooptLayer = lyr_O_5;
var ooptSelect = document.getElementById('ooptSelect');
var searchResult = document.getElementById('searchResult');
var highlightStyle = new ol.style.Style({

    fill: new ol.style.Fill({
        color: 'rgba(255, 255, 0, 0.45)'
    }),
    stroke: new ol.style.Stroke({
        color: '#ff0000',
        width: 4
    })});
var features = ooptLayer.getSource().getFeatures();
var names = [];
features.forEach(function (feature) {
    var name = feature.get('Name');
    if (name && names.indexOf(name) === -1) {
        names.push(name);
    }});
names.sort();
names.forEach(function (name) {
    var option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    ooptSelect.appendChild(option);});
ooptSelect.addEventListener('change', function () {
    var selectedName = this.value;
    features.forEach(function (feature) {
        feature.setStyle(null);
    });if (selectedName === '') {
        searchResult.textContent = '';
        return;}
    var foundFeatures = [];
    features.forEach(function (feature) {
        var name = feature.get('Name');
        if (name === selectedName) {
            feature.setStyle(highlightStyle);
            foundFeatures.push(feature);
        }});
    if (foundFeatures.length > 0) {
        var extent = ol.extent.createEmpty();
        foundFeatures.forEach(function (feature) {
            ol.extent.extend(
                extent,
                feature.getGeometry().getExtent()
            );});
        map.getView().fit(extent, {
            padding: [80, 80, 80, 80],
            duration: 800,
            maxZoom: 14
        });
        searchResult.textContent =
            'Найдено объектов: ' + foundFeatures.length;

    }});