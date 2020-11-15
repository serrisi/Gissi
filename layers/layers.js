var wms_layers = [];

var format_Foto_rilievo_0 = new ol.format.GeoJSON();
var features_Foto_rilievo_0 = format_Foto_rilievo_0.readFeatures(json_Foto_rilievo_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Foto_rilievo_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Foto_rilievo_0.addFeatures(features_Foto_rilievo_0);
var lyr_Foto_rilievo_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Foto_rilievo_0, 
                style: style_Foto_rilievo_0,
                interactive: true,
                title: '<img src="styles/legend/Foto_rilievo_0.png" /> Foto_rilievo'
            });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PubblicaIlluminazione_2 = new ol.format.GeoJSON();
var features_PubblicaIlluminazione_2 = format_PubblicaIlluminazione_2.readFeatures(json_PubblicaIlluminazione_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PubblicaIlluminazione_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PubblicaIlluminazione_2.addFeatures(features_PubblicaIlluminazione_2);
var lyr_PubblicaIlluminazione_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PubblicaIlluminazione_2, 
                style: style_PubblicaIlluminazione_2,
                interactive: true,
                title: '<img src="styles/legend/PubblicaIlluminazione_2.png" /> PubblicaIlluminazione'
            });
var format_LineeNuove_3 = new ol.format.GeoJSON();
var features_LineeNuove_3 = format_LineeNuove_3.readFeatures(json_LineeNuove_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineeNuove_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineeNuove_3.addFeatures(features_LineeNuove_3);
var lyr_LineeNuove_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LineeNuove_3, 
                style: style_LineeNuove_3,
                interactive: true,
                title: '<img src="styles/legend/LineeNuove_3.png" /> LineeNuove'
            });
var format_NissoriaNissoria_4 = new ol.format.GeoJSON();
var features_NissoriaNissoria_4 = format_NissoriaNissoria_4.readFeatures(json_NissoriaNissoria_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NissoriaNissoria_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NissoriaNissoria_4.addFeatures(features_NissoriaNissoria_4);
var lyr_NissoriaNissoria_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NissoriaNissoria_4, 
                style: style_NissoriaNissoria_4,
                interactive: true,
                title: 'Nissoria Nissoria'
            });
var format_QuadriNissoria_5 = new ol.format.GeoJSON();
var features_QuadriNissoria_5 = format_QuadriNissoria_5.readFeatures(json_QuadriNissoria_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuadriNissoria_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuadriNissoria_5.addFeatures(features_QuadriNissoria_5);
var lyr_QuadriNissoria_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_QuadriNissoria_5, 
                style: style_QuadriNissoria_5,
                interactive: true,
                title: '<img src="styles/legend/QuadriNissoria_5.png" /> QuadriNissoria'
            });
var group_Foto_rilievo = new ol.layer.Group({
                                layers: [lyr_Foto_rilievo_0,],
                                title: "Foto_rilievo"});

