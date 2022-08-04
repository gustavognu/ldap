var Admin_migrations = {

    init: function () {

        // Funciones principales
        Admin_migrations.set_Admin_migrations();
        Admin_migrations.datatable_Admin_migrations();

        // Funciones para eventos
        Admin_migrations.modalShow();
        Admin_migrations.modalHide();
        Admin_migrations.AgregarNuevo();
        Admin_migrations.actualizarTabla();
    },

    datatable_Admin_migrations: function () {
        var table = $('#tb-datatable-admin_migrations').DataTable({
            "stateSave": false,
            "responsive": true,
            "serverSide": false,
            "pageLength": 50,
            "scrollCollapse": true,
            "lengthMenu": [10, 25, 50, 75, 100],
            "ajax": {
                "url": "get_admin_migrations_by_datatable",
                "type": "GET",
                "data": {
                    "extra": 1
                },
                "headers": {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            },
            "processing": true,
            "language": {
                "processing": '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Cargando...</span>',
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
            // guarda el estado de la tabla (paginación, filtrado, etc.)
            ,
            stateSaveCallback: function (settings, data) {
                localStorage.setItem('DataTables_' + settings.sInstance, JSON.stringify(data))
            },
            stateLoadCallback: function (settings) {
                return JSON.parse(localStorage.getItem('DataTables_' + settings.sInstance))
            },
            "columnDefs": [
                {
                    "targets": 0,
                    "class": 'text-center',
                }
                ,{
                    "targets": 3,
                    "render": function (data, type, row, meta) {
                        return '<div>\
                                <a href="javascript:void(0);" id="' + row[0] + '" class="fs-15 update-admin_migrations"><i class="ri-edit-2-line"></i></a>\
                                <a href="javascript:void(0);" id="' + row[0] + '" class="link-success fs-15 delete-admin_migrations"><i class="ri-delete-bin-line"></i></a>\
                            </div>';
                    },
                    "class": "text-center"
                }
               ,{
                    "targets": 2,
                    "class": 'text-center',
                }
            ]
        });

        $('#tb-datatable-admin_migrations tbody').on('click', '.delete-admin_migrations', function () {

            document.getElementById("form_admin_migrations").reset();
            $("label.error").hide();
            $(".error").removeClass("error");

            var id = this.id;

            let element_by_id= 'form_admin_migrations';
            let message=  'Eliminando...' ;
            let $loading= LibreriaGeneral.f_cargando(element_by_id, message);

            $.ajax({
                url:"delete_admin_migrations",
                data: {"id": id},
                cache: false,
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                type: 'POST',
                    success: function(response)
                    {
                        console.log("response", response);

                        $('#tb-datatable-admin_migrations').DataTable().ajax.reload();
                        $('#modalFormAdmin_migrations').modal('hide');
                        $loading.waitMe('hide');

                        var n = new Noty({
                            type: "warning",
                            close: false,
                            text: "<b>Se movio a la papelera<b>" ,
                            layout: 'topCenter',
                            timeout: 20e3,
                                buttons: [
                                  Noty.button('Deshacer', 'btn btn-success btn-sm', function () {
                                        $.ajax({
                                            url:"undo_delete_admin_migrations",
                                            data: {"id" : id},
                                            cache: false,
                                            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                                            type: 'POST',
                                                success: function(response)
                                                {
                                                    n.close();
                                                    $('#tb-datatable-admin_migrations').DataTable().ajax.reload();

                                                    new Noty({
                                                        text: 'Se ha deshecho la acción.',
                                                        type: "warning",
                                                        layout: 'topCenter',
                                                        timeout: 2e3,
                                                    }).show();


                                                },
                                                error: function(response)
                                                {
                                                    alert("Ocurrio un error");
                                                }
                                        });
                                  }
                                  ,{
                                      'id'         : 'id-'+id
                                    , 'data-status': 'ok'
                                  }
                                  )
                                  , Noty.button('Cerrar', 'btn btn-error', function () {
                                        n.close();
                                    })
                                ]
                        });
                        n.show();
                    },
                    error: function(response)
                    {
                        $loading.waitMe('hide');
                    }
            });
        });

        $('#tb-datatable-admin_migrations tbody').on('click', '.update-admin_migrations', function () {
            // Abrir modal!
            $('#modalFormAdmin_migrations').modal('show');

            var id = this.id;
            document.getElementById("form_admin_migrations").reset();

            if ($("#id").length)
            {
                $("#id").remove();
            }

            $("#form_admin_migrations").prepend('<input type="hidden" name="id" id="id" value=" '+ id +' ">');

            $("#modalFormAdmin_migrations .modal-title").html("Editar admin_migrations");

            let element_by_id= 'form_admin_migrations';
            let message=  'Cargando...' ;
            let $loading= LibreriaGeneral.f_cargando(element_by_id, message);

            $.ajax({
                url:"get_admin_migrations_by_id",
                data: {id: id},
                cache: false,
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                type: 'POST',
                    success: function(response)
                    {
                        $loading.waitMe('hide');

                        try {
                            var result = JSON.stringify(result);
                            var json = JSON.parse(response);
                        } catch (e) {
                            console.log(response);
                        }

                        if (json["b_status"]) {
                            var p = json['data'];
                            for (var keyIni in p) {
                                for (var key in p[0]) {
                                    if (p[0].hasOwnProperty(key)) {
                                        if (p[0][key] !== "") {
                                            $("#" + key).addClass("fill");

                                            if ($("#" + key).prop('type') == "text" ||
                                                $("#" + key).prop('type') == "textarea" ||
                                                $("#" + key).prop('type') == "number" ||
                                                $("#" + key).prop('type') == "url" ||
                                                $("#" + key).prop('type') == "tel"
                                            ) {
                                                $("#" + key).val(p[0][key]);
                                            }

                                            if ($("#" + key).prop('type') == "file") {
                                                if (p[0][key] !== "") {
                                                    $("#" + key).attr("required", false);
                                                }

                                                if (p[0][key] !== null) {
                                                    var filename = p[0][key].replace(/^.*[\\\/]/, '')
                                                    $("#" + key).after("<a href=\"" + p[0][key] + "\" target=\"_blank\" class=\"external_link  abrir-" + key + " \"> " + filename.substr(0, 15) + " </a>");
                                                }
                                            }

                                            if ($("#" + key).prop('nodeName') == "SELECT") {
                                                $('#' + key + ' option[value="' + p[0][key] + '"]').prop('selected', true);
                                            }
                                        }
                                    }
                                }
                            }

                        } 
                        else 
                        {
                            alert("Revisar console para mas detalle");
                            console.log(json);
                        }
                    },
                    error: function(response)
                    {
                        $loading.waitMe('hide');
                    }
            });
        });
    },

    set_Admin_migrations: function () {
        $("#form_admin_migrations").validate({
            submitHandler: function (form) {
                var get_form = document.getElementById("form_admin_migrations");
                var postData = new FormData(get_form);

                $.ajax({
                    url: "set_admin_migrations",
                    data: postData,
                    cache: false,
                    processData: false,
                    contentType: false,
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    type: 'POST',
                    success: function (response) {
                        
                        console.log("response", response);

                        try {
                            var json = JSON.parse(response);
                        } catch (e) {
                            alert(response);
                            return;
                        }

                        if (json["b_status"]) {
                            $('#tb-datatable-admin_migrations').DataTable().ajax.reload();
                            document.getElementById("form_admin_migrations").reset();
                            $('#modalFormAdmin_migrations').modal('hide');
                        } else {
                            alert(json);
                        }
                    },
                    error: function (response) {
                        alert(response);
                    }
                });
            }
            // , rules: {
            //   migration: {
            //     required: true
            //   }
            // }
            // , messages: {
            //     migration: {
            //         minlength: "Mensaje personalizado migration"
            //     }
            //   }
        });
    },

    modalShow: function () {
        $('#modalFormAdmin_migrations').on('shown.bs.modal', function (e) {
            $('#migration', e.target).focus();
        });
    },

    modalHide: function () {
        $('#modalFormAdmin_migrations').on('hidden.bs.modal', function (e) {
            var validator = $("#form_admin_migrations").validate();
            validator.resetForm();
            $("label.error").hide();
            $(".error").removeClass("error");
            
            if ($("#id").length)
            {
                $("#id").remove();
            }
        });
    },

    AgregarNuevo: function () {
        $(document).on("click", ".agregar-admin_migrations", function () {
            document.getElementById("form_admin_migrations").reset();            
            $("#modalFormAdmin_migrations .modal-title").html("Nuevo Admin_migrations");
        });
    },

    actualizarTabla: function () {
        $(document).on("click", "#refreshAdmin_migrations", function () {
            $('#tb-datatable-admin_migrations').DataTable().ajax.reload();
        });
    }
};

Admin_migrations.init();