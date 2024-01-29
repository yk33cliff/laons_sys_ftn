import React, {useEffect, useState} from "react";
import AppContainer from "../Structure/AppContainer";
import ajaxLaons from "../../util/remote/ajaxLaons";
import toast from "react-hot-toast";
import {RenderSecure} from "../../util/script/RenderSecure";

function LoanNotPaid() {
  useEffect(() => {
    getInstoNotPaid();
  }, []);

  const [today, setToday] = useState("");
  const getInstoNotPaid = async () => {
    const server_response = await ajaxLaons.getInstallmentsNotPaid();

    if (server_response.status === "OK") {
      setToday(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };

  return (
    <div>
      <AppContainer title="Installments Defaulted">
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
                        href="#today">
                        Installments Not paid
                      </a>
                      {/* <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#three">
                        Installments for Tomorrow
                      </a>
                      <a className="nav-link" data-bs-toggle="tab" href="#week">
                        This week's Installments
                      </a> */}
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
                  <div
                    className="main-content-body tab-pane p-4 border-top-0 active"
                    id="today">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                      <div className="card custom-card card-dashboard-calendar pb-0">
                        <label className="main-content-label mb-2 pt-1">
                          Installments Defaulted
                        </label>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <thead>
                                {/*
            "days_past": "1",
            "date_expected": "2024-01-14 00:00:00",
            "remaining_installments": "4"
        },*/}
                                <tr>
                                  <th>No.</th>
                                  <th>Customer </th>
                                  <th>contact</th>
                                  <th>laon_balance</th>
                                  <th>Amount Expected</th>
                                  <th>date Expected</th>
                                  <th>days Past</th>
                                  <th>remaining_installments</th>
                                  <th> Loan profile</th>
                                </tr>
                              </thead>

                              <tbody>
                                {today &&
                                  Array.isArray(today) &&
                                  today.map((item, key) => (
                                    <tr key={key}>
                                      <td>{key + 1}</td>
                                      <td>
                                        {item.loan_details.first_name} &nbsp;
                                        {item.loan_details.last_name}
                                      </td>
                                      <td className="text-success">
                                        {item.loan_details.contact}
                                      </td>
                                      <td>{item.amount_expected}</td>
                                      <td>{item.laon_balance}</td>
                                      <td>{item.date_expected}</td>
                                      <td>{item.days_past}</td>
                                      <td>{item.remaining_installments}</td>
                                      <RenderSecure code="LOANS-STMNT">
                                        <td>
                                          <button className="badge  bg-primary-light bg-pill">
                                            <a
                                              href={`/LoanManagement/${item.loan_id}`}
                                              classname="btn badge bg-warning-light bg-pill">
                                              Loan profile
                                            </a>
                                          </button>
                                        </td>
                                      </RenderSecure>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className="main-content-body tab-pane p-4 border-top-0"
                    id="three">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                      <div className="card custom-card card-dashboard-calendar pb-0">
                        {/* <label className="main-content-label mb-2 pt-1">
                          Installments Transactions expected three days
                        </label> * 
                        <label className="main-content-label mb-2 pt-1">
                          Installments Transactions expected Tomorrow
                        </label>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Customer </th>
                                  <th>contact</th>
                                  <th>Amount Expected</th>
                                  <th>date </th>
                                </tr>
                              </thead>
                              <tbody>
                                {tomox &&
                                  Array.isArray(tomox) &&
                                  tomox.map((item, key) => (
                                    <tr key={key}>
                                      <td>{key + 1}</td>
                                      <td>
                                        {item.loan_details.first_name} &nbsp;
                                        {item.loan_details.last_name}
                                      </td>
                                      <td className="text-success">
                                        {item.loan_details.contact}
                                      </td>
                                      <td>{item.amount_expected}</td>

                                      <td>{item.date_expected}</td>
                                      <td>{item.remaining_installments}</td>
                                    </tr>
                                  ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </>
      </AppContainer>
    </div>
  );
}

export default LoanNotPaid;
