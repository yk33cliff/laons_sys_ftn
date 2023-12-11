import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AppContainer from "../Components/Structure/AppContainer";

import {faUsers, faDollarSign} from "@fortawesome/free-solid-svg-icons";
function Dash() {
  return (
    <div>
      <AppContainer title="Dashboard">
        <div className="row">
          {/*top tiles row 1*/}
          <div className="row row-sm">
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-12">
              <div className="card m-1">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <FontAwesomeIcon
                        icon={faDollarSign}
                        style={{color: "green"}}
                        beat
                      />
                    </div>
                    <div className="card-title mb-2">
                      <label className="main-content-label tx-13 font-weight-bold mb-1">
                        Total Revenue
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        Previous month vs this months
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">$5,900.00</h4>
                        <small>
                          <b className="text-success">55%</b> higher
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-12">
              <div className="card m-1">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <FontAwesomeIcon icon={faUsers} beat />
                    </div>
                    <div className="card-item-title mb-2">
                      <label className="main-content-label tx-13 font-weight-bold mb-1">
                        New Employees
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        Employees joined this month
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">15</h4>
                        <small>
                          <b className="text-success">5%</b> Increased
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                        Total Expenses
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        Previous month vs this months
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">$8,500</h4>
                        <small>
                          <b className="text-danger">12%</b> decrease
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                        Total Expenses
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        Previous month vs this months
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">$8,500</h4>
                        <small>
                          <b className="text-danger">12%</b> decrease
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End top tiles row 1 row*/}

          <div className="row row-sm mx-2">
            <div className="container-fluid">
              <div className="row">
                <div className="container card col-lg-6 col-md-6 col-xl-6">
                  pp
                </div>
                <div className="container card col-lg-6 col-md-6 col-xl-6">
                  pp
                </div>
              </div>
            </div>
          </div>
          {/* col end */}
        </div>
      </AppContainer>
    </div>
  );
}

export default Dash;
