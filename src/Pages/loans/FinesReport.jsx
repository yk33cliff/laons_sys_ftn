import React, {useContext, useEffect, useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import toast from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function LoansReports() {
  useEffect(() => {
    getRerport();
  }, []);

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
            <div
              className="col-sm-12  col-md-12 col-lg-12 col-xl-8 mt-xl-4 mb-4"
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
                          <div className="col-12">
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
                          <div className="col-12">
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
                    <div
                      className="main-content-body tab-pane p-4 border-top-0 active"
                      id="Fines">
                      <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                        <div className="card custom-card card-dashboard-calendar pb-0">
                          <label className="main-content-label mb-2 pt-1">
                            Loan Fines report
                          </label>
                          <div className="card-body">
                            <div className="table-responsive">
                              <table className="table card-table text-nowrap table-bordered border-top">
                                <thead>
                                  <tr>
                                    <th>NO</th>
                                    <th>Customer </th>
                                    <th>Loan Type</th>
                                    <th>Total loan fines</th>
                                    <th>Total fines paid</th>
                                    <th>
                                      date Loan <br /> Disbursed
                                    </th>
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
                                          <td>{repo.Loan_fine_invo_sum}</td>
                                          <td>{repo.fine_paid}</td>
                                          <td>{repo.start_date}</td>
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
        </>
      </AppContainer>
    </div>
  );
}

export default LoansReports;
