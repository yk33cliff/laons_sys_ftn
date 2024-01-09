import React, {useContext, useState} from "react";
import AppContainer from "../Structure/AppContainer";
import LoanTypesList from "./LoanTypesList";
// import ajaxLoanTypes from "../../util/remote/ajaxLoanTypes";

import toast, {Toaster} from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";
import LoanTypesContext from "../../Context/LoanTypesContext";
import {RenderSecure} from "../../util/script/RenderSecure";

function LoanTYpes() {
  const {LoanTypes, getLoanList} = useContext(LoanTypesContext);
  const [loan, setLoan] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [months, setMonths] = useState("");
  const [intrest, setIntrest] = useState("");
  const [processing, setProcessing] = useState("");

  const [fine, setFine] = useState("");
  const [insur, setInsur] = useState("");
  const [application, setApplication] = useState("");
  const [monitoring, setMonitoring] = useState("");

  const handler = async (e) => {
    e.preventDefault();
    if (
      loan.length > 0 &&
      max.length > 0 &&
      months.length > 0 &&
      intrest.length > 0 &&
      processing.length > 0 &&
      min.length > 0 &&
      max.length > 0 &&
      monitoring.length > 0 &&
      application.length > 0
    ) {
      const data = {
        name: loan,
        duration: months,
        max_amount: max,
        Interest_rate: intrest,
        processing_fee: processing,
        fine: fine,
        min: min,
        insurance: insur,
        application: application,
        monitoring: monitoring,
      };

      const server_response = await ajaxLaons.createLoanType(data);

      if (server_response.status === "OK") {
        toast.success(server_response.message);

        // Reset form fields
        setLoan("");
        setMax("");
        setMin("");
        setMonths("");
        setIntrest("");
        setProcessing("");
        setFine("");
        setInsur("");
        getLoanList();
        setApplication("");
        setMonitoring("");
      } else {
        toast.error(server_response.message);
        //console.log(server_response.status);
      }
    } else {
      toast.error("Fill all the required fields");
    }
  };

  return (
    <div>
      <AppContainer title="loan types">
        <RenderSecure code="CRT-TYPE">
          <div className="row row-sm">
            <div className="col-lg-12 col-md-12">
              <div className="card custom-card">
                <div className="card-body">
                  <div>
                    <h5 className="main-content-label mb-1">
                      create loan type
                    </h5>
                    <br />
                  </div>
                  <Toaster />
                  <form action="" className="" onSubmit={handler}>
                    <div className="row row-sm">
                      <div className="form-group col-md-6">
                        <p className="mg-b-10">Loan Name</p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="loan name e.g fees laon"
                          value={loan}
                          onChange={(e) => setLoan(e.target.value)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <p className="mg-b-10">Maximum Amount Allowed</p>
                        <input
                          type="text"
                          className="form-control"
                          value={max}
                          onChange={(e) => setMax(e.target.value)}
                          placeholder="maximum amount allowed on the loan"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <p className="mg-b-10">minimum Amount Allowed</p>
                        <input
                          type="text"
                          className="form-control"
                          value={min}
                          onChange={(e) => setMin(e.target.value)}
                          placeholder="minmum amount allowed on the loan"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <p className="mg-b-10">maximum duration (in days)</p>
                        <input
                          type="text"
                          className="form-control"
                          value={months}
                          onChange={(e) => setMonths(e.target.value)}
                          placeholder="maximum months or weeks allowed for the loan"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <p className="mg-b-10">Interest rate</p>
                        <input
                          type="text"
                          className="form-control"
                          value={intrest}
                          onChange={(e) => setIntrest(e.target.value)}
                          placeholder="number e.g 2  as a percentage"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <p className="mg-b-10">Monitoring Fees Rate</p>
                        <input
                          type="text"
                          className="form-control"
                          value={monitoring}
                          onChange={(e) => setMonitoring(e.target.value)}
                          placeholder="number e.g 2  as a percentage"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <p className="mg-b-10">processing fee rate</p>
                        <input
                          type="text"
                          className="form-control"
                          value={processing}
                          onChange={(e) => setProcessing(e.target.value)}
                          placeholder="number e.g 2  as a percentage"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <p className="mg-b-10">Application fees rate</p>
                        <input
                          type="text"
                          className="form-control"
                          value={application}
                          onChange={(e) => setApplication(e.target.value)}
                          placeholder="number e.g 2  as a percentage"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <p className="mg-b-10">penalty fees rate</p>
                        <input
                          type="text"
                          className="form-control"
                          value={fine}
                          onChange={(e) => setFine(e.target.value)}
                          placeholder="number e.g 2  as a percentage of the loan "
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <p className="mg-b-10">insurance rate</p>
                        <input
                          type="text"
                          className="form-control"
                          value={insur}
                          onChange={(e) => setInsur(e.target.value)}
                          placeholder="number e.g 2  as a percentage of the loan "
                        />
                      </div>

                      <div className="col-md-12 ">
                        <div className="form-group mb-0">
                          <button
                            type="submit"
                            className="btn col-lg -12 col-md-12 btn-primary">
                            Save Loan Type
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
        {/* <!-- End Row --> */}
        <div className="row row-sm">
          <div className="col-lg-12 col-md-12">
            <LoanTypesList />
          </div>
        </div>
      </AppContainer>
    </div>
  );
}

export default LoanTYpes;
