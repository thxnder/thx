sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/utilService"
    ], function (ODataModel, utilService) {
        "use strict";
        return {
           buscarCliQueja:function(buscarCliQueja){
            var contexto = {};
            contexto.servicio = "quejaServices.buscarCliQueja()";
            contexto.url = "queja.aspx";
            contexto.parametros = {
                "CodCli": buscarCliQueja.CodCli ,
                "NomCliente": buscarCliQueja.NomCliente ,
                "Calles": buscarCliQueja.Calles ,
                "Ubicacion": buscarCliQueja.Ubicacion ,
                "Telefono": buscarCliQueja.Telefono ,
                "OfiVenta": buscarCliQueja.OfiVenta ,
                "TextoQueja": buscarCliQueja.TextoQueja ,
                "codigo": buscarCliQueja.CodCli ,
                "accion": "buscacli" };
                var resultado = utilService.exec(contexto);
                return resultado;
            },
            guardarQueja:function(nuevoQueja){
                var contexto = {};
                contexto.servicio = "quejaServices.guardarQueja()";
                contexto.url = "queja.aspx";
                contexto.parametros = {
                    "CodCli": nuevoQueja.CodCli ,
                    "NomCliente": nuevoQueja.NomCliente ,
                    "Calles": nuevoQueja.Calles ,
                    "Ubicacion": nuevoQueja.Ubicacion ,
                    "Telefono": nuevoQueja.Telefono ,
                    "OfiVenta": nuevoQueja.OfiVenta ,
                    "TextoQueja": nuevoQueja.TextoQueja ,
                    "codigo": nuevoQueja.CodCli ,
                    "nomcli": nuevoQueja.NomCliente ,
                    "calle": nuevoQueja.Calles ,
                    "ubica": nuevoQueja.Ubicacion ,
                    "telef": nuevoQueja.Telefono ,
                    "texto": nuevoQueja.TextoQueja ,
                    "oventa": nuevoQueja.OfiVenta ,
                    "accion":"creaqueja" };
                    var resultado = utilService.exec(contexto);
                    return resultado;
                },
                buscarQueja:function(buscarQueja){
                    var contexto = {};
                    contexto.servicio = "quejaServices.buscarQueja()";
                    contexto.url = "queja.aspx";
                    contexto.parametros = {
                        "NumQueja": buscarQueja.NumQueja,
                        "CodCli": buscarQueja.CodCli ,
                        "NomCliente": buscarQueja.NomCliente ,
                        "Calles": buscarQueja.Calles ,
                        "Ubicacion": buscarQueja.Ubicacion ,
                        "Telefono": buscarQueja.Telefono ,
                        "OfiVenta": buscarQueja.OfiVenta ,
                        "TextoQueja": buscarQueja.TextoQueja ,
                        "codigo": buscarQueja.NumQueja ,
                        "accion":"modbusqueja" };
                        var resultado = utilService.exec(contexto);
                        return resultado;
                    },
                    modificarQueja:function(modificarQueja){
                        var contexto = {};
                        contexto.servicio = "quejaServices.modificarQueja()";
                        contexto.url = "queja.aspx";
                        contexto.parametros = {
                            "NumQueja": modificarQueja.NumQueja,
                            "CodCli": modificarQueja.CodCli ,
                            "NomCliente": modificarQueja.NomCliente ,
                            "Calles": modificarQueja.Calles ,
                            "Ubicacion": modificarQueja.Ubicacion ,
                            "Telefono": modificarQueja.Telefono ,
                            "OfiVenta": modificarQueja.OfiVenta ,
                            "TextoQueja": modificarQueja.TextoQueja ,
                            "queja": modificarQueja.NumQueja ,
                            "codigo": modificarQueja.CodCli ,
                            "nomcli": modificarQueja.NomCliente ,
                            "calle": modificarQueja.Calles ,
                            "ubica": modificarQueja.Ubicacion ,
                            "telef": modificarQueja.Telefono ,
                            "texto": modificarQueja.TextoQueja ,
                            "oventa": modificarQueja.OfiVenta ,
                            "accion": "modqueja",
                            "adrnr": modificarQueja.ADRNR };
                            var resultado = utilService.exec(contexto);
                            return resultado;
                        },
                        buscarListaQueja:function(buscarListaQueja){
                            var contexto = {};
                            contexto.servicio = "quejaServices.buscarListaQueja()";
                            contexto.url = "buscarReclamos.aspx";
                            contexto.parametros = {
                                "pNumeroReclamo": buscarListaQueja.pNumeroReclamo,
                                "pCodigoCliente": buscarListaQueja.pCodigoCliente ,
                                "pFechaCreacionI": buscarListaQueja.pFechaCreacionI ,
                                "pFechaCreacionF": buscarListaQueja.pFechaCreacionF ,
                                "accion": "Z008" };
                                var resultado = utilService.exec(contexto);
                                return resultado;
                            },
                            verQuejaSeleccionado:function(quejaSeleccionado){
                                var contexto = {};
                                contexto.servicio = "quejaServices.verQuejaSeleccionado()";
                                contexto.url = "queja.aspx";
                                contexto.parametros = {
                                    "codigo": quejaSeleccionado.NumQueja ,
                                    "accion": "verbusqueja" };
                                    var resultado = utilService.exec(contexto);
                                    return resultado;
                                },
                                verBuscarQueja:function(verBuscarQueja){
                                    var contexto = {};
                                    contexto.servicio = "quejaServices.verBuscarQueja()";
                                    contexto.url = "queja.aspx";
                                    contexto.parametros = {
                                        "NumQueja": verBuscarQueja.NumQueja ,
                                        "CodCli": verBuscarQueja.CodCli ,
                                        "NomCliente": verBuscarQueja.NomCliente ,
                                        "Calles": verBuscarQueja.Calles ,
                                        "Ubicacion": verBuscarQueja.Ubicacion ,
                                        "Telefono": verBuscarQueja.Telefono ,
                                        "OfiVenta": verBuscarQueja.OfiVenta ,
                                        "TextoQueja": verBuscarQueja.TextoQueja ,
                                        "codigo": verBuscarQueja.NumQueja ,
                                        "accion": "verbusqueja" };
                                        var resultado = utilService.exec(contexto);
                                        return resultado;
                                    },
                                    
                                };
                            });