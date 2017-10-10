sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/UtilModel"
], function(ODataModel, UtilModel) {
    "use strict";

    return {

        // Listar compras
        list: function(callback) {

            var URLService = "ZPE_FIORI_LIST_PGR_GROUP_SRV/InputSet?$filter=IEkgrp eq ''&$expand=NavT024";

            var contexto = {};
            contexto.servicio = "comprasServices.List()";
            contexto.url = URLService;
            contexto.objeto = "NavT024";

            var objSelect = {
                Ekgrp: '',
                Eknam: 'SELECCIONE COMPRA'
            }

            UtilModel.requestODataGet(contexto, function(respuesta){

                return callback(respuesta);

            },objSelect);

        }
    };
});