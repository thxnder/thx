/* global moment:true */
sap.ui.define([
    "sap/ui/model/json/JSONModel"
], function (JSONModel) {
    "use strict";
    return {
        initModelView: function (controller) {
            controller.getView().setModel(new JSONModel({}));
        },
        property: function (controller, root, data) {

            if (data === false) {
                controller.getView().getModel().setProperty(root, data);
                return null;
            }

            if (data) {
                controller.getView().getModel().setProperty(root, data);
                return null;
            } else {
                var NuevoObjeto = controller.getView().getModel().getProperty(root);
                return NuevoObjeto;
            }
        },
        propertyRefresh: function (controller, root, data) {

            if (data === false) {
                controller.getView().getModel().setProperty(root, data);
                return null;
            }

            if (data) {
                controller.getView().getModel().setProperty(root, data);
                return null;
            } else {
                var objeto = controller.getView().getModel().getProperty(root);
                var llaves = Object.keys(objeto);
                var newObject = {};

                for (var i = 0; i < llaves.length; i++) {
                    var key = llaves[i];
                    var valor = objeto[key];
                    var newValor = "";
                    if (valor !== undefined) {
                        newValor = valor;
                    }
                    newObject[key] = newValor;
                    
                }

                controller.getView().getModel().setProperty(root, newObject);
                controller.getView().getModel().refresh();
                var NuevoObjeto = controller.getView().getModel().getProperty(root);
                return NuevoObjeto;
            }
        },
        refreshModel: function (controller) {
            controller.getView().getModel().refresh();
        },
        byId: function (controller, id) {
            return controller.getView().byId(id);
        },
        controllerFromView: function (controller, id) {
            var idController = this.byId(controller, id).getId();
            return sap.ui.getCore().byId(idController).getController();
        },
        controller: function (nameController) {
            return sap.ui.getCore().byId(this.createId(nameController)).getController();
        },
        formValidate: function (formulario) {
            var controles = formulario.getContent();
            for (var i = 0; i < controles.length; i++) {
                var control = controles[i];
                var type = control.getMetadata().getElementName();
                if (type === "sap.m.Input") {
                    //control.fireChange();
                    var state = control.getValueState() ? control.getValueState() : "None";
                    if (state !== "Success") {
                        return false;
                    }
                }
            }
            return true;
        },
        groupControlsValidate: function (contexto, idGroup) {
            var validador = true;
            var controles = contexto.getView().getControlsByFieldGroupId(idGroup);;
            for (var i = 0; i < controles.length; i++) {
                var control = controles[i];
                var type = control.getMetadata().getElementName();
                if (type === "sap.m.Input") {
                    var state = control.getValueState() ? control.getValueState() : "None";
                    if (state !== "Success") {
                        return false;
                    }
                }

                if (type === "sap.m.Select") {
                    var state = control.getValueState() ? control.getValueState() : "None";
                    if (state !== "Success") {
                        validador = false;
                    }
                }
            }
            return validador;
        }
    };
});