import React from "react";
import {useParams} from "react-router-dom";
import AppContainer from "../../Components/Structure/AppContainer";
import AddLoanpayment from "../../Components/loans/AddLoanpayment";
import useStateCallback from "../../util/customHooks/useStateCallback";

function LoanProfile() {
  const {id} = useParams();
  // console.log(id);
  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  const [modal, setModal] = useStateCallback(false);

  const handleModal2 = (e, item) => {
    setModal(false, () => setModal(<AddLoanpayment isOpen={true} id={id} />));
  };
  return (
    <div>
      <AppContainer>
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
                  href="#"
                  onClick={() => handleModal2()}
                  className="btn col-lg -12 rounded-50 col-md-12 btn-primary">
                  + add payment
                </a>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div id="printablediv" style={{marginBottom: "20px", padding: "20px"}}>
          {/* Row */}
          <div className="row row-sm">
            <div className="card custom-card  col-lg-12 col-md-12 col-xl-12 pt-4">
              <div className="row">
                {modal}
                <div className="text-center col-lg-12 col-md-12 col-xl-12 pt-4 ">
                  <h3> SERENITY MICROFINANCE LIMITED</h3>
                  <h6>
                    EMAIL:
                    <span style={{color: "blue"}}>serenitymicro@gmail.com</span>
                  </h6>
                  <p className="text-center">
                    <u> clients' Loan statement</u>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12 mt-4">
                  <div className="card">
                    <div className="card-body p-0">
                      <div className="d-flex p-3">
                        <div className="col-lg-6">
                          <h6 className="float-start main-content-label mb-0 mt-2">
                            Customer's details
                          </h6>

                          <table className="table mb-0 border-top table-bordered text-nowrap">
                            <tbody>
                              <tr>
                                <th scope="row">Name</th>
                                <td>wise cliff</td>
                              </tr>
                              <tr>
                                <th scope="row">Contact</th>
                                <td>+256708488984</td>
                              </tr>
                              <tr>
                                <th scope="row">Email</th>
                                <td>Wisecliff@gmail.com</td>
                              </tr>
                              <tr>
                                <th scope="row">Location</th>
                                <td>mbuya central</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-lg-6">
                          <h6 className="float-start main-content-label mb-0 mt-2">
                            Customer's guarantor (s)
                          </h6>
                          <table className="table mb-0 border-top table-bordered text-nowrap">
                            <thead>
                              <tr>
                                <th>name</th>
                                <th>contact</th>
                                <th>Relationship</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">wiseone</th>
                                <td>+25670</td>
                                <td>bro</td>
                              </tr>
                              <tr>
                                <th scope="row">wiseone</th>
                                <td>+25670</td>
                                <td>bro</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <>
                {/* Row*/}
                <div className="row row-sm">
                  <div className="col-xl-12">
                    <div className="card custom-card">
                      <div className="card-header border-bottom-0">
                        <label className="main-content-label my-auto pt-2">
                          recent loan transctions
                        </label>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table card-table text-nowrap table-bordered border-top">
                            <thead>
                              <tr>
                                <th>No.</th>
                                <th>type</th>
                                <th>cash_in</th>
                                <th>Cash_out</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>#1</td>
                                <td>
                                  <i className="cc BTC-alt text-warning" />
                                  loan repayment
                                </td>

                                <td>52681.13</td>
                                <td>0</td>
                              </tr>
                              <tr>
                                <td>#2</td>
                                <td>
                                  <i className="cc BTC-alt text-warning" />
                                  intrest payment
                                </td>

                                <td>0</td>
                                <td>52681.13</td>
                              </tr>
                              <tr>
                                <td>#3</td>
                                <td>
                                  <i className="cc BTC-alt text-warning" />
                                  loan repayment
                                </td>

                                <td>52681.13</td>
                                <td>0</td>
                              </tr>
                              <tr>
                                <td>#4</td>
                                <td>
                                  <i className="cc BTC-alt text-warning" />
                                  intrest payment
                                </td>

                                <td>0</td>
                                <td>52681.13</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Row End */}
              </>
              <div className="row row-sm ">
                <div className="col-lg-12 col-md-12 col-xl-12">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-xl-4 col-sm-4"></div>
                    <div className="col-lg-4 col-md-4 col-xl-4 col-sm-4">
                      {" "}
                      <table className="table mb-0 border-top table-bordered text-nowrap">
                        <tbody>
                          <tr>
                            <th scope="row">interest rate</th>
                            <td>6%</td>
                          </tr>
                          <tr>
                            <th scope="row">fines rate</th>
                            <td>10%</td>
                          </tr>
                          <tr>
                            <th scope="row">Installments Number</th>
                            <td>5</td>
                          </tr>
                          <tr>
                            <th scope="row">Installments paid</th>
                            <td>3</td>
                          </tr>
                          <tr>
                            <th scope="row">period of payment</th>
                            <td>2 (months)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xl-2 col-sm-2">
                      {" "}
                      <table className="table  border-top table-bordered text-nowrap">
                        <tbody>
                          <tr>
                            <th scope="row">Loan payments made</th>
                            <td>500000</td>
                          </tr>
                          <tr>
                            <th scope="row">Loan fines</th>
                            <td>10000</td>
                          </tr>
                          <tr>
                            <th scope="row">Loan balance</th>
                            <td>210000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>

        {/* End Row */}

        {/* End Row */}
        <div className="row row-sm">
          <div className="col-lg-12 col-md-12 col-xl-12 ">
            <button
              style={{justifyContent: "center"}}
              onClick={Print}
              className="badge bg-success-light col-1 bg-pill">
              print
            </button>
          </div>
        </div>
      </AppContainer>
    </div>
  );
}

export default LoanProfile;
