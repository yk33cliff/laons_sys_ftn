import React, {useEffect, useState} from "react";
import SystemModal from "../Common/SystemModal";
import toast from "react-hot-toast";

import AddLoanpayment from "../../Components/loans/AddLoanpayment";
import useStateCallback from "../../util/customHooks/useStateCallback";
import LoanTransactionsPageNO from "./LoanTransactionsPageNO";
import ajaxLaons from "../../util/remote/ajaxLaons";

function LoanStatement(props) {
  const id = props.id;
  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;

    window.print();
    window.location.reload();
    document.body.innerHTML = originalContents;
  };
  useEffect(() => {
    getLoanDetails();
  }, []);
  const [Loaned, setLoanded] = useState("");
  const getLoanDetails = async () => {
    var data = {id: id};
    const server_response = await ajaxLaons.getLoanDetails(data);

    if (server_response.status === "OK") {
      setLoanded(server_response.details);
    } else {
      toast.error(server_response.message);
    }
  };

  const [modal, setModal] = useStateCallback(false);

  const handleModal2 = (e) => {
    setModal(false, () =>
      setModal(
        <AddLoanpayment isOpen={true} id={id} customer={props.customer} />
      )
    );
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

  //
  //       "status": "3",
  //       "Approved_by1": "1",
  //       "Approved_name1": "Super Admin",
  //       "approver_comment1": null,
  //       "loanBalance": 0,
  //       "loan_paid": "24000",
  //       "installment_type": "monthly",
  //       "interest": 1600,
  //       "monitorin_fee": 2400,
  //       "total_fines": 0,
  //       "repay_amount": 24000,
  //       "date_activated": "2024-01-11",
  //       "deadline": "2034-01-11"

  // //console.log(Loaned);
  return (
    <div>
      <SystemModal
        title="Loan Statement"
        id="model-new-pass"
        size="xl"
        footer={RenderFooter}>
        <div className="row row-sm">
          <div className="col-lg-12 col-md-12 mx-10">
            <div
              style={{
                float: "right",
                marginBottom: "20px",
              }}
              className="col-lg-2 col-md-2">
              <div className="form-group mb-0">
                <button
                  type="button"
                  onClick={() => handleModal2()}
                  className="btn col-lg -12 rounded-50 col-md-12 btn-warning">
                  + add payment
                </button>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div
          id="printablediv"
          className="mb-4 "
          style={{
            marginBottom: "20px",
            padding: "20px",
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
          {/* Row */}
          <div className="row row-sm">
            <div className="card custom-card  col-lg-12 col-md-12 col-xl-12 pt-4">
              {modal}
              <div className="">
                <h3 className="text-center">SERENITY MICROFINANCE LIMITED</h3>

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

              <div className="row">
                <div className="col-xl-12 mt-4">
                  <div className="card">
                    <div className="card-body p-0">
                      <div className="d-flex p-3">
                        <div className="col-lg-6">
                          <h6 className="float-start main-content-label mb-0 mt-2">
                            Customer's details
                          </h6>

                          <table className="table mb-0 border-top table-bordered text-nowrap">
                            <tbody>
                              <tr>
                                <th scope="row">Name</th>
                                <td>
                                  {Loaned &&
                                    Loaned.customer_id.names.first_name}{" "}
                                  &nbsp;
                                  {Loaned && Loaned.customer_id.names.last_name}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Contact</th>
                                <td>
                                  +{Loaned && Loaned.customer_id.names.contact}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Email</th>
                                <td>
                                  {Loaned && Loaned.customer_id.names.email}
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

              <>
                {/* Row*/}
                <div className="row row-sm">
                  <div className="col-xl-12">
                    <LoanTransactionsPageNO id={id} />
                  </div>
                </div>
                {/* Row End */}
              </>
              {/* {"Loan_id": "1",
        "loan_type": "school fees",
        "amount": "20000",
        "duration": "120",
        "interest_rate": "2",
        "processing_fee_rate": "1.5",
        "insurance_rate": "1.8",
        "monitoring_fees": "3",
        "cashing_method": "mm",
        "fine_rate": "10",
        "date_requested": "2024-01-10",
        
        "status": "3",
        "Approved_by1": "1",
        "Approved_name1": "Super Admin",
        "approver_comment1": null,
        "loanBalance": 0,
        "loan_paid": "24000",
        "installment_type": "monthly",
        "interest": 1600,
        "monitorin_fee": 2400,
        "total_fines": 0,
        "repay_amount": 24000,
        "date_activated": "2024-01-11",
        "deadline": "2034-01-11"} */}

              <div className="row row-sm ">
                <div className="col-lg-12 col-md-12 col-xl-12">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-xl-4 col-sm-4"></div>
                    <div className="col-lg-4 col-md-4 col-xl-4 col-sm-4">
                      {" "}
                      <table className="table mb-0 border-top table-bordered text-nowrap">
                        <tbody>
                          <tr>
                            <th scope="row">interest rate</th>
                            <td>{Loaned && Loaned.interest_rate}%</td>
                          </tr>
                          <tr>
                            <th scope="row">monitoring_fees rate</th>
                            <td>{Loaned && Loaned.monitoring_fees}%</td>
                          </tr>
                          <tr>
                            <th scope="row">fines rate</th>
                            <td>{Loaned && Loaned.fine_rate}%</td>
                          </tr>
                          {/* <tr>
                            <th scope="row">Installments Number</th>
                            <td>{Loaned && Loaned.fine_rate}%</td>
                          </tr>
                          <tr>
                            <th scope="row">Installments paid</th>
                            <td>3</td>
                          </tr> */}
                          <tr>
                            <th scope="row">period of payment</th>
                            <td>{Loaned && Loaned.duration}(days)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xl-2 col-sm-2">
                      {" "}
                      <table className="table  border-top table-bordered text-nowrap">
                        <tbody>
                          <tr>
                            <th scope="row">Loan payments made</th>
                            <td>{Loaned && Loaned.loan_paid}</td>
                          </tr>
                          <tr>
                            <th scope="row">Loan fines</th>
                            <td>{Loaned && Loaned.total_fines}</td>
                          </tr>
                          <tr>
                            <th scope="row">Loan balance</th>
                            <td>{Loaned && Loaned.loanBalance}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </SystemModal>
    </div>
  );
}

export default LoanStatement;
