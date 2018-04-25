sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/decor/ubicaciones/model/models",
	"com/decor/ubicaciones/libs/soapclient",
	"com/decor/ubicaciones/libs/xml2json.min"
], function(UIComponent, Device, models, soapclient21,xml2json) {
	"use strict";

	return UIComponent.extend("com.decor.ubicaciones.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().initialize();
		}
	});
});