import React from "react";
import AppContainer from "../Structure/AppContainer";
import LoanTypesList from "./LoanTypesList";

function LoanTYpes() {
  return (
    <div>
      <AppContainer title="loan types">
        {/* <!-- Row --> */}
        <div className="row row-sm">
          <div className="col-lg-12 col-md-12">
            <div className="card custom-card">
              <div className="card-body">
                <div>
                  <h5 className="main-content-label mb-1">create loan type</h5>
                </div>
                <div className="row row-sm">
                  <div className="col-md-6">
                    <div className="form-group">
                      <p className="mg-b-10">Loan Name</p>
                      <input
                        type="text"
                        className="form-control"
                        name="example-text-input"
                        placeholder="loan name e.g fees laon"
                      />
                    </div>
                    <div className="form-group">
                      <p className="mg-b-10">Interest rate</p>
                      <input
                        type="text"
                        className="form-control"
                        name="example-disabled-input"
                        placeholder="number e.g 2  as a percentage"
                      />
                    </div>
                    <div className="form-group">
                      <p className="mg-b-10">Allowed installments</p>
                      <input
                        type="text"
                        className="form-control"
                        name="example-disabled-input"
                        placeholder="monthly,weekly."
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <p className="mg-b-10">Loan duration in months</p>
                      <input
                        type="text"
                        className="form-control border-red"
                        name="example-text-input-valid"
                        placeholder="e.g 2 (must be in months).."
                      />
                    </div>
                    <div className="form-group m-0">
                      <p className="mg-b-10">Application fees rate</p>
                      <input
                        type="text"
                        className="form-control"
                        name="example-text-input-invalid"
                        placeholder=" Number..e.g 2 as a percentage"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 ">
                    <div className="form-group mb-0">
                      <button className="btn col-lg -12 col-md-12 btn-primary">
                        Save Loan Type
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- End Row --> */}
        <div className="row row-sm">
          <div className="col-lg-12 col-md-12">
            <LoanTypesList />
          </div>
        </div>
      </AppContainer>
    </div>
  );
}

export default LoanTYpes;
