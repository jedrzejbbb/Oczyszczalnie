var size = 0;
var placement = 'point';

var style_GUS_liczba_Mieszkancow_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("TOT");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 4306.200000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,255,255,0.619)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 4306.200000 && value <= 8612.400000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,191,191,0.619)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 8612.400000 && value <= 12918.600000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,128,128,0.619)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 12918.600000 && value <= 17224.800000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,64,64,0.619)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 17224.800000 && value <= 21531.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,0,0,0.619)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
