var wms_layers = [];


        var lyr_Ko_0 = new ol.layer.Tile({
            'title': 'Koсмоснимок',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_K_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kрутизна<br />\
    <img src="styles/legend/K_1_0.png" /> <= 1,0<br />\
    <img src="styles/legend/K_1_1.png" /> 1,0 - 3,0<br />\
    <img src="styles/legend/K_1_2.png" /> 3,0 - 5,0<br />\
    <img src="styles/legend/K_1_3.png" /> 5,0 - 8,0<br />\
    <img src="styles/legend/K_1_4.png" /> 8,0 - 10,0<br />\
    <img src="styles/legend/K_1_5.png" /> 10,0 - 35,0<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/K_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6260399.496340, 7727520.784708, 6369477.730344, 7818499.217204]
        })
    });
var lyr_P_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pельеф<br />\
    <img src="styles/legend/P_2_0.png" /> <= 150,00<br />\
    <img src="styles/legend/P_2_1.png" /> 150,00 - 175,00<br />\
    <img src="styles/legend/P_2_2.png" /> 175,00 - 200,00<br />\
    <img src="styles/legend/P_2_3.png" /> 200,00 - 225,00<br />\
    <img src="styles/legend/P_2_4.png" /> 225,00 - 250,00<br />\
    <img src="styles/legend/P_2_5.png" /> 250,00 - 500,00<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/P_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6260399.496340, 7727520.784708, 6369477.730344, 7818499.217204]
        })
    });
var format_Izoliniyi_3 = new ol.format.GeoJSON();
var features_Izoliniyi_3 = format_Izoliniyi_3.readFeatures(json_Izoliniyi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Izoliniyi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Izoliniyi_3.addFeatures(features_Izoliniyi_3);
var lyr_Izoliniyi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Izoliniyi_3, 
                style: style_Izoliniyi_3,
                popuplayertitle: 'Izoliniyi',
                interactive: false,
                title: '<img src="styles/legend/Izoliniyi_3.png" /> Izoliniyi'
            });
var lyr_LandCover_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LandCover Ландшафты<br />\
    <img src="styles/legend/LandCover_4_0.png" /> Bодная поверхность<br />\
    <img src="styles/legend/LandCover_4_1.png" /> Древесный покров<br />\
    <img src="styles/legend/LandCover_4_2.png" /> Травянистая растительность<br />\
    <img src="styles/legend/LandCover_4_3.png" /> Подтопленная растительность<br />\
    <img src="styles/legend/LandCover_4_4.png" /> Подтопленная растительность<br />\
    <img src="styles/legend/LandCover_4_5.png" /> Сельскохозяйственные угодья<br />\
    <img src="styles/legend/LandCover_4_6.png" /> Открытый грунт<br />\
    <img src="styles/legend/LandCover_4_7.png" /> Застроенные территории<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LandCover_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [6260850.741556, 7727492.805108, 6369346.541419, 7818072.556194]
        })
    });
var format_O_5 = new ol.format.GeoJSON();
var features_O_5 = format_O_5.readFeatures(json_O_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_O_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_O_5.addFeatures(features_O_5);
var lyr_O_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_O_5, 
                style: style_O_5,
                popuplayertitle: 'OОПТ',
                interactive: true,
                title: '<img src="styles/legend/O_5.png" /> OОПТ'
            });
var format_T_6 = new ol.format.GeoJSON();
var features_T_6 = format_T_6.readFeatures(json_T_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_6.addFeatures(features_T_6);
var lyr_T_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T_6, 
                style: style_T_6,
                popuplayertitle: 'Tочки фото',
                interactive: true,
                title: '<img src="styles/legend/T_6.png" /> Tочки фото'
            });
var format_O_7 = new ol.format.GeoJSON();
var features_O_7 = format_O_7.readFeatures(json_O_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_O_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_O_7.addFeatures(features_O_7);
var lyr_O_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_O_7, 
                style: style_O_7,
                popuplayertitle: 'Oдинский МО ПК',
                interactive: false,
                title: '<img src="styles/legend/O_7.png" /> Oдинский МО ПК'
            });

lyr_Ko_0.setVisible(true);lyr_K_1.setVisible(true);lyr_P_2.setVisible(true);lyr_Izoliniyi_3.setVisible(true);lyr_LandCover_4.setVisible(true);lyr_O_5.setVisible(true);lyr_T_6.setVisible(true);lyr_O_7.setVisible(true);
var layersList = [lyr_Ko_0,lyr_K_1,lyr_P_2,lyr_Izoliniyi_3,lyr_LandCover_4,lyr_O_5,lyr_T_6,lyr_O_7];
lyr_Izoliniyi_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_O_5.set('fieldAliases', {'Name': 'Название ООПТ', 'Описа': 'Описа', 'Photos': 'Фото', });
lyr_T_6.set('fieldAliases', {'id': 'id', 'name': 'Haзвание ландшафтов', 'photos': 'Фотографии', });
lyr_O_7.set('fieldAliases', {'id': 'id', 'S': 'S', });
lyr_Izoliniyi_3.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_O_5.set('fieldImages', {'Name': 'ValueMap', 'Описа': '', 'Photos': 'ExternalResource', });
lyr_T_6.set('fieldImages', {'id': 'TextEdit', 'name': 'ValueMap', 'photos': 'ExternalResource', });
lyr_O_7.set('fieldImages', {'id': '', 'S': '', });
lyr_Izoliniyi_3.set('fieldLabels', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_O_5.set('fieldLabels', {'Name': 'inline label - always visible', 'Описа': 'inline label - always visible', 'Photos': 'inline label - always visible', });
lyr_T_6.set('fieldLabels', {'id': 'inline label - always visible', 'name': 'inline label - always visible', 'photos': 'inline label - always visible', });
lyr_O_7.set('fieldLabels', {'id': 'no label', 'S': 'no label', });
lyr_O_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});