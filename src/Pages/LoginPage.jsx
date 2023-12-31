import React, {useState} from "react";

import ajaxUser from "../util/remote/ajaxUser";

import toast, {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = btoa(pass);
    const server_response = await ajaxUser.loginUser(username, password);

    //console.log(server_response);
    if (server_response.status === "OK") {
      localStorage.setItem("logs@user", server_response.details);
      navigate("/");
      window.location.reload();
      toast.success(server_response.message);
    } else {
      toast.error(server_response.message);
    }
  };

  return (
    <div>
      <div className="side-menu ">
        <div className="page main-signin-wrapper bg-dark">
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
                              Signin to Your Account
                            </h5>
                            <Toaster />

                            <div className="form-group text-start">
                              <label>Username</label>
                              <input
                                className="form-control"
                                placeholder="Enter your username"
                                type="text"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                              />
                            </div>
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
                            <div className="form-group">
                              <button
                                type="submit"
                                class="btn btn-primary col-lg-12">
                                Login
                              </button>
                            </div>
                          </form>
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

export default Login;
