import React, {useContext, useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";

import DeclinedLoans from "../../Components/loans/DeclinedLoans";
import Applications from "./Applications";

function ViewLoanApplications() {
  return (
    <div>
      <AppContainer title="View Loan Application">
        <div>
          <div className="row">
            {/* <div className="row row-sm">
            <div className="col-lg-12 col-md-12 mx-10">
              <div
                style={{
                  float: "right",
                  marginBottom: "20px",
                }}
                className="col-lg-2 col-md-2">
                <div className="form-group mb-0">
                  <a
                    href="/applications/add"
                    className="btn col-lg -12 rounded-50 col-md-12 btn-primary">
                    Add Application
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div> */}
            <div className="row row-sm">
              <div className="col-xl-12">
                <Applications />
              </div>
            </div>

            <div className="row row-sm">
              <div className="col-xl-12 col-md-12 col-lg-12">
                <DeclinedLoans />
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
}

export default ViewLoanApplications;
