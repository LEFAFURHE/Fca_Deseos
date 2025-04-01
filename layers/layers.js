ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8442505.346652, 996706.147294, -8440745.257596, 997551.882094]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Yuca_17032025_1 = new ol.format.GeoJSON();
var features_Yuca_17032025_1 = format_Yuca_17032025_1.readFeatures(json_Yuca_17032025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yuca_17032025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yuca_17032025_1.addFeatures(features_Yuca_17032025_1);
var lyr_Yuca_17032025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yuca_17032025_1, 
                style: style_Yuca_17032025_1,
                popuplayertitle: 'Yuca_17032025',
                interactive: true,
                title: '<img src="styles/legend/Yuca_17032025_1.png" /> Yuca_17032025'
            });
var format_Yuca_Act_2 = new ol.format.GeoJSON();
var features_Yuca_Act_2 = format_Yuca_Act_2.readFeatures(json_Yuca_Act_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yuca_Act_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yuca_Act_2.addFeatures(features_Yuca_Act_2);
var lyr_Yuca_Act_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yuca_Act_2, 
                style: style_Yuca_Act_2,
                popuplayertitle: 'Yuca_Act',
                interactive: true,
                title: '<img src="styles/legend/Yuca_Act_2.png" /> Yuca_Act'
            });
var format_Finca_La_China_3 = new ol.format.GeoJSON();
var features_Finca_La_China_3 = format_Finca_La_China_3.readFeatures(json_Finca_La_China_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Finca_La_China_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Finca_La_China_3.addFeatures(features_Finca_La_China_3);
var lyr_Finca_La_China_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Finca_La_China_3, 
                style: style_Finca_La_China_3,
                popuplayertitle: 'Finca_La_China',
                interactive: true,
                title: '<img src="styles/legend/Finca_La_China_3.png" /> Finca_La_China'
            });
var format_Lote_Abraham_2024_4 = new ol.format.GeoJSON();
var features_Lote_Abraham_2024_4 = format_Lote_Abraham_2024_4.readFeatures(json_Lote_Abraham_2024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote_Abraham_2024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote_Abraham_2024_4.addFeatures(features_Lote_Abraham_2024_4);
var lyr_Lote_Abraham_2024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote_Abraham_2024_4, 
                style: style_Lote_Abraham_2024_4,
                popuplayertitle: 'Lote_Abraham_2024',
                interactive: true,
                title: '<img src="styles/legend/Lote_Abraham_2024_4.png" /> Lote_Abraham_2024'
            });
var format_Lote_La_Osita_2024_5 = new ol.format.GeoJSON();
var features_Lote_La_Osita_2024_5 = format_Lote_La_Osita_2024_5.readFeatures(json_Lote_La_Osita_2024_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote_La_Osita_2024_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote_La_Osita_2024_5.addFeatures(features_Lote_La_Osita_2024_5);
var lyr_Lote_La_Osita_2024_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote_La_Osita_2024_5, 
                style: style_Lote_La_Osita_2024_5,
                popuplayertitle: 'Lote_La_Osita_2024',
                interactive: true,
                title: '<img src="styles/legend/Lote_La_Osita_2024_5.png" /> Lote_La_Osita_2024'
            });
var format_Lote_Casa_2024_6 = new ol.format.GeoJSON();
var features_Lote_Casa_2024_6 = format_Lote_Casa_2024_6.readFeatures(json_Lote_Casa_2024_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lote_Casa_2024_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote_Casa_2024_6.addFeatures(features_Lote_Casa_2024_6);
var lyr_Lote_Casa_2024_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote_Casa_2024_6, 
                style: style_Lote_Casa_2024_6,
                popuplayertitle: 'Lote_Casa_2024',
                interactive: true,
                title: '<img src="styles/legend/Lote_Casa_2024_6.png" /> Lote_Casa_2024'
            });
var format_Colindantes_7 = new ol.format.GeoJSON();
var features_Colindantes_7 = format_Colindantes_7.readFeatures(json_Colindantes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colindantes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colindantes_7.addFeatures(features_Colindantes_7);
var lyr_Colindantes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colindantes_7, 
                style: style_Colindantes_7,
                popuplayertitle: 'Colindantes',
                interactive: true,
                title: '<img src="styles/legend/Colindantes_7.png" /> Colindantes'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Yuca_17032025_1.setVisible(true);lyr_Yuca_Act_2.setVisible(true);lyr_Finca_La_China_3.setVisible(true);lyr_Lote_Abraham_2024_4.setVisible(true);lyr_Lote_La_Osita_2024_5.setVisible(true);lyr_Lote_Casa_2024_6.setVisible(true);lyr_Colindantes_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Yuca_17032025_1,lyr_Yuca_Act_2,lyr_Finca_La_China_3,lyr_Lote_Abraham_2024_4,lyr_Lote_La_Osita_2024_5,lyr_Lote_Casa_2024_6,lyr_Colindantes_7];
lyr_Yuca_17032025_1.set('fieldAliases', {'id': 'id', 'Área': 'Área', 'Obs': 'Obs', 'Lote': 'Lote', });
lyr_Yuca_Act_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Área': 'Área', });
lyr_Finca_La_China_3.set('fieldAliases', {'id': 'id', 'Área': 'Área', });
lyr_Lote_Abraham_2024_4.set('fieldAliases', {'id': 'id', 'Área': 'Área', 'm2': 'm2', });
lyr_Lote_La_Osita_2024_5.set('fieldAliases', {'id': 'id', 'Área': 'Área', 'm2': 'm2', });
lyr_Lote_Casa_2024_6.set('fieldAliases', {'id': 'id', 'Área': 'Área', 'm2': 'm2', });
lyr_Colindantes_7.set('fieldAliases', {'id': 'id', });
lyr_Yuca_17032025_1.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'Obs': '', 'Lote': '', });
lyr_Yuca_Act_2.set('fieldImages', {'id': '', 'Name': '', 'Área': '', });
lyr_Finca_La_China_3.set('fieldImages', {'id': '', 'Área': '', });
lyr_Lote_Abraham_2024_4.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'm2': 'TextEdit', });
lyr_Lote_La_Osita_2024_5.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'm2': 'TextEdit', });
lyr_Lote_Casa_2024_6.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'm2': 'TextEdit', });
lyr_Colindantes_7.set('fieldImages', {'id': '', });
lyr_Yuca_17032025_1.set('fieldLabels', {'id': 'no label', 'Área': 'inline label - always visible', 'Obs': 'inline label - always visible', 'Lote': 'inline label - always visible', });
lyr_Yuca_Act_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Área': 'no label', });
lyr_Finca_La_China_3.set('fieldLabels', {'id': 'no label', 'Área': 'no label', });
lyr_Lote_Abraham_2024_4.set('fieldLabels', {'id': 'no label', 'Área': 'no label', 'm2': 'no label', });
lyr_Lote_La_Osita_2024_5.set('fieldLabels', {'id': 'no label', 'Área': 'no label', 'm2': 'no label', });
lyr_Lote_Casa_2024_6.set('fieldLabels', {'id': 'no label', 'Área': 'inline label - always visible', 'm2': 'no label', });
lyr_Colindantes_7.set('fieldLabels', {'id': 'hidden field', });
lyr_Colindantes_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});