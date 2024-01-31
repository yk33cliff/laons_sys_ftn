import React, {useContext, useEffect, useState} from "react";
import AppContainer from "../Structure/AppContainer";

import useStateCallback from "../../util/customHooks/useStateCallback";
import LoanSlip from "./LoanSlip";
import LoanStatement from "./LoanStatement";
import AddLoanpayment from "./AddLoanpayment";
import {RenderSecure} from "../../util/script/RenderSecure";
import ViewSecurities from "./ViewSecurities";
import ViewGuarantors from "./ViewGuarantors";
import ReactPaginate from "react-paginate";
import ajaxLaons from "../../util/remote/ajaxLaons";
import toast from "react-hot-toast";

function ActiveLoans() {
  const [modal, setModal] = useStateCallback(false);

  const handleSlip = (id, contact, name1, name2) => {
    setModal(false, () => setModal(<LoanSlip isOpen={true} id={id} />));
  };
  // loanstatement handlers
  const [statment, setStatement] = useStateCallback(false);

  const handleStatement = (id, customer) => {
    setStatement(false, () =>
      setStatement(<LoanStatement isOpen={true} id={id} customer={customer} />)
    );
  };

  // payment modal
  const [payment, setPayment] = useStateCallback(false);

  const paymentHandler = (id, Customer) => {
    setPayment(false, () =>
      setPayment(<AddLoanpayment isOpen={true} id={id} customer={Customer} />)
    );
  };
  //  view model securities
  const [securities, setSecurities] = useStateCallback(false);
  const handleSecurities = (id) => {
    setSecurities(false, () =>
      setSecurities(<ViewSecurities isOpen={true} id={id} customer={id} />)
    );
  };

  useEffect(() => {
    getWeeklyLoanns();
    getmonthlyLoanns();
    getDailloans();
    getFortnight();
  }, []);
  const [daily, setDaily] = useState("");
  const getDailloans = async () => {
    var data = {
      Installment_type: "daily",
    };
    const server_response = await ajaxLaons.fetchActiveLoans(data);

    if (server_response.status === "OK") {
      setDaily(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };

  const [weekly, setWeekly] = useState("");
  const getWeeklyLoanns = async () => {
    // var data = {
    //   Installment_type: "fortnight",
    // };
    var data = {
      Installment_type: "weekly",
    };

    const server_response = await ajaxLaons.fetchActiveLoans(data);

    if (server_response.status === "OK") {
      setWeekly(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };
  const [fortnight, setFortnight] = useState("");
  const getFortnight = async () => {
    var data = {
      Installment_type: "fortnight",
    };

    const server_response = await ajaxLaons.fetchActiveLoans(data);
    if (server_response.status === "OK") {
      setFortnight(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };
  const [monthly, SetMonthly] = useState("");
  const getmonthlyLoanns = async () => {
    var data = {
      Installment_type: "monthly",
    };
    const server_response = await ajaxLaons.fetchActiveLoans(data);

    if (server_response.status === "OK") {
      SetMonthly(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };

  //  view model guarantors
  const [guarantors, setGuarantors] = useStateCallback(false);
  const handleGuarantors = (id, Customer) => {
    setGuarantors(false, () =>
      setGuarantors(<ViewGuarantors isOpen={true} id={id} state={2} />)
    );
  };

  return (
    <div>
      <AppContainer title="Active loans">
        {modal}
        {statment}
        {payment}
        {securities}
        {guarantors}
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
                        href="#daily">
                        Daily installmets Loans
                      </a>
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#weekly">
                        Weekly installmets loans
                      </a>
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#fortnight">
                        Fortnight installmets loans
                      </a>
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#monthly">
                        monthly installmets loans
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
                  {/* daily installments loans */}

                  <div
                    className="main-content-body tab-pane p-4 border-top-0  active"
                    id="daily">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                      <div className="card custom-card card-dashboard-calendar pb-0">
                        <label className="main-content-label mb-2 pt-1">
                          Daily installments Loans
                        </label>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <thead>
                                <tr>
                                  <th>NO</th>
                                  <th>Customer </th>
                                  <th>
                                    Customer <br /> contact
                                  </th>
                                  <th>Loan_type</th>
                                  <th>Amount</th>
                                  <th>start date </th>
                                  <th>
                                    Loan <br />
                                    duration
                                  </th>
                                  <th>
                                    Loan <br /> Balance
                                  </th>
                                  <th>
                                    Deadline <br /> date
                                  </th>
                                  <th>
                                    more <br />
                                    Details
                                  </th>
                                  <th>
                                    loan <br /> documentation
                                  </th>
                                  <RenderSecure code="LOANS-STMNT">
                                    <th>
                                      Manage <br /> Loan
                                    </th>
                                  </RenderSecure>

                                  <RenderSecure code="ADD-PAYMNT">
                                    <th>
                                      add <br /> payment
                                    </th>
                                  </RenderSecure>
                                </tr>
                              </thead>
                              <tbody>
                                {daily &&
                                  Array.isArray(daily) &&
                                  daily.map((loan, key) => (
                                    <tr key={key}>
                                      <td>{key + 1}</td>

                                      <td>
                                        {loan.customer_id.names.first_name}
                                        &nbsp;
                                        {loan.customer_id.names.last_name}
                                      </td>
                                      <td>+{loan.customer_id.names.contact}</td>
                                      <td>{loan.loan_type}</td>
                                      <td>{loan.amount}</td>
                                      <td>{loan.date_activated}</td>
                                      <td>{loan.duration}</td>
                                      <td>{loan.loanBalance}</td>

                                      <td>{loan.deadline}</td>
                                      <td>
                                        <span>
                                          <button
                                            className="badge  text-dark bg-light bg-pill"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              handleSecurities(loan.id)
                                            }>
                                            Securities
                                          </button>
                                          <br />
                                          <button
                                            className="badge  text-white bg-primary bg-pill mt-2"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              handleGuarantors(loan.id)
                                            }>
                                            Gurantors
                                          </button>
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="badge  text-white bg-secondary bg-pill"
                                          style={{fontSize: "14px"}}
                                          onClick={() => handleSlip(loan.id)}>
                                          Loan_slip
                                        </button>
                                        <br />
                                        <RenderSecure code="LOANS-STMNT">
                                          <button
                                            className="badge  text-white bg-primary bg-pill mt-2"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              handleStatement(
                                                loan.id,
                                                loan.customer_id.id
                                              )
                                            }>
                                            statment
                                          </button>
                                        </RenderSecure>
                                      </td>
                                      <RenderSecure code="LOANS-STMNT">
                                        <td>
                                          <button className="badge  bg-primary-light bg-pill">
                                            <a
                                              href={`/LoanManagement/${loan.id}`}
                                              classname="btn badge bg-warning-light bg-pill">
                                              Loan profile
                                            </a>
                                          </button>
                                        </td>
                                      </RenderSecure>
                                      <RenderSecure code="ADD-PAYMNT">
                                        <td>
                                          <button
                                            className="badge  text-white bg-secondary bg-pill"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              paymentHandler(
                                                loan.id,
                                                loan.customer_id.id
                                              )
                                            }>
                                            +payment
                                          </button>
                                        </td>
                                      </RenderSecure>
                                    </tr>
                                  ))}
                                {!Array.isArray(daily) && (
                                  <tr>
                                    <td
                                      colSpan={13}
                                      className="text-center text-danger">
                                      No data available for this loan
                                      installment type
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* weekly installments loans */}
                  <div
                    className="main-content-body tab-pane p-4 border-top-0"
                    id="weekly">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                      <div className="card custom-card card-dashboard-calendar pb-0">
                        {/* <label className="main-content-label mb-2 pt-1">
                          Installments Transactions expected three days
                        </label> */}
                        <label className="main-content-label mb-2 pt-1">
                          Weekly installment Loans
                        </label>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <thead>
                                <tr>
                                  <th>NO</th>
                                  <th>Customer </th>
                                  <th>
                                    Customer <br /> contact
                                  </th>
                                  <th>Loan_type</th>
                                  <th>Amount</th>
                                  <th>start date </th>
                                  <th>
                                    Loan <br />
                                    duration
                                  </th>
                                  <th>
                                    Loan <br /> Balance
                                  </th>
                                  <th>
                                    Deadline <br /> date
                                  </th>
                                  <th>
                                    more <br />
                                    Details
                                  </th>
                                  <th>
                                    loan <br /> documentation
                                  </th>
                                  <RenderSecure code="LOANS-STMNT">
                                    <th>
                                      Manage <br /> Loan
                                    </th>
                                  </RenderSecure>

                                  <RenderSecure code="ADD-PAYMNT">
                                    <th>
                                      add <br /> payment
                                    </th>
                                  </RenderSecure>
                                </tr>
                              </thead>
                              <tbody>
                                {weekly &&
                                  Array.isArray(weekly) &&
                                  weekly.map((loan, key) => (
                                    <tr key={key}>
                                      <td>{key + 1}</td>

                                      <td>
                                        {loan.customer_id.names.first_name}
                                        &nbsp;
                                        {loan.customer_id.names.last_name}
                                      </td>
                                      <td>+{loan.customer_id.names.contact}</td>
                                      <td>{loan.loan_type}</td>
                                      <td>{loan.amount}</td>
                                      <td>{loan.date_activated}</td>
                                      <td>{loan.duration}</td>
                                      <td>{loan.loanBalance}</td>

                                      <td>{loan.deadline}</td>
                                      <td>
                                        <span>
                                          <button
                                            className="badge  text-dark bg-light bg-pill"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              handleSecurities(loan.id)
                                            }>
                                            Securities
                                          </button>
                                          <br />
                                          <button
                                            className="badge  text-white bg-primary bg-pill mt-2"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              handleGuarantors(loan.id)
                                            }>
                                            Gurantors
                                          </button>
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="badge  text-white bg-secondary bg-pill"
                                          style={{fontSize: "14px"}}
                                          onClick={() => handleSlip(loan.id)}>
                                          Loan_slip
                                        </button>
                                        <br />
                                        <RenderSecure code="LOANS-STMNT">
                                          <button
                                            className="badge  text-white bg-primary bg-pill mt-2"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              handleStatement(
                                                loan.id,
                                                loan.customer_id.id
                                              )
                                            }>
                                            statment
                                          </button>
                                        </RenderSecure>
                                      </td>
                                      <RenderSecure code="LOANS-STMNT">
                                        <td>
                                          <button className="badge  bg-primary-light bg-pill">
                                            <a
                                              href={`/LoanManagement/${loan.id}`}
                                              classname="btn badge bg-warning-light bg-pill">
                                              Loan profile
                                            </a>
                                          </button>
                                        </td>
                                      </RenderSecure>
                                      <RenderSecure code="ADD-PAYMNT">
                                        <td>
                                          <button
                                            className="badge  text-white bg-secondary bg-pill"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              paymentHandler(
                                                loan.id,
                                                loan.customer_id.id
                                              )
                                            }>
                                            +payment
                                          </button>
                                        </td>
                                      </RenderSecure>
                                    </tr>
                                  ))}
                                {!Array.isArray(weekly) && (
                                  <tr>
                                    <td
                                      colSpan={13}
                                      className="text-center text-danger">
                                      No data available for this loan
                                      installment type
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* fortnight installments loans */}
                  <div
                    className="main-content-body tab-pane p-4 border-top-0"
                    id="weekly">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                      <div className="card custom-card card-dashboard-calendar pb-0">
                        {/* <label className="main-content-label mb-2 pt-1">
                          Installments Transactions expected three days
                        </label> */}
                        <label className="main-content-label mb-2 pt-1">
                          Weekly installment Loans
                        </label>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <thead>
                                <tr>
                                  <th>NO</th>
                                  <th>Customer </th>
                                  <th>
                                    Customer <br /> contact
                                  </th>
                                  <th>Loan_type</th>
                                  <th>Amount</th>
                                  <th>start date </th>
                                  <th>
                                    Loan <br />
                                    duration
                                  </th>
                                  <th>
                                    Loan <br /> Balance
                                  </th>
                                  <th>
                                    Deadline <br /> date
                                  </th>
                                  <th>
                                    more <br />
                                    Details
                                  </th>
                                  <th>
                                    loan <br /> documentation
                                  </th>
                                  <RenderSecure code="LOANS-STMNT">
                                    <th>
                                      Manage <br /> Loan
                                    </th>
                                  </RenderSecure>

                                  <RenderSecure code="ADD-PAYMNT">
                                    <th>
                                      add <br /> payment
                                    </th>
                                  </RenderSecure>
                                </tr>
                              </thead>
                              <tbody>
                                {weekly &&
                                  Array.isArray(fortnight) &&
                                  fortnight.map((loan, key) => (
                                    <tr key={key}>
                                      <td>{key + 1}</td>

                                      <td>
                                        {loan.customer_id.names.first_name}
                                        &nbsp;
                                        {loan.customer_id.names.last_name}
                                      </td>
                                      <td>+{loan.customer_id.names.contact}</td>
                                      <td>{loan.loan_type}</td>
                                      <td>{loan.amount}</td>
                                      <td>{loan.date_activated}</td>
                                      <td>{loan.duration}</td>
                                      <td>{loan.loanBalance}</td>

                                      <td>{loan.deadline}</td>
                                      <td>
                                        <span>
                                          <button
                                            className="badge  text-dark bg-light bg-pill"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              handleSecurities(loan.id)
                                            }>
                                            Securities
                                          </button>
                                          <br />
                                          <button
                                            className="badge  text-white bg-primary bg-pill mt-2"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              handleGuarantors(loan.id)
                                            }>
                                            Gurantors
                                          </button>
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="badge  text-white bg-secondary bg-pill"
                                          style={{fontSize: "14px"}}
                                          onClick={() => handleSlip(loan.id)}>
                                          Loan_slip
                                        </button>
                                        <br />
                                        <RenderSecure code="LOANS-STMNT">
                                          <button
                                            className="badge  text-white bg-primary bg-pill mt-2"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              handleStatement(
                                                loan.id,
                                                loan.customer_id.id
                                              )
                                            }>
                                            statment
                                          </button>
                                        </RenderSecure>
                                      </td>
                                      <RenderSecure code="LOANS-STMNT">
                                        <td>
                                          <button className="badge  bg-primary-light bg-pill">
                                            <a
                                              href={`/LoanManagement/${loan.id}`}
                                              classname="btn badge bg-warning-light bg-pill">
                                              Loan profile
                                            </a>
                                          </button>
                                        </td>
                                      </RenderSecure>
                                      <RenderSecure code="ADD-PAYMNT">
                                        <td>
                                          <button
                                            className="badge  text-white bg-secondary bg-pill"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              paymentHandler(
                                                loan.id,
                                                loan.customer_id.id
                                              )
                                            }>
                                            +payment
                                          </button>
                                        </td>
                                      </RenderSecure>
                                    </tr>
                                  ))}
                                {!Array.isArray(fortnight) && (
                                  <tr>
                                    <td
                                      colSpan={13}
                                      className="text-center text-danger">
                                      No data available for this loan
                                      installment type
                                    </td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* monthly installments loans  */}
                  <div
                    className="main-content-body tab-pane p-4 border-top-0"
                    id="monthly">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                      <div className="card custom-card card-dashboard-calendar pb-0">
                        <label className="main-content-label mb-2 pt-1">
                          monthly installment Loans
                        </label>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <thead>
                                <tr>
                                  <th>NO</th>
                                  <th>Customer </th>
                                  <th>
                                    Customer <br /> contact
                                  </th>
                                  <th>Loan_type</th>
                                  <th>Amount</th>
                                  <th>start date </th>
                                  <th>
                                    Loan <br />
                                    duration
                                  </th>
                                  <th>
                                    Loan <br /> Balance
                                  </th>
                                  <th>
                                    Deadline <br /> date
                                  </th>
                                  <th>
                                    more <br />
                                    Details
                                  </th>
                                  <th>
                                    loan <br /> documentation
                                  </th>
                                  <RenderSecure code="LOANS-STMNT">
                                    <th>
                                      Manage <br /> Loan
                                    </th>
                                  </RenderSecure>

                                  <RenderSecure code="ADD-PAYMNT">
                                    <th>
                                      add <br /> payment
                                    </th>
                                  </RenderSecure>
                                </tr>
                              </thead>

                              <tbody>
                                {monthly &&
                                  Array.isArray(monthly) &&
                                  monthly.map((loan, key) => (
                                    <tr key={key}>
                                      <td>{key + 1}</td>

                                      <td>
                                        {loan.customer_id.names.first_name}
                                        &nbsp;
                                        {loan.customer_id.names.last_name}
                                      </td>
                                      <td>+{loan.customer_id.names.contact}</td>
                                      <td>{loan.loan_type}</td>
                                      <td>{loan.amount}</td>
                                      <td>{loan.date_activated}</td>
                                      <td>{loan.duration}</td>
                                      <td>{loan.loanBalance}</td>

                                      <td>{loan.deadline}</td>
                                      <td>
                                        <span>
                                          <button
                                            className="badge  text-dark bg-light bg-pill"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              handleSecurities(loan.id)
                                            }>
                                            Securities
                                          </button>
                                          <br />
                                          <button
                                            className="badge  text-white bg-primary bg-pill mt-2"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              handleGuarantors(loan.id)
                                            }>
                                            Gurantors
                                          </button>
                                        </span>
                                      </td>
                                      <td>
                                        <button
                                          className="badge  text-white bg-secondary bg-pill"
                                          style={{fontSize: "14px"}}
                                          onClick={() => handleSlip(loan.id)}>
                                          Loan_slip
                                        </button>
                                        <br />
                                        <RenderSecure code="LOANS-STMNT">
                                          <button
                                            className="badge  text-white bg-primary bg-pill mt-2"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              handleStatement(
                                                loan.id,
                                                loan.customer_id.id
                                              )
                                            }>
                                            statment
                                          </button>
                                        </RenderSecure>
                                      </td>
                                      <RenderSecure code="LOANS-STMNT">
                                        <td>
                                          <button className="badge  bg-primary-light bg-pill">
                                            <a
                                              href={`/LoanManagement/${loan.id}`}
                                              classname="btn badge bg-warning-light bg-pill">
                                              Loan profile
                                            </a>
                                          </button>
                                        </td>
                                      </RenderSecure>
                                      <RenderSecure code="ADD-PAYMNT">
                                        <td>
                                          <button
                                            className="badge  text-white bg-secondary bg-pill"
                                            style={{fontSize: "14px"}}
                                            onClick={() =>
                                              paymentHandler(
                                                loan.id,
                                                loan.customer_id.id
                                              )
                                            }>
                                            +payment
                                          </button>
                                        </td>
                                      </RenderSecure>
                                    </tr>
                                  ))}
                              </tbody>
                              {!Array.isArray(monthly) && (
                                <tr>
                                  <td
                                    colSpan={13}
                                    className="text-center text-danger">
                                    No data available for this loan installment
                                    type
                                  </td>
                                </tr>
                              )}
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

export default ActiveLoans;
