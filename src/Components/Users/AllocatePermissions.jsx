import React, {useContext, useEffect, useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import LoanTypesContext from "../../Context/LoanTypesContext";
import Select from "react-select";
import functions from "../../util/functions";
import ClientContext from "../../Context/ClientContext";
import ajaxLaons from "../../util/remote/ajaxLaons";
import toast, {Toaster} from "react-hot-toast";

import {RenderSecure} from "../../util/script/RenderSecure";

function AllocatePermissions() {
  const {clientList} = useContext(ClientContext);

  // const role_id = functions.role_user();
  const user_id = functions.sessionGuard();
  const [user, setUser] = useState("");
  const [permission, setPermission] = useState("");

  const handler = async (e) => {
    e.preventDefault();

    if (user.length > 0) {
      const formData = {};
      const server_response = await ajaxLaons.CreateLoanApplication(formData);
      if (server_response.status === "OK") {
        resetForm();

        toast.success(server_response.message);
      } else {
        toast.error(server_response.message);
      }
    } else {
      toast.error("Both the client and the permission are required");
    }
  };

  const resetForm = () => {};
  return (
    <div>
      <div className="row row-sm">
        <RenderSecure code="ADD-LOAN">
          <div className="col-lg-12 col-md-12">
            <div className="card custom-card">
              <div className="card-body">
                <div>
                  <Toaster />
                </div>
                <div className="row row-sm">
                  <form action="" onSubmit={handler}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <p className="mg-b-10">Select clients</p>
                          <Select
                            onChange={(e) => setUser(e.id)}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.id}
                            isSearchable
                            options={
                              clientList &&
                              Array.isArray(clientList) &&
                              clientList
                            }
                            value={
                              clientList &&
                              Array.isArray(clientList) &&
                              clientList.find((value) => value.id === user)
                            }
                          />
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <p className="mg-b-10">Select permission</p>
                            {/* <Select
                              onChange={(e) => setClient(e.id)}
                              getOptionLabel={(option) => option.name}
                              getOptionValue={(option) => option.id}
                              isSearchable
                              options={
                                clientList &&
                                Array.isArray(clientList) &&
                                clientList
                              }
                              value={
                                clientList &&
                                Array.isArray(clientList) &&
                                clientList.find((value) => value.id === client)
                              }
                            /> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 ">
                        <div className="form-group mb-0">
                          <button
                            type="submit"
                            className="btn col-lg -12 col-md-12 btn-primary">
                            save allocation
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </RenderSecure>
      </div>
    </div>
  );
}

export default AllocatePermissions;
