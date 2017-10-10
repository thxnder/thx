sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/UtilModel"
], function(ODataModel, UtilModel) {
    "use strict";

    return {

        // Listar surtidos
        list: function(callback) {

            var URLService = "ZPE_FIORI_LIST_ASSORTLIST_TYPE_SRV/InputSet?$filter=IBbtyp eq ''&$expand=NavTwbb";

            var contexto = {};
            contexto.servicio = "surtidosServices.List()";
            contexto.url = URLService;
            contexto.objeto = "NavTwbb";

            var objSelect = {
                Bbtyp: '',
                Bbtext: 'SELECCIONE SURTIDO'
            }

            UtilModel.requestODataGet(contexto, function(respuesta){

                return callback(respuesta);

            },objSelect);

        }
    };
});