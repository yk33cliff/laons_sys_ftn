import React, {useState} from "react";
// import ajaxLoanTypes from "../../util/remote/ajaxLoanTypes";

import SystemModal from "../Common/SystemModal";
import toast, {Toaster} from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";

const UpdateLoanType = (props) => {
  const [loan, setLoan] = useState(props.loan.name);
  const [max, setMax] = useState(props.loan.maximum_amount);
  const [min, setMin] = useState(props.loan.min_amount);
  const [months, setMonths] = useState(props.loan.duration);
  const [intrest, setIntrest] = useState(props.loan.interest_rate);
  const [processing, setProcessing] = useState(props.loan.processing_fee_rate);
  const [installment, setInstallment] = useState(props.loan.installment_type);
  const [fine, setFine] = useState(props.loan.fine_rate);
  const [insur, setInsur] = useState(props.loan.insurance);
  const [application, setApplication] = useState(props.loan.application_rate);
  const [monitoring, setMonitoring] = useState(props.loan.monitoring);
  // console.log(props);
  const handler = async (e) => {
    e.preventDefault();
    if (
      loan.length > 0 &&
      max.length > 0 &&
      months.length > 0 &&
      intrest.length > 0 &&
      monitoring.length > 0 &&
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
        fine: fine,
        min: min,
        insurance: insur,
        application: application,
        monitoring: monitoring,
      };

      const server_response = await ajaxLaons.UpdateLoanType(data);

      if (server_response.status === "OK") {
        toast.success(server_response.message);

        props.getLoanList();
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
          className={`btn ripple btn-primary`}
          onClick={handler}>
          Update Loan type
        </button>
      </>
    );
  };

  return (
    <SystemModal
      title="Update loan type Details"
      id="model-update-cable"
      size="xl"
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
                    placeholder="maximum amount allowed on the loan"
                  />
                </div>
                <div className="form-group col-md-6">
                  <p className="mg-b-10">minimum Amount Allowed</p>
                  <input
                    type="text"
                    className="form-control"
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                    placeholder="minmum amount allowed on the loan"
                  />
                </div>
                <div className="form-group col-md-6">
                  <p className="mg-b-10">maximum duration (months or weeks)</p>
                  <input
                    type="text"
                    className="form-control"
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    placeholder="maximum months or weeks allowed for the loan"
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
                  <p className="mg-b-10">Monitoring Fees Rate</p>
                  <input
                    type="text"
                    className="form-control"
                    value={monitoring}
                    onChange={(e) => setMonitoring(e.target.value)}
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
                  <p className="mg-b-10">Application fees rate</p>
                  <input
                    type="text"
                    className="form-control"
                    value={application}
                    onChange={(e) => setApplication(e.target.value)}
                    placeholder="number e.g 2  as a percentage"
                  />
                </div>
                <div className="form-group col-md-6">
                  <p className="mg-b-10">penalty fees rate</p>
                  <input
                    type="text"
                    className="form-control"
                    value={fine}
                    onChange={(e) => setFine(e.target.value)}
                    placeholder="number e.g 2  as a percentage of the loan "
                  />
                </div>
                <div className="form-group col-md-6">
                  <p className="mg-b-10">insurance rate</p>
                  <input
                    type="text"
                    className="form-control"
                    value={insur}
                    onChange={(e) => setInsur(e.target.value)}
                    placeholder="number e.g 2  as a percentage of the loan "
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
                    <>
                      <option value="daily">daily</option>
                      <option value="weekly">weekly</option>
                      <option value="fortnight">fortnight</option>
                      <option value="monthly">monthly</option>
                    </>
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
