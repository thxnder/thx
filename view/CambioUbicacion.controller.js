sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/decor/ubicaciones/util/utilController"
], function(Controller, utilController) {
	"use strict";

	return Controller.extend("com.decor.ubicaciones.controller.CambioUbicacion", {
		goIngresar: function(event) {
			this.getView().byId("SplitApp").to(this.createId(this.getView().byId('viewIngresar').getId()), 'slide');
			utilController.controllerFromView(this, 'viewIngresar').go(this,"I");
		},
		goReubicar: function(event) {
			this.getView().byId("SplitApp").to(this.createId(this.getView().byId('viewIngresar').getId()), 'slide');
			utilController.controllerFromView(this, 'viewIngresar').go(this,"R");
		},
		goSalida: function(event) {
			this.getView().byId("SplitApp").to(this.createId(this.getView().byId('viewIngresar').getId()), 'slide');
			utilController.controllerFromView(this, 'viewIngresar').go(this,"S");
		},
		goUbicar: function(isColectivo, tipo, materiales) {
			this.getView().byId("SplitApp").to(this.createId(this.getView().byId('viewUbicar').getId()), 'slide');
			utilController.controllerFromView(this, 'viewUbicar').go(this, isColectivo, tipo, materiales);
		},
		backToIngreso: function() {
			this.getView().byId("SplitApp").to(this.createId(this.getView().byId('viewIngresar').getId()), 'slide');
		},
		onHome: function(event) {
			this.getView().byId("SplitApp").to(this.createId(this.getView().byId('viewHome').getId()), 'slide');
		}
	});
});