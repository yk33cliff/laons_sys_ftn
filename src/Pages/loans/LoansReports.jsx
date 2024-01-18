import React, {useEffect, useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import ajaxLaons from "../../util/remote/ajaxLaons";
import toast from "react-hot-toast";
import ReactPaginate from "react-paginate";
function LoansReports() {
  return (
    <div>
      <AppContainer title="Loan reports">
        <div>
          <div className="row">
            {/* Insurance fees payment */}
            <div className="col-sm-12  col-md-6 col-lg-6 col-xl-6 mt-xl-4">
              <div className="card custom-card card-dashboard-calendar pb-0">
                <label className="main-content-label mb-2 pt-1">
                  Insurance Fees Payments
                </label>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table card-table text-nowrap table-bordered border-top">
                      <thead>
                        <tr>
                          <th>NO</th>
                          <th>Customer </th>
                          <th>Amount</th>
                          <th>Date _paid</th>
                        </tr>
                      </thead>
                      <tbody>
                        <p>papa</p>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Processing fees payment */}
            <div className="col-sm-12  col-md-6 col-lg-6 col-xl-6 mt-xl-4">
              <div className="card custom-card card-dashboard-calendar pb-0">
                <label className="main-content-label mb-2 pt-1">
                  Processing Fees Payments
                </label>
                <div className="card-body">
                  <div className="table-responsive">Eunice</div>
                </div>
              </div>
            </div>

            {/* application fees payment */}
            <div className="col-sm-12  col-md-12 col-lg-12 col-xl-12 mt-xl-4">
              <div className="card custom-card card-dashboard-calendar pb-0">
                <label className="main-content-label mb-2 pt-1">
                  Loan Application payments
                </label>
                <div className="card-body">
                  <div className="table-responsive">Busiku</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
}

export default LoansReports;
