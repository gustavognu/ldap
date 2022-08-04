<x-app-layout>

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex align-items-center">
                    <h5 class="card-title mb-0 flex-grow-1">Ajustes</h5>
                    <div>
                        <button id="refreshAjustes" class="btn btn-light btn-sm">Actualizar</button>
                        <button id="addNewAjustes" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalFormAjustes">Nuevo</button>
                    </div>
                </div>
                <div class="card-body">
                    <table id="tb-datatable-ajustes" class="table nowrap dt-responsive align-middle table-hover table-bordered" style="width:100%">
                        <thead>
                            <tr>
                                <th style="width: 5%">id</th>
                                <th >vTema1_ajustes</th>
                                <th >vTema2_ajustes</th>
                                <th >vTema3_ajustes</th>
                                <th >vTema4_ajustes</th>
                                <th >vTema5_ajustes</th>
                                <th >vTema6_ajustes</th>
                                <th >vTema7_ajustes</th>
                                <th >vTema8_ajustes</th>
                                <th >vTema9_ajustes</th>
                                <th >vTema10_ajustes</th>
                                <th style="width: 9%">Acción</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- .row -->

    <div class="crm-modals">
        <div class="modal fade" id="modalFormAjustes" tabindex="-1" aria-labelledby="addNewAjustesLabel">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addNewAjustesLabel">Ajustes</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="form-material form-action-post" action="#form_ajustes" id="form_ajustes" method="post">
                            <div>
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label for="vCampo1_ajustes" class="form-label">vTema1_ajustes</label>
                                        <input type="text" class="form-control" id="vCampo1_ajustes" name="vCampo1_ajustes" placeholder="Escribe vTema2_ajustes" value="">
                                    </div>

                                    <div class="col-sm-6">
                                        <label for="vCampo2_ajustes" class="form-label">vTema2_ajustes</label>
                                        <input type="text" class="form-control" id="vCampo2_ajustes" name="vCampo2_ajustes" placeholder="Escribe vTema2_ajustes" value="">
                                    </div>

                                    <div class="col-12">
                                        <label for="vCampo3_ajustes" class="form-label">vTema3_ajustes</label>
                                        <div class="input-group">
                                            <span class="input-group-text">@</span>
                                            <input type="text" class="form-control" id="vCampo3_ajustes" name="vCampo3_ajustes" placeholder="vTema3_ajustes">
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="email" class="form-label">vTema4_ajustes <span class="text-muted">(Optional)</span></label>
                                        <input type="email" class="form-control" id="vCampo4_ajustes" name="vCampo4_ajustes" placeholder="Escribe vCampo4_ajustes">
                                    </div>

                                    <div class="col-12">
                                        <label for="vCampo4_ajustes" class="form-label">vTema5_ajustes</label>
                                        <input type="text" class="form-control" id="vCampo5_ajustes" name="vCampo5_ajustes" placeholder="Escribe vCampo6_ajustes">
                                    </div>

                                    <div class="col-12">
                                        <label for="vCampo6_ajustes" class="form-label">vTema6_ajustes <span class="text-muted">(Optional)</span></label>
                                        <input type="text" class="form-control" id="vCampo6_ajustes" name="vCampo6_ajustes" placeholder="Escribe vCampo6_ajustes">
                                    </div>

                                    <div class="col-md-5">
                                        <label for="vCampo7_ajustes" class="form-label">vTema7_ajustes</label>
                                        <select class="form-select" id="vCampo7_ajustes" name="vCampo7_ajustes">
                                            <option value="">Choose...</option>
                                            <option value="1">Modelo</option>
                                            <option value="United States">Victoria</option>
                                        </select>
                                    </div>

                                    <div class="col-md-4">
                                        <label for="vCampo8_ajustes" class="form-label">vTema8_ajustes</label>
                                        <select class="form-select" id="vCampo8_ajustes" name="vCampo8_ajustes">
                                            <option value="">Choose...</option>
                                            <option value="1">honda</option>
                                            <option value="2">toyota</option>
                                        </select>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="vCampo9_ajustes" class="form-label">vTema9_ajustes</label>
                                        <input type="text" class="form-control" id="vCampo9_ajustes" name="vCampo9_ajustes" placeholder="">
                                    </div>

                                </div>

                                <hr>
                                <div class="col-lg-12">
                                    <div class="hstack gap-2 justify-content-end">
                                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="submit" class="btn btn-primary btn-action-form">Guardar</button>
                                    </div>
                                </div>
                            </div>



                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- .crm-modals -->

</x-app-layout>

<script src="assets/js/crm/ajustes.js?<?php echo rand()?>"></script>