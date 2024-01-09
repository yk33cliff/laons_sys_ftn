import React, {useEffect, useState} from "react";
import AppContainer from "../Structure/AppContainer";
import LoanTransactions from "./LoanTransactions";
import {useParams} from "react-router-dom";
import ajaxLaons from "../../util/remote/ajaxLaons";

function LoanManagement(props) {
  var {id} = useParams();

  useEffect(() => {
    getLoanDetail();
  }, []);
  const [loan, setLoan] = useState("");

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
          {/* Row*/}
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
                            <u>LN_001</u>
                          </span>
                        </p>
                        <p>
                          Loan Type &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>School fees loan</u>
                          </span>
                        </p>
                        <p>
                          date requested at &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>12/12/2023</u>
                          </span>
                        </p>
                        <p>
                          date approved and awarded &nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>LN_001</u>
                          </span>
                        </p>
                        <p>
                          Loan period &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u> 12 months</u>
                          </span>
                        </p>
                        <p>
                          Payment plan &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>weekly</u>
                          </span>
                        </p>

                        <p>
                          Loan created by plan &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u>weekly</u>
                          </span>
                        </p>
                      </div>
                      <div className="col-6">
                        <label className="main-content-label my-auto pt-2">
                          customer
                        </label>
                        <p>
                          Customer's Name &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u> desire twin</u>
                          </span>
                        </p>
                        <p>
                          Customer's contact &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u> +256702322823</u>
                          </span>
                        </p>
                        <p>
                          Customer's contact &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u> +256702322823</u>
                          </span>
                        </p>

                        {/* ----------------- */}
                        <label className="main-content-label my-auto pt-2">
                          Served by
                        </label>
                        <p>
                          Official's Name &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u> desire twin</u>
                          </span>
                        </p>
                        <p>
                          Official's contact &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                          <span
                            style={{
                              color: "grey",
                            }}>
                            <u> +256702322823</u>
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
                              <i className="cc BTC-alt text-warning" /> 1000000
                            </td>
                          </tr>
                          <tr>
                            <td>Loan interest</td>
                            <td>
                              <i className="cc BTC-alt text-warning" /> 200000
                            </td>
                          </tr>
                          <tr>
                            <td>Total Loan Fines</td>
                            <td>
                              <i className="cc BTC-alt text-warning" /> 200000
                            </td>
                          </tr>
                          <tr>
                            <td>Total Loan </td>
                            <td>
                              <i className="cc BTC-alt text-warning" /> 200000
                            </td>
                          </tr>
                          <tr>
                            <td>Total Loan paid back </td>
                            <td>
                              <i className="cc BTC-alt text-warning" /> 200000
                            </td>
                          </tr>
                          <tr>
                            <td> Loan balance </td>
                            <td>
                              <i className="cc BTC-alt text-warning" /> 200000
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
              <div className="card custom-card">
                <div className="card-header border-bottom-0">
                  <label className="main-content-label my-auto pt-2">
                    Loan Fine charges
                  </label>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table card-table text-nowrap table-bordered border-top">
                      <thead>
                        <tr>
                          <th>NO.</th>
                          <th>date registered</th>
                          <th>Amount</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td className="text-success">12/12/2023</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 50000
                          </td>

                          <td>
                            <span className="badge bg-danger-light bg-pill">
                              delete
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td className="text-success">12/12/2023</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 50000
                          </td>

                          <td>
                            <span className="badge bg-danger-light bg-pill">
                              delete
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td className="text-success">12/12/2023</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 50000
                          </td>

                          <td>
                            <span className="badge bg-danger-light bg-pill">
                              delete
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td className="text-success">12/12/2023</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 50000
                          </td>

                          <td>
                            <span className="badge bg-danger-light bg-pill">
                              delete
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td className="text-success">12/12/2023</td>
                          <td>
                            <i className="cc BTC-alt text-warning" /> 50000
                          </td>

                          <td>
                            <span className="badge bg-danger-light bg-pill">
                              delete
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Row End */}
          {/* Row*/}
          <div className="row row-sm"></div>
          {/* Row End */}
        </>
      </AppContainer>
    </div>
  );
}

export default LoanManagement;
