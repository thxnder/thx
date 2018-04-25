/* global moment:true */
sap.ui.define([

], function () {
    "use strict";
    return {
        isPhone: function () {
            return window.innerWidth < 600;
        },
        soloLetrasYNumConEspacios: function (campo) {
            var validos = " abcdefghijklmnopqrstuvwxyz0123456789";
            var letra;
            var bien = true;
            for (var i = 0; i < campo.length; i++) {
                letra = campo.charAt(i).toLowerCase()
                if (validos.indexOf(letra) == -1) {
                    bien = false;
                };
            }
            return bien;
        },
        soloLetrasYNumSinEspacios: function (campo) {
            var validos = "abcdefghijklmnopqrstuvwxyz0123456789";
            var letra;
            var bien = true;
            for (var i = 0; i < campo.length; i++) {
                letra = campo.charAt(i).toLowerCase()
                if (validos.indexOf(letra) == -1) {
                    bien = false;
                };
            }
            return bien;
        },
        hasSpace: function (campo) {
            var validos = " ";
            var letra;
            var bien = true;
            for (var i = 0; i < campo.length; i++) {
                letra = campo.charAt(i).toLowerCase()
                if (validos.indexOf(letra) == -1) {
                    bien = false;
                };
            }
            return bien;
        }
    };
});