import React, {useContext} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import LoansContext from "../../Context/LoansContext";
import toast, {Toaster} from "react-hot-toast";
// import ajaxLaons from "../../util/remote/ajaxLaons";
// import functions from "../../util/functions";
import useStateCallback from "../../util/customHooks/useStateCallback";
import AddSecurities from "../../Components/loans/AddSecurities";
import AddGuarantors from "../../Components/loans/AddGuarantors";
import ApproveLoan from "../../Components/loans/ApproveLoan";

function ViewLoanApplications() {
  const {LoansToApprove, getLoansToApprove} = useContext(LoansContext);
  // console.log(LoansToApprove);

  const [modal, setModal] = useStateCallback(false);
  const [modal1, setModal1] = useStateCallback(false);
  const [modal2, setModal2] = useStateCallback(false);
  // for securities
  const handle_mdodel = (id) => {
    setModal(false, () => setModal(<AddSecurities isOpen={true} id={id} />));
  };
  // for guarantors
  const handle_mdodel1 = (id) => {
    setModal1(false, () => setModal(<AddGuarantors isOpen={true} id={id} />));
  };
  // for Approve/
  const handle_mdodel2 = (id, status, funct) => {
    setModal2(false, () =>
      setModal(
        <ApproveLoan isOpen={true} id={id} status={status} fun={funct} />
      )
    );
  };

  const getStatusBadge = (status) => {
    if (status === "1") {
      return (
        <p style={{fontSize: "14px"}} className="badge bg-info-light bg-pill">
          Approval Pending
        </p>
      );
    } else if (status === "2") {
      return (
        <p
          style={{fontSize: "14px"}}
          className="badge bg-warning-light bg-pill">
          Approval in process
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
                  {modal}
                  {modal1}
                  {modal2}
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
                            <th>fine_rate </th>
                            <th>
                              date <br />
                              Requested at{" "}
                            </th>
                            <th>
                              Approval <br /> Status
                            </th>
                            <th>add securities</th>
                            <th>add guarantors</th>
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
                                <td>{loan.customer_id}</td>
                                <td>{loan.amount}</td>
                                <td>{loan.duration}</td>
                                <td>{loan.interest_rate}</td>
                                <td>{loan.processing_fee_rate}</td>
                                <td>{loan.insurance_rate}</td>
                                <td>{loan.fine_rate}</td>
                                <td>{loan.date_requested}</td>
                                <td>{getStatusBadge(loan.status)}</td>
                                <td>
                                  <a
                                    href="#"
                                    onClick={() => handle_mdodel(loan.id)}
                                    className="badge  bg-warning-light bg-pill">
                                    add securities
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href="#"
                                    onClick={() => handle_mdodel1(loan.id)}
                                    className="badge  bg-warning-light bg-pill">
                                    add guarantors
                                  </a>
                                </td>
                                <td>
                                  <a
                                    href="#"
                                    onClick={() =>
                                      handle_mdodel2(
                                        loan.id,
                                        loan.status,
                                        getLoansToApprove()
                                      )
                                    }
                                    style={{fontSize: "14px"}}
                                    className="badge bg-secondary-light bg-pill">
                                    Approve
                                  </a>
                                </td>
                              </tr>
                            ))}
                          {/* <tr>
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
                            <td>$ 5273.15</td>
                            <td>$ 5273.15</td>
                            <td>$ 5273.15</td>
                          </tr> */}
                          {/* 
                          <tr>
                            <td>#12454</td>
                            <td className="text-success">Buy</td>
                            <td>
                              <span className="badge bg-warning-light bg-pill">
                                Pending
                              </span>
                            </td>
                            <td>
                              <span className="badge bg-danger-light bg-pill">
                                Cancelled
                              </span>
                            </td>
                            <td>
                              <span className="badge bg-info-light bg-pill">
                                In Process
                              </span>
                            </td>

                            <td>
                              <span className="badge bg-success-light bg-pill">
                                Completed
                              </span>
                            </td>
                          </tr> */}
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
