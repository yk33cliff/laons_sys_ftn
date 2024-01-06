import React from "react";
import AppContainer from "../Structure/AppContainer";

function PendingInstallments() {
  return (
    <div>
      <AppContainer title="expected installments for this week ">
        <>
          <div className="row square">
            <div className="col-lg-12 col-md-12">
              <div className="card custom-card">
                <div className="card-body">
                  <div className="profile-tab tab-menu-heading">
                    <nav className="nav main-nav-line p-3 tabs-menu profile-nav-line bg-gray-100">
                      <a
                        className="nav-link  active"
                        data-bs-toggle="tab"
                        href="#about">
                        Installments
                      </a>
                      <a className="nav-link" data-bs-toggle="tab" href="#edit">
                        Today's Installments
                      </a>
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#settings">
                        This week's Installments
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row */}
          <div className="row row-sm">
            <div className="col-lg-12 col-md-12">
              <div className="card custom-card main-content-body-profile">
                <div className="tab-content">
                  <div
                    className="main-content-body tab-pane p-4 border-top-0 active"
                    id="about">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Facere adipisci, sunt non provident perferendis nulla
                      perspiciatis similique! Modi voluptatibus eligendi
                      laudantium illum possimus, laborum dicta enim, vero
                      repudiandae debitis distinctio.
                    </p>
                  </div>
                  <div
                    className="main-content-body tab-pane p-4 border-top-0"
                    id="edit">
                    <p>today</p>
                    <p>today</p>
                    <p>today</p>
                  </div>
                  <div
                    className="main-content-body tab-pane p-4 border-top-0"
                    id="settings">
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
                                    <i className="cc BTC-alt text-warning" />{" "}
                                    0.37218
                                  </td>
                                  <td>
                                    <i className="cc BTC-alt text-warning" />{" "}
                                    0.42173
                                  </td>
                                  <td>52681.13</td>
                                </tr>
                                <tr>
                                  <td>#12450</td>
                                  <td className="text-success">Buy</td>
                                  <td>
                                    <i className="cc BTC-alt text-warning" />{" "}
                                    0.37218
                                  </td>
                                  <td>
                                    <i className="cc BTC-alt text-warning" />{" "}
                                    0.42173
                                  </td>
                                  <td>52681.13</td>
                                </tr>
                                <tr>
                                  <td>#12450</td>
                                  <td className="text-success">Buy</td>
                                  <td>
                                    <i className="cc BTC-alt text-warning" />{" "}
                                    0.37218
                                  </td>
                                  <td>
                                    <i className="cc BTC-alt text-warning" />{" "}
                                    0.42173
                                  </td>
                                  <td>52681.13</td>
                                </tr>
                                <tr>
                                  <td>#12450</td>
                                  <td className="text-success">Buy</td>
                                  <td>
                                    <i className="cc BTC-alt text-warning" />{" "}
                                    0.37218
                                  </td>
                                  <td>
                                    <i className="cc BTC-alt text-warning" />{" "}
                                    0.42173
                                  </td>
                                  <td>52681.13</td>
                                </tr>
                                <tr>
                                  <td>#12450</td>
                                  <td className="text-success">Buy</td>
                                  <td>
                                    <i className="cc BTC-alt text-warning" />{" "}
                                    0.37218
                                  </td>
                                  <td>
                                    <i className="cc BTC-alt text-warning" />{" "}
                                    0.42173
                                  </td>
                                  <td>52681.13</td>
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
            </div>
          </div>
        </>
      </AppContainer>
    </div>
  );
}

export default PendingInstallments;
