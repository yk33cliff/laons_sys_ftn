import React, {useContext} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import LoansContext from "../../Context/LoansContext";
import toast, {Toaster} from "react-hot-toast";
import useStateCallback from "../../util/customHooks/useStateCallback";
import AddSecurities from "../../Components/loans/AddSecurities";
import AddGuarantors from "../../Components/loans/AddGuarantors";
import ApproveLoan from "../../Components/loans/ApproveLoan";
import LoanSlip from "../../Components/loans/LoanSlip";
import ViewSecurities from "../../Components/loans/ViewSecurities";
import ViewGuarantors from "../../Components/loans/ViewGuarantors";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import LoanUpdating from "../../Components/loans/LoanUpdating";
import ajaxLaons from "../../util/remote/ajaxLaons";

function ViewLoanApplications() {
  const {LoansToApprove, getLoansToApprove} = useContext(LoansContext);

  // loans updating
  const [updating, setUpdating] = useStateCallback(false);
  const handle_loan_updates = (id) => {
    setUpdating(false, () =>
      setUpdating(<LoanUpdating isOpen={true} id={id} />)
    );
  };
  // delete loan
  const delete_loan = async (id) => {
    let confirm = window.confirm(
      "Are you sure you want to delete this loan from these system"
    );
    if (confirm) {
      var data = {
        id: id,
      };
    }

    const server_response = await ajaxLaons.deleteLoan(data);

    if (server_response.status === "OK") {
      toast.success(server_response.message);
    } else {
      toast.error(server_response.message);
    }
  };

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
  // for Approve/
  const [Approve, setApprove] = useStateCallback(false);
  const handle_approval = (id, status) => {
    setApprove(false, () =>
      setApprove(<ApproveLoan isOpen={true} id={id} status={status} />)
    );
  };
  // loan slip
  const [Lanslip, setLanslip] = useStateCallback(false);
  const handle_loanslip = (id) => {
    setLanslip(false, () =>
      setLanslip(<LoanSlip isOpen={true} id={id} customer={id} />)
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
      setGuarantors(<ViewGuarantors isOpen={true} id={id} customer={id} />)
    );
  };

  const getStatusBadge = (status) => {
    if (status === "1") {
      return (
        <p style={{fontSize: "14px"}} className="badge bg-info-light bg-pill">
          Pending
        </p>
      );
    } else if (status === "2") {
      return (
        <p
          style={{fontSize: "14px"}}
          className="badge bg-warning-light bg-pill">
          In process
        </p>
      );
    }
    // else if (status === 3) {
    //   return (
    //     <p
    //       style={{fontSize: "14px"}}
    //       className="badge bg-warning-light bg-pill">
    //       Approved
    //     </p>
    //   );
    // }
  };

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
                  <Toaster />
                  {AddSecurity}
                  {AddGuarantor}
                  {Approve}
                  {Lanslip}
                  {securities}
                  {guarantors}
                  {updating}
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table card-table text-nowrap table-bordered border-top">
                        <thead>
                          <tr>
                            <th>No.</th>
                            <th>customer</th>
                            <th>Amount</th>
                            <th>
                              Loan <br /> duration
                            </th>
                            <th>
                              interest <br />
                              rate
                            </th>
                            <th>
                              processing <br />
                              fee
                            </th>
                            <th>
                              Insurance <br /> rate
                            </th>
                            <th>
                              fine <br />
                              rate
                            </th>
                            <th>
                              date <br />
                              Requested
                            </th>
                            <th>operations</th>

                            <th>
                              Approval <br /> Status
                            </th>
                            <th>
                              Loan <br /> slip
                            </th>
                            <th> securities</th>
                            <th> guarantors</th>
                            <th>
                              Approval <br />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <Toaster />
                          {!Array.isArray(LoansToApprove) && (
                            <tr>
                              <td
                                colSpan={12}
                                className="text-info text-center">
                                No loan applications found
                              </td>
                            </tr>
                          )}

                          {Array.isArray(LoansToApprove) &&
                            LoansToApprove.map((loan, key) => (
                              <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{loan.customer_id.names}</td>
                                <td>{loan.amount}</td>
                                <td>{loan.duration}</td>
                                <td>{loan.interest_rate}</td>
                                <td>{loan.processing_fee_rate}</td>
                                <td>{loan.insurance_rate}</td>
                                <td>{loan.fine_rate}</td>
                                <td>{loan.date_requested}</td>
                                <td>
                                  {" "}
                                  <button
                                    className="badge  bg-primary-light bg-pill m-2"
                                    onClick={() =>
                                      handle_loan_updates(loan.id)
                                    }>
                                    <FontAwesomeIcon
                                      icon={faEdit}
                                      fade
                                      style={{color: "orange"}}
                                    />
                                    update
                                  </button>
                                  <button
                                    className="badge  bg-danger-light bg-pill m-2"
                                    onClick={() => delete_loan(loan.id)}>
                                    <FontAwesomeIcon
                                      icon={faTrash}
                                      fade
                                      style={{color: "red"}}
                                    />{" "}
                                    Delete
                                  </button>
                                </td>

                                <td>{getStatusBadge(loan.status)}</td>
                                <td>
                                  <button
                                    className="badge  bg-primary-light bg-pill"
                                    onClick={() => handle_loanslip(loan.id)}>
                                    loan slip
                                  </button>
                                </td>
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
                                    onClick={() =>
                                      handle_AddGuarantors(loan.id)
                                    }
                                    className="badge  bg-warning-light bg-pill">
                                    add
                                  </button>

                                  <button
                                    onClick={() => handleGuarantors(loan.id)}
                                    className="badge  bg-primary-light bg-pill m-2">
                                    View
                                  </button>
                                </td>
                                <td>
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
                                </td>
                              </tr>
                            ))}
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
