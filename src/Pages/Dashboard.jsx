import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AppContainer from "../Components/Structure/AppContainer";
import ReactPaginate from "react-paginate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  faUsers,
  faDollarSign,
  faBook,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import ajaxDashboard from "../util/remote/ajaxDashboard";
import functions from "../util/functions";
import {RenderSecure} from "../util/script/RenderSecure";
import toast, {Toaster} from "react-hot-toast";
function Dashboard() {
  const [user, setUser] = useState("");
  const [bPool, setBpool] = useState("");
  const [clients, setClients] = useState("");
  const [fines, setFines] = useState(0);
  const [interest, setInterest] = useState("");
  const [pending, setpending] = useState("");
  const [loaned, setLoaned] = useState("");
  const [quick, SetQuick] = useState("");
  const [application, setApplication] = useState("");
  const [active, SetACtive] = useState("");
  const is_approver = functions.check_is_approver();

  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");
  const [trans, setTrans] = useState("");

  useEffect(() => {
    getTotal_user();
    get_application_fees_earnings();
    get_business_pull_balance();
    get_quick_balance();
    get_total_clients();
    get_total_fine();
    get_earned_interest();
    get_no_pendind_Approvals();
    get_total_loaned();
    active_loans_number();
    get_recent_Transactions();
    get_monitoring_fees_earned();
    get_processing_fee_earnings();
    get_insurance_earnings();
    get_TiedUpPrincipal();
  }, []);
  const id = functions.sessionGuard();
  const get_recent_Transactions = async () => {
    var data = {
      start_date: sdate,
      end_date: edate,
    };
    const server_response = await ajaxDashboard.get_recent_transaction(data);

    if (server_response.status === "OK") {
      setTrans(server_response.details);
    } else {
      setTrans("");
    }
  };

  const [process, setProcess] = useState("");
  const get_processing_fee_earnings = async () => {
    const server_response = await ajaxDashboard.get_Processing_fees_earnings();

    if (server_response.status === "OK") {
      setProcess(server_response.details);
    } else {
      setProcess("");
    }
  };

  const [insuranceE, setInsuranceE] = useState("");
  const get_insurance_earnings = async () => {
    const server_response = await ajaxDashboard.get_loan_insurance_earnings();

    if (server_response.status === "OK") {
      setInsuranceE(server_response.details);
    } else {
      setInsuranceE("");
    }
  };
  const [tiedUpPrincipal, setTiedUpPrincipal] = useState("");
  const get_TiedUpPrincipal = async () => {
    const server_response =
      await ajaxDashboard.get_amount_tied_up_in_principal();

    if (server_response.status === "OK") {
      setTiedUpPrincipal(server_response.details);
    } else {
      setTiedUpPrincipal("");
    }
  };
  const get_application_fees_earnings = async () => {
    const server_response = await ajaxDashboard.get_application_fees_earnings();

    if (server_response.status === "OK") {
      setApplication(server_response.details);
    } else {
      setApplication("");
    }
  };

  const getTotal_user = async () => {
    const server_response = await ajaxDashboard.fetchTotalUser();

    if (server_response.status === "OK") {
      setUser(server_response.details);
    } else {
      setUser("");
    }
  };
  const get_business_pull_balance = async () => {
    const server_response = await ajaxDashboard.fetch_pull_balance();
    if (server_response.status === "OK") {
      setBpool(server_response.details);
    } else {
      setBpool("");
    }
  };

  const get_quick_balance = async () => {
    const server_response = await ajaxDashboard.Fetch_quick_balance();

    if (server_response.status === "OK") {
      SetQuick(server_response.details);
    } else {
      SetQuick("");
    }
  };

  const get_total_clients = async () => {
    const server_response = await ajaxDashboard.fetch_total_clients();

    if (server_response.status === "OK") {
      setClients(server_response.details);
    } else {
      setClients("");
    }
  };
  const get_total_fine = async () => {
    const server_response = await ajaxDashboard.fetch_total_fine_earnings();

    if (server_response.status === "OK") {
      setFines(server_response.details);
    } else {
      setFines("");
    }
  };
  const [monitoring, setMonitorin] = useState("");
  const get_monitoring_fees_earned = async () => {
    const server_response = await ajaxDashboard.fetch_monitoring_fees_earned();

    if (server_response.status === "OK") {
      setMonitorin(server_response.details);
    } else {
      setMonitorin("");
    }
  };
  const get_earned_interest = async () => {
    const server_response = await ajaxDashboard.fetch_interest_earned();

    if (server_response.status === "OK") {
      setInterest(server_response.details);
    } else {
      setInterest("");
    }
  };

  const get_no_pendind_Approvals = async () => {
    var data = {id: id};
    const server_response = await ajaxDashboard.fetchNo_pendingApprove(data);

    if (server_response.status === "OK") {
      setpending(server_response.details);
    } else {
      setpending("");
    }
  };
  const get_total_loaned = async () => {
    const server_response = await ajaxDashboard.fetchSumLoaned();

    if (server_response.status === "OK") {
      setLoaned(server_response.details);
    } else {
      setLoaned("");
    }
  };
  const active_loans_number = async () => {
    const server_response = await ajaxDashboard.fetchNumber_activeLoans();

    if (server_response.status === "OK") {
      SetACtive(server_response.details);
    } else {
      SetACtive("");
    }
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20; // Change this value based on your preference

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = Array.isArray(trans)
    ? trans.slice(offset, offset + itemsPerPage)
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (sdate && edate) {
      get_recent_Transactions();
    } else {
      toast.error("Error: Both start and end dates are required");
    }
  };

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
                        Balance at QuickPost
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        money avilable for electronic payment
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <p className="font-weight-bold text-danger">
                          <span> {quick} </span>
                        </p>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                        <p className="font-weight-bold text-danger">
                          <span> {bPool} </span>
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
                          {pending ? pending : 0}
                        </h4>
                        {is_approver == 1 ? (
                          <h3 className="d-block tx-12 mb-0 text-muted">
                            <a
                              className="badge bg-success-light bg-pill p-1"
                              href="/Applications/View">
                              approve loans
                            </a>
                          </h3>
                        ) : (
                          <></>
                        )}
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
                      <FontAwesomeIcon icon={faDollarSign} beat />
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
                          <span> {loaned ? loaned : 0}</span>
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
                          {interest ? interest : 0}
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
                        <h4 className="font-weight-bold">
                          {fines ? fines : 0}
                        </h4>
                        <small>
                          <br />
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* total application fees earnings */}
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
                        total application earnings
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        payments of application
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">
                          {application ? application : 0}
                        </h4>
                        <small>
                          <br />
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* total monitoring  fees earnings */}
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
                        total monitoring fees earnings
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        monitoring fees
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">
                          {monitoring ? monitoring : 0}
                        </h4>
                        <small>
                          <br />
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  total loan tied up principal*/}
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
                        total Amount tied up principal
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        loaned principal not paid yet
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">
                          {tiedUpPrincipal ? tiedUpPrincipal : 0}
                        </h4>
                        <small>
                          <br />
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
                        total Processing Fees earned
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        Processing fees
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">
                          {process ? process : 0}
                        </h4>
                        <small>
                          <br />
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
                        TOTAL INSURANCE FEES EARNINGS
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        insurance fees
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">
                          {insuranceE ? insuranceE : 0}
                        </h4>
                        <small>
                          <br />
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-xl-3 col-xxl-3 col-md-3 col-12">
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
                        TOTAL INSURANCE FEES EARNINGS
                      </label>
                      <span className="d-block tx-12 mb-0 text-muted">
                        insurance fees
                      </span>
                    </div>
                    <div className="card-item-body">
                      <div className="card-item-stat">
                        <h4 className="font-weight-bold">
                          {insuranceE ? insuranceE : 0}
                        </h4>
                        <small>
                          <br />
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/*End top tiles row 1 row*/}
        </div>

        <div className="row row-sm mt-4">
          {/* col end */}
          <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-12">
            <div className="card custom-card card-dashboard-calendar pb-0">
              <label className="main-content-label mb-2 pt-1">
                Recent Transactions
              </label>
              <Toaster />
              <div
                className="col-sm-12  col-md-12 col-lg-12 col-xl-8 mt-xl-4"
                style={{
                  // background: "grey",

                  borderRadius: "20px",
                }}>
                <div className="card custom-card card-dashboard-calendar pb-0">
                  <div className="card-body">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12">
                      <form action="" onSubmit={(e) => handleSubmit(e)}>
                        <div className="row">
                          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 mt-2">
                            <div className="col-12">
                              <div className="row">
                                <label className="col-4">FROM:</label>

                                <span className="col-8">
                                  <DatePicker
                                    selected={sdate}
                                    onChange={(e) => setSdate(e)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="dd/MM/yyyy"
                                    className="form-control text-success"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 mt-2">
                            <div className="col-12">
                              <div className="row">
                                <label className="col-4">TO:</label>

                                <span className="col-8">
                                  <DatePicker
                                    selected={edate}
                                    onChange={(e) => setEdate(e)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="dd/MM/yyyy"
                                    className="form-control text-success"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 ">
                            <div className="col-md-12 ">
                              <div className="form-group mb-0">
                                <button
                                  type="submit"
                                  className="btn col-lg-12 col-md-12 btn-primary">
                                  submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                <div className="card custom-card card-dashboard-calendar pb-0">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table card-table text-nowrap table-bordered border-top">
                        <thead>
                          <tr>
                            <th>NO.</th>
                            <th>customer </th>
                            <th>account </th>
                            <th>cash_in</th>
                            <th>cash_out </th>
                            <th>description</th>
                            <th>payment_method</th>
                            <th>phone_number</th>
                            <th>created_at</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paginatedItems.map((loan, key) => (
                            <tr key={key}>
                              <td>{key + 1}</td>

                              <td>{loan.customer}</td>
                              <td>{loan.account}</td>
                              <td>{loan.cash_in}</td>
                              <td>{loan.cash_out}</td>
                              <td>{loan.description}</td>
                              <td>{loan.payment_method}</td>
                              <td>{loan.phone_number}</td>
                              <td>{loan.created_at}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <ReactPaginate
                        pageCount={Math.ceil(trans.length / itemsPerPage)}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                        nextLabel={"Next"}
                        previousLabel={"Previous"}
                        breakLabel={"..."}
                        pageLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                      />
                    </div>
                  </div>
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

export default Dashboard;
