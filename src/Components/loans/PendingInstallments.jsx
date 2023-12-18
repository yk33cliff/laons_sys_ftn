import React from "react";
import AppContainer from "../Structure/AppContainer";

function PendingInstallments() {
  return (
    <div>
      <AppContainer title="expected installments for this week ">
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
              <canvas id="project" className="chart-dropshadow2 ht-330" />
            </div>
          </div>
          {/* col end */}
        </div>
      </AppContainer>
    </div>
  );
}

export default PendingInstallments;
