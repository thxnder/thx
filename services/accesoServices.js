sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/utilService"
    ], function(ODataModel, utilService) {
        "use strict";
        return {
        // Listar centros
        login: function(v_usuario,v_clave) {
            var contexto = {};
            contexto.servicio = "accesoServices.login()";
            contexto.url = "login.aspx";
            contexto.parametros = { usuario : v_usuario , clave: v_clave };
            return utilService.exec(contexto);
        }
    };
});