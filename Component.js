sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/m/routing/Router",
], function(UIComponent, Device, Router) {
    "use strict";
    return UIComponent.extend("pe.com.seidor.sap.decor.ventas.Component", {
        metadata: {
            name: "DECOR VENTAS APP",
            rootView: "pe.com.seidor.sap.decor.ventas.view.App",
            routing: {
                config: {
                    routerClass: Router,
                    viewType: "XML",
                    viewPath: "pe.com.seidor.sap.decor.ventas.view",
                    controlId: "app",
                    controlAggregation: "pages",
                    transition: "slide"
                },
                routes: [
                
                //Home
                {
                    pattern: "",
                    name: "appHome",
                    target: "home"
                },
                //Documentos---------------
                {
                    pattern: "doc_nuevo",
                    name: "appDocNuevo",
                    target: "doc_nuevo"
                },
                {
                    pattern: "doc_modificar",
                    name: "appDocModificar",
                    target: "doc_modificar"
                },
                {
                    pattern: "doc_visualizar",
                    name: "appDocVisualizar",
                    target: "doc_visualizar"
                },
                {
                    pattern: "doc_buscar",
                    name: "appDocBuscar",
                    target: "doc_buscar"
                },
                {
                    pattern: "doc_instalacion",
                    name: "appDocInstalacion",
                    target: "doc_instalacion"
                },
                {
                    pattern: "doc_imprimir",
                    name: "appDocImprimir",
                    target: "doc_imprimir"
                },
                {
                    pattern: "doc_flujo",
                    name: "appDocFlujo",
                    target: "doc_flujo"
                },
                //Stock--------------------------
                {
                    pattern: "stock_disponible",
                    name: "appStockDisponible",
                    target: "stock_disponible"
                },
                {
                    pattern: "stock_porllegar",
                    name: "appStockporLlegar",
                    target: "stock_porllegar"
                },
                {
                    pattern: "stock_porpedir",
                    name: "appStockporPedir",
                    target: "stock_porpedir"
                },
                //Reclamos-----------------------
                {
                    pattern: "rec_nuevo",
                    name: "appRecNuevo",
                    target: "rec_nuevo"
                },
                {
                    pattern: "rec_modificar",
                    name: "appRecModificar",
                    target: "rec_modificar"
                },
                {
                    pattern: "rec_visualizar",
                    name: "appRecVisualizar",
                    target: "rec_visualizar"
                },
                {
                    pattern: "rec_buscar",
                    name: "appRecBuscar",
                    target: "rec_buscar"
                },
                {
                    pattern: "rec_imprimir",
                    name: "appRecImprimir",
                    target: "rec_imprimir"
                },
                //Quejas-------------------------
                {
                    pattern: "que_nuevo",
                    name: "appQueNuevo",
                    target: "que_nuevo"
                },
                {
                    pattern: "que_modificar",
                    name: "appQueModificar",
                    target: "que_modificar"
                },
                {
                    pattern: "que_visualizar",
                    name: "appQueVisualizar",
                    target: "que_visualizar"
                },
                {
                    pattern: "que_buscar",
                    name: "appQueBuscar",
                    target: "que_buscar"
                },
                {
                    pattern: "que_imprimir",
                    name: "appQueImprimir",
                    target: "que_imprimir"
                },
                //Usuario------------------------
                {
                    pattern: "usu_informacion",
                    name: "appUsuInformacion",
                    target: "usu_informacion"
                },
                ],
                targets: {
                    home: {
                        viewName: "Home",
                        viewLevel: 0
                    },
                    //Documentos-------------------------------------------------
                    doc_nuevo: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Documentos",
                        viewName: "DocNuevo",
                        viewLevel: 1
                    },
                    doc_modificar: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Documentos",
                        viewName: "DocModificar",
                        viewLevel: 1
                    },
                    doc_visualizar: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Documentos",
                        viewName: "DocVisualizar",
                        viewLevel: 1
                    },
                    doc_buscar: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Documentos",
                        viewName: "DocBuscar",
                        viewLevel: 1
                    },
                    doc_instalacion: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Documentos",
                        viewName: "DocInstalacion",
                        viewLevel: 1
                    },
                    doc_imprimir: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Documentos",
                        viewName: "DocImprimir",
                        viewLevel: 1
                    },
                    doc_flujo: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Documentos",
                        viewName: "DocFlujo",
                        viewLevel: 1
                    },
                    //Stock--------------------------
                    stock_disponible: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Stock",
                        viewName: "StockDisponible",
                        viewLevel: 1
                    },
                    stock_porllegar: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Stock",
                        viewName: "StockporLlegar",
                        viewLevel: 1
                    },
                    stock_porpedir: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Stock",
                        viewName: "StockporPedir",
                        viewLevel: 1
                    },
                    //Reclamos-----------------------
                    rec_nuevo: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Reclamos",
                        viewName: "RecNuevo",
                        viewLevel: 1
                    },
                    rec_modificar: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Reclamos",
                        viewName: "RecModificar",
                        viewLevel: 1
                    },
                    rec_visualizar: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Reclamos",
                        viewName: "RecVisualizar",
                        viewLevel: 1
                    },
                    rec_buscar: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Reclamos",
                        viewName: "RecBuscar",
                        viewLevel: 1
                    },
                    rec_imprimir: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Reclamos",
                        viewName: "RecImprimir",
                        viewLevel: 1
                    },
                    //Quejas-------------------------
                    que_nuevo: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Quejas",
                        viewName: "QueNuevo",
                        viewLevel: 1
                    },
                    que_modificar: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Quejas",
                        viewName: "QueModificar",
                        viewLevel: 1
                    },
                    que_visualizar: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Quejas",
                        viewName: "QueVisualizar",
                        viewLevel: 1
                    },
                    que_buscar: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Quejas",
                        viewName: "QueBuscar",
                        viewLevel: 1
                    },
                    que_imprimir: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Quejas",
                        viewName: "QueImprimir",
                        viewLevel: 1
                    },
                    //Usuario------------------------
                    usu_informacion: {
                        viewPath: "pe.com.seidor.sap.decor.ventas.view.Usuario",
                        viewName: "UsuInformacion",
                        viewLevel: 1
                    },
                }
            }
        },
        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @override
         */
        init: function() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // create the views based on the url/hash
            this.getRouter().initialize();
        }
    });
});