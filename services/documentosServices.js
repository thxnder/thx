sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/utilService"
    ], function (ODataModel, utilService) {
        "use strict";
        return {
        //INICIO EDELACRUZ: 
        //Valores Dialog "Buscar Documento"(dlg_DialogDocBuscarInicio.xml)
        //Combo campo: "tipo de busqueda"
        // Listar busqueda de documentos
        buscarDocumento: function (buscarDocumento)
        {
            var contexto = {};
            contexto.servicio = "documentosServices.buscarDocumento()";
            contexto.url = "buscarDocumento.aspx";
            contexto.parametros = {tipoBusqueda: buscarDocumento.tipoBusqueda,
                                    datoBusqueda: buscarDocumento.datoBusqueda,
                                    nMaterial: buscarDocumento.nMaterial,
                                    claseDoc: buscarDocumento.claseDoc,
                                    fecInicio1: buscarDocumento.fecInicio1,
                                    fecFin1: buscarDocumento.fecFin1,
                                    codAsesor: buscarDocumento.codAsesor
            };
            var resultado = utilService.exec(contexto);
            return resultado;
        },
        // Crear Cotizacion
        crearDocumento: function(tipoDocumento,pNumPedido) {
            var contexto = {};
            contexto.servicio = "documentosServices.crearDocumento()";
            contexto.url = "crearDocumento.aspx";
            contexto.parametros = { tipoDocumento: tipoDocumento, pNumPedido:pNumPedido};
            return utilService.exec(contexto);
            
        },
        visualizarDocumento: function (tipoDocumento, accion, numPedido)
        {
            var contexto = {};
            contexto.servicio = "documentosServices.visualizarDocumento()";
            contexto.url = "documentoVentas.aspx";
            contexto.parametros = {  
                tipoDocumento: tipoDocumento,              
                accion: accion,
                pNumPedido: numPedido
            };         
            var resultado = utilService.exec(contexto);
            return resultado;
        },
        modificarDocumento: function (accion, numPedido)
        {
            var contexto = {};
            contexto.servicio = "documentosServices.visualizarDocumento()";
            contexto.url = "documentoVentas.aspx";
            contexto.parametros = {              
                accion: accion,
                pNumPedido: numPedido
            };         
            var resultado = utilService.exec(contexto);
            return resultado;
        },
        guardarDocumento: function (nuevoDocumento,listaMatJson,listaDsctoJson,listaRepJson,listaIntJson,listaPedJson,listadatosCliente,listaPlanFacturacion)
        {
            var contexto = {};
            contexto.servicio = "documentosServices.guardarDocumento()";
            contexto.url = "guardarDocumento.aspx";
            contexto.parametros = {codigoCliente: nuevoDocumento.codigoCliente,
                nombreCliente: nuevoDocumento.nombreCliente,
                OrgVentas: nuevoDocumento.OrgVentas,
                CanalDist: nuevoDocumento.CanalDist,
                CodOficina: nuevoDocumento.CodOficina,
                CondPago: nuevoDocumento.CondPago,
                Moneda: nuevoDocumento.Moneda,
                TipoCambio: nuevoDocumento.TipoCambio,
                dsctoAdicionalZD12: nuevoDocumento.dsctoAdicionalZD12,
                pesoTotal: nuevoDocumento.pesoTotal,
                FechaFacturacion: nuevoDocumento.FechaFacturacion,
                GrupoCond: nuevoDocumento.GrupoCond,
                Motivo: nuevoDocumento.Motivo,
                BloqueoFactura: nuevoDocumento.BloqueoFactura,
                BloqueoEntrega: nuevoDocumento.BloqueoEntrega,
                OrdenCompra: nuevoDocumento.OrdenCompra,
                FechaPedido: nuevoDocumento.FechaPedido,
                FechaValidez: nuevoDocumento.FechaValidez,
                FechaEntrega: nuevoDocumento.FechaEntrega,
                CondExp: nuevoDocumento.CondExp,
                FechaReparto: nuevoDocumento.FechaReparto,
                nomProyecto: nuevoDocumento.nomProyecto,
                codProyecto: nuevoDocumento.codProyecto,
                codVersion: nuevoDocumento.codVersion,
                TipoVisita: nuevoDocumento.TipoVisita,
                cbxReembolsable: nuevoDocumento.cbxReembolsable,
                GrupoForecast: nuevoDocumento.GrupoForecast,
                TipoForecast: nuevoDocumento.TipoForecast,
                Certificado: nuevoDocumento.Certificado,
                FechaVisita: nuevoDocumento.FechaVisita,
                listaMatJson: listaMatJson,
                listaDsctoJson: listaDsctoJson,
                listaRepJson: listaRepJson,
                listaIntJson: listaIntJson,
                listaPedJson: listaPedJson,
                listadatosCliente: listadatosCliente,
              //  listaPlanFacturacion: listaPlanFacturacion,                  
                numPedido: nuevoDocumento.numPedido,
                op: nuevoDocumento.op
               // planFact: nuevoDocumento.planFact
            };
            var resultado = utilService.exec(contexto);
            return resultado;
        },
        ////Materiales////////////////////////////////////////////////////////////////////////////
        buscarmaterial: function(datosMateriales) {

            var contexto = {};
            contexto.servicio = "documentosServices.buscarmaterial()";
            contexto.url = "material.aspx";
            contexto.parametros = { codigo: datosMateriales.codigo, codigoAntiguo: datosMateriales.codAntiguo, descripcionMaterial: datosMateriales.desMaterial, categoria: datosMateriales.categoria, 
                                    linea: datosMateriales.linea, marca: datosMateriales.marca, OrgVentas: datosMateriales.orgVentas, CanalDist: datosMateriales.canalDist, OfVentas: datosMateriales.ofVentas, listacaract: datosMateriales.listacaract};

            return utilService.exec(contexto);

            //codigo codigoAntiguo descripcionMaterial  categoria  linea  marca
            
        },
        ////End Materiales////////////////////////////////////////////////////////////////////////
        crearInstalacion: function (venta1, venta2, venta3, venta4, visita1, visita2, visita3,visita4)
        {
            var contexto = {};
            contexto.servicio = "documentosServices.crearInstalacion()";
            contexto.url = "documentoVentas.aspx";
            contexto.parametros = {venta1: venta1,
                                   venta2: venta2,
                                   venta3: venta3,
                                   venta4: venta4,
                                   visita1: visita1,
                                   visita2: visita2,
                                   visita3: visita3,
                                   visita4: visita4,
                                   instalacion: "instalacion"
            };
            var resultado = utilService.exec(contexto);
            return resultado;
        },
        ////Inicio Conversion a Pedido DocBuscar//////////////////
        conversionPedido:function(convPedido){
            var contexto = {};
            contexto.servicio = "documentosServices.conversionPedido()";
            contexto.url = "flujoDocumento.aspx";
            contexto.parametros = {pNumPedido: convPedido.NumeroPedido ,
                                    tipoDocumento: "Z001" 
                                    };   
            var resultado = utilService.exec(contexto);
            return resultado;
        },
        ////End Conversion a Pedido DocBuscar/////////////////////
        buscarCaracteristicas:function(codigo,
                                        codigoAntiguo,
                                        descripcionMaterial,
                                        categoria,
                                        linea,
                                        marca,
                                        buscarCaract){
            var contexto = {};
            contexto.servicio = "documentosServices.buscarCaracteristicas()";
            contexto.url = "material.aspx";
            contexto.parametros = {codigo:codigo, codigoAntiguo:codigoAntiguo, descripcionMaterial:descripcionMaterial, categoria:categoria, linea:linea, marca:marca, buscarCaract:buscarCaract
                                    };
            var resultado = utilService.exec(contexto);
            return resultado;
        }
    };
});