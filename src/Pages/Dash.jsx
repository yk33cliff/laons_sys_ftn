import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AppContainer from "../Components/Structure/AppContainer";

import {
  faUsers,
  faDollarSign,
  faBook,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
function Dash() {
  return (
    <div>
      <AppContainer title="Dashboard">
        <div className="row">
          {/*top tiles row 1*/}
          <div className="row row-sm">
            {/* business pull */}
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-12">
              <div className="card m-1">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        bounce
                        style={{color: "purple"}}
                      />
                    </div>
                    <div className="card-item-title mb-2">
                      <label className="main-content-label tx-13 font-weight-bold mb-1">
                        Business Pull balance
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        money avilable for lending
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <p className="font-weight-bold">Ugshs:8,000,000,5000</p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  sys users tile */}
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-12">
              <div className="card m-1">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <FontAwesomeIcon
                        icon={faUsers}
                        style={{color: "green"}}
                        beat
                      />
                    </div>
                    <div className="card-title mb-2">
                      <label className="main-content-label tx-13 font-weight-bold mb-1">
                        Total system Users
                      </label>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">50</h4>
                        <small>
                          <b className="text-success">active user</b>
                        </small>
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* -------- */}
            {/* clients tile */}
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-12">
              <div className="card m-1">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <FontAwesomeIcon
                        icon={faUsers}
                        style={{color: "grey"}}
                        fade
                      />
                    </div>
                    <div className="card-item-title mb-2">
                      <label className="main-content-label tx-13 font-weight-bold mb-1">
                        active Clients registered
                      </label>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">10000</h4>
                        <small>
                          <span className="d-block tx-12 mb-0 text-muted">
                            <a
                              className="badge bg-success-light bg-pill"
                              href="/clients/view">
                              View clients'
                            </a>
                          </span>
                          <br />
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* pending approvals */}
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-12">
              <div className="card m-1">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <FontAwesomeIcon
                        icon={faBox}
                        style={{color: "grey"}}
                        beat
                      />
                    </div>
                    <div className="card-title mb-2">
                      <label className="main-content-label tx-13 font-weight-bold mb-1">
                        Pending Approvals
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        you can click on the link to approve
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">50</h4>

                        <h3 className="d-block tx-12 mb-0 text-muted">
                          <a
                            className="badge bg-success-light bg-pill p-1"
                            href="/Applications/View">
                            approve loans
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* active loans number */}
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-12">
              <div className="card m-1">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <FontAwesomeIcon
                        icon={faBook}
                        fade
                        style={{color: "grey"}}
                      />
                    </div>
                    <div className="card-item-title mb-2">
                      <label className="main-content-label tx-13 font-weight-bold mb-1">
                        Active Loans
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        number of active loans
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">20 (Loan)</h4>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* total active loans  */}
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-12">
              <div className="card m-1">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <FontAwesomeIcon icon={faUsers} beat />
                    </div>
                    <div className="card-item-title mb-2">
                      <label className="main-content-label tx-13 font-weight-bold mb-1">
                        Total Loaned money
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        sum of all active loans money
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">15</h4>
                        <h3 className="d-block tx-12 mb-0 text-muted">
                          <a
                            className="badge bg-success-light bg-pill p-1"
                            href="/Loans/active">
                            view Active Loans
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* total interest earned */}
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-12">
              <div className="card m-1">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        bounce
                        style={{color: "orange"}}
                      />
                    </div>
                    <div className="card-item-title mb-2">
                      <label className="main-content-label tx-13 font-weight-bold mb-1">
                        total interest earned
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        sum of loan intrests
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">5656</h4>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* total fines earnings */}
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-12">
              <div className="card m-1">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        bounce
                        style={{color: "orange"}}
                      />
                    </div>
                    <div className="card-item-title mb-2">
                      <label className="main-content-label tx-13 font-weight-bold mb-1">
                        total fines earnings
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        payments of fines
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">$8,500</h4>
                        <small>
                          <br />
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End top tiles row 1 row*/}
        </div>

        <div className="row row-sm">
          <div className="col-sm-12  col-md-8 col-lg-8 col-xl-8 mt-xl-4">
            <div className="card custom-card card-dashboard-calendar pb-0">
              <label className="main-content-label mb-2 pt-1">
                Week's expected Installments Transactions
              </label>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table card-table text-nowrap table-bordered border-top">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Customer </th>
                        <th>Amount</th>
                        <th>date </th>
                        <th>contact</th>
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
                      </tr>
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
                      </tr>
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
                      </tr>
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
                      </tr>
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
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* col end */}
          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 mt-xl-4">
            <div className="card custom-card card-dashboard-calendar pb-0">
              <label className="main-content-label mb-2 pt-1">
                Recent Transactions
              </label>
              <canvas id="project" className="chart-dropshadow2 ht-250" />
            </div>
          </div>
          {/* col end */}
        </div>
      </AppContainer>
    </div>
  );
}

export default Dash;
