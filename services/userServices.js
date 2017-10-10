sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/utilService"
    ], function(ODataModel, utilService) {
        "use strict";
        return {        
            cambioPassword: function(datosUser,OfVentas) {
                var contexto = {};
                contexto.servicio = "userServices.cambioPassword()";
                contexto.url = "user.aspx";
                contexto.parametros = { Usuario: datosUser.Usuario,
                    "ext-comp-1007": datosUser.extcomp1007,
                    "ext-comp-1008": datosUser.extcomp1008,
                    "ext-comp-1009": datosUser.extcomp1009,
                    "ext-comp-1010": datosUser.extcomp1010,
                    "ext-comp-1011": datosUser.extcomp1011,
                    curPassword: datosUser.curPassword,
                    newPassword: datosUser.newPassword,
                    newPassword2: datosUser.newPassword2
                };
                return utilService.exec(contexto);
            },
            
        };
    });
