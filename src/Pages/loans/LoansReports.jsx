import React, {useContext, useEffect, useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";

import {RenderSecure} from "../../util/script/RenderSecure";
import toast from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";

function LoansReports() {
  useEffect(() => {
    getRerport();
  }, []);
  const [Reports, SetReports] = useState("");
  const getRerport = async () => {
    const server_response = await ajaxLaons.getLoanReports();

    if (server_response.status === "OK") {
      SetReports(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };

  return (
    <div>
      <AppContainer title="Loan payments reports">
        <>
          <div className="row square">
            <div className="col-lg-12 col-md-12">
              <div className="card custom-card">
                <div className="card-body">
                  <div className="profile-tab tab-menu-heading">
                    <nav className="nav main-nav-line p-3 tabs-menu profile-nav-line bg-gray-100">
                      <a
                        className="nav-link  active"
                        data-bs-toggle="tab"
                        href="#principal">
                        Principal payments Report
                      </a>
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#interests">
                        Interests payments Report
                      </a>
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Fines">
                        Fines report
                      </a>
                    </nav>
                  </div>
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
                          principal payments reports
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
                                    principal paid <br />
                                    back
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
                                        <td>{repo.principal_invo}</td>
                                        <td>{repo.returned_principal}</td>
                                      </tr>
                                    </>
                                  ))}
                                {!Array.isArray(Reports) && (
                                  <>
                                    <tr>
                                      <td
                                        colSpan={5}
                                        className="text-danger text-center">
                                        {" "}
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
                  {/* interests installments loans */}
                  <div
                    className="main-content-body tab-pane p-4 border-top-0"
                    id="interests">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                      <div className="row">
                        <div className="col-sm-12  col-md-6 col-lg-6 col-xl-6 mt-xl-4">
                          <div className="card custom-card card-dashboard-calendar pb-0">
                            <label className="main-content-label mb-2 pt-1">
                              Interest payments reports
                            </label>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table card-table text-nowrap table-bordered border-top">
                                  <thead>
                                    <tr>
                                      <th>NO</th>
                                      <th>Customer </th>
                                      <th>Loan Type</th>
                                      <th>
                                        Interest <br /> on principal
                                      </th>
                                      <th>Interest paid</th>
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
                                            <td>{repo.Interest_innvo}</td>
                                            <td>{repo.interest_paid}</td>
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
                        <div className="col-sm-12  col-md-6 col-lg-6 col-xl-6 mt-xl-4">
                          <div className="card custom-card card-dashboard-calendar pb-0">
                            <label className="main-content-label mb-2 pt-1">
                              Monitoring Fees payments reports
                            </label>
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table card-table text-nowrap table-bordered border-top">
                                  <thead>
                                    <tr>
                                      <th>NO</th>
                                      <th>Customer </th>
                                      <th>Loan Type</th>

                                      <th>
                                        Monitoring Fees <br /> on principal
                                      </th>
                                      <th>
                                        Monitoring Fees
                                        <br />
                                        paid
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
                                            <td>{repo.Monitoring_fees_invo}</td>
                                            <td>{repo.monitoring_paid}</td>
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
                  {/* Fines installments loans  */}
                  <div
                    className="main-content-body tab-pane p-4 border-top-0"
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
        </>
      </AppContainer>
    </div>
  );
}

export default LoansReports;
