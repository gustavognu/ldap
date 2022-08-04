<x-app-layout>

    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title mb-0">Alternative Pagination</h5>
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
                            <tr>
                                <td>02</td>
                                <td>
                                    <div class="d-flex align-items-center fw-medium">
                                        <img src="https://themesbrand.com/velzon/html/minimal/assets/images/svg/crypto-icons/eth.svg" alt="" class="avatar-xxs me-2">
                                        <a href="javascript:void(0);" class="currency_name">Ethereum (ETH)</a>
                                    </div>
                                </td>
                                <td>$3,813.14</td>
                                <td>ETH/USDT</td>
                                <td>$4,036.24</td>
                                <td>$3,588.14</td>
                                <td>$314,520,675</td>
                                <td>
                                    <h6 class="text-danger fs-13 mb-0">
                                        <i class="mdi mdi-trending-down align-middle me-1"></i>0.42%
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

</x-app-layout>
