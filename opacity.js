var landcover = lyr_LandCover_4;

var opacitySlider = document.getElementById('opacitySlider');
var opacityValue = document.getElementById('opacityValue');

opacitySlider.addEventListener('input', function () {

    var opacity = parseFloat(this.value);

    landcover.setOpacity(opacity);

    opacityValue.textContent =
        Math.round(opacity * 100) + '%';

});