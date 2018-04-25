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

	return Base.extend("com.decor.ubicaciones.controller.RecepcionOC", {
		pattern: null,
		formatter: formatter,
		go: function (patternEntry) {
			this.pattern = patternEntry;
			utilController.initModelView(this);
			utilController.property(this, "/OC", { valor : "4500"});
			utilController.property(this, "/Guia", { valor : undefined});
			utilController.property(this, "/Materiales", []);
			utilController.refreshModel(this);
		},
		onAceptar: function () {
			var self = this;
			var Materiales = utilController.property(self, "/Materiales");
			var NroSeleccionados = 0;
			var MaterialesSeleccionados = [];

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
					//self.recepcion(MaterialesSeleccionados);
					self.MaterialesSeleccionados = MaterialesSeleccionados;
					self.getView().byId("dlgGuiaRemision").open();
				}
			};

			if (NroSeleccionados === Materiales.length) {
				utilUI.messageBox("¿Desea grabar el ingreso total de la entrega?", "c", fnConfirmado);
			} else {
				utilUI.messageBox("¿Desea grabar el ingreso parcial de la entrega?", "c", fnConfirmado);
			}

		},
		recepcion: function (materiales,guia) {
			var self = this;
			for(var i = 0 ; i < materiales.length; i++){
				materiales[i].Guia = guia;
			}
			utilUI.gloader(true);
			services.Recepcion(materiales, function (result) {
				utilUI.gloader(false);
				var data = result.data;
				if (result.c == "s" || result.c == "w") {
					controladores.DlgErroresController.open(result.m, function () {
						self.getView().byId("dlgGuiaRemision").close();
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
			var nrodoc = utilController.propertyRefresh(this, "/OC");
			var respuestaValidacion = validaciones.validaNroOderCompra(nrodoc.valor);
			if (respuestaValidacion.c !== "s") {
				utilUI.messageBox(respuestaValidacion.m, "e", function () {});
				return;
			}

			var self = this;
			utilUI.gloader(true);
			services.ConsultaMaterialesOC(nrodoc.valor, function (result) {
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
			});
		},
		convertMateriales: function (data) {
			var newArray = [];

			for (var i = 0; i < data.length; i++) {
				var item = data[i];
				var newItem = {
					Seleccionado: false,
					Posicion: parseInt(item.EBELP, 10),
					CodMaterial: item.MATNR,
					Material: item.TXZ01,
					Cantidad: parseFloat(item.MENGE).toFixed(3),
					UM: item.MEINS,
					Centro: item.WERKS,
					Pedido: item.EBELN,
					Almacen: item.LGORT,
					Lote: item.CHARG,
					Guia: ""
				};

				newArray.push(newItem);
			}

			return newArray;
		},
		onCancelarGuia: function(event){
			utilController.property(this, "/Guia", { valor : undefined});
			utilController.refreshModel(this);
			this.getView().byId("dlgGuiaRemision").open();
		},
		onRecepcionar: function(evnet){
			var guia = utilController.propertyRefresh(this, "/Guia");
			var respuestaValidacion = validaciones.validaGuia(guia.valor);
			if (respuestaValidacion.c !== "s") {
				utilUI.messageBox(respuestaValidacion.m, "e", function () {});
				return;
			}

			this.recepcion(this.MaterialesSeleccionados,guia.valor);
		}
	});
});