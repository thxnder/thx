    sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/UtilModel"
], function (ODataModel, UtilModel) {
    "use strict";

    return {

        // Listar documentos
        list: function (params, callback) {

            var rpta = { codigo: "", mensaje: "", data: null };

            if (!params.IBbtyp) {
                return callback({ codigo: "e", mensaje: "parametro IBbtyp es requerido", data: null });
            }

            if (!params.IWerks) {
                return callback({ codigo: "e", mensaje: "parametro IWerks es requerido", data: null });
            }

            if (!params.IDatum) {
                return callback({ codigo: "e", mensaje: "parametro IDatum es requerido", data: null });
            }

            if (!params.ITimewindow1) {
                return callback({ codigo: "e", mensaje: "parametro ITimewindow1 es requerido", data: null });
            }

            if (!params.IView) {
                return callback({ codigo: "e", mensaje: "parametro IView es requerido", data: null });
            }

            if (!params.ILooksolped) {
                return callback({ codigo: "e", mensaje: "parametro ILooksolped es requerido", data: null });
            }

            if (!params.IAdditionals) {
                return callback({ codigo: "ex", mensaje: "parametro IAdditionals es requerido", data: null });
            }

            var URLService = "ZPE_FIORI_LIST_MATERIAL_SRV/InputSet?$filter=" +
                "IBbtyp eq '" + params.IBbtyp + "' and " +
                "IWerks eq '" + params.IWerks + "' and " +
                "IDatum eq '" + params.IDatum + "' and " +
                "ITimewindow1 eq " + params.ITimewindow1 + " and " +
                "IView eq '" + params.IView + "' and " +
                "ILooksolped eq " + params.ILooksolped + " and " +
                "IAdditionals eq " + params.IAdditionals +
                " &$expand=NavMaterial,NavMessage";

            var contexto = {};
            contexto.servicio = "materialesServices.List()";
            contexto.url = URLService;
            contexto.objeto = "NavMaterial";
            contexto.params = params;

            UtilModel.requestODataGet(contexto, function (respuesta) {

                return callback(respuesta);

            });

        },
        Save: function (params, callback) {

            var URLService = "ZPE_FIORI_CREATE_PREQ_NO_SRV/InputSet";

            var contexto = {};
            contexto.servicio = "materialesServices.Save()";
            contexto.url = URLService;
            contexto.params = params;


            UtilModel.requestPost(contexto, function (respuesta) {

                if (respuesta.codigo === "s") {
                    respuesta.data = respuesta.data.NavMessage;
                    return callback(respuesta);

                } else {
                    return callback(respuesta);
                }

            });
        }
    };
});