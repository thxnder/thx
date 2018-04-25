sap.ui.define([
	"com/decor/ubicaciones/controller/Base.controller",
	"sap/ui/core/mvc/Controller",
	"com/decor/ubicaciones/util/utilController",
	"sap/ui/model/json/JSONModel",
	"com/decor/ubicaciones/util/utilUI",
	"com/decor/ubicaciones/servicio/services",
	"com/decor/ubicaciones/util/utilFunctions",
	"com/decor/ubicaciones/controladores",
	"com/decor/ubicaciones/formatter/formatter",
	"com/decor/ubicaciones/validacion/validaciones"
], function (Base, Controller, utilController, JSONModel, utilUI, services, utilFunctions, controladores,formatter,validaciones) {
	"use strict";

	return Base.extend("com.decor.ubicaciones.controller.RecepcionTras", {
		pattern: null,
		formatter: formatter,
		go: function (patternEntry) {
			this.pattern = patternEntry;
			utilController.initModelView(this);
			utilController.property(this, "/Filtro", {
				NroEntrega: undefined,
				TipoDocumento: undefined
			});
			utilController.property(this, "/Materiales", []);
			utilController.refreshModel(this);
		},
		onAceptar: function () {
			var self = this;
			var Materiales = utilController.property(self, "/Materiales");
			var MaterialesSeleccionados = [];
			var NroSeleccionados = 0;

			for (var i = 0; i < Materiales.length; i++) {
				if (Materiales[i].Seleccionado) {
					MaterialesSeleccionados.push(Materiales[i]);
					NroSeleccionados++;
				}
			}

			if (NroSeleccionados === 0) {
				utilUI.messageBox("Debe seleccionar al menos un material para recepcionar la orden", "e", function () {});
				return;
			}


			var fnConfirmado = function (confirmado) {
				if (confirmado) {
					self.recepcion(MaterialesSeleccionados);
				}
			};

			if (NroSeleccionados === Materiales.length) {
				utilUI.messageBox("¿Desea grabar el ingreso total de la entrega?", "c", fnConfirmado);
			} else {
				utilUI.messageBox("¿Desea grabar el ingreso parcial de la entrega?", "c", fnConfirmado);
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
		onSearchMateriales: function () {

			utilController.propertyRefresh(this, "/Filtro");

			var tipodoc = utilController.property(this, "/Filtro/TipoDocumento");
			var nrodoc = utilController.property(this, "/Filtro/NroEntrega");
			var validacionTipoDocumento = validaciones.validaTipoDocumento(tipodoc);
			var validacionNroEntrega = validaciones.validaNroEntrega(nrodoc);
			var validacionNroFolio = validaciones.validaNroFolio(nrodoc);
			var errores = [];

			if(validacionTipoDocumento.c !== "s"){
				return utilUI.messageBox(validacionTipoDocumento.m, "e", function () {});
			}

			var self = this;
			if (tipodoc === "1") {

				if(validacionNroEntrega.c !== "s"){
					return utilUI.messageBox(validacionNroEntrega.m, "e", function () {});
				}

				utilUI.gloader(true);
				this.consultaEntrega(nrodoc);
			}

			if (tipodoc === "2") {

				if(validacionNroFolio.c !== "s"){
					return utilUI.messageBox(validacionNroFolio.m, "e", function () {});
				}

				utilUI.gloader(true);
				this.consultaFolio(nrodoc);
			}
		},
		consultaEntrega: function (nrodoc) {
			var self = this;
			services.ConsultaMaterialesPorEntrega(nrodoc, function (result) {
				self.proccessResult(result);
			});
		},
		consultaFolio: function (nrodoc) {
			var self = this;
			services.ConsultaMaterialesPorFolio(nrodoc, function (result) {
				self.proccessResult(result);
			});
		},
		proccessResult: function (result) {
			var self = this;
			utilUI.gloader(false);
			var data = result.data;
			if (result.c == "s" || result.c == "w") {
				//utilUI.messageBox("Materiales encontrados", "s", function () {
				var datos = self.convertMateriales(data);
				utilController.property(self, "/Materiales", datos);
				utilController.refreshModel(self);
				//});
			}

			if (result.c == "e") {
				controladores.DlgErroresController.open(result.m, function () {
					utilController.property(self, "/Materiales", []);
					utilController.refreshModel(self);
				});
			}

			if (result.c == "ex") {
				utilUI.messageBox(result.m, "e", function () {
					utilController.property(self, "/Materiales", []);
					utilController.refreshModel(self);
				});
			}
		},
		recepcion: function (materiales) {
			var self = this;
			utilUI.gloader(true);
			services.Recepcion(materiales, function (result) {
				utilUI.gloader(false);
				var data = result.data;
				if (result.c == "s" || result.c == "w") {
					controladores.DlgErroresController.open(result.m, function () {
						utilController.property(self, "/Materiales", []);
						utilController.refreshModel(self);
					});
				}

				if (result.c == "e") {
					controladores.DlgErroresController.open(result.m, function () {});
				}

				if (result.c == "ex") {
					utilUI.messageBox(result.m, "e", function () {});
				}
			});

		},
		convertMateriales: function (data) {
			var newArray = [];
			var dataAux = [];
			if (!Array.isArray(data)) {
				dataAux.push(data);
			} else {
				dataAux = data;
			}
			for (var i = 0; i < dataAux.length; i++) {
				var item = dataAux[i];
				var newItem = {
					Seleccionado: false,
					Posicion: parseInt(item.POSNR, 10),
					CodMaterial: item.MATNR,
					Material: item.ARKTX,
					Cantidad: parseFloat(item.LFIMG).toFixed(3),
					UM: item.MEINS,
					Centro: item.WERKS,
					Pedido: item.VBELN,
					Almacen: item.LGORT,
					Lote: item.CHARG
				};

				newArray.push(newItem);
			}

			return newArray;
		},
		changeInput: function(oEvent){
			var nrodoc = utilController.property(this, "/Filtro/NroEntrega");
			var newVal = utilFunctions.pad(nrodoc,"0",10);
			utilController.property(this, "/Filtro/NroEntrega",newVal);
			utilController.refreshModel(this);
		}
	});
});