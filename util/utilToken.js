sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], function(JSONModel, Device) {
    "use strict";

    return {
        get: function(urlRequest, basicAuth) {
            var token = "";
            $.ajax({
                url: urlRequest,
                method: "GET",
                async: false,
                headers: {
                    'Authorization': basicAuth,
                    'x-csrf-token': 'FETCH'
                },
                success: function(data, textStatus, request) {
                    $.TokenXS = request.getResponseHeader('x-csrf-token');
                },
                error: function(request, textStatus, errorThrown) {
                    $.TokenXS = request.getResponseHeader('x-csrf-token');
                }
            });
            return $.TokenXS;
        }
    };
});