var wms_layers = [];

        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'GoogleSatellite_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'GoogleMaps_1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_GUS_liczba_Mieszkancow_2 = new ol.format.GeoJSON();
var features_GUS_liczba_Mieszkancow_2 = format_GUS_liczba_Mieszkancow_2.readFeatures(json_GUS_liczba_Mieszkancow_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GUS_liczba_Mieszkancow_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_GUS_liczba_Mieszkancow_2.addFeatures(features_GUS_liczba_Mieszkancow_2);var lyr_GUS_liczba_Mieszkancow_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GUS_liczba_Mieszkancow_2, 
                style: style_GUS_liczba_Mieszkancow_2,
    title: 'GUS_liczba_Mieszkancow<br />\
    <img src="styles/legend/GUS_liczba_Mieszkancow_2_0.png" />  0.0000 - 4306.2000 <br />\
    <img src="styles/legend/GUS_liczba_Mieszkancow_2_1.png" />  4306.2000 - 8612.4000 <br />\
    <img src="styles/legend/GUS_liczba_Mieszkancow_2_2.png" />  8612.4000 - 12918.6000 <br />\
    <img src="styles/legend/GUS_liczba_Mieszkancow_2_3.png" />  12918.6000 - 17224.8000 <br />\
    <img src="styles/legend/GUS_liczba_Mieszkancow_2_4.png" />  17224.8000 - 21531.0000 <br />'
        });var format_oczyszczalnie_3 = new ol.format.GeoJSON();
var features_oczyszczalnie_3 = format_oczyszczalnie_3.readFeatures(json_oczyszczalnie_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oczyszczalnie_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_oczyszczalnie_3.addFeatures(features_oczyszczalnie_3);var lyr_oczyszczalnie_3 = new ol.layer.Heatmap({
                declutter: true,
                source:jsonSource_oczyszczalnie_3, 
                radius: 10 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'BZT5 [mgO2';
        var featureWeight = feature.get(weightField);
        var maxWeight = 2544;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'oczyszczalnie'
            });var format_oczyszczalnie_4 = new ol.format.GeoJSON();
var features_oczyszczalnie_4 = format_oczyszczalnie_4.readFeatures(json_oczyszczalnie_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oczyszczalnie_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_oczyszczalnie_4.addFeatures(features_oczyszczalnie_4);var lyr_oczyszczalnie_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_oczyszczalnie_4, 
                style: style_oczyszczalnie_4,
                title: '<img src="styles/legend/oczyszczalnie_4.png" /> oczyszczalnie'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GUS_liczba_Mieszkancow_2.setVisible(true);lyr_oczyszczalnie_3.setVisible(true);lyr_oczyszczalnie_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_GUS_liczba_Mieszkancow_2,lyr_oczyszczalnie_3,lyr_oczyszczalnie_4];
lyr_GUS_liczba_Mieszkancow_2.set('fieldAliases', {'TOT': 'TOT', 'TOT_0_14': 'TOT_0_14', 'TOT_15_64': 'TOT_15_64', 'TOT_65__': 'TOT_65__', 'TOT_MALE': 'TOT_MALE', 'TOT_FEM': 'TOT_FEM', 'MALE_0_14': 'MALE_0_14', 'MALE_15_64': 'MALE_15_64', 'MALE_65__': 'MALE_65__', 'FEM_0_14': 'FEM_0_14', 'FEM_15_64': 'FEM_15_64', 'FEM_65__': 'FEM_65__', 'FEM_RATIO': 'FEM_RATIO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'CODE': 'CODE', });
lyr_oczyszczalnie_4.set('fieldAliases', {'Miasto': 'Miasto', 'średnia [': 'Qśr [m3/h]', 'BZT5 [mgO2': 'BZT% doplyw', 'ChZT [mgO2': 'ChZT [mgO2', 'zawiesina': 'zawiesina', 'azot [mg/l': 'azot [mg/l', 'fosfor [mg': 'fosfor [mg', 'BZT5 [mg_1': 'BZT5 odpływ', 'sposób za': 'Sposób zagospodarowania ', 'długość': 'długość', 'szerokoś�': 'szerokoś�', });
lyr_GUS_liczba_Mieszkancow_2.set('fieldImages', {'TOT': 'TextEdit', 'TOT_0_14': 'Hidden', 'TOT_15_64': 'Hidden', 'TOT_65__': 'Hidden', 'TOT_MALE': 'Hidden', 'TOT_FEM': 'Hidden', 'MALE_0_14': 'Hidden', 'MALE_15_64': 'Hidden', 'MALE_65__': 'Hidden', 'FEM_0_14': 'Hidden', 'FEM_15_64': 'Hidden', 'FEM_65__': 'Hidden', 'FEM_RATIO': 'Hidden', 'SHAPE_Leng': 'Hidden', 'SHAPE_Area': 'Hidden', 'CODE': 'Hidden', });
lyr_oczyszczalnie_4.set('fieldImages', {'Miasto': 'TextEdit', 'średnia [': 'TextEdit', 'BZT5 [mgO2': 'TextEdit', 'ChZT [mgO2': 'Hidden', 'zawiesina': 'Hidden', 'azot [mg/l': 'Hidden', 'fosfor [mg': 'Hidden', 'BZT5 [mg_1': 'TextEdit', 'sposób za': 'TextEdit', 'długość': 'Hidden', 'szerokoś�': 'Hidden', });
lyr_GUS_liczba_Mieszkancow_2.set('fieldLabels', {'TOT': 'inline label', });
lyr_oczyszczalnie_4.set('fieldLabels', {'Miasto': 'inline label', 'średnia [': 'inline label', 'BZT5 [mgO2': 'inline label', 'BZT5 [mg_1': 'inline label', 'sposób za': 'inline label', });
lyr_oczyszczalnie_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});