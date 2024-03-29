$(document).on("ready", function() {
  Listar();
  Guardar();
  Eliminar();
  Actualizar();
  ListarAuditoria();
});

function Actualizar() {
  $("#tabla").on("click", ".btnEditarAutor", function() {
      d = $(this).parents("tr").find("td");
      $("#labelID_AUTOR").hide();
      $("#ID_AUTOR").val(d[0].innerText).hide();
      $("#NOMBRE_AUTOR").val(d[1].innerText);
      $("#APELLIDO1").val(d[2].innerText);
      $("#APELLIDO2").val(d[3].innerText);
      $("#CORREO").val(d[4].innerText);
      $("#ADSCRIPCION").val(d[5].innerText);
      $("#POSICION").val(d[6].innerText);
      __('nn').innerHTML = "Editar";

  });
}

function Eliminar() {
  $("#tabla").on("click", ".btnEliminarAutor", function() {
      d = $(this).parents("tr").find("td");


      swal({
          title: '¿Esta seguro que desea eliminar a ' + d[1].innerText + '?',
          text: "¡No se puede revertir!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Eliminar',
          cancelButtonText: 'No, Cancelar',
          confirmButtonClass: 'btn bg-gradient-success',
          cancelButtonClass: 'btn bg-gradient-danger',
          buttonsStyling: false
      }).then(function() {

          $.ajax({
              type: 'POST',
              url: "?c=Autor&a=Eliminar",
              data: {
                  'ID_AUTOR': d[0].innerText
              },
              success: function(result) {

                  if (result == 1) {
                      swal({
                          type: 'success',
                          title: 'Eliminado exitosamente',
                          showConfirmButton: false,
                          timer: 1500
                      });
                  }
                  console.log(result);
                  Listar();
                  ListarAuditoria();
              }
          });


      }, function(dismiss) {
          // dismiss can be 'cancel', 'overlay',
          // 'close', and 'timer'
          if (dismiss === 'cancel') {
              swal({
                  type: 'error',
                  title: 'Operacion Cancelada',
                  text: 'Su registro esta a salvo ☺',
                  showConfirmButton: false,
                  timer: 1500
              });
          }
      })
  });
}

function Guardar() {
  $("#frm-autor").on("submit", function(e) {
      e.preventDefault();
      //Guardamos la referencia al formulario
      var $f = $(this);
      //Comprobamos si el semaforo esta en verde (1)
      if ($f.data('locked') != undefined && !$f.data('locked')) {
          //No esta bloqueado aun, bloqueamos, preparamos y enviamos la peticion
          $.ajax({
              type: 'POST',
              url: "?c=Autor&a=Guardar",
              data: {
                  'ID_AUTOR': $("#ID_AUTOR").val(),
                  'NOMBRE_AUTOR': $("#NOMBRE_AUTOR").val(),
                  'APELLIDO1': $("#APELLIDO1").val(),
                  'APELLIDO2': $("#APELLIDO2").val(),
                  'CORREO': $("#CORREO").val(),
                  'ADSCRIPCION': $("#ADSCRIPCION").val(),
                  'POSICION': $("#POSICION").val(),
                  'acc': __("nn").innerHTML
              },
              beforeSend: function() {
                  $f.data('locked', true); // (2)
              },
              success: function(result) {
                  $('#mGuardar').modal('hide');
                  if (result == true) {
                      console.log("Todo salió op");
                      swal({
                          type: 'success',
                          title: 'Operación ejecutada exitosamente',
                          showConfirmButton: false,
                          timer: 1500
                      });
                      Listar();
                      ListarAuditoria();
                  } else {
                      console.log("Error al guardar");

                      swal({
                          type: 'error',
                          title: 'Error',
                          showConfirmButton: false,
                          timer: 1500
                      }).catch(function(timeout) {});

                  }
              },
              complete: function() {
                  $f.data('locked', false); // (3)
              }
          });
      } else {
          //Bloqueado!!!
          //alert("locked");
      }

  });
  /**/
}

function __(id) {
  return document.getElementById(id);
}

function limpiar() {
  $("#ID_AUTOR").val("");
  $("#NOMBRE_AUTOR").val("");
  $("#APELLIDO1").val("");
  $("#APELLIDO2").val("");
  $("#CORREO").val("");
  $("#ADSCRIPCION").val("");
  $("#POSICION").val("");
  __('nn').innerHTML = "Nuevo";
}

function Listar() {
  var table = $("#tabla").DataTable({
      "destroy": true,
      "responsive": true,
      "bDeferRender": true,
      "sPaginationType": "full_numbers",
      "ajax": {
          "url": "?c=Autor&a=Listar",
          "type": "POST"
      },
      "columns": [{
              "data": "ID_AUTOR"
          },
          {
              "data": "NOMBRE_AUTOR"
          },
          {
              "data": "APELLIDO1"
          },
          {
              "data": "APELLIDO2"
          },
          {
            "data": "CORREO"
          },
          {
            "data": "ADSCRIPCION"
          },
          {
            "data": "POSICION"
          },
          {
              "data": null,
              "defaultContent": "<button class='btn bg-gradient-warning btnEditarAutor ' data-toggle='modal' data-target='#mGuardar'><span class='fa fa-pencil'></span></button>\
              <button class='btn bg-gradient-danger btnEliminarAutor'><span class='fa fa-trash'></span></button>"
          }
      ],

      "language": idioma_espanol
  });
}


var idioma_espanol = {

  "sProcessing": "Procesando...",
  "sLengthMenu": "Mostrar _MENU_ registros",
  "sZeroRecords": "No se encontraron resultados",
  "sEmptyTable": "Ningún dato disponible en esta tabla",
  "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
  "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
  "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
  "sInfoPostFix": "",
  "sSearch": "Buscar:",
  "sUrl": "",
  "sInfoThousands": ",",
  "sLoadingRecords": "Cargando...",
  "oPaginate": {
      "sFirst": "Primero",
      "sLast": "Último",
      "sNext": "Siguiente",
      "sPrevious": "Anterior"
  },
  "oAria": {
      "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
  }
}

function ListarAuditoria() {
  var table = $("#tablaAuditoria").DataTable({
      "destroy": true,
      "responsive": true,
      "bDeferRender": true,
      "sPaginationType": "full_numbers",
      "ajax": {
          "url": "?c=Autor&a=ListarAuditoria",
          "type": "POST"
      },
      "columns": [
        { "data": "ACCION"
    },
          {
              "data": "USUARIO"
          },
          {
              "data": "FECHA_ACTUAL"
          },
          {
              "data": "ID_AUTOR"
          },
          {
              "data": "NOMBRE_AUTOR"
          },
          {
              "data": "APELLIDO1"
          },
          {
              "data": "APELLIDO2"
          },
          {
            "data": "CORREO"
          },
          {
            "data": "ADSCRIPCION"
          },
          {
            "data": "POSICION"
          }
      ],

      "language": idioma_espanol
  });
}


var idioma_espanol = {

  "sProcessing": "Procesando...",
  "sLengthMenu": "Mostrar _MENU_ registros",
  "sZeroRecords": "No se encontraron resultados",
  "sEmptyTable": "Ningún dato disponible en esta tabla",
  "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
  "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
  "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
  "sInfoPostFix": "",
  "sSearch": "Buscar:",
  "sUrl": "",
  "sInfoThousands": ",",
  "sLoadingRecords": "Cargando...",
  "oPaginate": {
      "sFirst": "Primero",
      "sLast": "Último",
      "sNext": "Siguiente",
      "sPrevious": "Anterior"
  },
  "oAria": {
      "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
  }
}