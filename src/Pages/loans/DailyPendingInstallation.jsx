import React, {useEffect, useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import ajaxLaons from "../../util/remote/ajaxLaons";
import toast, {Toaster} from "react-hot-toast";

function DailyPendingInstallation() {
  useEffect(() => {
    gettodayInstallmentsLoans();
  }, []);

  const [today, setToday] = useState("");
  const gettodayInstallmentsLoans = async () => {
    var data = {
      Installment_type: "daily",
    };
    const server_response = await ajaxLaons.gettodayInstallmentsLoans(data);

    if (server_response.status === "OK") {
      setToday(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };

  return (
    <div>
      <AppContainer title="expected daily installments">
        <>
          <Toaster />
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
                        today's Installments
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
                  <div
                    className="main-content-body tab-pane p-4 border-top-0 active"
                    id="today">
                    <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
                      <div className="card custom-card card-dashboard-calendar pb-0">
                        <label className="main-content-label mb-2 pt-1">
                          expected daily Installments
                        </label>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <thead>
                                <tr>
                                  <th>No.</th>
                                  <th>Customer </th>
                                  <th>contact</th>
                                  <th>Amount Expected</th>
                                  <th>date </th>
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
                                        +{item.loan_details.contact}
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

export default DailyPendingInstallation;
