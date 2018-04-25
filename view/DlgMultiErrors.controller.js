sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/decor/ubicaciones/util/utilController"
], function(Controller, utilController) {
	"use strict";

	return Controller.extend("com.decor.ubicaciones.controller.DlgMultiErrors", {
		open: function(errors,callback) {
			var self = this;
			utilController.initModelView(self);
			utilController.property(self, "/Errores", errors);
			utilController.refreshModel(self);
			//this.getView().byId("dlgErrores").onPress = callback;

			var functionPressClose = function(oEvent){
				self.getView().byId("dlgErrores").close();
				callback();
				if(oEvent){
					if(oEvent.getSource().detachPress){
						oEvent.getSource().detachPress(functionPressClose);
					}
					if(oEvent.getSource().detachAfterClose){
						oEvent.getSource().detachAfterClose(functionPressClose);
					}
				}
			};
			self.getView().byId("dlgErrores").open();
			//self.getView().byId("btnCloseDialog").detachPress();
			self.getView().byId("btnCloseDialog").attachPress(functionPressClose);

			//self.getView().byId("dlgErrores").detachAfterClose();
			self.getView().byId("dlgErrores").attachAfterClose(functionPressClose);
		},
		close: function(event) {
			this.getView().byId("dlgErrores").close();
		},
		formatter: {
			icono : function(valor){
				if(valor === "S"){
					return "sap-icon://message-success";
				}

				if(valor === "W"){
					return "sap-icon://message-warning";
				}

				if(valor === "E"){
					return "sap-icon://message-error";
				}
			},
			color : function(valor){
				if(valor === "S"){
					return "#00ff00";
				}

				if(valor === "W"){
					return "#ff6600";
				}

				if(valor === "E"){
					return "#ff0000";
				}
			}
		}
	});
});