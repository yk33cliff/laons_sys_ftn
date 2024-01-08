import React, {useContext, useEffect, useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import ReactPaginate from "react-paginate";
import {useParams} from "react-router-dom";
import ajaxUser from "../../util/remote/ajaxUser";
import toast, {Toaster} from "react-hot-toast";
import dictionary from "../../util/dictionary";
import ajaxLaons from "../../util/remote/ajaxLaons";
import useStateCallback from "../../util/customHooks/useStateCallback";
import AddWalletCash from "../../Components/loans/AddWalletCash";
import {RenderSecure} from "../../util/script/RenderSecure";
import LoanStatement from "../../Components/loans/LoanStatement";
import ClientContext from "../../Context/ClientContext";

function ClientProfile(props) {
  const {id} = useParams();
  const {gettrans} = useContext(ClientContext);
  //+++++++++code  for updating user profile++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const [user, setUser] = useState();
  const getUserInfo = async () => {
    const data = {user_id: id};
    // console.log(id);

    const server_response = await ajaxUser.fetchSingleUser(data);
    // console.log(server_response)
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
  const [wallet_balance, setWalletBalance] = useState("...");
  const [total_deposits, setTotalDeposits] = useState("...");
  const [total_withdraws, setTotalWithdraws] = useState("...");
  const [photo, setPhoto] = useState("avatar.png");

  const updateState = () => {
    user && setFname(user?.first_name);
    user && setLname(user?.last_name);
    user && setUname(user?.username);
    user && setEmail(user?.email);
    user && setPhone(user?.contact);
    user && setLocation(user?.location);
    user && setNin(user?.nin);
    user && setWalletBalance(user?.wallet_balance);
    user && setPhoto(user?.photo);
  };

  useEffect(() => {
    updateState(user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      fname.length > 0 &&
      lname.length > 0 &&
      uname.length > 0 &&
      phone.length > 0 &&
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
        getUserInfo();
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
    getUserTrans();
  }, []);
  // console.log(userLoan);
  const getStatusBadge = (status) => {
    if (status === 1) {
      return (
        <span style={{fontSize: "16px"}} className="badge p-2 bg-info bg-pill">
          Pending
        </span>
      );
    } else if (status === 2) {
      return (
        <span style={{fontSize: "16px"}} className="badge p-2 bg-info bg-pill">
          In Progress
        </span>
      );
    } else if (status === 3) {
      return (
        <span
          style={{fontSize: "16px"}}
          className="badge p-2 bg-success bg-pill">
          active
        </span>
      );
    } else if (status === 5) {
      return (
        <span
          style={{fontSize: "16px"}}
          className="badge p-2 bg-danger bg-pill">
          Denied
        </span>
      );
    }
  };
  // handling wallet balance payment
  const [payment, setPayment] = useStateCallback(false);
  const paymentHandler = (id) => {
    setPayment(false, () =>
      setPayment(<AddWalletCash isOpen={true} id={id} function={gettrans} />)
    );
  };

  // loanstatement handlers
  const [statment, setStatement] = useStateCallback(false);

  const handleStatement = (id) => {
    setStatement(false, () =>
      setStatement(<LoanStatement isOpen={true} id={id} />)
    );
  };
  // handles user transactions

  const [trans, setTrans] = useState();
  const getUserTrans = async () => {
    const data = {user_id: id};
    // console.log(id);

    const server_response = await ajaxLaons.fetchUserTransactions(data);
    // console.log(server_response)
    if (server_response.status === "OK") {
      setTrans(server_response.details);
    } else {
      // Handle error
    }
  };
  // pagination workings
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15; // Change this value based on your preference

  const offset = currentPage * itemsPerPage;
  const paginatedItems = Array.isArray(trans)
    ? trans.slice(offset, offset + itemsPerPage)
    : [];
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  return (
    <div>
      <AppContainer title="user profile">
        <Toaster />
        {statment}
        <div className="row">
          <>
            <div
              className="row square"
              // style={{height: "400px"}}
            >
              {/* modal rendering */}
              {payment}
              <div className="col-lg-12 col-md-12">
                <div className="card custom-card">
                  <div className="card-body">
                    <div className=" profile-cover">
                      <div className="profile-cover__img">
                        <img
                          src={dictionary.apiHost + "uploads/" + photo}
                          alt="user "
                        />
                        <h3 className="h3">
                          {fname} &nbsp;{lname}
                        </h3>
                      </div>
                      <RenderSecure code="ADD-PAYMNT">
                        <div className="btn-profile">
                          <button
                            className="btn btn-rounded btn-primary"
                            onClick={() => paymentHandler(id)}>
                            <i className="fa fa-plus" /> &nbsp;
                            <span>wallet deposit</span>
                          </button>
                        </div>
                      </RenderSecure>

                      <div className="profile-cover__action bg-img" />
                      <div className="profile-cover__info">
                        <ul className="nav">
                          <li>
                            <p> Ugsh. {wallet_balance}</p>
                            <p className="text-primary">Wallet balance</p>
                          </li>
                          <li>
                            <p> Ugsh. {total_deposits}</p>
                            <p className="text-success">Total Deposites</p>
                          </li>
                          <li>
                            <p> Ugsh. {total_withdraws}</p>
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
                                          <th>Payment Types</th>
                                          <th>Cash_in</th>
                                          <th>Cash_out</th>
                                          <th>Payment Method</th>
                                          <th>Phone Number</th>
                                          <th>date</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {/* {
          
            "description": "deposting to customer wallet",
            "created_at": "2024-01-08 15:09:37",
            "payment_method": "Cash payment",
            "phone_number": "256780390967" */}
                                        {Array.isArray(trans) &&
                                          trans.map((loan, key) => (
                                            <tr key={key}>
                                              <td>{key + 1}</td>
                                              <td>{loan.account}</td>
                                              <td>{loan.cash_in}</td>
                                              <td>{loan.cash_out}</td>
                                              <td>{loan.payment_method}</td>
                                              <td>{loan.phone_number}</td>
                                            </tr>
                                          ))}
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
                                        <RenderSecure code="LOANS-STMNT">
                                          <th>View Loan </th>
                                        </RenderSecure>
                                        <RenderSecure code="LOANS-STMNT">
                                          <th>manage Loan </th>
                                        </RenderSecure>
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
                                              {getStatusBadge(loan.status)}
                                              {loan.status}
                                            </td>
                                            <RenderSecure code="LOANS-STMNT">
                                              <td>
                                                <button
                                                  className="badge  text-white bg-primary bg-pill"
                                                  style={{fontSize: "14px"}}
                                                  onClick={() =>
                                                    handleStatement(loan.id)
                                                  }>
                                                  Loan statment
                                                </button>
                                              </td>
                                            </RenderSecure>
                                            <RenderSecure code="LOANS-STMNT">
                                              <td>
                                                <button
                                                  className="badge  text-white bg-primary bg-pill"
                                                  style={{fontSize: "14px"}}
                                                  onClick={() =>
                                                    handleStatement(loan.id)
                                                  }>
                                                  Loan statment
                                                </button>
                                              </td>
                                            </RenderSecure>
                                          </tr>
                                        ))}
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
