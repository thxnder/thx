sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "pe/com/seidor/sap/decor/ventas/services/clienteServices",
    "pe/com/seidor/sap/decor/ventas/services/materialServices",
    'jquery.sap.global',
    "pe/com/seidor/sap/decor/ventas/services/flujoDocumentoServices"
], function (Controller, MessageToast, UIComponent, JSONModel, clienteServices, materialServices, jQuery, flujoDocumentoServices) {
    "use strict";
    return Controller.extend("pe.com.seidor.sap.decor.ventas.controller.Documentos.DocFlujo", {
        onInit: function () {
            var oRouter = UIComponent.getRouterFor(this);
            oRouter.attachRoutePatternMatched(this.onRouteMatched, this);
        },
        onRouteMatched: function (oEvent) {
        },
        
        
        listaToArbol:function(list) {
            var map = {};
            var node, roots = [];
            var i = 0;
            for (i = 0; i < list.length; i += 1) {
                map[list[i].id] = i; // initialize the map
                list[i].children = []; // initialize the children
            }
            for (i = 0; i < list.length; i += 1) {
                node = list[i];
                if (node.parentId !== "0") {
                    // if you have dangling branches check that map[node.parentId] exists
                    list[map[node.parentId]].children.push(node);
                } else {
                    roots.push(node);
                }
            }
            return roots;
        },
        onQuitarCaracter:function(cadena, caracter){
            for (var i = 0; i < (cadena.length)*2; i++) {
                if(cadena.indexOf(caracter)==0){
                    cadena = cadena.replace(caracter, "");
                }else{
                    break;
                }
            }
            return cadena;
        },
        onItemTreeTable:function(oEvent){
            var fila = oEvent.getSource().getBindingContext().getObject();
            var tipoDoc = fila.TipoDocumento;
            if(tipoDoc=="Entrega"){
                this.getView().byId("txt_aviso_flujo").setText("Este Tipo de Documento es Entrega");
                this.getView().byId("dlg_MensajeAvisoFlujo").open();
            }else{
                this.getView().byId("txt_aviso_flujo").setText("Solo se puede ver Detalle de una Entrega");
                this.getView().byId("dlg_MensajeAvisoFlujo").open();
            }
        },
        onOkDlg_MensajeAvisoFlujo:function(){
            this.getView().byId("dlg_MensajeAvisoFlujo").close();
        },
        //Continuar en Dialog Flujo
        onContinuarDlg_DialogDocFlujo: function (oEvent) {
            if (this.getView().byId("txt_numDoc_flujo").getValue() !== "") {
                var self = this;
var busyDialog = new sap.m.BusyDialog({customIconHeight : "32px",customIconWidth :"32px"});
busyDialog.open();
setTimeout(function () {
                var pNumPedido = self.getView().byId("txt_numDoc_flujo").getValue();
                var UserId = window.dataIni.user.User;
                var PwdId = window.dataIni.user.Password;
                var Id = "e48be9f4-82b1-4cc4-9894-1c01e78c0722";
                var GrpVend = window.dataIni.person.GrpVend;
                var Descripcion = window.dataIni.person.Descripcion;
                var CodigoVendedor = window.dataIni.person.PerNr;
                var OrgVentas = window.dataIni.person.OrgVentas;
                var CanalDist = window.dataIni.person.CanalDist;
                var OfVentas = window.dataIni.person.OfVentas;
                var result = flujoDocumentoServices.flujoDocumento(pNumPedido,
                        UserId,
                        PwdId,
                        Id,
                        GrpVend,
                        Descripcion,
                        CodigoVendedor,
                        OrgVentas,
                        CanalDist,
                        OfVentas
                        );
                if (result.c === "s") {
                    if (result.data.success) {
                        self.getView().getModel().setProperty("/retornoFlujo", result.data);
                        /////Inicio Tree/////////////////////////////////////////////////////////////////////////////////////////
                        for (var i = 0; i < result.data.flujo.length; i++) {
                            result.data.flujo[i].TipoDocumento = self.onQuitarCaracter(result.data.flujo[i].TipoDocumento,">");
                            result.data.flujo[i].id = parseInt(result.data.flujo[i].Jerarquia).toString();
                            result.data.flujo[i].parentId =(result.data.flujo[i].Num=="")?"0":parseInt(result.data.flujo[i].Num).toString();
                            result.data.flujo[i].children = null;
                        }
                        self.getView().getModel().setProperty("/flujoTemporal1", self.listaToArbol(result.data.flujo) );
                        //////End Tree//////////////////////////////////////////////////////////////////////////////////////////
                        console.log(self.getView().getModel().getProperty("/retornoFlujo"));
                        var flujo = self.getView().getModel().getProperty("/retornoFlujo/flujo");
                        self.getView().getModel().setProperty("/flujo0", flujo[0]);
                        self.getView().getModel().setProperty("/flujo1", flujo[1]);
                        console.log(self.getView().getModel().getProperty("/flujo0/TipoDocumento"));
                        self.getView().byId("dlg_DialogDocFlujo").close();
                    } else {
                        sap.m.MessageToast.show(result.data.errors.reason, {
                            duration: 3000
                        });
                    }
                } else {
                    sap.m.MessageToast.show(result.m, {
                        duration: 3000
                    });
                }
                console.log(result.data);
                busyDialog.close();
                    }, 200);
            } else {
                MessageToast.show("Falta Ingresar Nro. de Documento");
            }
        },
        //Boton Home
        goHome: function () {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("appHome");
        },
        onListaMasterFlujo: function (evt) {
            var obj = evt.getSource().getSelectedItem().getBindingContext().getObject();
            if (obj.codigo === 1) {
                this.byId("SplitAppId").to(this.createId("pag_flujo_detail1"))
            }
            if (obj.codigo === 2) {
                this.byId("SplitAppId").to(this.createId("pag_status_detail1"))
            }
        },

























         handleUploadComplete: function(oEvent) {
            this.cargarArchivo();
            var sResponse = oEvent.getParameter("response");
        },

        

        handleTypeMissmatch: function(oEvent) {
            
            var aFileTypes = oEvent.getSource().getFileType();
            jQuery.each(aFileTypes, function(key, value) {aFileTypes[key] = "*." +  value;});
            var sSupportedFileTypes = aFileTypes.join(", ");
            MessageToast.show("The file type *." + oEvent.getParameter("fileType") +
                                    " is not supported. Choose one of the following types: " +
                                    sSupportedFileTypes);
        },



        handleUploadPress: function(oEvent) {
            var oFileUploader = this.getView().byId("fileUploader");
            if (!oFileUploader.getValue()) {
                MessageToast.show("Choose a file first");
                return;
            } 
            oFileUploader.upload();
            var dd = oFileUploader;
        },

        handleValueChange: function(oEvent) {
            MessageToast.show("Press 'Upload File' to upload file '" +
                                    oEvent.getParameter("newValue") + "'");
            //this.handleUploadPress();
            
        },



        cargarArchivo:function(){
            var self = this;

          var img = document.querySelector('img');
          var canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext('2d');
          // rotate by 90 deg
          ctx.rotate(Math.PI);
          ctx.translate(-img.width, -img.height);
          ctx.drawImage(img, 0, 0);
          // decode
          QCodeDecoder().decodeFromImage(canvas.toDataURL(), function(err, res){
            //document.body.appendChild(document.createTextNode(res||err))
            var dd = document.createTextNode(res||err).nodeValue;
            self.getView().byId("txt_codigo_anadir_material").setValue(dd);
            });
        },










        uploadFile : function(){

var file = jQuery.sap.domById("__xmlview2–fileupload-fu").files[0];
                try {
                  if (file) {
                    this._bUploading = true;
                    var that = this;
/****************To Fetch CSRF Token*******************/
                      var a = "/Yourservice URL or Metadata URL ";
                      var f = {
                        headers : {
                          "X-Requested-With" : "XMLHttpRequest",
                          "Content-Type" : "application/atom+xml",
                          "DataServiceVersion" : "2.0",
                          "X-CSRF-Token" : "Fetch"
                        },
                        requestUri : a,
                        method : "GET"
                        };
                      var oHeaders;
                      var sUrl=oDataModel.sServiceUrl+"/Your Entity Set ";
                      var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);                     
                      sap.ui.getCore().setModel(oModel);
                        OData.request(f, function(data, oSuccess) {
                          oToken = oSuccess.headers[‘x-csrf-token’];
                               oHeaders = {
                                            "x-csrf-token" : oToken,
                                            "slug" : "QF",
                                     };
/****************To Fetch CSRF Token*******************/

},

/*******************To Upload File************************/
































        onDocNuevodlg_addProducto: function () {
            this.getView().byId("dlg_DocNuevoaddProducto").open();
        },

        onDocNuevoClosedlg_addProducto: function () {
            this.getView().byId("dlg_DocNuevoaddProducto").close();
        }



    });
});
