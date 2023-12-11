import React from "react";

function Loans() {
  return (
    <div>
      {/* <!-- Row--> */}
      <div class="row row-sm">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header border-bottom-0">
              <label class="main-content-label my-auto pt-2">
                Recent Buying & selling Orders
              </label>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table card-table text-nowrap table-bordered border-top">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Remaining</th>
                      <th>Price</th>
                      <th>USD</th>
                      <th>Fee (%)</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#12450</td>
                      <td class="text-success">Buy</td>
                      <td>
                        <i class="cc BTC-alt text-warning"></i> 0.37218
                      </td>
                      <td>
                        <i class="cc BTC-alt text-warning"></i> 0.42173
                      </td>
                      <td>52681.13</td>
                      <td>$ 5273.15</td>
                      <td>0.1</td>
                      <td>
                        <span class="badge bg-success-light bg-pill">
                          Completed
                        </span>
                      </td>
                      <td>31-05-2019 02:12:34</td>
                    </tr>
                    <tr>
                      <td>#12451</td>
                      <td class="text-danger">Sell</td>
                      <td>
                        <i class="cc BTC-alt text-warning"></i> 1.47364
                      </td>
                      <td>
                        <i class="cc BTC-alt text-warning"></i> 0.36472
                      </td>
                      <td>73647.15</td>
                      <td>$ 2637.37</td>
                      <td>0.1</td>
                      <td>
                        <span class="badge bg-warning-light bg-pill">
                          Pending
                        </span>
                      </td>
                      <td>02-06-2019 07:14:32</td>
                    </tr>
                    <tr>
                      <td>#12452</td>
                      <td class="text-danger">Sell</td>
                      <td>
                        <i class="cc BTC-alt text-warning"></i> 0.63736
                      </td>
                      <td>
                        <i class="cc BTC-alt text-warning"></i> 0.73748
                      </td>
                      <td>72637.02</td>
                      <td>$ 6345.16</td>
                      <td>0.1</td>
                      <td>
                        <span class="badge bg-danger-light bg-pill">
                          Cancelled
                        </span>
                      </td>
                      <td>05-06-2019 12:57:12</td>
                    </tr>
                    <tr>
                      <td>#12453</td>
                      <td class="text-success">Buy</td>
                      <td>
                        <i class="cc BTC-alt text-warning"></i> 0.63647
                      </td>
                      <td>
                        <i class="cc BTC-alt text-warning"></i> 0.83643
                      </td>
                      <td>83748.19</td>
                      <td>$ 23836.09</td>
                      <td>0.1</td>
                      <td>
                        <span class="badge bg-success-light bg-pill">
                          Completed
                        </span>
                      </td>
                      <td>15-07-2019 10:43:17</td>
                    </tr>
                    <tr>
                      <td>#12454</td>
                      <td class="text-success">Buy</td>
                      <td>
                        <i class="cc BTC-alt text-warning"></i> 0.76263
                      </td>
                      <td>
                        <i class="cc BTC-alt text-warning"></i> 0.72563
                      </td>
                      <td>32635.32</td>
                      <td>$ 7235.25</td>
                      <td>0.1</td>
                      <td>
                        <span class="badge bg-success-light bg-pill">
                          Completed
                        </span>
                      </td>
                      <td>22-07-2019 11:44:45</td>
                    </tr>
                    <tr>
                      <td>#12455</td>
                      <td class="text-danger">Sell</td>
                      <td>
                        <i class="cc BTC-alt text-warning"></i> 0.46263
                      </td>
                      <td>
                        <i class="cc BTC-alt text-warning"></i> 0.27363
                      </td>
                      <td>28937.22</td>
                      <td>$ 4853.15</td>
                      <td>0.1</td>
                      <td>
                        <span class="badge bg-info-light bg-pill">
                          In Process
                        </span>
                      </td>
                      <td>30-07-2019 08:23:15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Row End --> */}
      {/* <!-- Row End --> */}
      {/* <!-- Row End --> */}
      {/* <!-- Row End --> */}
      {/* <!-- Row End --> */}
      {/* <!-- Row End --> */}
      {/* <!-- Row End --> */}
    </div>
  );
}

export default Loans;
