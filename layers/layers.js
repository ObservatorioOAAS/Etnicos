var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1 = new ol.format.GeoJSON();
var features_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1 = format_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1.readFeatures(json_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1.addFeatures(features_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1);
var lyr_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1, 
                style: style_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1,
                interactive: true,
                title: '<img src="styles/legend/Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1.png" /> Solicitud_Legalizacion_Resguardo_Indigena_Colonial'
            });
var format_Solicitud_Legalizacion_Expectativas_Ancestrales_2 = new ol.format.GeoJSON();
var features_Solicitud_Legalizacion_Expectativas_Ancestrales_2 = format_Solicitud_Legalizacion_Expectativas_Ancestrales_2.readFeatures(json_Solicitud_Legalizacion_Expectativas_Ancestrales_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solicitud_Legalizacion_Expectativas_Ancestrales_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solicitud_Legalizacion_Expectativas_Ancestrales_2.addFeatures(features_Solicitud_Legalizacion_Expectativas_Ancestrales_2);
var lyr_Solicitud_Legalizacion_Expectativas_Ancestrales_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solicitud_Legalizacion_Expectativas_Ancestrales_2, 
                style: style_Solicitud_Legalizacion_Expectativas_Ancestrales_2,
                interactive: true,
                title: '<img src="styles/legend/Solicitud_Legalizacion_Expectativas_Ancestrales_2.png" /> Solicitud_Legalizacion_Expectativas_Ancestrales'
            });
var format_Solitidud_Legalizacion_Resguardo_Indigena_3 = new ol.format.GeoJSON();
var features_Solitidud_Legalizacion_Resguardo_Indigena_3 = format_Solitidud_Legalizacion_Resguardo_Indigena_3.readFeatures(json_Solitidud_Legalizacion_Resguardo_Indigena_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solitidud_Legalizacion_Resguardo_Indigena_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solitidud_Legalizacion_Resguardo_Indigena_3.addFeatures(features_Solitidud_Legalizacion_Resguardo_Indigena_3);
var lyr_Solitidud_Legalizacion_Resguardo_Indigena_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solitidud_Legalizacion_Resguardo_Indigena_3, 
                style: style_Solitidud_Legalizacion_Resguardo_Indigena_3,
                interactive: true,
                title: '<img src="styles/legend/Solitidud_Legalizacion_Resguardo_Indigena_3.png" /> Solitidud_Legalizacion_Resguardo_Indigena'
            });
var format_Resguardo_Indgena_Legalizado_4 = new ol.format.GeoJSON();
var features_Resguardo_Indgena_Legalizado_4 = format_Resguardo_Indgena_Legalizado_4.readFeatures(json_Resguardo_Indgena_Legalizado_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resguardo_Indgena_Legalizado_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resguardo_Indgena_Legalizado_4.addFeatures(features_Resguardo_Indgena_Legalizado_4);
var lyr_Resguardo_Indgena_Legalizado_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Resguardo_Indgena_Legalizado_4, 
                style: style_Resguardo_Indgena_Legalizado_4,
                interactive: true,
                title: '<img src="styles/legend/Resguardo_Indgena_Legalizado_4.png" /> Resguardo_IndÃ­gena_Legalizado'
            });
var format_Solicitud_Legalizacion_Expectativas_Ancestrales_5 = new ol.format.GeoJSON();
var features_Solicitud_Legalizacion_Expectativas_Ancestrales_5 = format_Solicitud_Legalizacion_Expectativas_Ancestrales_5.readFeatures(json_Solicitud_Legalizacion_Expectativas_Ancestrales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solicitud_Legalizacion_Expectativas_Ancestrales_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solicitud_Legalizacion_Expectativas_Ancestrales_5.addFeatures(features_Solicitud_Legalizacion_Expectativas_Ancestrales_5);
var lyr_Solicitud_Legalizacion_Expectativas_Ancestrales_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solicitud_Legalizacion_Expectativas_Ancestrales_5, 
                style: style_Solicitud_Legalizacion_Expectativas_Ancestrales_5,
                interactive: true,
                title: '<img src="styles/legend/Solicitud_Legalizacion_Expectativas_Ancestrales_5.png" /> Solicitud_Legalizacion_Expectativas_Ancestrales'
            });
