sap.ui.define([
    "sap/ui/model/odata/v2/ODataModel",
    "pe/com/seidor/sap/decor/ventas/util/utilService"
    ], function(ODataModel, utilService) {
        "use strict";
        return {
            buscarReclamos: function(buscarReclamos) 
            {
                var contexto = {};
                contexto.servicio = "reclamoServices.buscarReclamos()";
                contexto.url = "buscarReclamos.aspx";
                contexto.parametros = {   pNumeroReclamo: buscarReclamos.pNumeroReclamo ,
                  pNumeroPedido: buscarReclamos.pNumeroPedido ,
                  pCodigoCliente: buscarReclamos.pCodigoCliente ,
                  pNombreCliente: buscarReclamos.pNombreCliente ,
                  pMaterial: buscarReclamos.pMaterial ,
                  pFechaCreacionI: buscarReclamos.pFechaCreacionI ,
                  pFechaCreacionF: buscarReclamos.pFechaCreacionF ,
                  pEstado: buscarReclamos.pEstado ,
                  pUsuario: buscarReclamos.pUsuario ,                                      
                  accion: "R001" ,
                  fecini: buscarReclamos.fecini ,
                  fecfin: buscarReclamos.fecfin};
                  return utilService.exec(contexto);
              },
        // Listar centros
        buscarCliente: function(ruc,nombre) 
        {
            var contexto = {};
            contexto.servicio = "clienteServices.buscarCliente()";
            contexto.url = "buscarClientes.aspx";
            contexto.parametros = { rucdni : ruc , nombreCliente: nombre };
            return utilService.exec(contexto);
        },
        reemplazarCiente: function(codigo)
        {
          var contexto = {};
          contexto.servicio = "reclamoServices.reemplazarCiente()";
          contexto.url = "buscarClientes.aspx";
          contexto.parametros = {codigoClienteA : codigo}
          return utilService.exec(contexto);
      },
      verReclamos: function(v_pNumeroReclamo) 
      {
        var contexto = {};
        contexto.servicio = "reclamoServices.verReclamos()";
        contexto.url = "editarReclamo.aspx";
        contexto.parametros = { pNumeroReclamo : v_pNumeroReclamo };
        return utilService.exec(contexto);
    },
        //////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////////////////////////////////////////////////
        crearReclamo: function(crearReclamo)
        {
            var contexto = {};
            contexto.servicio = "reclamoServices.crearReclamo()";
            contexto.url = "crearReclamo.aspx";
            contexto.parametros = {pNumPedido : crearReclamo.pNumPedido, accion : crearReclamo.accion, modo : crearReclamo.modo}
            return utilService.exec(contexto);
        },
        documentoVentas: function(documentoVentas)
        {
            var contexto = {};
            contexto.servicio = "reclamoServices.documentoVentas()";
            contexto.url = "documentoVentas.aspx";
            contexto.parametros = {pNumPedido : documentoVentas.pNumPedido, accion : documentoVentas.accion, modo : documentoVentas.modo}
            return utilService.exec(contexto);
        },
        /////////////////////////////////////////////////////////////////////////////////////////////
        guardarReclamo: function(guardarReclamo, listaReclamoLleno, listaIntJsonLleno)
        {
            var contexto= {};
            contexto.servicio = "reclamoServices.guardarReclamo()";
            contexto.url = "guardarReclamo.aspx";
            contexto.parametros = {
                material11: guardarReclamo.material11 ,
                material12: guardarReclamo.material12 ,
                material21: guardarReclamo.material21 ,
                material22: guardarReclamo.material22 ,
                cantRecla1: guardarReclamo.cantRecla1 ,
                cantRecla2: guardarReclamo.cantRecla2 ,
                reclamoRef: guardarReclamo.reclamoRef ,
                numeroPedido: guardarReclamo.numeroPedido ,
                EmpresaDet: guardarReclamo.EmpresaDet , 
                NomCliente: guardarReclamo.NomCliente ,
                codigoEmpResp: guardarReclamo.codigoEmpResp ,
                Motivo: guardarReclamo.Motivo , 
                Status: guardarReclamo.Status , 
                Resultado: guardarReclamo.Resultado , 
                JustificResul: guardarReclamo.JustificResul , 
                OrgVenta: guardarReclamo.OrgVenta , 
                Canal: guardarReclamo.Canal , 
                Sector: guardarReclamo.Sector ,
                OfiVenta: guardarReclamo.OfiVenta ,
                comentario: guardarReclamo.comentario ,
                pNumeroReclamo: guardarReclamo.pNumeroReclamo ,
                listaReclamo: listaReclamoLleno ,
                pIndiceResultado: guardarReclamo.pIndiceResultado ,
                listaIntJson: listaIntJsonLleno
            }
            return utilService.exec(contexto);
        }
    };
});