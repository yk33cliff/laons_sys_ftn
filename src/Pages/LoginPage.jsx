import React, { useState } from "react";
import Loader from "../Components/Common/Loader";
import ajaxUser from "../util/remote/ajaxUser";
import { useNavigate } from "react-router-dom";
import Alert from "../Components/Common/Alert";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  // const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    const server_response = await ajaxUser.loginUser(username, pass);
    // setLoading(false);

    if (server_response.status === "OK") {
      localStorage.setItem("@user", server_response.details);
      navigate("/");
      // window.location.reload();
      setInfo(<Alert type="success" message={server_response.message} />);
    } else {
      setInfo(<Alert type="danger" message={server_response.message} />);
    }
  };

  return (
    <div>
      <div className="page main-signin-wrapper">
        {/* Row */}
<div className="side-menu"></div>
        <div className="row signpages text-center">
          <div className="col-md-12">
            <div className="card">
              <div className="row row-sm">
                <div className="col-lg-6 col-xl-5 d-none d-lg-block text-center bg-primary details">
                  <div className="mt-5 pt-4 p-2 pos-absolute">
                    <img
                      src="../assets/img/brand/logo-light.png"
                      className="header-brand-img mb-4"
                      alt="logo"
                    />
                    <div className="clearfix" />
                    <img
                      src="../assets/img/user.png"
                      className="ht-100 mb-0"
                      alt="user"
                    />
                    <h5 className="mt-4 text-white">Create Your Account</h5>
                    <span className="tx-white-6 tx-13 mb-5 mt-xl-0">
                      Signup to create, discover and connect with the global
                      community
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form ">
                  <div className="main-container container-fluid">
                    <div className="row row-sm">
                      <div className="card-body mt-2 mb-2">
                        <img
                          src="../assets/img/brand/logo-light.png"
                          className="d-lg-none header-brand-img text-start float-start mb-4 error-logo-light"
                          alt="logo"
                        />
                        <img
                          src="../assets/img/brand/logo.png"
                          className=" d-lg-none header-brand-img text-start float-start mb-4 error-logo"
                          alt="logo"
                        />
                        <div className="clearfix" />
                        <form onSubmit={handleSubmit}>
                          <h5 className="text-start mb-2">
                            Signin to Your Account
                          </h5>
                          <p className="mb-4 text-muted tx-13 ms-0 text-start">
                            Signin to create, discover
                          </p>
                          <div className="form-group text-start">
                            <label>Username</label>
                            <input
                              className="form-control"
                              placeholder="Enter your email"
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
                              type="button"
                              class="btn btn-primary col-lg-12"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                        <div className="text-start mt-5 ms-0">
                          <div className="mb-1">
                            <a href="forgot.html">Forgot password?</a>
                          </div>
                          {/* <div>
                            Don't have an account?{" "}
                            <a href="signup.html">Register Here</a>
                          </div> */}
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
