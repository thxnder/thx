sap.ui.define([
], function() {
    "use strict";
    return {
        containsCode: function(codDocument) {
            //var docPedidoXPiezas = ['Z009','Z010'];//DELETE EDC 04.06.2015
            var docPedidoXPiezas = ['Z009'];//INSERT EDC 04.06.2015
            for(var index in docPedidoXPiezas) {
                if(docPedidoXPiezas[index] == codDocument) {
                    return true;
                }
            }
            return false;
        },
        getListGrupoFor: function(canalDist, listGroup) {
            var listNewGroup = new Array();
            
            for(var index in listGroup) {
                var oldGroup = listGroup[index];
                if(oldGroup == undefined) {break;}
                else if( oldGroup.Codigo == " ") {
                    var newGroup = new Object();
                    newGroup.Codigo = oldGroup.Codigo;
                    newGroup.Descripcion = oldGroup.Descripcion;
                    newGroup.canal = oldGroup.TranspZone;
                    listNewGroup.push(newGroup);
                } else {
                    if(canalDist == oldGroup.TranspZone) {
                        var newGroup = new Object();
                        newGroup.Codigo = oldGroup.Codigo;
                        newGroup.Descripcion = oldGroup.Descripcion;
                        newGroup.canal = oldGroup.TranspZone;
                        listNewGroup.push(newGroup);                        
                    }
                }
            }
            return listNewGroup;
        },
        validateUnitMeasurement: function(unit) {
        var unitMeasurement = ['UN'];
            for (var i = 0; i < unitMeasurement.length; i++) {
                if (unitMeasurement[i] === unit) {
                    return true;
                }
            }
            return false;
        }
    };
});