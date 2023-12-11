import React from "react";
import AppContainer from "../Structure/AppContainer";

function ViewLoanApplications() {
  return (
    <div>
      <AppContainer title="View Loan Application">
        <div>
          <div className="row">
            <div className="row row-sm">
              <div className="col-lg-12 col-md-12 mx-10">
                <div
                  style={{
                    float: "right",
                    marginBottom: "20px",
                  }}
                  className="col-lg-2 col-md-2">
                  <div className="form-group mb-0">
                    <a
                      href="/applications/add"
                      className="btn col-lg -12 rounded-50 col-md-12 btn-primary">
                      Add Application
                    </a>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <div className="row row-sm">
              <div className="col-xl-12">
                <div className="card custom-card">
                  <div className="card-header border-bottom-0">
                    <label className="main-content-label my-auto pt-2">
                      Loan applications Details
                    </label>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table card-table text-nowrap table-bordered border-top">
                        <thead>
                          <tr>
                            <th>No.</th>
                            <th>Type</th>
                            <th>Duration</th>
                            <th>interest rate</th>
                            <th>application fee rate</th>
                            <th>allowed installment</th>
                            <th>status</th>
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
                            <td>
                              <span className="badge bg-success-light bg-pill">
                                Completed
                              </span>
                            </td>
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

                            <td>
                              <span className="badge bg-warning-light bg-pill">
                                Pending
                              </span>
                            </td>
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

                            <td>
                              <span className="badge bg-danger-light bg-pill">
                                Cancelled
                              </span>
                            </td>
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

                            <td>
                              <span className="badge bg-success-light bg-pill">
                                Completed
                              </span>
                            </td>
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

                            <td>
                              <span className="badge bg-success-light bg-pill">
                                Completed
                              </span>
                            </td>
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

                            <td>
                              <span className="badge bg-info-light bg-pill">
                                In Process
                              </span>
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
        </div>
      </AppContainer>
    </div>
  );
}

export default ViewLoanApplications;