lyr_Foto_rilievo_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_PubblicaIlluminazione_2.setVisible(true);lyr_LineeNuove_3.setVisible(true);lyr_NissoriaNissoria_4.setVisible(true);lyr_QuadriNissoria_5.setVisible(true);
var layersList = [group_Foto_rilievo,lyr_GoogleSatellite_1,lyr_PubblicaIlluminazione_2,lyr_LineeNuove_3,lyr_NissoriaNissoria_4,lyr_QuadriNissoria_5];
lyr_Foto_rilievo_0.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Altitude': 'Altitude', 'North': 'North', 'Azimuth': 'Azimuth', 'Camera Mak': 'Camera Mak', 'Camera Mod': 'Camera Mod', 'Title': 'Title', 'Comment': 'Comment', 'Path': 'Path', 'RelPath': 'RelPath', 'Timestamp': 'Timestamp', });
lyr_PubblicaIlluminazione_2.set('fieldAliases', {'fid': 'fid', 'codEle': 'codEle', 'Descrizione': 'Descrizione', });
lyr_LineeNuove_3.set('fieldAliases', {'fid': 'fid', 'codEle': 'codEle', 'Descrizione': 'Descrizione', 'Foto1': 'Foto1', 'Foto2': 'Foto2', });
lyr_NissoriaNissoria_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', '03_Quadro': 'codice quadro', '10_TP_LN': 'tipo di linea', '11_TP_ST': 'stato sostegno', '13_Nbracci': 'numero bracci', '12_MA_ST': 'materiale sostegno', '21_TP_LA': 'tipo lampada', '22_PT_LA': 'potenza lampada', '23_CLamp': 'corpo lampada', '24_ST_ARM': 'stato armatura', 'Foto1': 'Foto1', 'Foto2': 'Foto2', '14_ST_PL': 'stato punto luce', '29_Note': '29_Note', '01_N_PLa': 'numero punto luce a', '02_N_PLb': 'numero punto luce b', '20_N_LA': 'numero lampade', '25_ST_LA': 'stato lampada', 'cod_PL': 'cod_PL', 'Proprieta': 'Proprietà', });
lyr_QuadriNissoria_5.set('fieldAliases', {'fid': 'ID_QUADRI', 'Foto1': 'Foto1', 'Foto2': 'Foto2', 'Foto3': 'Foto3', 'Foto4': 'Foto4', 'Note': 'Note Quadro Elettrico', 'NroLinea': 'Codice Linea Quadri', 'CodQuadro': 'Codice Quadro Elettrico', 'Ubicazione': 'Ubicazione', 'N_Lamp_Alim': 'Nro Lampade Alimentate', 'N_Linee_Usc': 'Nro Linee Uscenti', 'N_Quadri_Alime': 'Nro Quadri Alimentati', 'Punto_Contatore_S_N': 'Quadro Contatore [s/n]', 'StatoQELE': 'StatoQELE', 'NoteContatore': 'NoteContatore', 'NroLineeContatore': 'Nro Linee dal contatore', });
lyr_Foto_rilievo_0.set('fieldImages', {'ID': 'Hidden', 'Name': 'TextEdit', 'Date': 'DateTime', 'Time': 'DateTime', 'Lon': 'TextEdit', 'Lat': 'TextEdit', 'Altitude': 'TextEdit', 'North': 'TextEdit', 'Azimuth': 'TextEdit', 'Camera Mak': 'TextEdit', 'Camera Mod': 'TextEdit', 'Title': 'TextEdit', 'Comment': 'TextEdit', 'Path': 'TextEdit', 'RelPath': 'TextEdit', 'Timestamp': 'TextEdit', });
lyr_PubblicaIlluminazione_2.set('fieldImages', {'fid': 'TextEdit', 'codEle': 'TextEdit', 'Descrizione': 'TextEdit', });
lyr_LineeNuove_3.set('fieldImages', {'fid': 'TextEdit', 'codEle': 'TextEdit', 'Descrizione': 'TextEdit', 'Foto1': 'ExternalResource', 'Foto2': 'ExternalResource', });
lyr_NissoriaNissoria_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', '03_Quadro': 'TextEdit', '10_TP_LN': 'ValueMap', '11_TP_ST': 'ValueMap', '13_Nbracci': 'Range', '12_MA_ST': 'ValueMap', '21_TP_LA': 'ValueMap', '22_PT_LA': 'Range', '23_CLamp': 'ValueMap', '24_ST_ARM': 'ValueMap', 'Foto1': 'ExternalResource', 'Foto2': 'ExternalResource', '14_ST_PL': 'ValueMap', '29_Note': 'TextEdit', '01_N_PLa': 'Range', '02_N_PLb': 'Range', '20_N_LA': 'Range', '25_ST_LA': 'ValueMap', 'cod_PL': 'TextEdit', 'Proprieta': 'ValueMap', });
lyr_QuadriNissoria_5.set('fieldImages', {'fid': 'TextEdit', 'Foto1': 'ExternalResource', 'Foto2': 'ExternalResource', 'Foto3': 'ExternalResource', 'Foto4': 'ExternalResource', 'Note': 'TextEdit', 'NroLinea': 'TextEdit', 'CodQuadro': 'TextEdit', 'Ubicazione': 'TextEdit', 'N_Lamp_Alim': 'Range', 'N_Linee_Usc': 'Range', 'N_Quadri_Alime': 'Range', 'Punto_Contatore_S_N': 'CheckBox', 'StatoQELE': 'ValueMap', 'NoteContatore': 'TextEdit', 'NroLineeContatore': 'Range', });
lyr_Foto_rilievo_0.set('fieldLabels', {});
lyr_PubblicaIlluminazione_2.set('fieldLabels', {'fid': 'no label', 'codEle': 'no label', 'Descrizione': 'no label', });
lyr_LineeNuove_3.set('fieldLabels', {'fid': 'no label', 'codEle': 'no label', 'Descrizione': 'no label', 'Foto1': 'no label', 'Foto2': 'no label', });
lyr_NissoriaNissoria_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', '03_Quadro': 'no label', '10_TP_LN': 'no label', '11_TP_ST': 'no label', '13_Nbracci': 'no label', '12_MA_ST': 'no label', '21_TP_LA': 'no label', '22_PT_LA': 'no label', '23_CLamp': 'no label', '24_ST_ARM': 'no label', 'Foto1': 'no label', 'Foto2': 'no label', '14_ST_PL': 'no label', '29_Note': 'no label', '01_N_PLa': 'no label', '02_N_PLb': 'no label', '20_N_LA': 'no label', '25_ST_LA': 'no label', 'cod_PL': 'no label', 'Proprieta': 'no label', });
lyr_QuadriNissoria_5.set('fieldLabels', {'fid': 'no label', 'Foto1': 'no label', 'Foto2': 'no label', 'Foto3': 'no label', 'Foto4': 'no label', 'Note': 'no label', 'NroLinea': 'no label', 'CodQuadro': 'no label', 'Ubicazione': 'no label', 'N_Lamp_Alim': 'no label', 'N_Linee_Usc': 'no label', 'N_Quadri_Alime': 'no label', 'Punto_Contatore_S_N': 'no label', 'StatoQELE': 'no label', 'NoteContatore': 'no label', 'NroLineeContatore': 'no label', });
lyr_QuadriNissoria_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});