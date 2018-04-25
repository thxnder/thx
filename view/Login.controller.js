sap.ui.define([
	"com/decor/ubicaciones/controller/Base.controller",
	"sap/ui/core/UIComponent",
	"com/decor/ubicaciones/model/models",
	"com/decor/ubicaciones/util/utilController",
	"com/decor/ubicaciones/util/utilUI",
	"com/decor/ubicaciones/servicio/services",
	"com/decor/ubicaciones/controladores",
	"com/decor/ubicaciones/formatter/formatter",
	"com/decor/ubicaciones/validacion/validaciones"
], function (BaseController, UIComponent, models, utilController, utilUI, services,controladores,formatter,validaciones) {
	"use strict";

	return BaseController.extend("com.decor.ubicaciones.controller.Login", {
		formatter: formatter,
		onInit: function () {
			controladores.LoginController = this;
			var oRouter = UIComponent.getRouterFor(this);
			oRouter.attachRoutePatternMatched(this.onRouteMatched, this);
		},
		onRouteMatched: function (oEvent) {
			if (oEvent.getParameter("name") === "appLogin") {
				utilController.initModelView(this);
				utilController.property(this, "/Usuario", models.usuario());
				utilController.refreshModel(this);

			}
		},
		onLogin: function (oEvent) {
			var self = this;
			var formulario = self.getView().byId("frmLogin");
			var usuario = utilController.propertyRefresh(self, "/Usuario");
			var validacionCuentaUsuario = validaciones.CuentaUsuario(usuario.Cuenta);
			var validacionClaveUsuario = validaciones.ClaveUsuario(usuario.Clave);
			var errores = [];

			if(validacionCuentaUsuario.c !== "s"){
				errores.push(validacionCuentaUsuario.m);
			}

			if(validacionClaveUsuario.c !== "s"){
				errores.push(validacionClaveUsuario.m);
			}

			if(errores.length>0){
				utilUI.messageBox("* " + errores.join("\n\n* "), "e", function () {});
			}else{
				utilUI.gloader(true);
				services.ConsultaUsuarioClave(usuario.Cuenta,usuario.Clave, function (result) {
					utilUI.gloader(false);
					if (result.c == "s" || result.c == "w") {
						controladores.DlgErroresController.open(result.m, function(){
							var oRouter = UIComponent.getRouterFor(self);
							oRouter.navTo("appMenu");
							controladores.MenuController.onAfterLogin(result.data,usuario);
						});
					}

					if (result.c == "e") {
						controladores.DlgErroresController.open(result.m, function(){});
					}

					if (result.c == "ex") {
						utilUI.messageBox(result.m, "e", function () {});
					}
				});
			}
		},

		/******Inicio Alternativa QR******/
		createDeviceModel: function() {
		    var oModel = new JSONModel(Device);
		    oModel.setDefaultBindingMode("OneWay");
		    
		    // Disable the scan barcode button by default
		    oModel.setProperty("/barcodeScanEnabled",false);
		    if(navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
		        navigator.mediaDevices.getUserMedia({video:true}).then(function(stream){
		            // device supports video, which means will enable the scan button
		            oModel.setProperty("/barcodeScanEnabled",true);
		        }).catch(function(err){
		            // not supported, barcodeScanEnabled already default to false
		        });
		    }
		    
		    return oModel;
		},
        onScanForValue: function(oEvent){
		        var _oScanDialog = new sap.m.Dialog({
		            title               : "Scanner QR",
		            contentWidth        : "640px",
		            contentHeight       : "480px",
		            horizontalScrolling : false,
		            verticalScrolling   : false,
		            stretchOnPhone      : true,
		            content             : [new sap.ui.core.HTML({
		                id      : this.createId("scanContainer"),
		                content : "<div id='loadingMessage'>🎥 Unable to access video stream (please make sure you have a webcam enabled)</div><canvas id='canvas' hidden></canvas><div id='output' hidden>    <div id='outputMessage'>No QR code detected.</div>    <div hidden><b>Data:</b> <span id='outputData'></span></div>  </div>"
		            })],
		            endButton           : new sap.m.Button({
		                text    : "Cancel",
		                press   : function(oEvent){
		                    _oScanDialog.destroy();
		                }.bind(this)
		            }),
		            afterOpen           : function(){this.onBtnScan(_oScanDialog)}.bind(this),
		            afterClose          : function(){
		            }
		        }); 
		        
		        this.getView().addDependent(_oScanDialog);
		    
		    _oScanDialog.open();
		    
		},
		/******Inicio Alternativa QR 2******/
		onBtnScan:function(_oScanDialog){
			var video = document.createElement("video");
		    var canvasElement = document.getElementById("canvas");
		    var canvas = canvasElement.getContext("2d");
		    var loadingMessage = document.getElementById("loadingMessage");
		    var outputContainer = document.getElementById("output");
		    var outputMessage = document.getElementById("outputMessage");
		    var outputData = document.getElementById("outputData");
		    var self = this;
		    function drawLine(begin, end, color) {
		      canvas.beginPath();
		      canvas.moveTo(begin.x, begin.y);
		      canvas.lineTo(end.x, end.y);
		      canvas.lineWidth = 4;
		      canvas.strokeStyle = color;
		      canvas.stroke();
		    }

		    // Use facingMode: environment to attemt to get the front camera on phones
		    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function(stream) {
		      video.srcObject = stream;
		      video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
		      video.play();
		      requestAnimationFrame(tick);
		    });

		    function tick() {
		      loadingMessage.innerText = "Loading video..."
		      if (video.readyState === video.HAVE_ENOUGH_DATA) {
		        loadingMessage.hidden = true;
		        canvasElement.hidden = false;
		        outputContainer.hidden = false;

		        canvasElement.height = video.videoHeight;
		        canvasElement.width = video.videoWidth;
		        canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);
		        var imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
		        var code = jsQR(imageData.data, imageData.width, imageData.height);
		        if (code) {
		        	if(code.data!=""){
				          /*drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
				          drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
				          drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
				          drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
				          outputMessage.hidden = true;
				          outputData.parentElement.hidden = false;
				          outputData.innerText = code.data;*/
				          self.getView().byId("scannedValue").setValue(code.data);
				          _oScanDialog.destroy();
				          video.stop();
			          }
		        } else {
		          outputMessage.hidden = false;
		          outputData.parentElement.hidden = true;
		          video.paused==true;
		        }
		      }
		      requestAnimationFrame(tick);
		    }
		}
		
		/******End Alternativa QR 2********/
	});
});