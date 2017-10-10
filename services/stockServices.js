sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/utilService"
    ], function(ODataModel, utilService) {
        "use strict";
        return {
        // Listar centros
        stockporLlegar: function(matnr,lfdat_ini,lfdat_fin,OfVentas) {
            var contexto = {};
            contexto.servicio = "stockServices.stockporLlegar()";
            contexto.url = "stock.aspx";
            contexto.parametros = { MATNR: matnr, LFDAT_INI : lfdat_ini , LFDAT_FIN: lfdat_fin, OfVentas: OfVentas };
            return utilService.exec(contexto);
        },
        stockporPedir:function(CodJer,CodMat,FecIni,FecFin,OfVentas){
           var contexto = {};
           contexto.servicio = "stockServices.stockporPedir()";
           contexto.url = "reporteMercaderia.aspx";
           contexto.parametros = { CodJer: CodJer, CodMat : CodMat , FecIni: FecIni, FecFin: FecFin, OfVentas: OfVentas };
           return utilService.exec(contexto);
       }        
   };
});