
sap.ui.define([
	"sap/m/Shell",
	"sap/ui/core/ComponentContainer",
	"sap/m/MessageBox",
	"sap/ui/thirdparty/datajs"
], function (Shell, ComponentContainer, MessageBox) {
	"use strict";
	return {
		setup: function () {
			window.APP_CONTEXT = null;
			window.CLIENT = window.Mandante;
			document.addEventListener("deviceready", jQuery.proxy(this.onDeviceReady, this), false);
			document.addEventListener("online", jQuery.proxy(this.deviceOnline, this), false);
			document.addEventListener("offline", jQuery.proxy(this.deviceOffline, this), false);
			//onDeviceReady has been triggered already
			if (window.isDeviceReady) {
				this.onDeviceReady();
			}
		},
		onDeviceReady: function () {
			var self = this;
			document.addEventListener("backbutton", function (e) {
				e.preventDefault();
			}, false);
			self.start();
		},
		getHeaders: function () {
			var authStr = window.Authorization;
			return {
				"Authorization": authStr,
				"Accept-Language": "es"
			};
		},
		getHeaders_CsrfFetchToken: function () {
			var authStr = window.Authorization;
			
			return {
				"Authorization": authStr,
				"Accept-Language": "es",
				"X-Requested-With": "XMLHttpRequest",
				"Content-Type": "application/atom+xml",
				"DataServiceVersion": "2.0",
				"X-CSRF-Token": "FETCH"
			};
		},
		start: function () {
			sap.ui.getCore().attachInit(function () {
				new Shell({
					app: new ComponentContainer({
						height: "100%",
						name: "pe.com.seidor.sap.decor.ventas"
					})
				}).placeAt("content");
			});
		}
	};
});