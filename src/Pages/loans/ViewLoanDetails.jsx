import React, {useState} from "react";
import SystemModal from "../../Components/Common/SystemModal";

function ViewLoanDetails(props) {
  const [details, setDetails] = useState(props.loan);

  const RenderFooter = (controls) => {
    // //console.log(details);
    return (
      <>
        <button
          className="btn ripple btn-dark"
          type="button"
          onClick={controls.close}>
          Close
        </button>
      </>
    );
  };

  return (
    <div>
      <SystemModal
        title="Image_review"
        id="model-update-cross"
        size="sm"
        footer={RenderFooter}>
        {/* <Toaster /> */}
        <div className="col-lg-12 col-md-12">
          <p>
            customer::{" "}
            <u>
              <span>{details.customer_id.names}</span>
            </u>
          </p>
          <p>
            Loan TYpe::{" "}
            <u>
              <span>{details.loan_type}</span>
            </u>
          </p>
          <p>
            Loan Amount::{" "}
            <u>
              <span>{details.amount}/=</span>
            </u>
          </p>
          <p>
            Loan duration::{" "}
            <u>
              <span>{details.duration}(days)</span>
            </u>
          </p>
          <p>
            Loan interest_rate::{" "}
            <u>
              <span>{details.interest_rate}%</span>
            </u>
          </p>
          <p>
            Loan monitoring_fees_rate::{" "}
            <u>
              <span>{details.monitoring_fees}%</span>
            </u>
          </p>
          <p>
            Loan processing_fee_rate::{" "}
            <u>
              <span>{details.processing_fee_rate}%</span>
            </u>
          </p>
          <p>
            Loan insurance_rate::{" "}
            <u>
              <span>{details.insurance_rate}%</span>
            </u>
          </p>
          <p>
            Loan fine_rate::{" "}
            <u>
              <span>{details.fine_rate}%</span>
            </u>
          </p>
        </div>
      </SystemModal>
    </div>
  );
}

export default ViewLoanDetails;
