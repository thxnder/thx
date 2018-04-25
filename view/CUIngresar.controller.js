sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/decor/ubicaciones/util/utilController",
	"sap/ui/model/json/JSONModel",
	"com/decor/ubicaciones/util/utilUI",
	"com/decor/ubicaciones/servicio/services",
	"com/decor/ubicaciones/formatter/formatter",
	"com/decor/ubicaciones/validacion/validaciones",
	"com/decor/ubicaciones/controladores"
], function (Controller, utilController, JSONModel, utilUI, services, formatter, validaciones, controladores) {
	"use strict";

	return Controller.extend("com.decor.ubicaciones.controller.CUIngresar", {
		pattern: null,
		formatter: formatter,
		tipo_ubicacion: null,
		go: function (patternEntry, pTipo) {
			var titulo = "";
			var DistintoIngreso = true;
			var hideRadioButton = true;
			var isIndividual = true;
			var tipoBusqueda = 2;
			var centro = controladores.MenuController.getCentro();
			
			if (pTipo === "I") {
				titulo = "INGRESO";
				DistintoIngreso = false;
				tipoBusqueda = 1;
			}

			if (pTipo === "R") {
				titulo = "REUBICACIÓN";
			}

			if (pTipo === "S") {
				titulo = "SALIDA";
				hideRadioButton = false;
				isIndividual = false;
			}
			this.tipo_ubicacion = pTipo;
			this.pattern = patternEntry;
			utilController.initModelView(this);
			utilController.property(this, "/isIndividual", isIndividual);
			utilController.property(this, "/hideRadioButton", hideRadioButton);
			utilController.property(this, "/tipoUbicacion", pTipo);
			utilController.property(this, "/DistintoIngreso", DistintoIngreso);
			utilController.property(this, "/Titulo", titulo);
			utilController.property(this, "/Materiales", []);
			utilController.refreshModel(this);

			var self = this;
			utilUI.gloader(true);
			services.ConsultaStock(tipoBusqueda,centro.WERKS, function(result){
				utilUI.gloader(false);
				if(result.c === "s" || result.c == "w"){
					var datos = self.convertMateriales(result.data);
					utilController.property(self, "/Materiales",datos);
				}else if(result.c === "e"){
					utilController.property(self, "/Materiales", []);
					controladores.DlgErroresController.open(result.m, function(){});
				}else{
					utilController.property(self, "/Materiales", []);
			
					utilUI.messageBox(result.m, "e", function () {});
				}
				utilController.refreshModel(self);
			});
			
		},
		convertMateriales: function (data) {
			var newArray = [];

			for (var i = 0; i < data.length; i++) {
				var item = data[i];
				var newItem = {
					Seleccionado: false,
					CodMaterial: item.MATNR,
					Material: item.MAKTX,
					Cantidad: parseFloat(item.CLABS).toFixed(3),
					UM: item.MEINS,
					NUbicaciones: 1,
					CantidadTotal:  parseInt(item.CLABS,10),
					Centro: item.WERKS,
					Almacen: item.LGORT,
					Lote: item.CHARG,
					cantidadEstado: "None",
					cantidadMensaje: ""
				};

				newArray.push(newItem);
			}

			return newArray;
		},
		onValidarTabla: function () {
			var self = this;
			var Materiales = utilController.property(self, "/Materiales");
			var NroSeleccionados = 0;

			for (var i = 0; i < Materiales.length; i++) {
				if (Materiales[i].Seleccionado) {
					NroSeleccionados++;
				}
			}

			if (NroSeleccionados === 0) {
				utilUI.messageBox("Debe seleccionar al menos un material para recepcionar la orden", "e", function () {});
				return false;
			}

			return true;
		},
		onAceptar: function () {
			var self = this;
			var isIndividual = utilController.property(this, "/isIndividual");
			var newMateriales = [];
			var materiales = utilController.property(this, "/Materiales");
			if (self.onValidarTabla()) {
				for (var i = 0; i < materiales.length; i++) {
					if (materiales[i].Seleccionado) {
						var ubicaciones = materiales[i].NUbicaciones;
						for (var j = 0; j < ubicaciones; j++) {
							materiales[i].Item = j + 1;
							//materiales[i].CantidadTotal = JSON.stringify(JSON.parse(materiales[i].Cantidad));
							if (j === 0) {
								materiales[i].Cantidad = materiales[i].CantidadTotal;
							} else {
								materiales[i].Cantidad = 0;
							}
							materiales[i].Ubicacion = "DURO000" + j.toString();
							newMateriales.push(JSON.parse(JSON.stringify(materiales[i])));
						}
					}
				}
				/*var fnConfirmado = function(confirmado) {
					if (confirmado) {
						self.pattern.goUbicar(isIndividual, self.tipo_ubicacion,newMateriales);
					}
				};

				utilUI.messageBox("¿Desea ubicar los siguientes materiales?", "c", fnConfirmado);*/

				self.pattern.goUbicar(isIndividual, self.tipo_ubicacion, newMateriales);
			}
		},
		onCancelar: function () {
			this.pattern.onHome();
		},
		onCheckMateriales: function () {
			var valor = this.getView().byId("checkMateriales").getSelected();
			var materiales = utilController.property(this, "/Materiales");
			for (var i = 0; i < materiales.length; i++) {
				materiales[i].Seleccionado = valor;
			}
			utilController.property(this, "/Materiales", materiales);
			utilController.refreshModel(this);
		},
		liveChangeUbicaciones: function (oEvent) {
			var value = oEvent.getSource().getValue();
			var bNotnumber = isNaN(value);
			if (bNotnumber !== false) {
				oEvent.getSource().setValue(value);
			} else {
				var valor = parseInt(value,10);
				if(valor > 10){
					oEvent.getSource().setValue(10);
				}
				else if(valor < 0){
					oEvent.getSource().setValue(0);
				}else{
					oEvent.getSource().setValue(valor);
				}
			}
		}
	});
});