var Ajustes = {

    init: function(){
      Ajustes.eventos_clicks();
      Ajustes.datatable_Ajustes();
      Ajustes.set_Ajustes();
    },

    datatable_Ajustes: function(){

      var btnCrearajustes = '<a id="btnCrearAjustes" class="dt-button agregar-ajustes buttons-html5" tabindex="0" aria-controls="tblAjustes" href="javascript:void(0)"><span>Crear</span></a>';

      var table = $('#tblAjustes').DataTable({
          "destroy": true,
          "retrieve": true,
          "dom": 'lBfrtip',
          "responsive": false,
          buttons: [
              { extend: 'excel', title: 'ajustessXLS' },
          ],
          "processing": true,
          "language": {
              "processing": '<div class="preloader pl-size-sm"><div class="spinner-layer pl-orange"><div class="circle-clipper left"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div><span class="label label-warning">Cargando, espere por favor ...</span>',
          },
          "serverSide": true,
          "lengthMenu": [ 10, 25, 50, 75, 100, 250, 500 ],
          "pageLength": 25,
          "ajax": {
                  "url": "getAjustes",
                   "data":{ Idajustes: '' }
                  },
          "fixedColumns": true,
          initComplete: function(settings, json) {
              $('.dt-buttons').prepend(btnCrearajustes);
              $('#tblAjustes_filter input').unbind();
              $('#tblAjustes_filter input').keyup(function (e) {
                  if (e.keyCode == 13){
                      $('#tblAjustes').DataTable().search($(this).val()).draw();
                  }
              });
          }
      });

      $('#tblAjustes tbody').on( 'click', '.delete-ajustes', function () {
          document.getElementById("form_ajustes").reset();

          var IdAjustes = $(this).attr('data-id');

          $.post( "delAjustes",{"IdAjustes" : IdAjustes}
              , function( data )
              {
                  if (data)
                  {
                      console.log(data);
                      $('#tblAjustes').DataTable().ajax.reload();
                      // var n = new Noty({
                      //  type: "warning",
                      //     close: false,
                      //     text: "<b>Se movio a la papelera<b>" ,
                      //     timeout: 20e3,
                      //       buttons: [
                      //         Noty.button('Deshacer', 'btn btn-success', function () {
                      //             $.post( "ajustes/undo_delete_ajustes/"+IdAjustes,{"IdAjustes" : IdAjustes}
                      //                 , function( data ){
                      //                   if (data)
                      //                   {
                      //                     n.close();
                      //                     $('#tb-datatable-ajustes').DataTable().ajax.reload();
                      //                   }
                      //                   else
                      //                   {
                      //                     alert("Ocurrio un error");
                      //                   }
                      //                  }
                      //             );
                      //         }
                      //         ,{id: 'id-'+IdAjustes, 'data-status': 'ok'}),
                      //             Noty.button('Cerrar', 'btn btn-error', function () {
                      //                 n.close();
                      //             })
                      //       ]
                      // });
                      // n.show();
                  }
                  else
                  {
                       alert("Ocurrio un error");
                  }
              }
          );
      } );

      $('#tblAjustes tbody').on( 'click', '.update-ajustes', function () {
          var id = $(this).attr('data-id');
          document.getElementById("form_ajustes").reset();
          $("#IdAjustes").remove();
          $("#form_ajustes").prepend("<input type=\"hidden\" name=\"IdAjustes\" id=\"IdAjustes\" value="+id+">");

          $(".modal-title").html("Editar ajustes");

          $.get( "getAjustesById", {"id" : id } , function( data )
          {
              $('#divFormAjustes').removeClass('hide');
              Object.keys(data[0]).forEach(function(key){
                  if (key !=="")
                  {

                      // var div = '#'+$(this).data('div');
                      // $(div).addClass('focused');
                      $("#"+key).addClass("valid");
                      $("#"+key).val(data[0][key]);

                      if ( $("#"+key).prop('nodeName') == "SELECT")
                      {
                          $('#'+key+' option[value="'+data[0][key]+'"]').prop('selected', true);
                      }
                  }
              });

              $(".btn-action-form").attr("value","Actualizar");
              $(".btn-action-form").prop("disabled",false);
          }); //  Fin $.post

      } );
    },

    set_Ajustes: function(){
      $("#form_ajustes").validate(
      {
          submitHandler:function(form)
          {
              var get_form = document.getElementById("form_ajustes");
              var postData = new FormData( get_form );

              $.ajax({
                  url:"setAjustes",
                  data: postData,
                  cache: false,
                  processData: false,
                  contentType: false,
                  type: 'POST',
                      success: function(response)
                      {
                          if (response['Status']== 'Error')
                            alert(response['Mensaje']);

                          $('#tblAjustes').DataTable().ajax.reload();
                          document.getElementById("form_ajustes").reset();                          
                          $(".btn-cancenlar").click();
                      }
                });
          }
        // , rules: {
        //   id_usuario: {
        //     required: true,
        //   }
        //   ,vc_nombre: {
        //     required: true,
        //   }
        // }
        // , messages: {
        //     id_usuario: {
        //         minlength: "Ingrese un RFC válido"
        //     }
        //   }          
      });      
    },

    eventos_clicks: function(){
      $(document).on("click", ".agregar-ajustes", function(){
          document.getElementById("form_ajustes").reset();
          var validator = $( "#form_ajustes" ).validate();
          validator.resetForm();
          $('#id_usuario').focus();
          $("label.error").hide();
          $(".error").removeClass("error");          
          $("#id_Ajustes").val("");

          $("#divFormAjustes").removeClass("hide");
          $("#divAjustes").addClass("hide");
      });

      $(document).on("click", ".btn-cancenlar", function(){
          document.getElementById("form_ajustes").reset();
          var validator = $( "#form_ajustes" ).validate();
          validator.resetForm();
          $("#divFormAjustes").addClass("hide");
          $("#divAjustes").removeClass("hide");
      });
    }

};

Ajustes.init();