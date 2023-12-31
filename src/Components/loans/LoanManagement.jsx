import React from "react";
import AppContainer from "../Structure/AppContainer";

function LoanManagement() {
  return (
    <div>
      <AppContainer title="loan management">
        <>
          {/* Row*/}
          <div className="row row-sm">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="card custom-card overflow-hidden crypto-buysell-card">
                <div className="card-body">
                  <div className="card-header border-bottom-0 ps-0 pt-0">
                    <p className="main-content-label my-auto">
                      <i> Loan Summary </i>
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <p>
                          Loan ID &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>LN_001</u>
                          </span>
                        </p>
                        <p>
                          Loan Type &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>School fees loan</u>
                          </span>
                        </p>
                        <p>
                          date requested at &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>12/12/2023</u>
                          </span>
                        </p>
                        <p>
                          date approved and awarded &nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>LN_001</u>
                          </span>
                        </p>
                        <p>
                          Loan period &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u> 12 months</u>
                          </span>
                        </p>
                        <p>
                          Payment plan &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>weekly</u>
                          </span>
                        </p>

                        <p>
                          Loan created by plan &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>weekly</u>
                          </span>
                        </p>
                      </div>
                      <div className="col-6">
                        <label className="main-content-label my-auto pt-2">
                          customer
                        </label>
                        <p>
                          Customer's Name &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u> desire twin</u>
                          </span>
                        </p>
                        <p>
                          Customer's contact &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u> +256702322823</u>
                          </span>
                        </p>
                        <p>
                          Customer's contact &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u> +256702322823</u>
                          </span>
                        </p>

                        {/* ----------------- */}
                        <label className="main-content-label my-auto pt-2">
                          Served by
                        </label>
                        <p>
                          Official's Name &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u> desire twin</u>
                          </span>
                        </p>
                        <p>
                          Official's contact &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u> +256702322823</u>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="card custom-card overflow-hidden crypto-buysell-card">
                <div className="card-body">
                  <div className="card-header border-bottom-0 ps-0 pt-0">
                    <p className="main-content-label my-auto">
                      <i>Loan Details </i>
                    </p>
                    <div className="table-responsive">
                      <table className="table card-table text-nowrap table-bordered border-top">
                        <tbody>
                          <tr>
                            <td>Loan principle</td>
                            <td>
                              <i className="cc BTC-alt text-warning" /> 1000000
                            </td>
                          </tr>
                          <tr>
                            <td>Loan interest</td>
                            <td>
                              <i className="cc BTC-alt text-warning" /> 200000
                            </td>
                          </tr>
                          <tr>
                            <td>Total Loan Fines</td>
                            <td>
                              <i className="cc BTC-alt text-warning" /> 200000
                            </td>
                          </tr>
                          <tr>
                            <td>Total Loan </td>
                            <td>
                              <i className="cc BTC-alt text-warning" /> 200000
                            </td>
                          </tr>
                          <tr>
                            <td>Total Loan paid back </td>
                            <td>
                              <i className="cc BTC-alt text-warning" /> 200000
                            </td>
                          </tr>
                          <tr>
                            <td> Loan balance </td>
                            <td>
                              <i className="cc BTC-alt text-warning" /> 200000
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}

          {/* Row*/}
          <div className="row row-sm">
            <div className="col-xl-12">
              <div className="card custom-card">
                <div className="card-header border-bottom-0">
                  <label className="main-content-label my-auto pt-2">
                    Recent Loan transactions
                  </label>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table card-table text-nowrap table-bordered border-top">
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
                          <td className="text-success">Buy</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.37218
                          </td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.42173
                          </td>
                          <td>52681.13</td>
                          <td>$ 5273.15</td>
                          <td>0.1</td>
                          <td>
                            <span className="badge bg-success-light bg-pill">
                              Completed
                            </span>
                          </td>
                          <td>31-05-2019 02:12:34</td>
                        </tr>
                        <tr>
                          <td>#12451</td>
                          <td className="text-danger">Sell</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 1.47364
                          </td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.36472
                          </td>
                          <td>73647.15</td>
                          <td>$ 2637.37</td>
                          <td>0.1</td>
                          <td>
                            <span className="badge bg-warning-light bg-pill">
                              Pending
                            </span>
                          </td>
                          <td>02-06-2019 07:14:32</td>
                        </tr>
                        <tr>
                          <td>#12452</td>
                          <td className="text-danger">Sell</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.63736
                          </td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.73748
                          </td>
                          <td>72637.02</td>
                          <td>$ 6345.16</td>
                          <td>0.1</td>
                          <td>
                            <span className="badge bg-danger-light bg-pill">
                              Cancelled
                            </span>
                          </td>
                          <td>05-06-2019 12:57:12</td>
                        </tr>
                        <tr>
                          <td>#12453</td>
                          <td className="text-success">Buy</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.63647
                          </td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.83643
                          </td>
                          <td>83748.19</td>
                          <td>$ 23836.09</td>
                          <td>0.1</td>
                          <td>
                            <span className="badge bg-success-light bg-pill">
                              Completed
                            </span>
                          </td>
                          <td>15-07-2019 10:43:17</td>
                        </tr>
                        <tr>
                          <td>#12454</td>
                          <td className="text-success">Buy</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.76263
                          </td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.72563
                          </td>
                          <td>32635.32</td>
                          <td>$ 7235.25</td>
                          <td>0.1</td>
                          <td>
                            <span className="badge bg-success-light bg-pill">
                              Completed
                            </span>
                          </td>
                          <td>22-07-2019 11:44:45</td>
                        </tr>
                        <tr>
                          <td>#12455</td>
                          <td className="text-danger">Sell</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.46263
                          </td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 0.27363
                          </td>
                          <td>28937.22</td>
                          <td>$ 4853.15</td>
                          <td>0.1</td>
                          <td>
                            <span className="badge bg-info-light bg-pill">
                              In Process
                            </span>
                          </td>
                          <td>30-07-2019 08:23:15</td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}
          {/* Row*/}
          <div className="row row-sm">
            <div className="col-xl-12">
              <div className="card custom-card">
                <div className="card-header border-bottom-0">
                  <label className="main-content-label my-auto pt-2">
                    Loan Fine charges
                  </label>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table card-table text-nowrap table-bordered border-top">
                      <thead>
                        <tr>
                          <th>NO.</th>
                          <th>date registered</th>
                          <th>Amount</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td className="text-success">12/12/2023</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 50000
                          </td>

                          <td>
                            <span className="badge bg-danger-light bg-pill">
                              delete
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td className="text-success">12/12/2023</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 50000
                          </td>

                          <td>
                            <span className="badge bg-danger-light bg-pill">
                              delete
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td className="text-success">12/12/2023</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 50000
                          </td>

                          <td>
                            <span className="badge bg-danger-light bg-pill">
                              delete
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td className="text-success">12/12/2023</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 50000
                          </td>

                          <td>
                            <span className="badge bg-danger-light bg-pill">
                              delete
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td className="text-success">12/12/2023</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 50000
                          </td>

                          <td>
                            <span className="badge bg-danger-light bg-pill">
                              delete
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}
        </>
      </AppContainer>
    </div>
  );
}

export default LoanManagement;
