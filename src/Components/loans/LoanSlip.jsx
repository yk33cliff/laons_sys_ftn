import React from "react";
import SystemModal from "../Common/SystemModal";

function LoanSlip() {
  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;

    window.print();
    document.body.innerHTML = originalContents;
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
          onClick={Print}>
          Print
        </button>
      </>
    );
  };

  return (
    <div>
      <SystemModal
        title="Loan slip"
        id="model-new-pass"
        size="lg"
        footer={RenderFooter}>
        <div
          id="printablediv"
          className="mb-4 "
          style={{
            "@media print": {
              // Media query styles for print
              margin: "auto",
              padding: "20px",
              display: "block",
              alignItems: "center",
              justifyContent: "space-between",
            },
          }}>
          <div className="row">
            <div className="col-12 ">
              <div className="row">
                <div className="d-flex justify-content-between">
                  <img
                    src="../assets/img/brand/logo-light.png"
                    classname="justify-content-center header-brand-img deskhrefp-logo"
                    alt="logo"
                    style={{height: "140px", width: "300px"}}
                  />
                </div>
                <div className="">
                  <h3 className="text-center">SERENITY MICROFINANCE LIMITED</h3>
                  <h6 className="text-center">
                    email:{" "}
                    <span style={{color: "red"}}>
                      {" "}
                      serenitymicro@gmail.com{" "}
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="d-flex justify-content-between"></div>
          <div className="d-flex justify-content-between">
            <div className="col-6">
              <h3>customers details</h3>
              <p>
                Name<span> wisecliff</span>
              </p>
              <p>
                contact<span> +256702422943</span>
              </p>
              <p>
                email<span> wisecliff@gmail.com</span>
              </p>
            </div>
            <div className="col-6">
              <h3>servered by</h3>
              <p>
                Name<span> musitwa joel</span>
              </p>
              <p>
                contact<span> +256702422943</span>
              </p>
              <p>
                email<span> musitwa@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="col-lg-12"></div>
            </div>
          </div>
        </div>
      </SystemModal>
    </div>
  );
}

export default LoanSlip;
