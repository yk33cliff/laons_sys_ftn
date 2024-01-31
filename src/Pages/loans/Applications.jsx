import React, {useEffect, useState} from "react";

import {Toaster} from "react-hot-toast";
import useStateCallback from "../../util/customHooks/useStateCallback";
import AddSecurities from "../../Components/loans/AddSecurities";
import AddGuarantors from "../../Components/loans/AddGuarantors";
import ApproveLoan from "../../Components/loans/ApproveLoan";

import ViewSecurities from "../../Components/loans/ViewSecurities";
import ViewGuarantors from "../../Components/loans/ViewGuarantors";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faEye} from "@fortawesome/free-solid-svg-icons";
import LoanUpdating from "../../Components/loans/LoanUpdating";
import ajaxLaons from "../../util/remote/ajaxLaons";
import {RenderSecure} from "../../util/script/RenderSecure";
import ReactPaginate from "react-paginate";
import functions from "../../util/functions";
import DeclineLoan from "../../Components/loans/DeclineLoan";
import ViewLoanDetails from "./ViewLoanDetails";

function Applications() {
  const [LoansToApprove, setLoansToApprove] = useState(false);
  const userId = functions.sessionGuard();
  const role_id = functions.role_user();

  useEffect(() => {
    getLoansToApprove();
    // getActiveLoans();
  }, []);
  const getLoansToApprove = async () => {
    const server_response = await ajaxLaons.fetchLoansToApprove();

    if (server_response.status === "OK") {
      //store results<></><></>
      setLoansToApprove(server_response.details);
    } else {
      //communicate error
      setLoansToApprove("404");
    }
  };

  // Approved_by1;
  const user_id = functions.sessionGuard();

  // loans updating
  const [updating, setUpdating] = useStateCallback(false);
  const handle_loan_updates = (loan) => {
    setUpdating(false, () =>
      setUpdating(
        <LoanUpdating isOpen={true} loan={loan} function={getLoansToApprove} />
      )
    );
  };
  // loans details
  const [details, setDetails] = useStateCallback(false);
  const handle_loan_detail = (loan) => {
    setDetails(false, () =>
      setDetails(<ViewLoanDetails isOpen={true} loan={loan} />)
    );
  };
  // delete loan
  // const delete_loan = async (id) => {
  //   let confirm = window.confirm(
  //     "Are you sure you want to delete this loan from these system"
  //   );
  //   if (confirm) {
  //     var data = {
  //       id: id,
  //     };
  //   }
  //   const server_response = await ajaxLaons.deleteLoan(data);

  //   if (server_response.status === "OK") {
  //     toast.success(server_response.message);
  //   } else {
  //     toast.error(server_response.message);
  //   }
  // };

  // for securities
  const [AddSecurity, setAddSecurity] = useStateCallback(false);
  const handle_AddSecurities = (id, customer) => {
    setAddSecurity(false, () =>
      setAddSecurity(
        <AddSecurities isOpen={true} id={id} customer={customer} />
      )
    );
  };
  // for guarantors
  const [AddGuarantor, setAddGuarantors] = useStateCallback(false);
  const handle_AddGuarantors = (id) => {
    setAddGuarantors(false, () =>
      setAddGuarantors(<AddGuarantors isOpen={true} id={id} />)
    );
  };

  // secuirities view model
  const [securities, setSecurities] = useStateCallback(false);
  const handleSecurities = (id) => {
    setSecurities(false, () =>
      setSecurities(<ViewSecurities isOpen={true} id={id} customer={id} />)
    );
  };
  //  view model guarantors
  const [guarantors, setGuarantors] = useStateCallback(false);
  const handleGuarantors = (id) => {
    setGuarantors(false, () =>
      setGuarantors(
        <ViewGuarantors isOpen={true} id={id} customer={id} state={1} />
      )
    );
  };

  // for Approve/
  const [Approve, setApprove] = useStateCallback(false);
  const handle_approval = (id, status) => {
    setApprove(false, () =>
      setApprove(
        <ApproveLoan
          isOpen={true}
          id={id}
          status={status}
          function={getLoansToApprove}
        />
      )
    );
  };
  // for decline/
  const [decline, setDecline] = useStateCallback(false);
  const handle_decline = (id, status) => {
    setDecline(false, () =>
      setDecline(<DeclineLoan isOpen={true} id={id} function={status} />)
    );
  };
  const getStatusBadge = (status) => {
    if (status === "1") {
      return (
        <button
          style={{fontSize: "14px"}}
          className="badge bg-primary-light bg-pill">
          Pending
        </button>
      );
    } else if (status === "2") {
      return (
        <button
          style={{fontSize: "14px"}}
          className="badge bg-warning-light bg-pill">
          In process
        </button>
      );
    }
  };

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20; // Change this value based on your preference

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedItems = Array.isArray(LoansToApprove)
    ? LoansToApprove.slice(offset, offset + itemsPerPage)
    : [];

  const is_approver = functions.check_is_approver();

  return (
    <div>
      {/* <AppContainer title="View Loan Application"> */}
      <div>
        <div className="row">
          {/* <div className="row row-sm">
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
          </div> */}
          <div className="row row-sm">
            <div className="col-xl-12">
              <div className="card custom-card">
                <div className="card-header border-bottom-0">
                  <label className="main-content-label my-auto pt-2">
                    Loan applications Details
                  </label>
                </div>
                <Toaster />
                {AddSecurity}
                {AddGuarantor}
                {Approve}
                {decline}
                {securities}
                {guarantors}
                {updating}
                {details}
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table card-table text-nowrap table-bordered border-top">
                      <thead>
                        <tr>
                          <th>customer</th>
                          <th>Amount</th>
                          <th>
                            Loan <br /> duration
                          </th>
                          <th>
                            Installment <br />
                            type
                          </th>
                          <th>
                            date <br />
                            Requested
                          </th>
                          <th>Loan Details</th>
                          <RenderSecure code="EDIT-LOAN">
                            <th>operations</th>
                          </RenderSecure>
                          <th>
                            Approval <br /> status
                          </th>
                          <RenderSecure code="ADD-SECURITY">
                            <th> securities</th>
                          </RenderSecure>
                          <RenderSecure code="ADD-GUAR">
                            <th> guarantors</th>
                          </RenderSecure>
                          <th>
                            Approved_by <br />
                          </th>
                          {is_approver == 1 && (
                            <>
                              <th>
                                Approval <br /> action
                              </th>
                              <th>
                                decline <br />
                              </th>
                            </>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        <Toaster />
                        {!Array.isArray(LoansToApprove) && (
                          <tr>
                            <td colSpan={12} className="text-info text-center">
                              No loan applications found
                            </td>
                          </tr>
                        )}

                        {paginatedItems.map((loan, key) => (
                          <tr key={key}>
                            <td>
                              {loan && loan.customer_id.names.first_name} &nbsp;
                              {loan && loan.customer_id.names.last_name}
                            </td>
                            <td>{loan.amount}</td>
                            <td>{loan.duration}</td>
                            <td>{loan.installment_type}</td>

                            <td>{loan.date_requested}</td>
                            <td>
                              <button
                                className="badge  bg-primary-light bg-pill m-2"
                                onClick={() => handle_loan_detail(loan)}>
                                <FontAwesomeIcon
                                  icon={faEye}
                                  fade
                                  style={{color: "orange"}}
                                />
                                &nbsp; more
                                <br />
                                details
                              </button>
                            </td>
                            <td>
                              <button
                                className="badge  bg-primary-light bg-pill m-2"
                                onClick={() => handle_loan_updates(loan)}>
                                <FontAwesomeIcon
                                  icon={faEdit}
                                  fade
                                  style={{color: "orange"}}
                                />
                                update
                              </button>
                            </td>

                            <td>{getStatusBadge(loan.status)}</td>

                            <td>
                              <button
                                onClick={() =>
                                  handle_AddSecurities(
                                    loan.id,
                                    loan.customer_id.names.id
                                  )
                                }
                                className="badge  bg-secondary-light bg-pill">
                                add
                              </button>
                              <button
                                onClick={() =>
                                  handleSecurities(
                                    loan.id,
                                    loan.customer_id.names.id
                                  )
                                }
                                className="badge  bg-primary-light bg-pill m-2">
                                View
                              </button>
                            </td>
                            <td>
                              <button
                                onClick={() => handle_AddGuarantors(loan.id)}
                                className="badge  bg-warning-light bg-pill">
                                add
                              </button>

                              <button
                                onClick={() => handleGuarantors(loan.id)}
                                className="badge  bg-primary-light bg-pill m-2">
                                View
                              </button>
                            </td>
                            <td> {loan.Approved_name1}</td>
                            {is_approver == 1 && (
                              <td>
                                {loan.Approved_by1 !== user_id ? (
                                  <button
                                    onClick={() =>
                                      handle_approval(
                                        loan.id,
                                        loan.status,
                                        getLoansToApprove()
                                      )
                                    }
                                    className="badge bg-success-light bg-pill">
                                    Approve
                                  </button>
                                ) : (
                                  <button className="badge bg-danger bg-pill">
                                    you have <br />
                                    approved
                                  </button>
                                )}
                              </td>
                            )}
                            {is_approver == 1 && (
                              <td>
                                {loan.Approved_by1 !== user_id ? (
                                  <button
                                    onClick={() =>
                                      handle_decline(
                                        loan.id,
                                        getLoansToApprove()
                                      )
                                    }
                                    className="badge bg-primary bg-pill">
                                    decline <br />
                                    loan
                                  </button>
                                ) : (
                                  <button className="badge bg-danger bg-pill">
                                    decline <br />
                                    disabled
                                  </button>
                                )}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <ReactPaginate
                      pageCount={Math.ceil(
                        LoansToApprove.length / itemsPerPage
                      )}
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
      </div>
      {/* </AppContainer> */}
    </div>
  );
}

export default Applications;
