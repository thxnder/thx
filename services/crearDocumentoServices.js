sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/utilService"
], function(ODataModel, utilService) {
    "use strict";

    return {

        // Crear Cotizacion
        crearDoc: function(tipoDocumento,pNumPedido) {

            var contexto = {};
            contexto.servicio = "crearDocumentoServices.crearDoc()";
            contexto.url = "crearDocumento.aspx";
            contexto.parametros = { tipoDocumento: tipoDocumento, pNumPedido:pNumPedido};

            return utilService.exec(contexto);
            
        },




    };
});