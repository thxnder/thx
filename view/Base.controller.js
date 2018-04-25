sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("com.decor.ubicaciones.controller.Base", {
		handleValidationErrorReset	: function(oEvent) {
			//oEvent.getSource().setValue(oEvent.getParameter("oldValue"));
		},
		handleValidationError: function(oEvent) {
			//oEvent.getSource().setValueState(sap.ui.core.ValueState.Error);
		},
		handleValidationSuccess: function(oEvent) {
			//oEvent.getSource().setValueState(sap.ui.core.ValueState.Success);
		}
	});
});