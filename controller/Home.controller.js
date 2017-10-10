sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "pe/com/seidor/sap/decor/ventas/util/utilString",
    "pe/com/seidor/sap/decor/ventas/services/quejaServices",
    "sap/ui/model/json/JSONModel",
    "pe/com/seidor/sap/decor/ventas/services/imprimirServices",
    "sap/m/MessageToast",
    "pe/com/seidor/sap/decor/ventas/services/documentosServices",
], function (Controller, UIComponent, utilString, quejaServices, JSONModel, imprimirServices, MessageToast, documentosServices) {
    "use strict";
    return Controller.extend("pe.com.seidor.sap.decor.ventas.controller.Home", {
        onInit: function () {
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.attachRoutePatternMatched(this.onRouteMatched, this);
        },
        onRouteMatched: function (oEvent) {
        },
        //Documentos----------------------
        goDocNuevo: function (oEvent) {
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                // sap.ui.core.BusyIndicator.show();
                ///////////////////////////////////////////////
                window.IsDocModificar = false;
                window.converPedido = false;
                window.IsDocNuevo = true;
                ///////////////////////////////////////////////
                var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                oRouter.navTo("appDocNuevo");
                busyDialog.close();
                    }, 200);
        },
        goDocModificar: function (oEvent) {
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                window.IsDocBuscarModificar = true;
                window.IsDocNuevo = false;
                window.IsDocModificar = true;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                oRouter.navTo("appDocModificar");
                busyDialog.close();
                    }, 200);
        },
        goDocVisualizar: function (oEvent) {
            window.IsDocVisualizar=true;
           window.IsDocNuevo = false;
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                oRouter.navTo("appDocVisualizar");
                busyDialog.close();
                    }, 200);
        },
        goDocBuscar: function (oEvent) {
            window.IsDocNuevo = false;
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                oRouter.navTo("appDocBuscar");
                busyDialog.close();
                    }, 200);
        },
        goDocInstalacion: function (oEvent) {
            window.IsDocInstalacion = false;
            window.IsDocNuevo = false;
            this.getView().byId("dlg_DialogDocInstalacion").open();
        },
        goDocFlujo: function (oEvent) {
            window.IsDocNuevo = false;
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                oRouter.navTo("appDocFlujo");
                busyDialog.close();
                    }, 200);
        },
        goDocImprimir: function () {
            this.getView().byId("dlg_doc_impresion").open();
        },
        onCloseDocImprimir: function () {
            this.getView().byId("dlg_doc_impresion").close();
        },
        //Stock------------------------------
        goStockDisponible: function (oEvent) {
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
            window.IsDocModificar = false;
            window.IsDocNuevo = false;
                var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                oRouter.navTo("appStockDisponible");
                busyDialog.close();
                    }, 200);
        },
        goStockporLlegar: function (oEvent) {
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                oRouter.navTo("appStockporLlegar");
                busyDialog.close();
                    }, 200);
        },
        goStockporPedir: function (oEvent) {
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                oRouter.navTo("appStockporPedir");
                busyDialog.close();
                    }, 200);
        },
        //Reclamos----------------------------
        goRecNuevo: function (oEvent) {
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                oRouter.navTo("appRecNuevo");
                busyDialog.close();
                    }, 200);
        },
        goRecModificar: function (oEvent) {
            window.isRecModificar= false;
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                oRouter.navTo("appRecModificar");
                busyDialog.close();
                    }, 200);
        },
        goRecVisualizar: function (oEvent) {
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                oRouter.navTo("appRecVisualizar");
                busyDialog.close();
                    }, 200);
        },
        goRecBuscar: function (oEvent) {
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                oRouter.navTo("appRecBuscar");
                busyDialog.close();
                    }, 200);
        },
        goRecImprimir: function () {
            this.getView().byId("dlg_rec_impresion").open();
        },
        onCloseRecImprimir: function () {
            this.getView().byId("dlg_rec_impresion").close();
        },
        limpiarCamposQuejas: function(){
            var date = new Date();
            var yyyy = date.getFullYear().toString();
            var mm = (date.getMonth() + 1).toString(); // getMonth() is zero-based
            var dd = date.getDate().toString();
            var fechaActual = yyyy + "-" + (mm[1] ? mm : "0" + mm[0]) + "-" + (dd[1] ? dd : "0" + dd[0]); 
            this.getView().getModel().setProperty("/datosQueja/NumQueja","");
            this.getView().getModel().setProperty("/datosQueja/CodCli","");
            this.getView().getModel().setProperty("/datosQueja/NomCliente","");
            this.getView().getModel().setProperty("/datosQueja/Calles","");
            this.getView().getModel().setProperty("/datosQueja/Ubicacion","");
            this.getView().getModel().setProperty("/datosQueja/Telefono","");
            this.getView().getModel().setProperty("/datosQueja/OfiVenta","");
            this.getView().getModel().setProperty("/datosQueja/TextoQueja","");
            this.getView().getModel().setProperty("/datosQueja/ADRNR","");
            this.getView().getModel().setProperty("/datosQueja/pNumeroReclamo","");
            this.getView().getModel().setProperty("/datosQueja/TextoQueja","");
            this.getView().getModel().setProperty("/datosQueja/pCodigoCliente","")
            this.getView().getModel().setProperty("/datosQueja/pFechaCreacionI",fechaActual);
            this.getView().getModel().setProperty("/datosQueja/pFechaCreacionF",fechaActual);
        },
        //Quejas------------------------------
        goQueNuevo: function (oEvent) {
            this.limpiarCamposQuejas();
            this.getView().byId("dlg_QueNuevo").open();
        },
        onCloseDlg_QueNuevo: function () {
            this.getView().byId("dlg_QueNuevo").close();
        },
        goQueModificar: function (oEvent) {
            this.limpiarCamposQuejas();
            this.getView().byId("dlg_QueModificar").open();
        },
        onCloseDlg_QueModificar: function () {
            this.getView().byId("dlg_QueModificar").close();
        },
        goQueVisualizar: function (oEvent) {
            this.limpiarCamposQuejas();
            this.getView().byId("dlg_QueVisualizar").open();
        },
        onCloseDlg_QueVisualizar: function () {
            this.getView().byId("dlg_QueVisualizar").close();
            this.getView().byId("dlg_QueBuscar").close();
            this.getView().byId("dlg_QueBuscarLista").close();
        },
        goQueBuscar: function (oEvent) {
            this.limpiarCamposQuejas();
            this.getView().byId("dlg_QueBuscar").open();
        },
        onCloseDlg_QueBuscar: function () {
            this.getView().byId("dlg_QueBuscar").close();
        },
        onOpenDlg_QueBuscarLista: function () {
            this.limpiarCamposQuejas();
            this.getView().byId("dlg_QueBuscarLista").open();
        },
        onCloseDlg_QueBuscarLista: function () {
            this.getView().byId("dlg_QueBuscarLista").close();
        },
        goQueImprimir: function () {
            this.getView().byId("dlg_que_impresion").open();
        },
        onCloseQueImprimir: function () {
            this.getView().byId("dlg_que_impresion").close();
        },
        /////////Inicio Instalacion////////////////////////        
        onContinuarDlg_DialogDocInstalacion: function () {
            var self = this;
var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
            var pedido1 = self.getView().getModel().getProperty("/modelInstala/pedido1");
            var pedido2 = self.getView().getModel().getProperty("/modelInstala/pedido2");
            var pedido3 = self.getView().getModel().getProperty("/modelInstala/pedido3");
            var pedido4 = self.getView().getModel().getProperty("/modelInstala/pedido4");
            var cotiza1 = self.getView().getModel().getProperty("/modelInstala/cotiza1");
            var cotiza2 = self.getView().getModel().getProperty("/modelInstala/cotiza2");
            var cotiza3 = self.getView().getModel().getProperty("/modelInstala/cotiza3");
            var pedvisi = self.getView().getModel().getProperty("/modelInstala/pedvisi");
            var result = documentosServices.crearInstalacion(pedido1, pedido2, pedido3, pedido4, cotiza1, cotiza2, cotiza3, pedvisi);
            if (result.c === "s") {
                if (result.data.success) {
                    self.getView().getModel().setProperty("/resultIntala", result.data.result);
                    self.getView().getModel().refresh();
                    window.pedidoInstalacion = result.data.numPedido;
                    self.getView().getModel().refresh();
                    self.getView().byId("dlg_DialogDocInstalacion").close();
                    self.getView().byId("dlg_MensajeAvisoInstalacion").open();
                } else {
                    sap.m.MessageToast.show(result.data.result, {
                        duration: 3000
                    });
                }
            } else {
                sap.m.MessageToast.show(result.m, {
                    duration: 3000
                });
            }
            console.log(result.data);
            busyDialog.close();
                    }, 200);
        },
        onOkMensajeInstalacion: function () {
            this.getView().byId("dlg_MensajeAvisoInstalacion").close();
            if (window.pedidoInstalacion) {
                var self = this;
                var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                    oRouter.navTo("appDocModificar");
                    busyDialog.close();
                    }, 200);
            }
        },
        onCancelDlg_DialogDocInstalacion: function () {
            window.IsDocInstalacion=false;
            this.getView().getModel().refresh();
            this.getView().byId("dlg_DialogDocInstalacion").close();
        },
        ////////Fin Instalacion////////////////////////////
        //Usuario-----------------------------
        goUsuInformacion: function (oEvent) {
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
                oRouter.navTo("appUsuInformacion");
                busyDialog.close();
                    }, 200);
        },
        ///////////////Imprimir/////////////////////////////////////////////////////////
        //////////Imprimir Documento/////////////////////////////////////////
        onImprimirDoc: function (){
            var imprimirDoc = this.getView().getModel().getProperty("/imprimirDoc");
            if(imprimirDoc.pNumPedido!=""){
            if(utilString.isNumeric(imprimirDoc.pNumPedido)){

            var result = imprimirServices.imprimirDocumento(imprimirDoc);
            var opcion1 = this.getView().byId("opcion1").getSelected();
            var opcion2 = this.getView().byId("opcion2").getSelected();
            //var opcion3 = this.getView().byId("opcion3").getSelected();
            var rutaImpresion = "http://ventas.decor-center.com/DecorQAs/";
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                if (result.c === "s")
                {
                    if (result.data.success)
                    {
                        if (opcion1 == true)
                        {
                            var tipoDoc = result.data.objPedido.CodTipoDoc;
                            var fechap = result.data.objPedido.Fecha;
                        }
                        var NoImpFac = "";
                        if (opcion1 == true)
                        {
                            NoImpFac = result.data.objPedido.NoImpFac;
                        }
                        if (NoImpFac == "X")
                        {
                            self.getView().getModel().setProperty("/MensajeCorrecto", "No se puede imprimir por bloqueo de factura");
                            self.getView().byId("txt_aviso_general").bindProperty("text", {path: "/MensajeCorrecto"});
                            self.getView().getModel().refresh();
                            self.getView().byId("dlg_MensajeAvisoGeneral").open();
                        } else
                        {
                            if (opcion1 == true)
                            {
                                if (tipoDoc == "Z036")
                                {
                                    if (result.data.objPedido.CanalDist == "30")
                                    {
                                        if (result.data.objPedido.CodOficina == "1140")
                                        {
                                            window.open(rutaImpresion + "DocImprVisDE.aspx?np=" + imprimirDoc.pNumPedido, "");
                                        } else
                                        {
                                            window.open(rutaImpresion + "DocImpVisitas.aspx?np=" + imprimirDoc.pNumPedido, "");
                                        }
                                    } else if (result.data.objPedido.CanalDist == "20")
                                    {
                                        if (result.data.objPedido.CodOficina == "1130")
                                        {
                                            window.open(rutaImpresion + "DocImprVisUF.aspx?np=" + imprimirDoc.pNumPedido, "");
                                        } else
                                        {
                                            window.open(rutaImpresion + "DocImprVisFA.aspx?np=" + imprimirDoc.pNumPedido, "");
                                        }
                                    } else
                                    {
                                        if (result.data.objPedido.CodOficina == "1110" ||
                                                result.data.objPedido.CodOficina == "1040" ||
                                                result.data.objPedido.CodOficina == "1070")
                                        {
                                            window.open(rutaImpresion + "DocImprVisCasa.aspx?np=" + imprimirDoc.pNumPedido, "");
                                        } else
                                        {
                                            window.open(rutaImpresion + "DocImpVisitas.aspx?np=" + imprimirDoc.pNumPedido, "");
                                        }
                                    }
                                } else
                                {
                                    if (result.data.objPedido.CanalDist == "30")
                                    {
                                        if (result.data.objPedido.CodOficina == "1140")
                                        {
                                            var fechaz = window.dataIni.lstValambi[0].Descripcion;
                                            if (fechaz <= fechap)
                                            {
                                                window.open(rutaImpresion + "DocImprGrpAmbDE.aspx?np=" + imprimirDoc.pNumPedido, "");
                                            } else
                                            {
                                                window.open(rutaImpresion + "DocImprDE.aspx?np=" + imprimirDoc.pNumPedido, "");
                                            }
                                        } else if (result.data.objPedido.CodOficina == "1110" ||
                                                result.data.objPedido.CodOficina == "1040")
                                        {
                                            window.open(rutaImpresion + "DocImprGrpAmbCasa.aspx?np=" + imprimirDoc.pNumPedido, "");
                                        } else
                                        {
                                            if (tipoDoc == "ZO01" || tipoDoc == "Z001")
                                            {
                                                var fechaz = window.dataIni.lstValambi[0].Descripcion;
                                                if (fechaz <= fechap)
                                                {
                                                    window.open(rutaImpresion + "DocImprGrpAmb.aspx?np=" + imprimirDoc.pNumPedido, "");
                                                } else
                                                {
                                                    window.open(rutaImpresion + "DocImpr.aspx?np=" + imprimirDoc.pNumPedido, "");
                                                }
                                            } else {
                                                window.open(rutaImpresion + "DocImpr.aspx?np=" + imprimirDoc.pNumPedido, "");
                                            }
                                        }
                                    } else if (result.data.objPedido.CanalDist == "20")
                                    {
                                        if (result.data.objPedido.CodOficina == "1130")
                                        {
                                            window.open(rutaImpresion + "DocImprUF.aspx?np=" + imprimirDoc.pNumPedido, "");
                                        } else
                                        {
                                            window.open(rutaImpresion + "DocImprFA.aspx?np=" + imprimirDoc.pNumPedido, "");
                                        }
                                    } else
                                    {
                                        if (tipoDoc == "ZO01" || tipoDoc == "Z001")
                                        {
                                            var fechaz = window.dataIni.lstValambi[0].Descripcion;
                                            if (fechaz <= fechap)
                                            {
                                                if (result.data.objPedido.CodOficina == "1110" ||
                                                        result.data.objPedido.CodOficina == "1040" ||
                                                        result.data.objPedido.CodOficina == "1070")
                                                {
                                                    window.open(rutaImpresion + "DocImprGrpAmbCasa.aspx?np=" + imprimirDoc.pNumPedido, "");
                                                } else
                                                {
                                                    window.open(rutaImpresion + "DocImprGrpAmb.aspx?np=" + imprimirDoc.pNumPedido, "");
                                                }
                                            } else
                                            {
                                                if (result.data.objPedido.CodOficina == "1110" ||
                                                        result.data.objPedido.CodOficina == "1040" ||
                                                        result.data.objPedido.CodOficina == "1070")
                                                {
                                                    window.open(rutaImpresion + "DocImprCasa.aspx?np=" + imprimirDoc.pNumPedido, "");
                                                } else {
                                                    window.open(rutaImpresion + "DocImpr.aspx?np=" + imprimirDoc.pNumPedido, "");
                                                }
                                            }
                                        } else
                                        {
                                            if (result.data.objPedido.CodOficina == "1110" ||
                                                    result.data.objPedido.CodOficina == "1040" ||
                                                    result.data.objPedido.CodOficina == "1070")
                                            {
                                                window.open(rutaImpresion + "DocImprCasa.aspx?np=" + imprimirDoc.pNumPedido, "");
                                            } else {
                                                window.open(rutaImpresion + "DocImpr.aspx?np=" + imprimirDoc.pNumPedido, "");
                                            }
                                        }
                                    }
                                }
                                self.getView().getModel().setProperty("/MensajeCorrecto", "Se envio a imprimir el documento");
                                self.getView().byId("txt_aviso_general").bindProperty("text", {path: "/MensajeCorrecto"});
                                self.getView().getModel().refresh();
                                self.getView().byId("dlg_MensajeAvisoGeneral").open();
                            } else if (opcion2 == true)
                            {
                                var tipoDoc = result.data.objPedido.CodTipoDoc;
                                if (tipoDoc == "Z001" || tipoDoc == "Z034" || tipoDoc == "Z003" ||
                                        tipoDoc == "Z004" || tipoDoc == "Z010")
                                {
                                    if ((result.data.objPedido.CanalDist == "10" ||
                                            result.data.objPedido.CanalDist == "30") &&
                                            (result.data.objPedido.CodOficina == "1110" ||
                                                    result.data.objPedido.CodOficina == "1040" ||
                                                    result.data.objPedido.CodOficina == "1070"))
                                    {
                                        window.open(rutaImpresion + "DocPedEntImprCasa.aspx?np=" + imprimirDoc.pNumPedido, "");
                                    } else {
                                        window.open(rutaImpresion + "DocPedEntImpr.aspx?np=" + imprimirDoc.pNumPedido, "");
                                    }
                                    self.getView().getModel().setProperty("/MensajeCorrecto", "Se envio a imprimir el documento");
                                    self.getView().byId("txt_aviso_general").bindProperty("text", {path: "/MensajeCorrecto"});
                                    self.getView().getModel().refresh();
                                    self.getView().byId("dlg_MensajeAvisoGeneral").open();
                                } else
                                {
                                    self.getView().getModel().setProperty("/MensajeCorrecto", "La impresión seleccionada solo es válida para pedidos Z001,Z034,Z003,Z004 y Z010");
                                    self.getView().byId("txt_aviso_general").bindProperty("text", {path: "/MensajeCorrecto"});
                                    self.getView().getModel().refresh();
                                    self.getView().byId("dlg_MensajeAvisoGeneral").open();
                                }
                            }
                        }
                    } else
                    {
                        sap.m.MessageToast.show(result.data.errors.reason, {
                            duration: 3000
                        });
                    }
                } else
                {
                    sap.m.MessageToast.show(result.m, {
                        duration: 3000
                    });
                }
                //console.log(result.data);
                busyDialog.close();
                    }, 200);
        }else{
            MessageToast.show("Ingrese un Número, no letras ni símbolos");
        }
    }else{
        MessageToast.show("Ingrese un Número");
    }
        },
        ////////////////////////////////////////////////////////////////////
        //////////Imprimir Reclamo/////////////////////////////////////////
        onImprimirRec: function () {
            var imprimirRec = this.getView().getModel().getProperty("/imprimirRec");
            if(imprimirRec.pNumeroReclamo!=""){
            if(utilString.isNumeric(imprimirRec.pNumeroReclamo)){

            var result = imprimirServices.imprimirReclamo(imprimirRec);
            var rutaImpresion = "http://ventas.decor-center.com/DecorQAs/";
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                if (result.c === "s") {
                    if (result.data.success) {
                        if (result.data.objReclamo.Contactos.VTWEG == "30")
                        {
                            if (result.data.objReclamo.Contactos.VKBUR == "1140")
                            {
                                window.open(rutaImpresion + "ImprReclamoDE.aspx?np=" + imprimirRec.pNumeroReclamo, "");
                            } else
                            {
                                window.open(rutaImpresion + "ImprReclamo.aspx?np=" + imprimirRec.pNumeroReclamo, "");
                            }
                        } else if (result.data.objReclamo.Contactos.VTWEG == "20")
                        {
                            if (result.data.objReclamo.Contactos.VKBUR == "1130")
                            {
                                window.open(rutaImpresion + "ImprReclamoUF.aspx?np=" + imprimirRec.pNumeroReclamo, "");
                            } else
                            {
                                window.open(rutaImpresion + "ImprReclamoFA.aspx?np=" + imprimirRec.pNumeroReclamo, "");
                            }
                        } else
                        {
                            if (result.data.objReclamo.Contactos.VKBUR == "1110" ||
                                    result.data.objReclamo.Contactos.VKBUR == "1040" ||
                                    result.data.objReclamo.Contactos.VKBUR == "1070") //..
                            {
                                window.open(rutaImpresion + "ImprReclamoCasa.aspx?np=" + imprimirRec.pNumeroReclamo, "");
                            } else
                            {
                                window.open(rutaImpresion + "ImprReclamo.aspx?np=" + imprimirRec.pNumeroReclamo, "");
                            }
                        }
                        self.getView().getModel().setProperty("/MensajeCorrecto", "Se envio a imprimir el reclamo");
                        self.getView().byId("txt_aviso_general").bindProperty("text", {path: "/MensajeCorrecto"});
                        self.getView().getModel().refresh();
                        self.getView().byId("dlg_MensajeAvisoGeneral").open();
                    } else {
                        sap.m.MessageToast.show(result.data.errors.reason, {
                            duration: 3000
                        });
                    }
                } else {
                    sap.m.MessageToast.show(result.m, {
                        duration: 3000
                    });
                }
                console.log(result.data);
                self.getView().byId("loadingControl").close();
            }, 500);
            }else{
                MessageToast.show("Ingrese un Número, no letras ni símbolos");
            }

        }else{
            MessageToast.show("Ingrese un Número");
        }
        },
        ////////////////////////////////////////////////////////////////////
        //////////Imprimir Queja/////////////////////////////////////////
        onImprimirQue: function () {
            var imprimirQue = this.getView().getModel().getProperty("/imprimirQue");
            if(imprimirQue.pNumeroQueja!=""){
            if(utilString.isNumeric(imprimirQue.pNumeroQueja)){

            var result = imprimirServices.imprimirQueja(imprimirQue);
            var rutaImpresion = "http://ventas.decor-center.com/DecorQAs/";
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                if (result.c === "s") {
                    if (result.data.success) {
                        if (result.data.objqueja.Contactos.VTWEG == "30")
                        {
                            if (result.data.objqueja.Contactos.VKBUR == "1140")
                            {
                                window.open(rutaImpresion + "imprQuejaDE.aspx?np=" + imprimirQue.pNumeroQueja, "");
                            } else
                            {
                                window.open(rutaImpresion + "imprQueja.aspx?np=" + imprimirQue.pNumeroQueja, "");
                            }
                        } else if (result.data.objqueja.Contactos.VTWEG == "20")
                        {
                            if (result.data.objqueja.Contactos.VKBUR == "1130")
                            {
                                window.open(rutaImpresion + "imprQuejaUF.aspx?np=" + imprimirQue.pNumeroQueja, "");
                            } else
                            {
                                window.open(rutaImpresion + "imprQuejaFA.aspx?np=" + imprimirQue.pNumeroQueja, "");
                            }
                        } else
                        {
                            if (result.data.objqueja.Contactos.VKBUR == "1110" ||
                                    result.data.objqueja.Contactos.VKBUR == "1040" ||
                                    result.data.objqueja.Contactos.VKBUR == "1070") //..
                            {
                                window.open(rutaImpresion + "imprQuejaCasa.aspx?np=" + imprimirQue.pNumeroQueja, "");
                            } else
                            {
                                window.open(rutaImpresion + "imprQueja.aspx?np=" + imprimirQue.pNumeroQueja, "");
                            }
                        }
                        self.getView().getModel().setProperty("/MensajeCorrecto", "Se envio a imprimir la queja");
                        self.getView().byId("txt_aviso_general").bindProperty("text", {path: "/MensajeCorrecto"});
                        self.getView().getModel().refresh();
                        self.getView().byId("dlg_MensajeAvisoGeneral").open();
                    } else {
                        sap.m.MessageToast.show(result.data.errors.reason, {
                            duration: 3000
                        });
                    }
                } else {
                    sap.m.MessageToast.show(result.m, {
                        duration: 3000
                    });
                }
                console.log(result.data);
                busyDialog.close();
                    }, 200);
            }else{
                MessageToast.show("Ingrese un Número, no letras ni símbolos");
            }
        }else{
            MessageToast.show("Ingrese un Número");
        }
        },
        ////////////////////////////////////////////////////////////////////////////////
        /////////Buscar Cliente en Nueva Queja/////////////////////////
        onBuscarCliQueja: function () {
            var buscarCliQueja = this.getView().getModel().getProperty("/datosQueja");
            var result = quejaServices.buscarCliQueja(buscarCliQueja);
            var self = this;
            if (buscarCliQueja.CodCli !== "") {
                var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                    if (result.c === "s") {
                        if (result.data.success) {
                            if (result.data.objCliente.Mail == "X")
                            {
                                MessageToast.show("No se encontró información");
                            } else {
                                var apellidoPat = result.data.objCliente.APPAT;
                                var apellidoMat = result.data.objCliente.APMAT;
                                var nombre = result.data.objCliente.NOMBRE;
                                var descripcion = result.data.objCliente.Descripcion;
                                //NOMBRES
                                if (result.data.objCliente.APPAT == null)
                                {
                                    apellidoPat = "";
                                } else
                                {
                                    apellidoPat = result.data.objCliente.APPAT;
                                }
                                if (result.data.objCliente.APMAT == null)
                                {
                                    apellidoMat = "";
                                } else
                                {
                                    apellidoMat = result.data.objCliente.APMAT;
                                }
                                if (result.data.objCliente.NOMBRE == null)
                                {
                                    nombre = "";
                                } else
                                {
                                    nombre = result.data.objCliente.NOMBRE;
                                }
                                if (result.data.objCliente.Descripcion == null)
                                {
                                    descripcion = "";
                                } else
                                {
                                    descripcion = result.data.objCliente.Descripcion;
                                }
                                buscarCliQueja.NomCliente = apellidoPat + " " + apellidoMat + " " + nombre + " " + descripcion;
                                //DIRECCION      
                                if (buscarCliQueja.CodCli.length == 10)
                                {
                                    buscarCliQueja.Calles = result.data.objCliente.Direccion;
                                }
                                if (buscarCliQueja.CodCli.length == 8)
                                {
                                    buscarCliQueja.Calles = result.data.objCliente.DIREC;
                                }
                                if (buscarCliQueja.CodCli.length == 11)
                                {
                                    buscarCliQueja.Calles = result.data.objCliente.DIREC;
                                    if (buscarCliQueja.Calles == null || buscarCliQueja.Calles == undefined || buscarCliQueja.Calles == "")
                                    {
                                        buscarCliQueja.Calles = result.data.objCliente.Direccion;
                                    }
                                }
                                //Ubicacion
                                if (result.data.objCliente.Ciudad == null || result.data.objCliente.Ciudad == "" || result.data.objCliente.Ciudad == " " || result.data.objCliente.Ciudad == undefined)
                                {
                                    if (buscarCliQueja.CodCli.length == 11)
                                    {
                                        buscarCliQueja.Ubicacion = result.data.objCliente.Distrito;
                                        if (result.data.objCliente.Distrito == null || result.data.objCliente.Distrito == "" || result.data.objCliente.Distrito == undefined)
                                        {
                                            buscarCliQueja.Ubicacion = result.data.objCliente.Ciudad;
                                        }
                                    } else {
                                        buscarCliQueja.Ubicacion = result.data.objCliente.Ciudad;
                                    }
                                } else {
                                    buscarCliQueja.Ubicacion = result.data.objCliente.Ciudad;
                                }
                                buscarCliQueja.Telefono = result.data.objCliente.Telefono;
                                //buscarCliQueja.OfiVenta = self.getView().getModel().getProperty("/RetornoBuscarCliQueja");
                                //buscarCliQueja.TextoQueja = self.getView().getModel().getProperty("/RetornoBuscarCliQueja");
                                self.getView().getModel().refresh();
                            }
                        } else {
                            sap.m.MessageToast.show(result.data.errors.reason, {
                                duration: 3000
                            });
                        }
                    } else {
                        sap.m.MessageToast.show(result.m, {
                            duration: 3000
                        });
                    }
                    console.log(result.data);
                    busyDialog.close();
                    }, 200);
            } else {
                MessageToast.show("Ingresar DNI o RUC");
            }
        },
        onGuardarQueja: function () {
            var self = this;
            if (self.getView().byId("txt_ruc_nuevaQueja").getValue() == "")
            {
                MessageToast.show("Ingrese RUC o DNI");
            } else if (self.getView().byId("txt_descripcion_nuevaQueja").getValue() == "")
            {
                MessageToast.show("Ingrese Nombre o Descripción");
            } else if (self.getView().byId("txt_calle_nuevaQueja").getValue() == "")
            {
                MessageToast.show("Ingresar Calle");
            } else if (self.getView().byId("txt_ubicacion_nuevaQueja").getValue() == "")
            {
                MessageToast.show("Ingresar Ubicación o Distrito");
            } else if (self.getView().byId("txt_telefono_nuevaQueja").getValue() == "")
            {
                MessageToast.show("Ingresar Teléfono");
            } else if (self.getView().byId("com_ofVentas_nuevaQueja").getSelectedKey() == "")
            {
                MessageToast.show("Ingresar Oficina de Ventas");
            } else if (self.getView().byId("txtArea_motivo_nuevaQueja").getValue() == "")
            {
                MessageToast.show("Ingresar Motivo de Queja");
            } else
            {
                self.getView().byId("loadingControl").open();
                setTimeout(function () {
                    var nuevoQueja = self.getView().getModel().getProperty("/datosQueja");
                    var result = quejaServices.guardarQueja(nuevoQueja);
                    if (result.c === "s") {
                        if (result.data.success) {
                            var reclamo = result.data.mensaje;
                            var queja = reclamo.replace("El reclamo", "Queja").replace(/:/g, '');
                            //Queja Nro. 0100004532 generado..
                            var num = reclamo.replace("El reclamo Nro. ","").replace(/:/g, '');
                            var NumQueja = num.replace(" generado..","").replace(/:/g, '');
                            self.getView().getModel().setProperty("/MensajeCorrecto", queja);
                            self.getView().byId("txt_aviso_general_queja_nuevo").bindProperty("text", {path: "/MensajeCorrecto"});
                            self.getView().getModel().refresh();
                            self.getView().byId("dlg_MensajeAvisoGeneralQueNuevo").open();
                            self.getView().getModel().setProperty("/datosQueja/NumQueja",NumQueja);
                            self.getView().getModel().setProperty("/datosQueja/CodCli","");
                            self.getView().getModel().setProperty("/datosQueja/NomCliente","");
                            self.getView().getModel().setProperty("/datosQueja/Calles","");
                            self.getView().getModel().setProperty("/datosQueja/Ubicacion","");
                            self.getView().getModel().setProperty("/datosQueja/Telefono","");
                            self.getView().getModel().setProperty("/datosQueja/OfiVenta","");
                            self.getView().getModel().setProperty("/datosQueja/TextoQueja","");
                            //self.getView().byId("dlg_QueModificar").open();
                        } else {
                            sap.m.MessageToast.show(result.data.errors.reason, {
                                duration: 3000
                            });
                        }
                    } else {
                        sap.m.MessageToast.show(result.m, {
                            duration: 3000
                        });
                    }
                    console.log(result.data);
                    self.getView().byId("loadingControl").close();
                }, 500);
            }
        },
        onBuscarQueja: function () {
            var buscarQueja = this.getView().getModel().getProperty("/datosQueja");
            var result = quejaServices.buscarQueja(buscarQueja);
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                if (result.c === "s") {
                    if (result.data.success) {
                        buscarQueja.CodCli = result.data.objqueja.Contactos.KUNNR;
                        buscarQueja.NomCliente = result.data.objqueja.Interlocutor[0].NOMBRE;
                        buscarQueja.Calles = result.data.objqueja.Interlocutor[0].Calle;
                        buscarQueja.Ubicacion = result.data.objqueja.Interlocutor[0].Ciudad;
                        buscarQueja.Telefono = result.data.objqueja.Interlocutor[0].Telefono;
                        buscarQueja.OfiVenta = result.data.objqueja.Contactos.VKBUR;
                        var texto = result.data.objqueja.Texto;
                        buscarQueja.TextoQueja = texto[1].Descripcion;
                        ///////////////////////////////////////
                        buscarQueja.ADRNR = result.data.objqueja.Interlocutor[0].ADRNR;
                        ////////////////////////////////////////
                        self.getView().getModel().refresh();
                    } else {
                        sap.m.MessageToast.show(result.data.errors.reason, {
                            duration: 3000
                        });
                    }
                } else {
                    sap.m.MessageToast.show(result.m, {
                        duration: 3000
                    });
                }
                console.log(result.data);
                busyDialog.close();
                    }, 200);
        },
        onOkDlg_MensajeAvisoGeneral: function () {
            this.getView().byId("dlg_MensajeAvisoGeneral").close();
            this.getView().byId("dlg_QueNuevo").close();
            this.getView().byId("dlg_QueModificar").close();
        },
        onOkDlg_MensajeAvisoGeneralQueNuevo: function(){
            this.getView().byId("dlg_MensajeAvisoGeneralQueNuevo").close();
            this.getView().byId("dlg_QueNuevo").close();
            this.getView().byId("dlg_QueModificar").open();
        },
        onOkDlg_MensajeAvisoGeneralQueModificar: function(){
            this.getView().byId("dlg_MensajeAvisoGeneralQueModificar").close();
            this.getView().byId("dlg_QueModificar").close();
        },
        onModificarQueja: function () {
            var modificarQueja = this.getView().getModel().getProperty("/datosQueja");
            var result = quejaServices.modificarQueja(modificarQueja);
            var self = this;
            if (self.getView().byId("txtArea_motivo_nuevaQueja").getValue() != "")
            {
                self.getView().byId("loadingControl").open();
                setTimeout(function () {
                    if (result.c === "s") {
                        if (result.data.success) {
                            var reclamo = result.data.mensaje;
                            var queja = reclamo.replace("Reclamo", "Queja").replace(/:/g, '');
                            self.getView().getModel().setProperty("/MensajeCorrecto", queja);
                            self.getView().byId("txt_aviso_general_queja_modificar").bindProperty("text", {path: "/MensajeCorrecto"});
                            self.getView().getModel().refresh();
                            self.getView().byId("dlg_MensajeAvisoGeneralQueModificar").open();
                        } else {
                            sap.m.MessageToast.show(result.data.errors.reason, {
                                duration: 3000
                            });
                        }
                    } else {
                        sap.m.MessageToast.show(result.m, {
                            duration: 3000
                        });
                    }
                    console.log(result.data);
                    self.getView().byId("loadingControl").close();
                }, 500);
            } else {
                MessageToast.show("Ingresar texto de la queja");
            }
        },
        onVolver: function () {
            this.getView().byId("dlg_QueBuscarLista").close();
            this.getView().byId("dlg_QueBuscar").open();
        },
        onBuscarListaQueja: function () {
            this.getView().byId("dlg_QueBuscarLista").open();
            var buscarListaQueja = this.getView().getModel().getProperty("/datosQueja");
            var self = this;
            var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
            busyDialog.open();
            setTimeout(function () {
                var result = quejaServices.buscarListaQueja(buscarListaQueja);
                if (result.c === "s") {
                    if (result.data.success) {
                        self.getView().getModel().setProperty("/RetornoBuscarListaQueja", result.data);
                        self.getView().getModel().refresh();
                    } else {
                        sap.m.MessageToast.show(result.data.errors.reason, {
                            duration: 3000
                        });
                    }
                } else {
                    sap.m.MessageToast.show(result.m, {
                        duration: 3000
                    });
                }
                console.log(result.data);
                busyDialog.close();
                    }, 200);
        },
        onListaBuscarQueja: function (evt) {
            var itemLista = evt.getSource().getSelectedItem().getBindingContext().getObject();
            console.log(itemLista);
            this.getView().getModel().setProperty("/QuejaSeleccionado", itemLista);
        },
        verQuejaSeleccionado: function (oEvent) {
            var item =  oEvent.getSource().getBindingContext().getPath();
            var numb = item.match(/\d/g);
            numb = numb.join("");
            var firstItem = this.getView().byId("listaDocumentosBuscarDoc").getItems()[numb]; 
                            this.getView().byId("listaDocumentosBuscarDoc").setSelectedItem(firstItem,true);

            var itemLista = this.getView().byId("listaDocumentosBuscarDoc").getSelectedItem().getBindingContext().getObject();
            console.log(itemLista);
            this.getView().getModel().setProperty("/QuejaSeleccionado", itemLista);
            var quejaSeleccionado = this.getView().getModel().getProperty("/QuejaSeleccionado");
            if (quejaSeleccionado) {
                var verQuejaSeleccionado = this.getView().getModel().getProperty("/datosQueja");
                verQuejaSeleccionado.NumQueja = quejaSeleccionado.VBELN;
                var result = quejaServices.verQuejaSeleccionado(verQuejaSeleccionado);
                var self = this;
                self.getView().byId("loadingControl").open();
                setTimeout(function () {
                    if (result.c === "s") {
                        if (result.data.success) {
                            var interlocutor = result.data.objqueja.Interlocutor;
                            verQuejaSeleccionado.CodCli = result.data.objqueja.Contactos.KUNNR;
                            verQuejaSeleccionado.NomCliente = result.data.objqueja.Interlocutor[0].NOMBRE;
                            verQuejaSeleccionado.Calles = result.data.objqueja.Interlocutor[0].Calle;
                            verQuejaSeleccionado.Ubicacion = result.data.objqueja.Interlocutor[0].Ciudad; //CodPostal
                            verQuejaSeleccionado.Telefono = result.data.objqueja.Interlocutor[0].Telefono;
                            verQuejaSeleccionado.OfiVenta = result.data.objqueja.Contactos.VKBUR;
                            for (var i = 0; i < result.data.objqueja.Texto.length; i++)
                            {
                                if (result.data.objqueja.Texto[i].CodTexto == 'Z013')
                                {
                                    verQuejaSeleccionado.TextoQueja = result.data.objqueja.Texto[i].Descripcion;
                                    break;
                                }
                            }
                            self.getView().getModel().refresh();
                            self.getView().byId("dlg_QueVisualizar").open();
                        } else {
                            sap.m.MessageToast.show(result.data.errors.reason, {
                                duration: 3000
                            });
                        }
                    } else {
                        sap.m.MessageToast.show(result.m, {
                            duration: 3000
                        });
                    }
                    console.log(result.data);
                    self.getView().getModel().setProperty("/QuejaSeleccionado", null);
                    self.getView().byId("loadingControl").close();
                }, 500);
            } else {
                MessageToast.show("Seleccione una Queja");
            }
        },
        onVerBuscarQueja: function () {
            var verBuscarQueja = this.getView().getModel().getProperty("/datosQueja");
            var self = this;
            if (verBuscarQueja.NumQueja != "")
            {
                var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                    var result = quejaServices.verBuscarQueja(verBuscarQueja);
                    if (result.c === "s") {
                        if (result.data.success) {
                            verBuscarQueja.NumQueja = result.data.objqueja.Contactos.VBELN;
                            verBuscarQueja.CodCli = result.data.objqueja.Contactos.KUNNR;
                            verBuscarQueja.NomCliente = result.data.objqueja.Interlocutor[0].NOMBRE;
                            verBuscarQueja.Calles = result.data.objqueja.Interlocutor[0].Calle;
                            verBuscarQueja.Ubicacion = result.data.objqueja.Interlocutor[0].Ciudad;
                            verBuscarQueja.Telefono = result.data.objqueja.Interlocutor[0].Telefono;
                            verBuscarQueja.OfiVenta = result.data.objqueja.Contactos.VKBUR;
                            for (var i = 0; i < result.data.objqueja.Texto.length; i++)
                            {
                                if (result.data.objqueja.Texto[i].CodTexto == 'Z013')
                                {
                                    verBuscarQueja.TextoQueja = result.data.objqueja.Texto[i].Descripcion;
                                    break;
                                }
                            }
                            self.getView().getModel().refresh();
                        } else {
                            sap.m.MessageToast.show(result.data.errors.reason, {
                                duration: 3000
                            });
                        }
                    } else {
                        sap.m.MessageToast.show(result.m, {
                            duration: 3000
                        });
                    }
                    console.log(result.data);
                    busyDialog.close();
                    }, 200);
            } else {
                MessageToast.show("Ingresar Número de Queja")
            }
        }
    });
});