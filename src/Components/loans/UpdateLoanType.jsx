import React, {useState} from "react";
import ajaxLoanTypes from "../../util/remote/ajaxLoanTypes";

import SystemModal from "../Common/SystemModal";
import toast, {Toaster} from "react-hot-toast";

const UpdateLoanType = (props) => {
  //   loan: duration: "1";
  //   id: "9";
  //   installment_type: "weekly";
  //   interest_rate: "5";
  //   maximum_amount: "10000000";
  //   name: "emergency\\personal loan";
  //   processing_fee_rate: "5";
  //   status: "1";
  const [loan, setLoan] = useState(props.loan.name);
  const [max, setMax] = useState(props.loan.maximum_amount);
  const [months, setMonths] = useState(props.loan.duration);
  const [intrest, setIntrest] = useState(props.loan.interest_rate);
  const [processing, setProcessing] = useState(props.loan.processing_fee_rate);
  const [installment, setInstallment] = useState(props.loan.installment_type);
  console.log(props);
  const handler = async (e) => {
    e.preventDefault();
    if (
      loan.length > 0 &&
      max.length > 0 &&
      months.length > 0 &&
      intrest.length > 0 &&
      processing.length > 0
    ) {
      const data = {
        id: props.loan.id,
        name: loan,
        duration: months,
        max_amount: max,
        Interest_rate: intrest,
        processing_fee: processing,
        installment_type: installment,
      };

      const server_response = await ajaxLoanTypes.UpdateLoanType(data);

      if (server_response.status === "OK") {
        toast.success(server_response.message);

        // Reset form fields
        setLoan("");
        setMax("");
        setMonths("");
        setIntrest("");
        setProcessing("");
        setInstallment("");
      } else {
        toast.error(server_response.message);
        console.log(server_response.status);
      }
    } else {
      toast.error("Fill all the required fields");
    }
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
          type="button"
          className={`btn ripple btn-success`}
          onClick={handler}>
          Update Details
        </button>
      </>
    );
  };

  return (
    <SystemModal
      title="Update loan type Details"
      id="model-update-cable"
      size="md"
      footer={RenderFooter}>
      <div className="row row-sm">
        <div className="col-lg-12 col-md-12">
          <div className="card custom-card">
            <div className="card-body">
              <div>
                {/* <!-- Row --> */}
                <h5 className="main-content-label mb-1">create loan type</h5>
                <br />
              </div>
              <Toaster />

              <div className="row row-sm">
                <div className="form-group col-md-6">
                  <p className="mg-b-10">Loan Name</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="loan name e.g fees laon"
                    value={loan}
                    onChange={(e) => setLoan(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <p className="mg-b-10">Maximum Amount Allowed</p>
                  <input
                    type="text"
                    className="form-control"
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                    placeholder="money which can be allowed give for the loan"
                  />
                </div>
                <div className="form-group col-md-6">
                  <p className="mg-b-10">maximum duration in months</p>
                  <input
                    type="text"
                    className="form-control"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    placeholder="maximum months allowed for the loan"
                  />
                </div>
                <div className="form-group col-md-6">
                  <p className="mg-b-10">Interest rate</p>
                  <input
                    type="text"
                    className="form-control"
                    value={intrest}
                    onChange={(e) => setIntrest(e.target.value)}
                    placeholder="number e.g 2  as a percentage"
                  />
                </div>
                <div className="form-group col-md-6">
                  <p className="mg-b-10">processing fee rate</p>
                  <input
                    type="text"
                    className="form-control"
                    value={processing}
                    onChange={(e) => setProcessing(e.target.value)}
                    placeholder="number e.g 2  as a percentage"
                  />
                </div>
                <div className="form-group col-md-6">
                  <p className="mg-b-10">Allowed Installments</p>
                  <select
                    name=""
                    id=""
                    className="form-control col-12"
                    value={installment}
                    onChange={(e) => setInstallment(e.target.value)}>
                    <option value="" selected disabled>
                      -----select payment plan------
                    </option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">monthly</option>
                    <option value="weekly & monthly">weekly & monthly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SystemModal>
  );
};

export default UpdateLoanType;
