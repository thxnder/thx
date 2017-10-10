sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/utilService"
    ], function(ODataModel, utilService) {
        "use strict";
        return {
        // Listar centros
        imprimirDocumento: function(imprimirDoc) {
            var contexto = {};
            contexto.servicio = "imprimirServices.imprimirDocumento()";
            contexto.url = "documentoVentas.aspx";
            contexto.parametros = { pNumPedido: imprimirDoc.pNumPedido, tipoImpresion: imprimirDoc.tipoImpresion, accion: imprimirDoc.accion };
            return utilService.exec(contexto);
        },
        imprimirReclamo: function(imprimirRec) {
            var contexto = {};
            contexto.servicio = "imprimirServices.imprimirReclamo()";
            contexto.url = "editarReclamo.aspx";
            contexto.parametros = { pNumeroReclamo: imprimirRec.pNumeroReclamo };
            return utilService.exec(contexto);
        },
        imprimirQueja:function(imprimirQue){
            var contexto = {};
            contexto.servicio = "imprimirServices.imprimirQueja()";
            contexto.url = "queja.aspx";
            contexto.parametros = { numeroReclamo: imprimirQue.pNumeroQueja, codigo: imprimirQue.pNumeroQueja, accion: imprimirQue.accion};
            return utilService.exec(contexto);
        }
    };
});