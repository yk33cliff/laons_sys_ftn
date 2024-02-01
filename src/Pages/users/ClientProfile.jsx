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
import AddLoanpayment from "../../Components/loans/AddLoanpayment";

function ClientProfile(props) {
  const {id} = useParams();
  const {getClientList} = useContext(ClientContext);

  // console.log(id);
  //+++++++++code  for updating user profile++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const [user, setUser] = useState("");

  //
  const getUserInfo = async () => {
    const data = {user_id: id};
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
  useEffect(() => {
    // Additional useEffect to update state variables when 'user' changes
    setFname(user.first_name);
    setLname(user.last_name);
    setEmail(user.email);
    setPhone(user.contact);
    setNin(user.nin);
    setLocation(user.location);
    setPhone2(user.contact2);
    setGender(user.gender);
    setRole(5);
    setOthers(user.othernames);
    SetIde(user.otherId);
    setJob(user.occupation);
    setDob(user.dob);
    setMarital(user.marital_status);
    setPhoto(user.photo);
    setWalletBalance(user.wallet_balance);
    setTotalDeposits(user.total_deposits);
    setTotalWithdraws(user.total_withdraws);

    // ... (other state updates)
  }, [user]);

  const [fname, setFname] = useState(user.first_name);
  const [lname, setLname] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.contact);
  const [nin, setNin] = useState(user.nin);
  const [location, setLocation] = useState(user.location);
  const [phone2, setPhone2] = useState(user.contact2);
  const [gender, setGender] = useState(user.gender);
  const [role, setRole] = useState(5);
  const [others, setOthers] = useState(user.othernames);
  const [ide, SetIde] = useState(user.otherId);
  const [job, setJob] = useState(user.occupation);
  const [dob, setDob] = useState(user.dob);
  const [marital, setMarital] = useState(user.marital_status);

  const changePicture = (e) => {
    e.preventDefault();

    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      const newItem = {file: e.target.result};

      setPhoto(e.target.result);
    };
  };

  const [wallet_balance, setWalletBalance] = useState("...");
  const [total_deposits, setTotalDeposits] = useState("...");
  const [total_withdraws, setTotalWithdraws] = useState("...");
  const [photo, setPhoto] = useState("avatar.png");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      fname.length > 0 &&
      lname.length > 0 &&
      phone.length > 0 &&
      nin.length > 0
    ) {
      const data = {
        id: id,
        first_name: fname,
        last_name: lname,
        othernames: others,
        nin: nin,
        gender: gender,
        contact: phone,
        contact2: phone2,
        email: email,
        location: location,
        role_id: role,
        photo: photo,
        otherId: ide,
        job: job,
        dob: dob,
        marital: marital,
      };
      // console.log(data);

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

  // //console.log(user);

  /**
   * fetching user's loans//
   */
  var dat = {id: id};
  const [userLoan, setUserloan] = useState("");
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

  useEffect(() => {
    getUserTrans();
    getUserWalletTransactions();
  }, []);

  // //console.log(userLoan);
  const getStatusBadge = (status) => {
    if (status === 3) {
      return (
        <span style={{fontSize: "16px"}} className="badge p-2 bg-info bg-pill">
          Active
        </span>
      );
    } else if (status === 4) {
      return (
        <span
          style={{fontSize: "16px"}}
          className="badge p-2 bg-success bg-pill">
          Completed
        </span>
      );
    }
  };
  // handling wallet balance payment
  const [payment, setPayment] = useStateCallback(false);
  const paymentHandler = (id) => {
    setPayment(false, () =>
      setPayment(
        <AddWalletCash isOpen={true} id={id} function={getClientList} />
      )
    );
  };

  // loanstatement handlers
  const [statment, setStatement] = useStateCallback(false);

  const handleStatement = (id) => {
    setStatement(false, () =>
      setStatement(<LoanStatement isOpen={true} id={id} />)
    );
  };

  // loan repayments
  const [Repayment, setRepayment] = useStateCallback(false);
  const LoanRepaymentHandler = (ids) => {
    setRepayment(false, () =>
      setRepayment(<AddLoanpayment isOpen={true} id={ids} customer={id} />)
    );
  };
  // handles user transactions

  const [trans, setTrans] = useState("");
  const getUserTrans = async () => {
    const data = {user_id: id};
    // //console.log(id);

    const server_response = await ajaxLaons.fetchUserTransactions(data);
    // //console.log(server_response)
    if (server_response.status === "OK") {
      setTrans(server_response.details);
    } else {
      // Handle error
    }
  };
  const [walletT, setwalletT] = useState("");
  const getUserWalletTransactions = async () => {
    const data = {user_id: id};

    const server_response = await ajaxLaons.fetchWalletTransactions(data);

    if (server_response.status === "OK") {
      setwalletT(server_response.details);
    } else {
      toast.error(server_response.message);
    }
  };
  // pagination workings
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20; // Change this value based on your preference

  const offset = currentPage * itemsPerPage;
  const paginatedItems =
    trans && Array.isArray(trans)
      ? trans.slice(offset, offset + itemsPerPage)
      : [];
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };
  // pagination workings1
  const [currentPage1, setCurrentPage1] = useState(0);
  const itemsPerPage1 = 20; // Change this value based on your preference

  const offset1 = currentPage1 * itemsPerPage1; // Fix: Use offset1 here
  const paginatedItems1 =
    walletT && Array.isArray(walletT)
      ? walletT.slice(offset1, offset1 + itemsPerPage1)
      : [];
  const handlePageClick1 = (data) => {
    setCurrentPage1(data.selected);
  };
  return (
    <div>
      <AppContainer title="user profile">
        {/* <Toaster /> */}
        {statment}
        {Repayment}
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
                          className="nav-link "
                          data-bs-toggle="tab"
                          href="#wallet_transactions">
                          wallet_transactions
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
                          <div className="col-lg-12 col-md-12">
                            <div className="card custom-card">
                              <div className="card-body">
                                <div>
                                  <h5 className="main-content-label mb-1">
                                    Register clients/ customers
                                  </h5>

                                  <Toaster />
                                </div>
                                <div className="row row-sm">
                                  <form
                                    action=""
                                    onSubmit={handleSubmit}
                                    enctype="multipart/form-data">
                                    <div className="row">
                                      <div className="col-lg-12 col-md-12">
                                        <div className="row">
                                          <div className="col-md-6 col-lg-6">
                                            {/* left hand side  */}
                                            <div className="col-12">
                                              <div className="form-group">
                                                <p className="mg-b-10">
                                                  First Name
                                                </p>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  name="example-text-input"
                                                  placeholder="users first name"
                                                  value={fname}
                                                  onChange={(e) =>
                                                    setFname(e.target.value)
                                                  }
                                                />
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="form-group">
                                                <p className="mg-b-10">
                                                  Last Name
                                                </p>
                                                <input
                                                  type="text"
                                                  value={lname}
                                                  onChange={(e) =>
                                                    setLname(e.target.value)
                                                  }
                                                  className="form-control"
                                                  placeholder="user last name"
                                                />
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="form-group">
                                                <p className="mg-b-10">
                                                  Other Names
                                                </p>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="other user names"
                                                  value={others}
                                                  onChange={(e) =>
                                                    setOthers(e.target.value)
                                                  }
                                                />
                                              </div>
                                            </div>

                                            <div className="col-12">
                                              <div className="form-group">
                                                <label className="mg-b-10">
                                                  Gender
                                                </label>
                                                <select
                                                  name=""
                                                  className="form-control"
                                                  id=""
                                                  value={gender}
                                                  onChange={(e) =>
                                                    setGender(e.target.value)
                                                  }>
                                                  <option value="" disabled>
                                                    ------select gender-------
                                                  </option>
                                                  <option value="male">
                                                    male
                                                  </option>
                                                  <option value="female">
                                                    female
                                                  </option>
                                                </select>
                                              </div>
                                            </div>

                                            <div className="col-12">
                                              <div className="form-group">
                                                <label className="mg-b-10">
                                                  Date of birth
                                                </label>
                                                <input
                                                  type="date"
                                                  className="form-control"
                                                  placeholder="date"
                                                  value={dob}
                                                  onChange={(e) =>
                                                    setDob(e.target.value)
                                                  }
                                                />
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="form-group">
                                                <label className="mg-b-10">
                                                  Location
                                                </label>
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

                                            <div className="col-12"></div>
                                          </div>
                                          <div className="col-md-6 col-lg-6">
                                            {/* right hand side  */}
                                            <div className="col-12">
                                              <div className="form-group">
                                                Primary contact
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="user telephone number"
                                                  value={phone}
                                                  onChange={(e) =>
                                                    setPhone(e.target.value)
                                                  }
                                                />
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="form-group">
                                                <label className="mg-b-10">
                                                  Alternative contact
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="client second telephone number"
                                                  value={phone2}
                                                  onChange={(e) =>
                                                    setPhone2(e.target.value)
                                                  }
                                                />
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="form-group">
                                                <label className="mg-b-10">
                                                  email
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="user email"
                                                  value={email}
                                                  onChange={(e) =>
                                                    setEmail(e.target.value)
                                                  }
                                                />
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="form-group">
                                                <label className="mg-b-10">
                                                  NIN number
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="user nin number"
                                                  value={nin}
                                                  onChange={(e) =>
                                                    setNin(e.target.value)
                                                  }
                                                />
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="form-group">
                                                <label className="mg-b-10">
                                                  other Identification Means
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="other Identification e.g passport"
                                                  value={ide}
                                                  onChange={(e) =>
                                                    SetIde(e.target.value)
                                                  }
                                                />
                                              </div>
                                            </div>
                                            <div className="col-12">
                                              <div className="form-group">
                                                <label className="mg-b-10">
                                                  occupation / business activity
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="users jobs"
                                                  value={job}
                                                  onChange={(e) =>
                                                    setJob(e.target.value)
                                                  }
                                                />
                                              </div>
                                            </div>

                                            <div className="col-12">
                                              <div className="form-group">
                                                <label className="mg-b-10">
                                                  Marital status
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="marital status"
                                                  value={marital}
                                                  onChange={(e) =>
                                                    setMarital(e.target.value)
                                                  }
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      {/* <div className="col-md-6">
                          <div className="form-group">
                            <label className="mg-b-10">
                              NINNtional ID photo
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              placeholder="user telephone number"
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                          </div>
                        </div> */}

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
                          </div>
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
                                          <th>date</th>
                                          <th>Payment Types</th>
                                          <th>Cash_in</th>
                                          <th>Cash_out</th>
                                          <th>Payment Method</th>
                                          <th>Phone Number</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {paginatedItems.map((loan, key) => (
                                          <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{loan.created_at}</td>
                                            <td>{loan.account}</td>
                                            <td>{loan.cash_in}</td>
                                            <td>{loan.cash_out}</td>
                                            <td>{loan.payment_method}</td>
                                            <td>{loan.phone_number}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>

                                    <ReactPaginate
                                      pageCount={Math.ceil(
                                        trans.length / itemsPerPage
                                      )}
                                      pageRangeDisplayed={3}
                                      marginPagesDisplayed={1}
                                      onPageChange={handlePageClick}
                                      containerClassName={"pagination"}
                                      activeClassName={"active"}
                                      nextLabel={"Next"}
                                      previousLabel={"Previous"}
                                      breakLabel={"..."}
                                      pageLinkClassName={"page-link"}
                                      nextClassName={"page-item"}
                                      nextLinkClassName={"page-link"}
                                      previousClassName={"page-item"}
                                      previousLinkClassName={"page-link"}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* wallet_transactions  */}
                    <div
                      className="main-content-body tab-pane p-4 border-top-0 "
                      id="wallet_transactions">
                      <div className="card-body p-0 border p-0 rounded-10">
                        <div className="p-4">
                          <h4 className="tx-15 text-uppercase mb-3">
                            Customer wallet_transactions
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
                                          <th>Date </th>
                                          <th>Cash_in</th>
                                          <th>Cash_out</th>
                                          <th>Description</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {paginatedItems1.map((loan, key) => (
                                          <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{loan.created_at}</td>
                                            <td>{loan.cash_in}</td>
                                            <td>{loan.cash_out}</td>
                                            <td>{loan.bank_reference}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>

                                    <ReactPaginate
                                      pageCount={Math.ceil(
                                        walletT.length / itemsPerPage1
                                      )}
                                      pageRangeDisplayed={3}
                                      marginPagesDisplayed={1}
                                      onPageChange={handlePageClick1}
                                      containerClassName={"pagination"}
                                      activeClassName={"active"}
                                      nextLabel={"Next"}
                                      previousLabel={"Previous"}
                                      breakLabel={"..."}
                                      pageLinkClassName={"page-link"}
                                      nextClassName={"page-item"}
                                      nextLinkClassName={"page-link"}
                                      previousClassName={"page-item"}
                                      previousLinkClassName={"page-link"}
                                    />
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
                                          <th>
                                            View Loan <br /> statement{" "}
                                          </th>
                                        </RenderSecure>

                                        <th>Loan Balance</th>

                                        <RenderSecure code="LOANS-STMNT">
                                          <th>Loan Profile </th>
                                        </RenderSecure>
                                        <RenderSecure code="ADD-PAYMNT">
                                          <th>
                                            Add Loan <br />
                                            Payment{" "}
                                          </th>
                                        </RenderSecure>
                                      </tr>
                                    </thead>
                                    <tbody>
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
                                              {getStatusBadge(loan.status * 1)}
                                              {/* {loan.status} */}
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
                                            <td>{loan.loanBalance}</td>

                                            <RenderSecure code="LOANS-STMNT">
                                              <td>
                                                <button className="badge  bg-primary-light bg-pill">
                                                  <a
                                                    href={`/LoanManagement/${loan.id}`}
                                                    classname="btn badge bg-warning-light bg-pill">
                                                    Loan profile
                                                  </a>
                                                </button>
                                              </td>
                                            </RenderSecure>
                                            <RenderSecure code="ADD-PAYMNT">
                                              <td>
                                                {loan.status * 1 === 3 ? (
                                                  <button
                                                    className="badge  text-white bg-primary bg-pill"
                                                    style={{fontSize: "14px"}}
                                                    onClick={() =>
                                                      LoanRepaymentHandler(
                                                        loan.id
                                                      )
                                                    }>
                                                    Add Loan <br />
                                                    Payment
                                                  </button>
                                                ) : (
                                                  <></>
                                                )}
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
