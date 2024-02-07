import React, {useContext, useEffect, useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import toast from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PrincipalDIsbusted() {
  useEffect(() => {
    getRerport();
  }, []);

  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    const additionalContent = `
        <div style="background-color: #f0f0f0; padding: 20px; text-align: center;">
            <h3>SERENITY MICROFINANCE LIMITED</h3>
            <h6>P.O.Box 310081</h6>
            <h6>Bulindo shopping centre Building</h6>
            <h6>
                email: <span style="color: red;">serenitymicrofinance@gmail.com</span>
            </h6>
            <h6>
                contacts: <span style="color: red;">+256771670497</span>
            </h6>
            <p>
                <u>Clients' Loan slip</u>
            </p>
        </div>
    `;

    // Add the additional content to the beginning of the printContents
    printContents = additionalContent + printContents;

    // Store the original content of the body
    let originalContents = document.body.innerHTML;

    // Replace the body content with the printable content
    document.body.innerHTML = printContents;
    window.print();
    window.location.reload();
    document.body.innerHTML = originalContents;
  };
  const [Reports, SetReports] = useState("");
  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");
  const getRerport = async () => {
    var data = {
      start_date: sdate,
      end_date: edate,
    };
    const server_response = await ajaxLaons.getLoanReports(data);

    if (server_response.status === "OK") {
      SetReports(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (edate && sdate) {
      SetReports("");
      getRerport();
    } else {
      toast.error("Error: Both start and end dates are required");
    }
  };

  return (
    <div>
      <AppContainer title="Loan payments reports">
        <>
          <div className="row row-sm">
            <div className="" id="printablediv">
              <div
                className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4 mb-4"
                style={{
                  borderRadius: "20px",
                  padding: "0",
                  margin: "0",
                }}>
                <div className="card custom-card card-dashboard-calendar ">
                  <div className="card-body">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12">
                      <form action="" onSubmit={(e) => handleSubmit(e)}>
                        <div className="row">
                          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 ">
                            <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12">
                              <div className="row">
                                <label className="col-4">FROM:</label>

                                <span className="col-8">
                                  <DatePicker
                                    selected={sdate}
                                    onChange={(e) => setSdate(e)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="dd/MM/yyyy"
                                    className="form-control text-success"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 ">
                            <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12">
                              <div className="row">
                                <label className="col-4">TO:</label>

                                <span className="col-8">
                                  <DatePicker
                                    selected={edate}
                                    onChange={(e) => setEdate(e)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="dd/MM/yyyy"
                                    className="form-control text-success"
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12  col-md-4 col-lg-4 col-xl-4 ">
                            <div className="col-md-12 ">
                              <div className="form-group mb-0">
                                <button
                                  type="submit"
                                  className="btn col-lg-12 col-md-12 btn-primary">
                                  submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Row */}
              <div className="row row-sm">
                <div className="col-lg-12 col-md-12">
                  <div className="card custom-card main-content-body-profile">
                    <div className="tab-content">
                      {/* principal installments loans */}

                      <div
                        className="main-content-body tab-pane p-4 border-top-0  active"
                        id="principal">
                        <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                          <div className="card custom-card card-dashboard-calendar pb-0">
                            <label className="main-content-label mb-2 pt-1">
                              principal DISBURSED reports
                            </label>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table card-table text-nowrap table-bordered border-top">
                                  <thead>
                                    <tr>
                                      <th>NO</th>
                                      <th>Customer </th>
                                      <th>Loan Type</th>
                                      <th>Loan principal</th>
                                      <th>
                                        date <br />
                                        Disbursed
                                      </th>
                                      {/* <th>
                                      principal paid <br />
                                      back
                                    </th> */}
                                    </tr>
                                  </thead>

                                  <tbody>
                                    {Array.isArray(Reports) &&
                                      Reports.map((repo, key) => (
                                        <>
                                          <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{repo.id.customer_id}</td>
                                            <td>{repo.id.loan_type}</td>
                                            <td>{repo.principal_invo}</td>
                                            <td>{repo.start_date}</td>
                                            {/* <td>{repo.returned_principal}</td> */}
                                          </tr>
                                        </>
                                      ))}
                                    {!Array.isArray(Reports) && (
                                      <>
                                        <tr>
                                          <td
                                            colSpan={5}
                                            className="text-danger text-center">
                                            No records found
                                          </td>
                                        </tr>
                                      </>
                                    )}
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

            <button
              className="btn ripple btn-dark"
              type="button"
              onClick={Print}>
              print report
            </button>
          </div>
        </>
      </AppContainer>
    </div>
  );
}

export default PrincipalDIsbusted;
