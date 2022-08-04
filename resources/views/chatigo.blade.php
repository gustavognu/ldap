<x-app-layout>

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header d-flex align-items-center">
                    <h5 class="card-title mb-0 flex-grow-1">Chatigo</h5>
                    <div>
                        <button id="refreshChatigo" class="btn btn-light btn-sm">Actualizar</button>
                        <button id="addNewChatigo" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addNewModalChatigo">Nuevo</button>
                    </div>
                </div>
                <div class="card-body">
                    <table id="alternative-pagination" class="table nowrap dt-responsive align-middle table-hover table-bordered" style="width:100%">
                        <thead>
                            <tr>
                                <th>SR No.</th>
                                <th>Currency</th>
                                <th>Price</th>
                                <th>Pairs</th>
                                <th>24 High</th>
                                <th>24 Low</th>
                                <th>Market Volume</th>
                                <th>Volume %</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>
                                    <div class="d-flex align-items-center fw-medium">
                                        <img src="assets/images/svg/crypto-icons/btc.svg" alt="" class="avatar-xxs me-2">
                                        <a href="javascript:void(0);" class="currency_name">Bitcoin (BTC)</a>
                                    </div>
                                </td>
                                <td>$47,071.60</td>
                                <td>BTC/USD</td>
                                <td>$28,722.76</td>
                                <td>$68,789.63</td>
                                <td>$888,411,910</td>
                                <td>
                                    <h6 class="text-success fs-13 mb-0">
                                        <i class="mdi mdi-trending-up align-middle me-1"></i>1.50%
                                    </h6>
                                </td>
                                <td>
                                    <button class="btn btn-sm btn-soft-info">Trade Now</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="addNewModalChatigo" tabindex="-1" aria-labelledby="addNewChatigoLabel">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addNewChatigoLabel">Chatigo</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="javascript:void(0);">
                        <div class="row g-3">
                            <div class="col-xxl-6">
                                <div>
                                    <label for="vCampo1_%name_strtolower%" class="form-label"> vTema1_%name_strtolower%</label>
                                    <input type="text" class="form-control" id="vCampo1_%name_strtolower%" placeholder="Escribe %name_strtolower%">
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-xxl-6">
                                <div>
                                    <label for="vCampo1_%name_strtolower%" class="form-label">vTema1_%name_strtolower%</label>
                                    <input type="text" class="form-control" id="vCampo1_%name_strtolower%" placeholder="Escribe %name_strtolower%">
                                </div>
                            </div>
                            <!--end col-->
                            <div class="col-lg-12">
                                <div class="hstack gap-2 justify-content-end">
                                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end row-->
                    </form>
                </div>
            </div>
        </div>
    </div>

</x-app-layout>

<script src="assets/js/crm/chatigo.js"></script>
