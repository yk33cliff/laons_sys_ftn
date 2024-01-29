import React, {useState} from "react";
import SystemModal from "../Common/SystemModal";
// import toast, {Toaster} from "react-hot-toast";
import dictionary from "../../util/dictionary";
// import ajaxLaons from "../../util/remote/ajaxLaons";
function LoanSheet(props) {
  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;

    window.print();
    window.location.reload();
    document.body.innerHTML = originalContents;
  };

  const raw = props.data;
  const projection = props.rates;
  const RenderFooter = (controls) => {
    return (
      <>
        <button
          className="btn ripple btn-dark"
          type="button"
          onClick={controls.close}>
          Close
        </button>
        <button className="btn ripple btn-dark" type="button" onClick={Print}>
          Print Receipt
        </button>
        ;
      </>
    );
  };

  return (
    <div>
      <SystemModal
        title="Loan projection"
        id="model-update-cross"
        size="xl "
        footer={RenderFooter}>
        {/* <Toaster /> */}
        <div className="" id="printablediv">
          <div className="row row-sm">
            <div className="card custom-card  col-lg-12 col-md-12 col-xl-12 pt-4">
              <div className="">
                <h3 className="text-center">SERENITY MICROFINANCE LIMITED</h3>

                <h6 className="text-center">P.O.Box 310081</h6>
                <h6 className="text-center">
                  Bulindo shopping centre Building
                </h6>
                <h6 className="text-center">
                  email:
                  <span style={{color: "red"}}>
                    serenitymicrofinance@gmail.com
                  </span>
                </h6>
                <h6 className="text-center">
                  contacts:
                  <span style={{color: "red"}}>+256771670497</span>
                </h6>
                <p className="text-center">
                  <u> Loan projection slip</u>
                </p>
              </div>

              <div className="row">
                <div className="col-xl-12 mt-4">
                  <div className="card">
                    <div className="card-body p-0">
                      <div className="d-flex p-3">
                        <div className="col-lg-6">
                          <h5 htmlFor="">Loan Details</h5>
                          {/*                          
                          "150" installment : "monthly" insurance : "1.8"
                       
                        * */}
                          <p>Amount:: &nbsp;&nbsp;&nbsp; {raw.amount}</p>
                          <p>
                            Interest Rate:: &nbsp;&nbsp;&nbsp;
                            {raw.interestRate}%
                          </p>
                          <p>
                            Monitoring Fee rate:: &nbsp;&nbsp;&nbsp;
                            {raw.monitoring}%
                          </p>
                          <p>Duration:: &nbsp;&nbsp;&nbsp; {raw.duration}</p>
                          <p>
                            Application Fees_rate:: &nbsp;&nbsp;&nbsp;
                            {raw.application_rate}%
                          </p>
                          <p>
                            Processing Fees rate:: &nbsp;&nbsp;&nbsp;
                            {raw.processingFees}%
                          </p>
                          <p>
                            Insurance Fees :: &nbsp;&nbsp;&nbsp; {raw.insurance}
                            %
                          </p>
                          <p>
                            Installment Type:: &nbsp;&nbsp;&nbsp;
                            {raw.installment}
                          </p>
                          <p>
                            Possible Deadline :: &nbsp;&nbsp;&nbsp;
                            {projection.deadLine}
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="">Loan Projection</label>
                          <p>
                            Interest :: &nbsp;&nbsp;&nbsp; {projection.interest}
                          </p>
                          <p>
                            Monitoring Fees:: &nbsp;&nbsp;&nbsp;
                            {projection.monitoring_Fees}
                          </p>
                          <p>
                            Application Fees :: &nbsp;&nbsp;&nbsp;
                            {projection.application_rate}
                          </p>
                          <p>
                            Processing Fees :: &nbsp;&nbsp;&nbsp;
                            {projection.processing_Fees}
                          </p>
                          <p>
                            Insurance Fees :: &nbsp;&nbsp;&nbsp;
                            {projection.insurance_Fees}
                          </p>

                          <p>
                            Payment Instllments:: &nbsp;&nbsp;&nbsp;
                            {projection.installment}
                          </p>
                          <p>
                            Instllments number:: &nbsp;&nbsp;&nbsp;
                            {projection.installments_no}
                          </p>
                          <p>
                            Total Amount:: &nbsp;&nbsp;&nbsp;
                            {projection.total_reapyment_amount}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p style={{color: "blue"}}>
                  calculated At :: <span>{new Date().toString()}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SystemModal>
    </div>
  );
}

export default LoanSheet;