var format_comunidad_negra_titulada_6 = new ol.format.GeoJSON();
var features_comunidad_negra_titulada_6 = format_comunidad_negra_titulada_6.readFeatures(json_comunidad_negra_titulada_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_comunidad_negra_titulada_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_comunidad_negra_titulada_6.addFeatures(features_comunidad_negra_titulada_6);
var lyr_comunidad_negra_titulada_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_comunidad_negra_titulada_6, 
                style: style_comunidad_negra_titulada_6,
                interactive: true,
                title: '<img src="styles/legend/comunidad_negra_titulada_6.png" /> comunidad_negra_titulada'
            });
var format_Pretensiones_Afro_7 = new ol.format.GeoJSON();
var features_Pretensiones_Afro_7 = format_Pretensiones_Afro_7.readFeatures(json_Pretensiones_Afro_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pretensiones_Afro_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pretensiones_Afro_7.addFeatures(features_Pretensiones_Afro_7);
var lyr_Pretensiones_Afro_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pretensiones_Afro_7, 
                style: style_Pretensiones_Afro_7,
                interactive: true,
                title: '<img src="styles/legend/Pretensiones_Afro_7.png" /> Pretensiones_Afro'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1.setVisible(true);lyr_Solicitud_Legalizacion_Expectativas_Ancestrales_2.setVisible(true);lyr_Solitidud_Legalizacion_Resguardo_Indigena_3.setVisible(true);lyr_Resguardo_Indgena_Legalizado_4.setVisible(true);lyr_Solicitud_Legalizacion_Expectativas_Ancestrales_5.setVisible(true);lyr_comunidad_negra_titulada_6.setVisible(true);lyr_Pretensiones_Afro_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1,lyr_Solicitud_Legalizacion_Expectativas_Ancestrales_2,lyr_Solitidud_Legalizacion_Resguardo_Indigena_3,lyr_Resguardo_Indgena_Legalizado_4,lyr_Solicitud_Legalizacion_Expectativas_Ancestrales_5,lyr_comunidad_negra_titulada_6,lyr_Pretensiones_Afro_7];
