import React from "react";
import AppContainer from "../Structure/AppContainer";

function AddLoanApplication() {
  return (
    <div>
      <AppContainer title="Add loan application">
        {/* <!-- Row --> */}
        <div className="row row-sm">
          <div className="col-lg-12 col-md-12">
            <div className="card custom-card">
              <div className="card-body">
                <div>
                  <h5 className="main-content-label mb-1">
                    Register Loan Application
                  </h5>
                </div>
                <div className="row row-sm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <p className="mg-b-10">select clients</p>
                        <input
                          type="text"
                          className="form-control"
                          name="example-text-input"
                          placeholder="users first name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <p className="mg-b-10"> select Loan Type </p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="user last name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <p className="mg-b-10">Amount</p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Amount applied for"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="mg-b-10">Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="example-text-input"
                          placeholder="date of application"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 ">
                      <div className="form-group mb-0">
                        <button className="btn col-lg -12 col-md-12 btn-primary">
                          Save user
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- End Row --> */}
      </AppContainer>
    </div>
  );
}

export default AddLoanApplication;
