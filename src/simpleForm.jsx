import React from "react";

function simpleForm() {
  return (
    <div>
      <div classname="row row-sm">
        <div classname="col-lg-6 col-md-12">
          <div classname="card custom-card">
            <div classname="card-body">
              <div>
                <h6 classname="main-content-label mb-1">Basic Example</h6>
                <p classname="text-muted card-sub-title">
                  A form control layout using basic layout.
                </p>
              </div>
              <div classname="d-flex flex-column">
                <div classname="form-group">
                  <input
                    classname="form-control"
                    placeholder="Enter your username"
                    type="text"
                  />
                </div>
                <div classname="form-group">
                  <input
                    classname="form-control"
                    placeholder="Enter Your Email"
                    type="email"
                  />
                </div>
                <div classname="form-group">
                  <input
                    classname="form-control"
                    placeholder="Enter Your Password"
                    type="password"
                  />
                </div>
                <div classname="form-group">
                  <label classname="ckbox">
                    <input type="checkbox" />
                    <span classname="tx-13">I agree terms and conditions</span>
                  </label>
                </div>
                <button classname="btn ripple btn-main-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div classname="col-lg-6 col-md-12">
          <div classname="card custom-card">
            <div classname="card-body">
              <div>
                <h6 classname="main-content-label mb-1">Horizonatal Form</h6>
                <p classname="text-muted card-sub-title">
                  A form control layout using basic layout.
                </p>
              </div>
              <div classname>
                <div classname="row row-xs align-items-center mg-b-20">
                  <div classname="col-md-4">
                    <label classname="mg-b-0">Firstname</label>
                  </div>
                  <div classname="col-md-8 mg-t-5 mg-md-t-0">
                    <input
                      classname="form-control"
                      placeholder="Enter your firstname"
                      type="text"
                    />
                  </div>
                </div>
                <div classname="row row-xs align-items-center mg-b-20">
                  <div classname="col-md-4">
                    <label classname="mg-b-0">Lastname</label>
                  </div>
                  <div classname="col-md-8 mg-t-5 mg-md-t-0">
                    <input
                      classname="form-control"
                      placeholder="Enter your lastname"
                      type="text"
                    />
                  </div>
                </div>
                <div classname="row row-xs align-items-center mg-b-20">
                  <div classname="col-md-4">
                    <label classname="mg-b-0">Email</label>
                  </div>
                  <div classname="col-md-8 mg-t-5 mg-md-t-0">
                    <input
                      classname="form-control"
                      placeholder="Enter your email"
                      type="email"
                    />
                  </div>
                </div>
                <div classname="form-group row justify-content-end">
                  <div classname="col-md-8 ps-md-2">
                    <div classname="form-group mb-0">
                      <label classname="ckbox">
                        <input type="checkbox" />
                        <span classname="tx-13">
                          I agree terms and conditions
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div classname="form-group row justify-content-end mb-0">
                  <div classname="col-md-8 ps-md-2">
                    <button classname="btn ripple btn-primary pd-x-30 mg-r-5 mb-2">
                      Register
                    </button>
                    <button classname="btn ripple btn-secondary pd-x-30 mb-2">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default simpleForm;