lyr_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_SOLICIT': 'ID_SOLICIT', 'ID_RESGUAR': 'ID_RESGUAR', 'NOMBRE_COM': 'NOMBRE_COM', 'NOMBRE_REG': 'NOMBRE_REG', 'DEPARTAMEN': 'DEPARTAMEN', 'CODIGO_MUN': 'CODIGO_MUN', 'MUNICIPIOS': 'MUNICIPIOS', 'FECHA_SOLI': 'FECHA_SOLI', 'CODIGO_EST': 'CODIGO_EST', 'CODIGO_PRO': 'CODIGO_PRO', 'ESCENARIO_': 'ESCENARIO_', 'REFERENCIA': 'REFERENCIA', 'CODIGO_TER': 'CODIGO_TER', 'RESPONSABL': 'RESPONSABL', 'FECHA_EDIC': 'FECHA_EDIC', 'ID_LEVANTA': 'ID_LEVANTA', 'AREA_HECTA': 'AREA_HECTA', 'OBSERVACIO': 'OBSERVACIO', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Solicitud_Legalizacion_Expectativas_Ancestrales_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_SOLICIT': 'ID_SOLICIT', 'ID_RESGUAR': 'ID_RESGUAR', 'NOMBRE_COM': 'NOMBRE_COM', 'NOMBRE_REG': 'NOMBRE_REG', 'DEPARTAMEN': 'DEPARTAMEN', 'CODIGO_MUN': 'CODIGO_MUN', 'MUNICIPIOS': 'MUNICIPIOS', 'FECHA_SOLI': 'FECHA_SOLI', 'CODIGO_EST': 'CODIGO_EST', 'CODIGO_PRO': 'CODIGO_PRO', 'ESCENARIO_': 'ESCENARIO_', 'REFERENCIA': 'REFERENCIA', 'CODIGO_TER': 'CODIGO_TER', 'RESPONSABL': 'RESPONSABL', 'FECHA_EDIC': 'FECHA_EDIC', 'ID_LEVANTA': 'ID_LEVANTA', 'AREA_HECTA': 'AREA_HECTA', 'OBSERVACIO': 'OBSERVACIO', 'CÉDULA_CA': 'CÉDULA_CA', 'FOLIO_DE_M': 'FOLIO_DE_M', 'NOMBRE_DEL': 'NOMBRE_DEL', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Solitidud_Legalizacion_Resguardo_Indigena_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_SOLICIT': 'ID_SOLICIT', 'ID_RESGUAR': 'ID_RESGUAR', 'NOMBRE_COM': 'NOMBRE_COM', 'NOMBRE_REG': 'NOMBRE_REG', 'DEPARTAMEN': 'DEPARTAMEN', 'CODIGO_MUN': 'CODIGO_MUN', 'MUNICIPIOS': 'MUNICIPIOS', 'FECHA_SOLI': 'FECHA_SOLI', 'CODIGO_EST': 'CODIGO_EST', 'CODIGO_PRO': 'CODIGO_PRO', 'ESCENARIO_': 'ESCENARIO_', 'REFERENCIA': 'REFERENCIA', 'CODIGO_TER': 'CODIGO_TER', 'RESPONSABL': 'RESPONSABL', 'FECHA_EDIC': 'FECHA_EDIC', 'ID_LEVANTA': 'ID_LEVANTA', 'AREA_HECTA': 'AREA_HECTA', 'OBSERVACIO': 'OBSERVACIO', 'Cédula_Ca': 'Cédula_Ca', 'Folio_de_M': 'Folio_de_M', 'Nombre_del': 'Nombre_del', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Resguardo_Indgena_Legalizado_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_RESGUAR': 'ID_RESGUAR', 'NOMBRE_RES': 'NOMBRE_RES', 'CODIGO_TER': 'CODIGO_TER', 'CEDULA_CAT': 'CEDULA_CAT', 'MATRICULA_': 'MATRICULA_', 'TIPO_ACTO_': 'TIPO_ACTO_', 'NUMERO_ACT': 'NUMERO_ACT', 'FECHA_ACTO': 'FECHA_ACTO', 'AREA_ACTO_': 'AREA_ACTO_', 'NUMERO_PLA': 'NUMERO_PLA', 'OBSERVACIO': 'OBSERVACIO', 'OBS_RES': 'OBS_RES', 'OBS_PLANO': 'OBS_PLANO', 'PUEBLO': 'PUEBLO', 'CODIGO_PUE': 'CODIGO_PUE', 'Nombre_RI_': 'Nombre_RI_', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'HAS': 'HAS', });
lyr_Solicitud_Legalizacion_Expectativas_Ancestrales_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_SOLICIT': 'ID_SOLICIT', 'ID_RESGUAR': 'ID_RESGUAR', 'NOMBRE_COM': 'NOMBRE_COM', 'NOMBRE_REG': 'NOMBRE_REG', 'DEPARTAMEN': 'DEPARTAMEN', 'CODIGO_MUN': 'CODIGO_MUN', 'MUNICIPIOS': 'MUNICIPIOS', 'FECHA_SOLI': 'FECHA_SOLI', 'CODIGO_EST': 'CODIGO_EST', 'CODIGO_PRO': 'CODIGO_PRO', 'ESCENARIO_': 'ESCENARIO_', 'REFERENCIA': 'REFERENCIA', 'CODIGO_TER': 'CODIGO_TER', 'RESPONSABL': 'RESPONSABL', 'FECHA_EDIC': 'FECHA_EDIC', 'ID_LEVANTA': 'ID_LEVANTA', 'AREA_HECTA': 'AREA_HECTA', 'OBSERVACIO': 'OBSERVACIO', 'CÉDULA_CA': 'CÉDULA_CA', 'FOLIO_DE_M': 'FOLIO_DE_M', 'NOMBRE_DEL': 'NOMBRE_DEL', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_comunidad_negra_titulada_6.set('fieldAliases', {'gml_id': 'gml_id', 'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NOMBRE_COM': 'NOMBRE_COM', 'RESOLUCION': 'RESOLUCION', 'AREA_TITUL': 'AREA_TITUL', 'ANO': 'ANO', 'NUMERO_PLA': 'NUMERO_PLA', 'CODIGO_CON': 'CODIGO_CON', 'ID_FUENTE_': 'ID_FUENTE_', 'FECHA_DESC': 'FECHA_DESC', 'ID_COMUNID': 'ID_COMUNID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'area_cart': 'area_cart', });
lyr_Pretensiones_Afro_7.set('fieldAliases', {'gml_id': 'gml_id', 'fid': 'fid', 'COID': 'COID', 'Area': 'Area', 'Nombre': 'Nombre', 'Departamen': 'Departamen', 'Municipio': 'Municipio', 'Naturaleza': 'Naturaleza', 'Estado': 'Estado', 'Fecha': 'Fecha', 'Enlace_lin': 'Enlace_lin', });
lyr_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1.set('fieldImages', {'OBJECTID': '', 'ID_SOLICIT': '', 'ID_RESGUAR': '', 'NOMBRE_COM': '', 'NOMBRE_REG': '', 'DEPARTAMEN': '', 'CODIGO_MUN': '', 'MUNICIPIOS': '', 'FECHA_SOLI': '', 'CODIGO_EST': '', 'CODIGO_PRO': '', 'ESCENARIO_': '', 'REFERENCIA': '', 'CODIGO_TER': '', 'RESPONSABL': '', 'FECHA_EDIC': '', 'ID_LEVANTA': '', 'AREA_HECTA': '', 'OBSERVACIO': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Solicitud_Legalizacion_Expectativas_Ancestrales_2.set('fieldImages', {'OBJECTID': '', 'ID_SOLICIT': '', 'ID_RESGUAR': '', 'NOMBRE_COM': '', 'NOMBRE_REG': '', 'DEPARTAMEN': '', 'CODIGO_MUN': '', 'MUNICIPIOS': '', 'FECHA_SOLI': '', 'CODIGO_EST': '', 'CODIGO_PRO': '', 'ESCENARIO_': '', 'REFERENCIA': '', 'CODIGO_TER': '', 'RESPONSABL': '', 'FECHA_EDIC': '', 'ID_LEVANTA': '', 'AREA_HECTA': '', 'OBSERVACIO': '', 'CÉDULA_CA': '', 'FOLIO_DE_M': '', 'NOMBRE_DEL': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Solitidud_Legalizacion_Resguardo_Indigena_3.set('fieldImages', {'OBJECTID': '', 'ID_SOLICIT': '', 'ID_RESGUAR': '', 'NOMBRE_COM': '', 'NOMBRE_REG': '', 'DEPARTAMEN': '', 'CODIGO_MUN': '', 'MUNICIPIOS': '', 'FECHA_SOLI': '', 'CODIGO_EST': '', 'CODIGO_PRO': '', 'ESCENARIO_': '', 'REFERENCIA': '', 'CODIGO_TER': '', 'RESPONSABL': '', 'FECHA_EDIC': '', 'ID_LEVANTA': '', 'AREA_HECTA': '', 'OBSERVACIO': '', 'Cédula_Ca': '', 'Folio_de_M': '', 'Nombre_del': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Resguardo_Indgena_Legalizado_4.set('fieldImages', {'OBJECTID': '', 'ID_RESGUAR': '', 'NOMBRE_RES': '', 'CODIGO_TER': '', 'CEDULA_CAT': '', 'MATRICULA_': '', 'TIPO_ACTO_': '', 'NUMERO_ACT': '', 'FECHA_ACTO': '', 'AREA_ACTO_': '', 'NUMERO_PLA': '', 'OBSERVACIO': '', 'OBS_RES': '', 'OBS_PLANO': '', 'PUEBLO': '', 'CODIGO_PUE': '', 'Nombre_RI_': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', 'HAS': '', });
lyr_Solicitud_Legalizacion_Expectativas_Ancestrales_5.set('fieldImages', {'OBJECTID': '', 'ID_SOLICIT': '', 'ID_RESGUAR': '', 'NOMBRE_COM': '', 'NOMBRE_REG': '', 'DEPARTAMEN': '', 'CODIGO_MUN': '', 'MUNICIPIOS': '', 'FECHA_SOLI': '', 'CODIGO_EST': '', 'CODIGO_PRO': '', 'ESCENARIO_': '', 'REFERENCIA': '', 'CODIGO_TER': '', 'RESPONSABL': '', 'FECHA_EDIC': '', 'ID_LEVANTA': '', 'AREA_HECTA': '', 'OBSERVACIO': '', 'CÉDULA_CA': '', 'FOLIO_DE_M': '', 'NOMBRE_DEL': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_comunidad_negra_titulada_6.set('fieldImages', {'gml_id': 'TextEdit', 'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NOMBRE_COM': 'TextEdit', 'RESOLUCION': 'TextEdit', 'AREA_TITUL': 'TextEdit', 'ANO': 'TextEdit', 'NUMERO_PLA': 'TextEdit', 'CODIGO_CON': 'TextEdit', 'ID_FUENTE_': 'TextEdit', 'FECHA_DESC': 'TextEdit', 'ID_COMUNID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'area_cart': 'TextEdit', });
lyr_Pretensiones_Afro_7.set('fieldImages', {'gml_id': 'TextEdit', 'fid': 'TextEdit', 'COID': 'TextEdit', 'Area': 'TextEdit', 'Nombre': 'TextEdit', 'Departamen': 'TextEdit', 'Municipio': 'TextEdit', 'Naturaleza': 'TextEdit', 'Estado': 'TextEdit', 'Fecha': 'TextEdit', 'Enlace_lin': 'TextEdit', });
lyr_Solicitud_Legalizacion_Resguardo_Indigena_Colonial_1.set('fieldLabels', {'OBJECTID': 'no label', 'ID_SOLICIT': 'no label', 'ID_RESGUAR': 'no label', 'NOMBRE_COM': 'no label', 'NOMBRE_REG': 'no label', 'DEPARTAMEN': 'no label', 'CODIGO_MUN': 'no label', 'MUNICIPIOS': 'no label', 'FECHA_SOLI': 'no label', 'CODIGO_EST': 'no label', 'CODIGO_PRO': 'no label', 'ESCENARIO_': 'no label', 'REFERENCIA': 'no label', 'CODIGO_TER': 'no label', 'RESPONSABL': 'no label', 'FECHA_EDIC': 'no label', 'ID_LEVANTA': 'no label', 'AREA_HECTA': 'no label', 'OBSERVACIO': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Solicitud_Legalizacion_Expectativas_Ancestrales_2.set('fieldLabels', {'OBJECTID': 'no label', 'ID_SOLICIT': 'no label', 'ID_RESGUAR': 'no label', 'NOMBRE_COM': 'no label', 'NOMBRE_REG': 'no label', 'DEPARTAMEN': 'no label', 'CODIGO_MUN': 'no label', 'MUNICIPIOS': 'no label', 'FECHA_SOLI': 'no label', 'CODIGO_EST': 'no label', 'CODIGO_PRO': 'no label', 'ESCENARIO_': 'no label', 'REFERENCIA': 'no label', 'CODIGO_TER': 'no label', 'RESPONSABL': 'no label', 'FECHA_EDIC': 'no label', 'ID_LEVANTA': 'no label', 'AREA_HECTA': 'no label', 'OBSERVACIO': 'no label', 'CÉDULA_CA': 'no label', 'FOLIO_DE_M': 'no label', 'NOMBRE_DEL': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Solitidud_Legalizacion_Resguardo_Indigena_3.set('fieldLabels', {'OBJECTID': 'no label', 'ID_SOLICIT': 'no label', 'ID_RESGUAR': 'no label', 'NOMBRE_COM': 'no label', 'NOMBRE_REG': 'no label', 'DEPARTAMEN': 'no label', 'CODIGO_MUN': 'no label', 'MUNICIPIOS': 'no label', 'FECHA_SOLI': 'no label', 'CODIGO_EST': 'no label', 'CODIGO_PRO': 'no label', 'ESCENARIO_': 'no label', 'REFERENCIA': 'no label', 'CODIGO_TER': 'no label', 'RESPONSABL': 'no label', 'FECHA_EDIC': 'no label', 'ID_LEVANTA': 'no label', 'AREA_HECTA': 'no label', 'OBSERVACIO': 'no label', 'Cédula_Ca': 'no label', 'Folio_de_M': 'no label', 'Nombre_del': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Resguardo_Indgena_Legalizado_4.set('fieldLabels', {'OBJECTID': 'no label', 'ID_RESGUAR': 'no label', 'NOMBRE_RES': 'no label', 'CODIGO_TER': 'no label', 'CEDULA_CAT': 'no label', 'MATRICULA_': 'no label', 'TIPO_ACTO_': 'no label', 'NUMERO_ACT': 'no label', 'FECHA_ACTO': 'no label', 'AREA_ACTO_': 'no label', 'NUMERO_PLA': 'no label', 'OBSERVACIO': 'no label', 'OBS_RES': 'no label', 'OBS_PLANO': 'no label', 'PUEBLO': 'no label', 'CODIGO_PUE': 'no label', 'Nombre_RI_': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'HAS': 'no label', });
lyr_Solicitud_Legalizacion_Expectativas_Ancestrales_5.set('fieldLabels', {'OBJECTID': 'no label', 'ID_SOLICIT': 'no label', 'ID_RESGUAR': 'no label', 'NOMBRE_COM': 'no label', 'NOMBRE_REG': 'no label', 'DEPARTAMEN': 'no label', 'CODIGO_MUN': 'no label', 'MUNICIPIOS': 'no label', 'FECHA_SOLI': 'no label', 'CODIGO_EST': 'no label', 'CODIGO_PRO': 'no label', 'ESCENARIO_': 'no label', 'REFERENCIA': 'no label', 'CODIGO_TER': 'no label', 'RESPONSABL': 'no label', 'FECHA_EDIC': 'no label', 'ID_LEVANTA': 'no label', 'AREA_HECTA': 'no label', 'OBSERVACIO': 'no label', 'CÉDULA_CA': 'no label', 'FOLIO_DE_M': 'no label', 'NOMBRE_DEL': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_comunidad_negra_titulada_6.set('fieldLabels', {'gml_id': 'no label', 'fid': 'no label', 'OBJECTID': 'no label', 'NOMBRE_COM': 'no label', 'RESOLUCION': 'no label', 'AREA_TITUL': 'no label', 'ANO': 'no label', 'NUMERO_PLA': 'no label', 'CODIGO_CON': 'no label', 'ID_FUENTE_': 'no label', 'FECHA_DESC': 'no label', 'ID_COMUNID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'area_cart': 'no label', });
lyr_Pretensiones_Afro_7.set('fieldLabels', {'gml_id': 'no label', 'fid': 'no label', 'COID': 'no label', 'Area': 'no label', 'Nombre': 'no label', 'Departamen': 'no label', 'Municipio': 'no label', 'Naturaleza': 'no label', 'Estado': 'no label', 'Fecha': 'no label', 'Enlace_lin': 'no label', });
lyr_Pretensiones_Afro_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});