sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"com/decor/ubicaciones/util/utilController",
	"com/decor/ubicaciones/controladores",
	"com/decor/ubicaciones/util/utilUI",
	"com/decor/ubicaciones/servicio/services",
	"com/decor/ubicaciones/formatter/formatter",
	"com/decor/ubicaciones/validacion/validaciones"
], function (Controller, UIComponent, utilController, controladores,utilUI,services,formatter,validaciones) {
	"use strict";

	return Controller.extend("com.decor.ubicaciones.controller.Menu", {
		onInit: function () {
			controladores.MenuController = this;
			utilController.initModelView(this);
			utilController.property(this, "/Centros", []);
			utilController.property(this, "/Usuario", null);
			utilController.property(this, "/CentroSeleccionado", "");
			utilController.refreshModel(this);
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.attachRoutePatternMatched(this.onRouteMatched, this);
		},
		onRouteMatched: function (oEvent) {
			if (oEvent.getParameter("name") === "appMenu") {
				this.getView().byId("navConMenu").to(this.createId(this.getView().byId('viewHome').getId()), 'slide');
			}
		},
		onRecepcionOC: function (oEvent) {
			this.getView().byId("navConMenu").to(this.createId(this.getView().byId('viewRecepcionOC').getId()), 'slide');
			utilController.controllerFromView(this, 'viewRecepcionOC').go(this);
		},
		onRecepcionTraslado: function (oEvent) {

			this.getView().byId("navConMenu").to(this.createId(this.getView().byId('viewRecepcionTras').getId()), 'slide');
			utilController.controllerFromView(this, 'viewRecepcionTras').go(this);
		},
		onCambioUbicacion: function (oEvent) {

			this.getView().byId("navConMenu").to(this.createId(this.getView().byId('viewCambioUbi').getId()), 'slide');
		},
		onHome: function (oEvent) {
			this.getView().byId("navConMenu").to(this.createId(this.getView().byId('viewHome').getId()), 'slide');
		},
		onCerrarSession: function () {
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo("appLogin");
		},
		onAfterLogin: function (centros,usuario) {
			utilController.property(this, "/Centros", centros);
			utilController.property(this, "/CentroSeleccionado", null);
			utilController.property(this, "/Usuario", usuario);
			utilController.refreshModel(this);
			this.getView().byId("dlgCentros").open();
		},
		onCloseDlgCentros: function(oEvent){
			this.getView().byId("dlgCentros").close();
		},
		onSeleccionaDlgCentros: function(oEvent){
			var codCentro = oEvent.getParameter("selectedItem").getBindingContext().getObject();
			utilController.property(this, "/CentroSeleccionado", codCentro);
			utilController.refreshModel(this);
		},
		onOpenDialogCentros: function(oEvent){
			this.getView().byId("dlgCentros").open();
		},
		getCentro: function(){
			return utilController.property(this, "/CentroSeleccionado");
		}
	});
});