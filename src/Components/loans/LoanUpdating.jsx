import React, {useContext, useEffect, useState} from "react";
import SystemModal from "../Common/SystemModal";
import toast, {Toaster} from "react-hot-toast";

import LoanTypesContext from "../../Context/LoanTypesContext";
import Select from "react-select";
import functions from "../../util/functions";
import ClientContext from "../../Context/ClientContext";
import ajaxLaons from "../../util/remote/ajaxLaons";

function LoanUpdating(props) {
  const {LoanTypes} = useContext(LoanTypesContext);
  const {clientList} = useContext(ClientContext);
  const loand = props.loan;

  // const role_id = functions.role_user();
  const user_id = functions.sessionGuard();
  const [loan, setLoan] = useState(loand.Loan_id);
  const [client, setClient] = useState(loand.customer_id.id);
  const [amount, setAmount] = useState(loand.amount);
  const [paymentPeriod, setPaymentPeriod] = useState(loand.duration);
  const [interestRate, setInterestRate] = useState(loand.interest_rate);
  const [processingFees, setProcessingFees] = useState(
    loand.processing_fee_rate
  );
  const [dateRequested, setDateRequested] = useState(loand.date_requested);
  const [fees, setFees] = useState(loand.Loan_id);
  const [insurance, setInsurance] = useState(loand.insurance_rate);
  const [fine, setFine] = useState(1);

  const handler = async (e) => {
    e.preventDefault();

    if (
      client.length > 0 &&
      loan.length > 0 &&
      amount.length > 0 &&
      paymentPeriod.length > 0 &&
      fees.length > 0
    ) {
      const data = {
        create_by: user_id,
        customer_id: client,
        amount,
        loan_type: loan,
        repayment_period: paymentPeriod,
        interest_rate: interestRate,
        processing_fee: processingFees,
        insurance: insurance,
        fine: fine,
        date_in: dateRequested,
        fees: fees,
        id: loand.id,
      };
      const server_response = await ajaxLaons.UpdateLoanDetails(data);
      if (server_response.status === "OK") {
        resetForm();
        setClient("");
        setLoan("");
        props.function();
        toast.success(server_response.message);
      } else {
        toast.error(server_response.message);
      }
    } else {
      toast.error(
        "Fill loan, client, amount, payment period, fine and security Fees source; they are mandatory"
      );
    }
  };

  useEffect(() => {
    get_loan_type_variables();
  }, [loan]);

  const get_loan_type_variables = () => {
    if (loan.length > 0) {
      setInterestRate("");
      setProcessingFees("");

      if (Array.isArray(LoanTypes)) {
        LoanTypes.forEach((value) => {
          if (value.id === loan) {
            setInterestRate(value.interest_rate);
            setProcessingFees(value.processing_fee_rate);
            setProcessingFees(value.processing_fee_rate);
            setInsurance(value.insurance);
            setFine(value.fine_rate);
          }
        });
      }
    }
  };
  const resetForm = () => {
    setClient("");
    setLoan("");
    setAmount("");
    setPaymentPeriod("");
    setInterestRate("");
    setProcessingFees("");
    setDateRequested("");
    setFees("");
    setFine("");
    setInsurance("");
  };
  const RenderFooter = (controls) => {
    return (
      <>
        <button
          className="btn ripple btn-dark"
          type="button"
          onClick={controls.close}>
          Close
        </button>
        <button
          className="btn ripple btn-primary"
          type="submit"
          onClick={handler}>
          Update Loan
        </button>
      </>
    );
  };
  return (
    <div>
      <SystemModal
        title="Updating loan in the system"
        id="model-update-cross"
        size="lg "
        footer={RenderFooter}>
        {/* <Toaster /> */}
        <div className="" id="printablediv">
          <div className="mb-4">
            <div className="row row-sm">
              <div className="col-lg-12 col-md-12">
                <div className="card custom-card">
                  <div className="card-body">
                    <div>
                      <h5 className="main-content-label mb-1">
                        Register Loan Application
                      </h5>
                      <Toaster />
                    </div>
                    <div className="row row-sm">
                      <form action="">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <p className="mg-b-10">Select clients</p>
                              <Select
                                onChange={(e) => setClient(e.id)}
                                getOptionLabel={(option) => option.name}
                                getOptionValue={(option) => option.id}
                                isSearchable
                                options={
                                  clientList &&
                                  Array.isArray(clientList) &&
                                  clientList
                                }
                                value={
                                  clientList &&
                                  Array.isArray(clientList) &&
                                  clientList.find(
                                    (value) => value.id === client
                                  )
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <p className="mg-b-10">Select Loan Type</p>
                              <Select
                                onChange={(e) => setLoan(e.id)}
                                getOptionLabel={(option) => option.name}
                                getOptionValue={(option) => option.id}
                                isSearchable
                                options={Array.isArray(LoanTypes) && LoanTypes}
                                value={
                                  LoanTypes &&
                                  Array.isArray(LoanTypes) &&
                                  LoanTypes.find((value) => value.id === loan)
                                }
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <p className="mg-b-10">Amount</p>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Amount applied for"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="mg-b-10">Payment Period</label>
                              <input
                                type="text"
                                className="form-control"
                                name="paymentPeriod"
                                placeholder="loan duration"
                                value={paymentPeriod}
                                onChange={(e) =>
                                  setPaymentPeriod(e.target.value)
                                }
                              />
                            </div>
                          </div>

                          {/* {role_id !== 4 ? (
                        <> */}
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="mg-b-10">
                                Date Requested At
                              </label>
                              <input
                                type="date"
                                className="form-control"
                                name="dateRequested"
                                placeholder="Date of application"
                                value={dateRequested}
                                onChange={(e) =>
                                  setDateRequested(e.target.value)
                                }
                              />
                            </div>
                          </div>
                          {loan && (
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="mg-b-10">Interest Rate</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="interestRate"
                                  placeholder="Interest rate"
                                  value={interestRate}
                                  onChange={(e) =>
                                    setInterestRate(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          )}
                          {loan && (
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="mg-b-10">
                                  Processing Fees
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="processingFees"
                                  placeholder="Processing fees"
                                  value={processingFees}
                                  onChange={(e) =>
                                    setProcessingFees(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          )}
                          {loan && (
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="mg-b-10">fine Rate</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="interestRate"
                                  placeholder="fine rate 2"
                                  value={fine}
                                  onChange={(e) => setFine(e.target.value)}
                                />
                              </div>
                            </div>
                          )}
                          {loan && (
                            <div className="col-md-6">
                              <div className="form-group">
                                <label className="mg-b-10">
                                  insurance Rate
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="insurance rate"
                                  placeholder="insurance rate"
                                  value={insurance}
                                  onChange={(e) => setInsurance(e.target.value)}
                                />
                              </div>
                            </div>
                          )}
                          {/* </>
                      // ) : null} */}
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="mg-b-10">
                                fine and security Fees source
                              </label>
                              <select
                                name=""
                                value={fees}
                                className="form-control"
                                onChange={(e) => setFees(e.target.value)}
                                id="">
                                <option
                                  className="text-center"
                                  disabled
                                  selected
                                  value="">
                                  ---------------------selet
                                  option---------------------------
                                </option>
                                <option value="wallet"> cutomer wallet</option>
                                <option value="loan_reduction">
                                  loan_reduction{" "}
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SystemModal>
    </div>
  );
}

export default LoanUpdating;
