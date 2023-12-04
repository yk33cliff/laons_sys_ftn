import React from "react";
import AppContainer from "../Structure/AppContainer";
import ViewSystemUsers from "./ViewSystemUsers";

function CreateUser() {
  return (
    <div>
      <AppContainer title="Create system User">
        {/* <!-- Row --> */}
        <div className="row row-sm">
          <div className="col-lg-12 col-md-12">
            <div className="card custom-card">
              <div className="card-body">
                <div>
                  <h5 className="main-content-label mb-1">
                    Register system user
                  </h5>
                </div>
                <div className="row row-sm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <p className="mg-b-10">First Name</p>
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
                        <p className="mg-b-10">Last Name</p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="user last name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <p className="mg-b-10">UserName</p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="choice user name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="mg-b-10">Gender</label>
                        <select name="" className="form-control" id="">
                          <option value="" disabled>
                            ------select gender-------
                          </option>
                          <option value="male">male</option>
                          <option value="female">female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="mg-b-10">email</label>
                        <input
                          type="text"
                          className="form-control"
                          name="example-text-input"
                          placeholder="user email"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="mg-b-10">telephone number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="user telephone number"
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
        <div className="row row-sm">
          <div className="col-lg-12 col-md-12">
            <ViewSystemUsers />
          </div>
        </div>
      </AppContainer>
    </div>
  );
}

export default CreateUser;
