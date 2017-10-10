sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/utilService"
    ], function(ODataModel, utilService) {
        "use strict";
        return {
            buscarmaterial: function(codigo,codAntiguo,desMaterial,categoria,linea,marca,orgVentas,canalDist,ofVentas) {
                var contexto = {};
                contexto.servicio = "materialServices.buscarmaterial()";
                contexto.url = "material.aspx";
                contexto.parametros = { codigo: codigo, codigoAntiguo:codAntiguo, descripcionMaterial:desMaterial, categoria:categoria, linea:linea, marca:marca, OrgVentas:orgVentas, CanalDist:canalDist, OfVentas:ofVentas};
                return utilService.exec(contexto);
            //codigo codigoAntiguo descripcionMaterial  categoria  linea  marca            
        },
        buscarStockMaterial: function(codigoMaterial, dsctoLotes) {
                var contexto = {};
                contexto.servicio = "materialServices.buscarStockMaterial()";
                contexto.url = "material.aspx";
                contexto.parametros = {codigoMaterial:codigoMaterial, dsctoLotes:dsctoLotes};
                return utilService.exec(contexto);
            //codigo codigoAntiguo descripcionMaterial  categoria  linea  marca            
        },

        stockDisponibleListaMateriales:function(material){
            var stockDisponible = material;
            var contexto = {};
                contexto.servicio = "materialServices.buscarStockMaterial()";
                contexto.url = "material.aspx";
                contexto.parametros = stockDisponible;
                return utilService.exec(contexto);
            //codigo codigoAntiguo descripcionMaterial  categoria  linea  marca      
        },

        anadirMaterialMaster: function(material){
            var materialPedido = material;
            var contexto = {};
            contexto.servicio = "materialServices.anadirMaterialMaster()";
            contexto.url = "material.aspx";
            contexto.parametros = materialPedido;
            return utilService.exec(contexto);
        },
        anadirMaterialBuscar:function(objetoDetalle,objetoMaterial,objetoPedido,anadirMat){
            var contexto = {};
            contexto.servicio = "materialServices.anadirMaterialBuscar()";
            contexto.url = "material.aspx";
            contexto.parametros = { objDetalle: objetoDetalle, objMaterial:objetoMaterial, objPedido:objetoPedido, añadirMat:anadirMat};
            return utilService.exec(contexto);
            //codigo codigoAntiguo descripcionMaterial  categoria  linea  marca
        },       
        recalcular: function(op,estadoView,numPedido,dsctoLotes, listaInterJson, listaDsctoJson,
            listaRepartosJson, listaMatJson,listaPedJson ){
            var contexto = {};
            contexto.servicio = "materialServices.recalcular()";
            contexto.url = "material.aspx";
            contexto.parametros = { 
                op: op,
                estadoView: estadoView,
                numPedido: numPedido,
                dsctoLotes: dsctoLotes,
                listaInterJson: listaInterJson,
                listaDsctoJson: listaDsctoJson,
                listaRepartosJson: listaRepartosJson,
                listaMatJson: listaMatJson,
                listaPedJson: listaPedJson};
                return utilService.exec(contexto);
            },
        catalogo:function(materialSeleccionado){
            var catalogo = materialSeleccionado;
            var contexto = {};
            contexto.servicio = "materialServices.catalogo()";
            contexto.url = "catalogo.aspx";
            contexto.parametros = catalogo;
            return utilService.exec(contexto);
            }
        };
    });