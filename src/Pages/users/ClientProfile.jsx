import React, {useEffect, useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import {useParams} from "react-router-dom";
import ajaxUser from "../../util/remote/ajaxUser";
import toast, {Toaster} from "react-hot-toast";
import dictionary from "../../util/dictionary";
import ajaxLaons from "../../util/remote/ajaxLaons";

function ClientProfile(props) {
  const {id} = useParams();
  //+++++++++code  for updating user profile++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const [user, setUser] = useState();
  const getUserInfo = async () => {
    const data = {id: id};
    const server_response = await ajaxUser.fetchSingleUser(data);

    if (server_response.status === "OK") {
      setUser(server_response.details);
    } else {
      // Handle error
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [nin, setNin] = useState("");
  const [location, setLocation] = useState("");

  const updateState = (user) => {
    user && setFname(user?.first_name);
    user && setLname(user?.last_name);
    user && setUname(user?.username);
    user && setEmail(user?.email);
    user && setPhone(user?.contact);
    user && setLocation(user?.location);
    user && setNin(user?.nin);
  };

  useEffect(() => {
    updateState(user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      fname.length > 0 ||
      lname.length > 0 ||
      uname.length > 0 ||
      phone.length > 0 ||
      nin.length > 0
    ) {
      const data = {
        id: id,
        first_name: fname,
        last_name: lname,
        username: uname,
        nin: nin,
        contact: phone,
        email: email,
        location: location,
      };

      const server_response = await ajaxUser.updateUserProfile(data);

      if (server_response.status === "OK") {
        toast.success(server_response.message);
      } else if (server_response.status === "Fail") {
        toast.error(server_response.message);
      }
    } else {
      toast.error("Complete all fields and try again");
    }
  };

  // console.log(user);

  /**
   * fetching user's loans//
   */
  var dat = {id: id};
  const [userLoan, setUserloan] = useState();
  const userLoans = async () => {
    const server_response = await ajaxLaons.ViewUsersLoans(dat);

    if (server_response.status === "OK") {
      setUserloan(server_response.details);
    } else if (server_response.status === "Fail") {
      toast.error(server_response.message);
    }
  };
  useEffect(() => {
    userLoans();
  }, []);
  console.log(userLoan);
  const getStatusBadge = (status) => {
    if ((status = 1)) {
      return (
        <span
          style={{fontSize: "16px"}}
          className="badge bg-info-light bg-pill">
          Pending
        </span>
      );
    } else if ((status = 2)) {
      return (
        <span
          style={{fontSize: "16px"}}
          className="badge bg-info-light bg-pill">
          In Progress
        </span>
      );
    } else if ((status = 3)) {
      return (
        <span
          style={{fontSize: "16px"}}
          className="badge bg-sucess-light bg-pill">
          Approval in Progress
        </span>
      );
    } else if ((status = 4)) {
      <span
        style={{fontSize: "16px"}}
        className="badge bg-success-light bg-pill">
        Approved
      </span>;
    } else if ((status = 5)) {
      <span
        style={{fontSize: "16px"}}
        className="badge bg-danger-light bg-pill">
        Denied
      </span>;
    }
  };

  return (
    <div>
      <AppContainer title="user profile">
        <Toaster />
        <div className="row">
          <>
            <div
              className="row square"
              // style={{height: "400px"}}
            >
              <div className="col-lg-12 col-md-12">
                <div className="card custom-card">
                  <div className="card-body">
                    <div className=" profile-cover">
                      <div className="profile-cover__img">
                        <img
                          src={dictionary.apiHost + "img/avatar.png"}
                          alt="user "
                        />
                        <h3 className="h3">
                          {fname} &nbsp;{lname}
                        </h3>
                      </div>
                      <div className="btn-profile">
                        <button className="btn btn-rounded btn-danger">
                          <i className="fa fa-plus" />
                          <span>role</span>
                        </button>
                      </div>
                      <div className="profile-cover__action bg-img" />
                      <div className="profile-cover__info">
                        <ul className="nav">
                          <li>
                            <p> Ugsh.50,000,000</p>
                            <p className="text-primary">Wallet balance</p>
                          </li>
                          <li>
                            <p> Ugsh.50,000,000</p>
                            <p className="text-success">Total Deposites</p>
                          </li>
                          <li>
                            <p> Ugsh.50,000,000</p>
                            <p className="text-warning">Total withdraws</p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="profile-tab tab-menu-heading">
                      <nav className="nav main-nav-line p-3 tabs-menu profile-nav-line bg-gray-100">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#edit">
                          Edit Profile
                        </a>
                        <a
                          className="nav-link "
                          data-bs-toggle="tab"
                          href="#recent_transaction">
                          recent_transaction
                        </a>

                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#loans">
                          Loans
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row */}
            <div className="row row-sm">
              <div className="col-lg-12 col-md-12">
                <div className="card custom-card main-content-body-profile">
                  <div className="tab-content">
                    {/* updatting form */}
                    <div
                      className="main-content-body tab-pane p-4 border-top-0 active"
                      id="edit">
                      <div className="card-body border">
                        <div className="mb-4 main-content-label">
                          Customer Information
                        </div>
                        <div className="row row-sm">
                          <form action="" onSubmit={handleSubmit}>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <p className="mg-b-10">First Name</p>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="example-text-input"
                                    placeholder="users first name"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <p className="mg-b-10">Last Name</p>
                                  <input
                                    type="text"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
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
                                    value={uname}
                                    onChange={(e) => setUname(e.target.value)}
                                  />
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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="mg-b-10">
                                    telephone number
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="user telephone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="mg-b-10">NIN number</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="user NIN number"
                                    value={nin}
                                    onChange={(e) => setNin(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="mg-b-10">Location</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="user location"
                                    value={location}
                                    onChange={(e) =>
                                      setLocation(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-md-12 ">
                                <div className="form-group mb-0">
                                  <button
                                    type="submit"
                                    className="btn col-lg -12 col-md-12 btn-primary">
                                    Save user
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* recent transactions */}
                    <div
                      className="main-content-body tab-pane p-4 border-top-0 "
                      id="recent_transaction">
                      <div className="card-body p-0 border p-0 rounded-10">
                        <div className="p-4">
                          <h4 className="tx-15 text-uppercase mb-3">
                            Recent Transaction
                          </h4>
                        </div>

                        <div>
                          <div className="row row-sm">
                            <div className="col-xl-12">
                              <div className="card custom-card">
                                <div className="card-body">
                                  <div className="table-responsive">
                                    <table className="table card-table text-nowrap table-bordered border-top">
                                      <thead>
                                        <tr>
                                          <th>No.</th>
                                          <th>Type</th>
                                          <th>Duration</th>
                                          <th>interest rate</th>
                                          <th>application fee rate</th>
                                          <th>allowed installment</th>
                                          <th>status</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>#12452</td>
                                          <td className="text-danger">Sell</td>
                                          <td>
                                            <i className="cc BTC-alt text-warning" />{" "}
                                            0.63736
                                          </td>
                                          <td>
                                            <i className="cc BTC-alt text-warning" />{" "}
                                            0.73748
                                          </td>
                                          <td>72637.02</td>
                                          <td>$ 6345.16</td>

                                          <td>
                                            <span className="badge bg-danger-light bg-pill">
                                              Cancelled
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>#12453</td>
                                          <td className="text-success">Buy</td>
                                          <td>
                                            <i className="cc BTC-alt text-warning" />{" "}
                                            0.63647
                                          </td>
                                          <td>
                                            <i className="cc BTC-alt text-warning" />{" "}
                                            0.83643
                                          </td>
                                          <td>83748.19</td>
                                          <td>$ 23836.09</td>

                                          <td>
                                            <span className="badge bg-success-light bg-pill">
                                              Completed
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>#12454</td>
                                          <td className="text-success">Buy</td>
                                          <td>
                                            <i className="cc BTC-alt text-warning" />{" "}
                                            0.76263
                                          </td>
                                          <td>
                                            <i className="cc BTC-alt text-warning" />{" "}
                                            0.72563
                                          </td>
                                          <td>32635.32</td>
                                          <td>$ 7235.25</td>

                                          <td>
                                            <span className="badge bg-success-light bg-pill">
                                              Completed
                                            </span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>#12455</td>
                                          <td className="text-danger">Sell</td>
                                          <td>
                                            <i className="cc BTC-alt text-warning" />{" "}
                                            0.46263
                                          </td>
                                          <td>
                                            <i className="cc BTC-alt text-warning" />{" "}
                                            0.27363
                                          </td>
                                          <td>28937.22</td>
                                          <td>$ 4853.15</td>

                                          <td>
                                            <span className="badge bg-info-light bg-pill">
                                              In Process
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* loans history */}
                    <div
                      className="main-content-body p-4 border tab-pane border-top-0"
                      id="loans">
                      <div className="card-body border">
                        <div className="row row-sm">
                          <div className="col-lg-12">
                            <div className="card custom-card">
                              <div className="card-body">
                                <div>
                                  <h6 className="main-content-label mb-1">
                                    Customer Loans history
                                  </h6>
                                  <p className="text-muted card-sub-title">
                                    To enable a hover state on table rows.
                                  </p>
                                </div>
                                <div className="table-responsive border  border-bottom-0">
                                  <table className="table text-nowrap text-md-nowrap table-hover mg-b-0">
                                    <thead>
                                      <tr>
                                        <th>No.</th>
                                        <th>Loan Name</th>
                                        <th>Amount </th>
                                        <th>duration </th>
                                        <th>start Date</th>
                                        <th>Loan status </th>
                                        <th>View Loan </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {/* amount : "2000000" date_requested :
                                      "2023-12-01" duration : "4" id : "3"
                                      loan_type : "9" status : "1" */}
                                      {!Array.isArray(userLoan) && (
                                        <tr>
                                          <td
                                            className="text-center text-info"
                                            colSpan={"7"}>
                                            No user loans found
                                          </td>
                                        </tr>
                                      )}
                                      {Array.isArray(userLoan) &&
                                        userLoan.map((loan, key) => (
                                          <tr key={key}>
                                            <th>{key + 1}</th>
                                            <td>{loan.loan_type}</td>
                                            <td>{loan.amount}</td>
                                            <td>{loan.duration}</td>
                                            <td>{loan.date_requested}</td>
                                            <td>
                                              {getStatusBadge(
                                                loan.getStatusBadge
                                              )}
                                            </td>
                                            <td>
                                              <span className="badge  text-white bg-primary bg-pill">
                                                <a
                                                  style={{fontSize: "16px"}}
                                                  className="text-white"
                                                  href={`/loan_file/${loan.id}`}>
                                                  View Loan
                                                </a>
                                              </span>
                                            </td>
                                          </tr>
                                        ))}
                                      {/* <tr>
                                        <th scope="row">2</th>
                                        <td>Joan Powell</td>
                                        <td>Associate Developer</td>
                                        <td>$450,870</td>
                                        <td>
                                          <span className="badge bg-danger-light bg-pill">
                                            Cancelled
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th scope="row">3</th>
                                        <td>Joan Powell</td>
                                        <td>Associate Developer</td>
                                        <td>$450,870</td>
                                        <td>
                                          <span className="badge bg-warning-light bg-pill">
                                            Pending
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th scope="row">4</th>
                                        <td>Joan Powell</td>
                                        <td>Associate Developer</td>
                                        <td>$450,870</td>
                                        <td>
                                          <span className="badge bg-success-light bg-pill">
                                            Completed
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <th scope="row">5</th>
                                        <td>Joan Powell</td>
                                        <td>Associate Developer</td>
                                        <td>$450,870</td>
                                        <td>
                                          <span className="badge bg-info-light bg-pill">
                                            In Process
                                          </span>
                                        </td>
                                      </tr> */}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </AppContainer>
    </div>
  );
}

export default ClientProfile;
