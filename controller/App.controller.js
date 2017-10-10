sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "pe/com/seidor/sap/decor/ventas/app",
    'sap/m/Button',
    'sap/m/Dialog',
    'sap/m/Text',
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/ui/core/UIComponent",
], function(Controller, JSONModel, app, Button, Dialog, Text,MessageBox,MessageToast,UIComponent) {
    "use strict";
    return Controller.extend("pe.com.seidor.sap.decor.ventas.controller.App", {
        onInit: function() {
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.attachRoutePatternMatched(this.onRouteMatched, this);
        },
        onRouteMatched: function (oEvent) {
        },
        goHome:function(){
            window.IsDocNuevo = false;
            window.IsDocModificar = false;
            window.IsDocVisualizar = false;
            window.IsDocInstalacion = false;
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("appHome");
        },

        logout:function(){
             var bOpenInNewWindow= false; //false if you want it in the same window
                sap.m.URLHelper.redirect("index.html", bOpenInNewWindow);
        },
        goUser:function(){
            
        }
    });
});