sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/utilService"
    ], function(ODataModel, utilService) {
        "use strict";
        return {
        // Listar centros
        flujoDocumento: function(pNumPedido,UserId,PwdId,Id,GrpVend,Descripcion,CodigoVendedor,OrgVentas,CanalDist,OfVentas) {
            var contexto = {};
            contexto.servicio = "flujoDocumentoServices.flujoDocumento()";
            contexto.url = "flujoDocumento.aspx";
            contexto.parametros = { 
                pNumPedido:pNumPedido,
                UserId:UserId,
                PwdId:PwdId,
                Id:Id,
                GrpVend:GrpVend,
                Descripcion:Descripcion,
                CodigoVendedor:CodigoVendedor,
                OrgVentas:OrgVentas,
                CanalDist:CanalDist,
                OfVentas:OfVentas
            };
            return utilService.exec(contexto);
        },
    };
});