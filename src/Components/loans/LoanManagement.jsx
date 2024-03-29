import React, {useEffect, useState} from "react";
import AppContainer from "../Structure/AppContainer";
import LoanTransactions from "./LoanTransactions";
import {useParams} from "react-router-dom";
import ajaxLaons from "../../util/remote/ajaxLaons";
import GetLoanFine from "./GetLoanFine";
import AddLoanpayment from "./AddLoanpayment";
import useStateCallback from "../../util/customHooks/useStateCallback";

function LoanManagement(props) {
  var {id} = useParams();

  useEffect(() => {
    getLoanDetail();
  }, []);
  const [loan, setLoan] = useState("");
  const [modal, setModal] = useStateCallback(false);
  // console.log(loan);

  const handleModal2 = (e) => {
    setModal(false, () =>
      setModal(
        <AddLoanpayment isOpen={true} id={id} customer={loan.customer_id.id} />
      )
    );
  };
  const getLoanDetail = async () => {
    var data = {id: id};
    const server_response = await ajaxLaons.getLoanDetails(data);

    if (server_response.status === "OK") {
      setLoan(server_response.details);
    } else {
      setLoan("");
    }
  };

  return (
    <div>
      <AppContainer title="loan management">
        <>
          {modal}
          {/* Row*/}
          <div className="row row-sm">
            <div className="col-lg-12 col-md-12 mx-10">
              <div
                style={{
                  float: "right",
                  marginBottom: "20px",
                }}
                className="col-lg-2 col-md-2">
                <div className="form-group mb-0">
                  <button
                    type="button"
                    onClick={() => handleModal2()}
                    className="btn col-lg -12 rounded-50 col-md-12 btn-warning">
                    + add payment
                  </button>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div className="row row-sm">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="card custom-card overflow-hidden crypto-buysell-card">
                <div className="card-body">
                  <div className="card-header border-bottom-0 ps-0 pt-0">
                    <p className="main-content-label my-auto">
                      <i> Loan Summary </i>
                    </p>
                    <div className="row">
                      <div className="col-6">
                        <p>
                          Loan ID &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>{loan && loan.id}</u>
                          </span>
                        </p>
                        <p>
                          Loan Type &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>{loan && loan.loan_type}</u>
                          </span>
                        </p>
                        <p>
                          date requested at &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>{loan && loan.date_requested}</u>
                          </span>
                        </p>

                        <p>
                          Loan period &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>{loan && loan.duration} </u>
                          </span>
                        </p>
                        <p>
                          Payment plan &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>{loan && loan.installment_type}</u>
                          </span>
                        </p>
                        <p>
                          interest rate &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>{loan && loan.interest_rate}</u>
                          </span>
                        </p>

                        <p>
                          Monitoring fee rate &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>{loan && loan.monitoring_fees}</u>
                          </span>
                        </p>

                        <label className="main-content-label my-auto pt-2">
                          customer
                        </label>
                        <p>
                          Customer's Name &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>
                              {loan && loan.customer_id.names.first_name} &nbsp;
                              {loan && loan.customer_id.names.last_name}
                            </u>
                          </span>
                        </p>
                        <br />
                        <br />
                      </div>
                      <div className="col-6">
                        <label className="main-content-label my-auto pt-2">
                          Served by
                        </label>
                        <p>
                          Official's Name &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>
                              {loan && loan.created_by.first_name} &nbsp;
                              {loan && loan.created_by.last_name}
                            </u>
                          </span>
                        </p>
                        <p>
                          Official's contact &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u> + {loan && loan.created_by.contact} </u>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="card custom-card overflow-hidden crypto-buysell-card">
                <div className="card-body">
                  <div className="card-header border-bottom-0 ps-0 pt-0">
                    <p className="main-content-label my-auto">
                      <i>Loan Details </i>
                    </p>
                    <div className="table-responsive">
                      <table className="table card-table text-nowrap table-bordered border-top">
                        <tbody>
                          <tr>
                            <td>Loan principle</td>
                            <td>
                              <u>{loan && loan.amount}</u>
                            </td>
                          </tr>
                          <tr>
                            <td> Interest on Principal</td>
                            <td>
                              <i className="cc BTC-alt text-warning" />
                              <u>{loan && loan.interest}</u>
                            </td>
                          </tr>
                          <tr>
                            <td>monitoring_fees on Principal</td>
                            <td>
                              <i className="cc BTC-alt text-warning" />
                              <u>{loan && loan.monitorin_fee}</u>
                            </td>
                          </tr>
                          <tr>
                            <td>Total Loan Fines</td>
                            <td>
                              <u>{loan && loan.total_fines}</u>
                            </td>
                          </tr>
                          <tr>
                            <td>Total repay Amount </td>
                            <td>
                              <u>{loan && loan.repay_amount}</u>
                            </td>
                          </tr>
                          <tr>
                            <td>Total Loan paid back </td>
                            <td>
                              <u>{loan && loan.loan_paid}</u>
                            </td>
                          </tr>
                          <tr>
                            <td> Loan balance </td>
                            <td>
                              <u>{loan && loan.loanBalance}</u>
                            </td>
                          </tr>
                          <tr>
                            <td> Loan start date </td>
                            <td>
                              <u>{loan && loan.date_requested}</u>
                            </td>
                          </tr>
                          <tr>
                            <td> dead Line </td>
                            <td>
                              <u>{loan && loan.deadline}</u>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}

          {/* Row*/}
          <div className="row row-sm">
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
              <LoanTransactions id={id} />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
              <GetLoanFine id={id} />
            </div>
          </div>
          {/* Row End */}
        </>
      </AppContainer>
    </div>
  );
}

export default LoanManagement;
