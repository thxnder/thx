sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/decor/ubicaciones/util/utilController",
	"sap/ui/model/json/JSONModel",
	"com/decor/ubicaciones/util/utilUI",
	"com/decor/ubicaciones/model/models",
	"com/decor/ubicaciones/validacion/validaciones",
	"com/decor/ubicaciones/formatter/formatter"
], function(Controller, utilController, JSONModel, utilUI, CUUbicarModel, validaciones,formatter) {
	"use strict";

	return Controller.extend("com.decor.ubicaciones.controller.CUUbicar", {
		formatter: formatter,
		pattern: null,
		isIndividual: true,
		tipoUbicacion: null,
		go: function(patternEntry, pIsIndividual, pTipoUbicacion,pMateriales) {

			this.pattern = patternEntry;
			this.isIndividual = pIsIndividual;
			this.tipoUbicacion = pTipoUbicacion;
			var materiales = validaciones.validaMaterialCantidadTotal(pMateriales);
			utilController.initModelView(this);
			utilController.property(this, "/isIndividual", this.isIndividual);
			utilController.property(this, "/tipoUbicacion", this.tipoUbicacion);
			utilController.property(this, "/Materiales", materiales /*CUUbicarModel.Materiales()*/ );
			utilController.property(this, "/Zonas", pTipoUbicacion !== "S" ? CUUbicarModel.ZonasGeneral() : CUUbicarModel.ZonasSalida());
			utilController.property(this, "/Muebles", CUUbicarModel.Muebles());
			utilController.property(this, "/Secciones", CUUbicarModel.Secciones());
			utilController.refreshModel(this);
		},
		onAceptar: function() {
			var materiales = utilController.property(this, "/Materiales");
			materiales = validaciones.validaMaterialCantidadTotal(materiales);
			utilController.property(this, "/Materiales", materiales);
			utilController.refreshModel(this);
			if(!validaciones.validaMaterialCantidadTotalExec(materiales)){
				utilUI.messageBox("Hay errores en las cantidades, verificar", "e", function() {
					
				});
				return;
			}

			var fnConfirmado = function(confirmado) {
				if (confirmado) {
					utilUI.messageBox("La mercadería fue ubicada correctamente", "s", function() {
						self.onCancelar();
					});
				}
			};
			utilUI.messageBox("¿Desea cambiar la ubicación de estos materiales?", "c", fnConfirmado);

		},
		onCancelar: function() {
			this.pattern.backToIngreso();
		},
		onVerMapa: function(event) {
			this.getView().byId("dlgMapa").open();
		},
		onCloseMapa: function(event) {
			this.getView().byId("dlgMapa").close();
		},
		onVerUbicaciones: function(event) {
			this.getView().byId("dlgUbicaciones").open();
		},
		onCloseUbicaciones: function(event) {
			this.getView().byId("dlgUbicaciones").close();
		},
		changeCheckUbicacion: function(event) {
			var nav = this.getView().byId("navUbicacion");
			var pageManual = this.getView().byId("pgManual");
			var pageQR = this.getView().byId("pgQR");
			if (this.getView().byId("rbManual").getSelected()) {
				nav.to(pageManual);
			} else {
				nav.to(pageQR);
			}
		},
		liveChangeUbicaciones: function(oEvent){
			var valor = oEvent.getSource().getValue();;
			if(isNaN(valor)){
				oEvent.getSource().setValue(0);
			}else{
				oEvent.getSource().setValue(parseInt(valor,10));
			}
			var materiales = utilController.property(this, "/Materiales");
			materiales = validaciones.validaMaterialCantidadTotal(materiales);
			utilController.property(this, "/Materiales", materiales);
			utilController.refreshModel(this);
		}
	});
});