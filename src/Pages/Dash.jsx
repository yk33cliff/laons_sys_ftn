import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AppContainer from "../Components/Structure/AppContainer";

import {
  faUsers,
  faDollarSign,
  faBook,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import ajaxDashboard from "../util/remote/ajaxDashboard";
import functions from "../util/functions";
function Dash() {
  const [user, setUser] = useState("");
  const [pool, setPool] = useState("");
  const [clients, setClients] = useState("");
  const [fines, setFines] = useState("");
  const [interest, setInterest] = useState("");
  const [pending, setpending] = useState("");
  const [loaned, setLoaned] = useState("");

  const [active, SetACtive] = useState("");

  useEffect(() => {
    getTotal_user();
    get_business_pull_balance();
    get_total_clients();
    get_total_fine();
    get_earned_interest();
    get_no_pendind_Approvals();
    get_total_loaned();
    active_loans_number();
  }, []);
  const id = functions.sessionGuard();

  const getTotal_user = async () => {
    const server_response = await ajaxDashboard.fetchTotalUser();
    //   console.log(server_response)
    if (server_response.status === "OK") {
      setUser(server_response.details);
    } else {
      //communicate error
      setUser("");
    }
  };
  const get_business_pull_balance = async () => {
    const server_response = await ajaxDashboard.fetch_pull_balance();
    //   console.log(server_response)
    if (server_response.status === "OK") {
      setPool(server_response.details);
    } else {
      //communicate error
      setPool("");
    }
  };
  const get_total_clients = async () => {
    const server_response = await ajaxDashboard.fetch_total_clients();
    //   console.log(server_response)
    if (server_response.status === "OK") {
      setClients(server_response.details);
    } else {
      //communicate error
      setPool("");
    }
  };
  const get_total_fine = async () => {
    const server_response = await ajaxDashboard.fetchFinesTotal();
    //   console.log(server_response)
    if (server_response.status === "OK") {
      setFines(server_response.details);
    } else {
      //communicate error
      setPool("");
    }
  };
  const get_earned_interest = async () => {
    const server_response = await ajaxDashboard.fetch_interest_earned();
    //   console.log(server_response)
    if (server_response.status === "OK") {
      setInterest(server_response.details);
    } else {
      //communicate error
      setInterest("");
    }
  };
  const get_no_pendind_Approvals = async () => {
    var data = {id: id};
    const server_response = await ajaxDashboard.fetchNo_pendingApprove(data);
    //   console.log(server_response)
    if (server_response.status === "OK") {
      setpending(server_response.details);
    } else {
      //communicate error
      setpending("");
    }
  };
  const get_total_loaned = async () => {
    const server_response = await ajaxDashboard.fetchSumLoaned();
    //   console.log(server_response)
    if (server_response.status === "OK") {
      setLoaned(server_response.details);
    } else {
      //communicate error
      setLoaned("");
    }
  };
  const active_loans_number = async () => {
    const server_response = await ajaxDashboard.fetchNumber_activeLoans();
    //   console.log(server_response)
    if (server_response.status === "OK") {
      SetACtive(server_response.details);
    } else {
      //communicate error
      SetACtive("");
    }
  };
  // const get_business_pull_balance = async () => {
  //   const server_response = await ajaxDashboard.fetch_pull_balance();
  //   //   console.log(server_response)
  //   if (server_response.status === "OK") {
  //     setPool(server_response.details);
  //   } else {
  //     //communicate error
  //     setPool("");
  //   }
  // };
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
                        Business pool balance
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        money avilable for lending
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <p className="font-weight-bold">
                          Ugshs:{pool > 0 ? pool : 0}
                        </p>
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
                        <h4 className="font-weight-bold">
                          {user === 0 ? 0 : user.total_p}
                        </h4>
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
                        <h4 className="font-weight-bold">
                          {clients === 0 ? 0 : clients.total_p}
                        </h4>
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
                        <h4 className="font-weight-bold">
                          {" "}
                          {pending === 0 ? 0 : pending}
                        </h4>

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
                        <h4 className="font-weight-bold">
                          {" "}
                          {active === 0 ? 0 : active}
                          {/* (Loan) */}
                        </h4>
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
                        <p className="font-weight-bold">
                          Ugshs:: <span> {loaned === 0 ? 0 : loaned}</span>
                        </p>
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
                        <h4 className="font-weight-bold">
                          {interest === 0 ? "p" : interest}
                        </h4>
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
