import React, {useEffect, useState} from "react";
import SystemModal from "../Common/SystemModal";
import toast from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";
import ajaxUser from "../../util/remote/ajaxUser";

function LoanSlip(props) {
  useEffect(() => {
    getLoanDetails();
    getLoanHolderDetails();
    guarantor();
    securities();
    get_shedule();
  }, []);

  const id = props.id;

  const customer_id = props.customer;
  const Cus_name = props.name1;
  const Cus_name2 = props.name2;

  var contact = props.contact;

  const [Loaned, setLoanded] = useState("");
  const [customer, setCustomer] = useState("");
  const [guarantors, setGuarantors] = useState("");
  const [security, setSecurity] = useState("");

  const getLoanDetails = async () => {
    var data = {id: id};
    const server_response = await ajaxLaons.getLoanDetails(data);

    if (server_response.status === "OK") {
      setLoanded(server_response.details);
    } else {
      toast.error(server_response.message);
    }
  };
  const getLoanHolderDetails = async (e) => {
    var data = {user_id: customer_id};
    const server_response = await ajaxUser.fetchSingleUser(data);

    if (server_response.status === "OK") {
      setCustomer(server_response.details);
    } else {
      // alert("Something went wrong loading YEXP, check your connection or contact system admin")
    }
  };

  const guarantor = async () => {
    var data = {
      id: props.id,
    };
    const server_response = await ajaxLaons.ViewLoanGuarantors(data);

    if (server_response.status === "OK") {
      setGuarantors(server_response.details);
    }
    // else if (server_response.status === "Fail") {
    // toast.error(server_response.message);
    // }
  };
  const securities = async () => {
    var data = {
      id: props.id,
    };
    const server_response = await ajaxLaons.ViewLoanSecurities(data);

    if (server_response.status === "OK") {
      setSecurity(server_response.details);
    }
    // else if (server_response.status === "Fail") {
    //   toast.error(server_response.message);
    // }
  };

  const [shedule, setShedule] = useState("");
  const [balance, setBalance] = useState("");
  const [paid, setPaid] = useState("");
  const get_shedule = async () => {
    var data = {
      id: props.id,
    };
    const server_response = await ajaxLaons.getLoanShedule(data);

    if (server_response.status === "OK") {
      setShedule(server_response.details.shedule);
    }
  };

  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;

    window.print();
    window.location.reload();
    document.body.innerHTML = originalContents;
  };

  const RenderFooter = (controls) => {
    return (
      <>
        <button
          classname="btn ripple btn-dark"
          type="button"
          onClick={controls.close}>
          Close
        </button>
        <button
          type="button"
          className={`btn ripple btn-primary`}
          onClick={Print}>
          Print
        </button>
      </>
    );
  };

  return (
    <div>
      <SystemModal
        title="Loan slip"
        id="model-new-pass"
        size="lg"
        footer={RenderFooter}>
        <div
          id="printablediv"
          className="mb-4 "
          style={{
            // backgroundImage: "url()",
            "@media print": {
              // Media query styles for print
              margin: "auto",
              padding: "20px",
              display: "block",
              alignItems: "center",
              justifyContent: "space-between",
            },
          }}>
          <div className="row">
            <div className="col-12 ">
              <div className="row">
                <div className="d-flex justify-content-evenly">
                  {/* <img
                    src="../assets/img/brand/logo-light.png"
                    classname="justify-content-center header-brand-img deskhrefp-logo"
                    alt="logo"
                    style={{height: "140px", width: "250px"}}
                  /> */}
                  <div className="">
                    <h3 className="text-center">
                      SERENITY MICROFINANCE LIMITED
                    </h3>

                    <h6 className="text-center">P.O.Box 310081</h6>
                    <h6 className="text-center">
                      Bulindo shopping centre Building
                    </h6>
                    <h6 className="text-center">
                      email:
                      <span style={{color: "red"}}>
                        serenitymicrofinance@gmail.com
                      </span>
                    </h6>
                    <h6 className="text-center">
                      contacts:
                      <span style={{color: "red"}}>+256771670497</span>
                    </h6>
                    <p className="text-center">
                      <u> Clients' Loan slip</u>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />

          <div className="d-flex justify-content-between">
            <div className="col-6">
              <h3>customers details</h3>
              <p>
                Name:: &nbsp;&nbsp;
                <span>
                  {Loaned && Loaned.customer_id.names.first_name}&nbsp;
                  {Loaned && Loaned.customer_id.names.last_name}
                </span>
              </p>
              <p>
                contact :: &nbsp;&nbsp;+
                <span>{Loaned && Loaned.customer_id.names.contact}</span>
              </p>

              {/* <p>
                Location:: &nbsp;&nbsp; <span>{customer.location}</span>
              </p> */}
            </div>
            <div className="col-6">
              <h3>servered by</h3>
              <p>
                Name:: &nbsp; &nbsp;
                <span>
                  {Loaned && Loaned.created_by.first_name}&nbsp; &nbsp;
                  {Loaned && Loaned.created_by.last_name}
                </span>
              </p>
              <p>
                contact:: &nbsp; &nbsp;+
                <span>{Loaned && Loaned.created_by.contact}&nbsp;</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="col-lg-12">
                <div className="col-12">
                  <div className="card custom-card card-dashboard-calendar pb-0">
                    <label className="main-content-label mb-2 pt-1">
                      loan details
                    </label>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <tbody>
                                <tr>
                                  <td>Loan type</td>
                                  <td className="text-primary">
                                    {Loaned && Loaned.loan_type}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Loan Amount</td>
                                  <td className="text-primary">
                                    {Loaned && Loaned.amount}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Interest Rate</td>
                                  <td className="text-primary">
                                    {Loaned && Loaned.interest_rate}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Processing Fees</td>
                                  <td className="text-primary">
                                    {Loaned && Loaned.processing_fee_rate}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <tbody>
                                <tr>
                                  <td>Insurance Rate</td>
                                  <td className="text-primary">
                                    {Loaned && Loaned.insurance_rate}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Fine Rate</td>
                                  <td className="text-primary">
                                    {Loaned && Loaned.fine_rate}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Laon duration</td>
                                  <td className="text-primary">
                                    {Loaned && Loaned.duration}
                                  </td>
                                </tr>
                                <tr>
                                  <td>date requested </td>
                                  <td className="text-primary">
                                    {Loaned && Loaned.date_requested}
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
          </div>
          <div className="row">
            <div className="card">
              <div className="col-lg-12">
                <div className="col-12">
                  <div className="card custom-card card-dashboard-calendar pb-0">
                    <label className="main-content-label mb-2 pt-1">
                      Loan proportions
                    </label>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <thead>
                                <tr>
                                  <th>date</th>
                                  <th>amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Requested Amount</td>
                                  <td className="text-primary">
                                    {Loaned && Loaned.amount}
                                  </td>
                                </tr>

                                <tr>
                                  <td> Loan Interest </td>
                                  <td className="text-primary">
                                    {Loaned &&
                                      (Loaned.amount * Loaned.interest_rate) /
                                        100}
                                  </td>
                                </tr>
                                <tr>
                                  <td>Loan paid</td>
                                  <td className="text-primary">
                                    {Loaned && Loaned.loan_paid}
                                  </td>
                                </tr>
                                <tr>
                                  <td>loan balance </td>
                                  <td className="text-primary">
                                    {Loaned && Loaned.loanBalance}
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
          </div>

          <div className="row">
            <div className="card">
              <div className="col-lg-12">
                <div className="col-12">
                  <div className="card custom-card card-dashboard-calendar pb-0">
                    <label className="main-content-label mb-2 pt-1">
                      loan payment schedule
                    </label>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <div className="table-responsive">
                            <table className="table card-table text-nowrap table-bordered border-top">
                              <thead>
                                <tr>
                                  <th>date</th>
                                  <th>installments</th>
                                  <th>Balance</th>
                                </tr>
                              </thead>
                              <tbody>
                                {Array.isArray(shedule) &&
                                  shedule.map((item, key) => (
                                    <tr key={key}>
                                      <td>{item.date_expected}</td>
                                      <td>{item.installment}</td>
                                      <td>{item.balance}</td>
                                    </tr>
                                  ))}
                                {!Array.isArray(shedule) && (
                                  <tr>
                                    <td>
                                      <p>No shedule generated forthis loan</p>
                                    </td>
                                  </tr>
                                )}
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
      </SystemModal>
    </div>
  );
}

export default LoanSlip;
