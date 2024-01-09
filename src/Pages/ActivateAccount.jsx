import React, {useState} from "react";
import ajaxUser from "../util/remote/ajaxUser";
import toast, {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import functions from "../util/functions";

function ActivateAccount() {
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const navigate = useNavigate();

  const user_id = functions.sessionGuard();
  // //console.log(user_id);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass === pass2) {
      const hashedPassword = btoa(pass);

      const data = {id: user_id, password: hashedPassword};
      const server_response = await ajaxUser.ActivateAccount(data);

      // //console.log(server_response);

      if (server_response.status === "OK") {
        localStorage.removeItem("logs@user");
        navigate("/");
        window.location.reload();
        toast.success(server_response.message);
      } else {
        toast.error(server_response.message);
      }
    } else {
      toast.error("Passwords don't match");
    }
  };

  return (
    <div>
      <div className="page main-signin-wrapper bg-dark">
        {/* Row */}
        <div className="side-menu">
          <div className="row signpages text-center bg-dark">
            <div className="col-md-12">
              <div className="card">
                <div className="row row-sm">
                  <div className="col-lg-12 col-xl-12 col-xs-12 col-sm-12 login_form ">
                    <div className="main-container container-fluid">
                      <div className="row row-sm">
                        <div className="card-body mt-2 mb-2">
                          <div className="clearfix" />
                          <form onSubmit={handleSubmit}>
                            <h5 className="text-start text-primary mb-2">
                              Change your password account to activate your
                              account
                            </h5>
                            <Toaster />

                            <div className="form-group text-start">
                              <label>Password</label>
                              <input
                                className="form-control"
                                placeholder="Enter your password"
                                type="password"
                                onChange={(e) => setPass(e.target.value)}
                                value={pass}
                              />
                            </div>
                            <div className="form-group text-start">
                              <label> Comfirm Password</label>
                              <input
                                className="form-control"
                                placeholder="comfirm your password"
                                type="password"
                                onChange={(e) => setPass2(e.target.value)}
                                value={pass2}
                              />
                            </div>
                            <div className="form-group">
                              <button
                                type="submit"
                                class="btn btn-primary col-lg-12">
                                Login
                              </button>
                            </div>
                          </form>
                          <div className="text-start mt-5 ms-0"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Row */}
      </div>
    </div>
  );
}

export default ActivateAccount;
