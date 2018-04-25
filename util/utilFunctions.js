/* global moment:true */
sap.ui.define([
    
], function() {
    "use strict";
    return {
        pad: function  (valor, relleno , length) {
            var  n = valor;
            while(n.length < length)
                 n = relleno + n;
            return n;
        }
    };
});