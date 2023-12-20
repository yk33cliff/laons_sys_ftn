import React from "react";
import SystemModal from "../Common/SystemModal";

function LoanSlip() {
  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;

    window.print();
    window.location.reload();
    document.body.innerHTML = originalContents;
  };

  const RenderFooter = (controls) => {
    return (
      <>
        <button
          classname="btn ripple btn-dark"
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
                <div className="d-flex justify-content-evenly">
                  {/* <img
                    src="../assets/img/brand/logo-light.png"
                    classname="justify-content-center header-brand-img deskhrefp-logo"
                    alt="logo"
                    style={{height: "140px", width: "250px"}}
                  /> */}
                  <div className="">
                    <h3 className="text-center">
                      SERENITY MICROFINANCE LIMITED
                    </h3>
                    <h6 className="text-center">
                      email:
                      <span style={{color: "red"}}>
                        serenitymicro@gmail.com
                      </span>
                    </h6>
                    <p className="text-center">
                      <u> clients' Loan slip</u>
                    </p>
                  </div>
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
              <div className="col-lg-12">
                <div className="col-12">
                  <div className="card custom-card card-dashboard-calendar pb-0">
                    <label className="main-content-label mb-2 pt-1">
                      loan details
                    </label>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <tbody>
                                <tr>
                                  <td>Loan type</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                                <tr>
                                  <td>Loan Amount</td>
                                  <td className="text-success">Buy</td>
                                </tr>

                                <tr>
                                  <td>Interest Rate</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                                <tr>
                                  <td>Processing Fees</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                                <tr>
                                  <td>Fine Rate</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                                <tr>
                                  <td>Laon duration</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>{" "}
                        <div className="col-6">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <tbody>
                                <tr>
                                  <td>date requested </td>
                                  <td className="text-success">Buy</td>
                                </tr>

                                <tr>
                                  <td> date of laon start</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                                <tr>
                                  <td>deadline</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                                <tr>
                                  <td>Number of guarantors</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                                <tr>
                                  <td>Number of securities</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="col-lg-12">
                <div className="col-12">
                  <div className="card custom-card card-dashboard-calendar pb-0">
                    <label className="main-content-label mb-2 pt-1">
                      Loan Payments shedule
                    </label>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <thead>
                                <tr>
                                  <th>date</th>
                                  <th>amount</th>
                                  <th>balance</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Loaned Amount</td>
                                  <td className="text-success">Buy</td>
                                  <td className="text-success">Buy</td>
                                </tr>

                                <tr>
                                  <td> Loan Interest </td>
                                  <td className="text-success">Buy</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                                <tr>
                                  <td>Processing Fees</td>
                                  <td className="text-success">Buy</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                                <tr>
                                  <td>Possible</td>
                                  <td className="text-success">Buy</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="card">
              <div className="col-lg-12">
                <div className="col-12">
                  <div className="card custom-card card-dashboard-calendar pb-0">
                    <label className="main-content-label mb-2 pt-1">
                      loan guarantors
                    </label>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <thead>
                                <tr>
                                  <th>name</th>
                                  <th>contact </th>
                                  <th>Relationship</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Loaned Amount</td>
                                  <td className="text-success">Buy</td>
                                  <td className="text-success">Buy</td>
                                </tr>

                                <tr>
                                  <td> Loan Interest </td>
                                  <td className="text-success">Buy</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                                <tr>
                                  <td>Processing Fees</td>
                                  <td className="text-success">Buy</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                                <tr>
                                  <td>Possible</td>
                                  <td className="text-success">Buy</td>
                                  <td className="text-success">Buy</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
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

export default LoanSlip;
