sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/decor/ubicaciones/util/utilController",
	"com/decor/ubicaciones/controladores"
], function(Controller,utilController,controladores) {
	"use strict";

	return Controller.extend("com.decor.ubicaciones.controller.App", {
		onInit: function(event){
			controladores.AppController = this;
			controladores.DlgErroresController = utilController.controllerFromView(this, 'viewErrors');
		}
	});
});