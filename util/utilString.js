sap.ui.define([
], function() {
    "use strict";
    return {
        convertDateFormat:function(string) {
          var info = string.split('/');
          return info[2] + '/' + info[1] + '/' + info[0];
        },
        convertDateFormatConGuion:function(string) {
          var info = string.split('-');
          return info[2] + '/' + info[1] + '/' + info[0];
        },
        calcularEdad:function(fecha) {
            var hoy = new Date();
            var cumpleanos = new Date(this.convertDateFormat(fecha));
            var edad = hoy.getFullYear() - cumpleanos.getFullYear();
            var m = hoy.getMonth() - cumpleanos.getMonth();

            if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
                edad--;
            }

            return edad;
        },

        replace2Point: function(cadena,cadReplace) {
            return cadena.replace("::", cadReplace).replace(/:/g, '');
        },
        listAddItemSelec: function(data,etiqueta){
            if(!etiqueta){
                etiqueta = "Seleccione";
            }
            for(var i = 0; i < data.length; i++){
                if(!data[i].Codigo.replace(/ /g, '')){
                    data[i].Descripcion = etiqueta;
                }
            }
            return data;
        },
        prepareDataIni: function(){
            var data = window.dataIni;
            /*****  CANALES ****/
            /* 
            var listaCanales = data.lstCanales;
            for(var i = 0; i < listaCanales.length; i++){
                listaCanales[i].Descripcion = this.replace2Point(listaCanales[i].Descripcion,' - ');
            }
            data.lstCanales = listaCanales;
            */
            /*****  MOTIVO RECLAMOS ****/
            /*
            var listaMotReclamo = data.lstMotivoRecl;
            for(var i = 0; i < listaMotReclamo.length; i++){
                listaMotReclamo[i].Descripcion = this.replace2Point(listaMotReclamo[i].Descripcion,' - ');
            }
            data.lstMotivoRecl = listaMotReclamo;
            
            */
            /*****  OFICINAS DE VENTAS ****/
            data.lstOfVtas = this.listAddItemSelec(data.lstOfVtas);                        
            /*****  LISTA DE MONEDAS ****/
            data.lstMoneda = this.listAddItemSelec(data.lstMoneda);
            /*****  LISTA DE BANCOS ****/
            data.lstGrpCond = this.listAddItemSelec(data.lstGrpCond);
            /*****  MOTIVOS NOTA DE DEBITO / CREDITO ****/
            data.lstMotPed = this.listAddItemSelec(data.lstMotPed);            
            /*****  BLOQUEOS DE FACTURA ****/
            data.lstBloFac = this.listAddItemSelec(data.lstBloFac);            
            /*****  BLOQUEOS DE ENTREGA ****/
            data.lstBloEnt = this.listAddItemSelec(data.lstBloEnt);
            /*****  TIPOS DE DESPACHO ****/
            data.lstCondExp = this.listAddItemSelec(data.lstCondExp);
            /*****  TIPOS DE VISITA ****/
            data.lstTipoVisita = this.listAddItemSelec(data.lstTipoVisita);
            
            /*****  TIPOS DE AMBIENTES ****/
            data.lstPreguntas[5].listaResp = this.listAddItemSelec(data.lstPreguntas[5].listaResp);
            /*****  MOTIVOS DE RECHAZO PRODUCTOS ****/
            data.lstMotivosRechazo = this.listAddItemSelec(data.lstMotivosRechazo);
                       
            window.dataIni = data;            
        },
        isNumeric: function(inputValue) {
            var format = /^[0-9]+$/;
            var rpta = (inputValue.match(format)) ? true : false;
            return rpta;
        },
        isEntero: function(numero){

            if (isNaN(numero)){
                var resul = false;
            }
            else{
                if (numero % 1 == 0) {
                    var resul = true;
                }
                else{
                    var resul = false;
                }
            }
            return resul
        },
        padLeft: function(nr, n, str) {
            return Array(n - String(nr).length + 1).join(str || '0') + nr;
        },
        roundNumber: function(num, scale) {
          if(!("" + num).includes("e")) {
            return +(Math.round(num + "e+" + scale)  + "e-" + scale);
          } else {
            var arr = ("" + num).split("e");
            var sig = ""
            if(+arr[1] + scale > 0) {
              sig = "+";
            }
            return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
          }
        }, 
        validateIsRuc: function (ruc) {
            var rpta = (ruc.length === 11) ? "X" : "";
            return rpta;
        }              
    };
});