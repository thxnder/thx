sap.ui.define([
    "com/decor/ubicaciones/util/utilResponse",
    "com/decor/ubicaciones/constantes"
], function (utilResponse, constantes) {
    "use strict";
    return {
        soap: function (subPath, requestXML, EntityResult, callback) {
            var pathService = constantes.URLSOAP + subPath;
            $.ajax({
                type: "POST",
                url: pathService,
                contentType: "text/xml",
                dataType: "xml",
                data: requestXML,
                username: constantes.usernameSOAP,
                password: constantes.passwordSOAP,
                success: function (response) {
                    var data = $(response).find(EntityResult);
                    var xmlResultString = "<data>"+$(data).parent().html()+"</data>";
                    var x2js = new X2JS();
                    var jsonResult = x2js.xml_str2json(xmlResultString);
                    var dataSoap = jsonResult.data[EntityResult];
                    var dataMessage = jsonResult.data["T_RETURN"] ? jsonResult.data["T_RETURN"] : jsonResult.data["ET_MESSAGE"];

                    if(dataSoap){
                        if(!Array.isArray(dataSoap.item)){
                            dataSoap = [dataSoap.item];
                        }else{
                            dataSoap = dataSoap.item;
                        }
                    }

                    if(dataMessage){
                        if(!Array.isArray(dataMessage.item)){
                            dataMessage = [dataMessage.item];
                        }else{
                            dataMessage = dataMessage.item;
                        }

                        var tipo = "S";
                        for(var i = 0; i < dataMessage.length; i++){
                            var itemMessage = dataMessage[i];
                            if(itemMessage.TYPE === "E"){
                                return callback(utilResponse.error(dataMessage, dataSoap));
                            }
                            
                            if(itemMessage.TYPE === "I"){
                                tipo = "W";
                            }
                        }

                        if(tipo === "S"){
                            return callback(utilResponse.success(dataMessage, dataSoap));
                        }else{
                            return callback(utilResponse.warn(dataMessage, dataSoap));
                        }

                    }else{
                        var result = utilResponse.success(dataMessage, dataSoap);
                        return callback(result);
                    }                   
                },
                error: function (data, status, req) {
                    var result = utilResponse.exception("Error en el sistema HTTP", null);
                    return callback(result);
                }
            });
        }
    };
});