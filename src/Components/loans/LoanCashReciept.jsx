import React from "react";
import SystemModal from "../Common/SystemModal";
import numberToWords from "number-to-words";

function LoanCashReceipt(props) {
  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;

    window.print();
    window.location.reload();
    document.body.innerHTML = originalContents;
  };

  const data = props.id;

  const amountToWords = (amount) => {
    const words = numberToWords.toWords(amount);
    return words.charAt(0).toUpperCase() + words.slice(1);
  };

  const RenderFooter = (controls) => (
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
    </>
  );

  return (
    <div>
      <SystemModal
        title="Loan Statement"
        id="model-new-pass"
        size="xl"
        footer={RenderFooter}>
        <div className="row row-sm">
          <div className="col-lg-12 col-md-12 mx-10">
            <div
              style={{
                float: "right",
                marginBottom: "20px",
              }}
              className="col-lg-2 col-md-2"></div>
          </div>
          <br />
        </div>
        <div
          id="printablediv"
          className="mb-4 "
          style={{
            marginBottom: "20px",
            padding: "20px",
            // backgroundImage: "url()",
            "@media print": {
              // Media query styles for print
              margin: "auto",
              padding: "20px",
              display: "block",
              alignItems: "center",
              justifyContent: "space-between",
            },
          }}>
          {/* Row */}
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
                  <u> Clients' Loan slip</u>
                </p>
              </div>
              <div className="row">
                <div className="col-xl-12 mt-4">
                  <div className="card">
                    <div className="card-body p-0">
                      <div className="d-flex p-3">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                          <p className="float-start main-content-label  p-3 mb-0 mt-2">
                            Receipt NO.{" "}
                            <span className="text-danger">seren0{data.id}</span>
                          </p>
                          <p className="float-start main-content-label mb-0 mt-2">
                            Payment Date : <span>{data.date}</span>
                          </p>
                          {/* <p>cliffed</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 mt-4">
                  <div className="card">
                    <div className="card-body p-0">
                      <div className="d-flex p-3">
                        <div className="col-lg-6">
                          <p className="float-start main-content-label mb-0 mt-2">
                            Payment's details
                          </p>
                          <br />
                          <br />

                          <p>
                            Paid By : <span>{data.customer}</span>{" "}
                          </p>
                          <p>
                            Received By : <span>{data.added_by}</span>
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            Amount Paid &nbsp;&nbsp;&nbsp;
                            <u>
                              <span>{data.amount_formated}</span>
                            </u>
                          </p>
                          <h6>
                            Amount In words:&nbsp;&nbsp;&nbsp;
                            <u>
                              <span>{amountToWords(data.amount)} </span>
                              shillings
                            </u>
                          </h6>
                          <p>
                            Payment Reason &nbsp; &nbsp; &nbsp;
                            <u>
                              <span>{data.reason}</span>
                            </u>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <p>
                  Printed At :: <span>{new Date().toString()}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SystemModal>
    </div>
  );
}

export default LoanCashReceipt;
