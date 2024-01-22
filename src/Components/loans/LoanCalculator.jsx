import React, {useContext, useEffect, useState} from "react";
import SystemModal from "../Common/SystemModal";
import toast, {Toaster} from "react-hot-toast";
import ajaxLaons from "../../util/remote/ajaxLaons";
import LoanTypesContext from "../../Context/LoanTypesContext";
import Select from "react-select";
import useStateCallback from "../../util/customHooks/useStateCallback";
import LoanSheet from "./LoanSheet";

function LoanCalculator(props) {
  const {LoanTypes} = useContext(LoanTypesContext);
  const [loan, setLoan] = useState("");
  const [monitoring, setMonitoring] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [installment, setInstallment] = useState("");
  const [duration, setDuration] = useState("");
  const [amount, setAmount] = useState("");
  const [application_rate, setApplication_rate] = useState("");
  const [processingFees, setProcessingFees] = useState("");
  const [insurance, setInsurance] = useState("");

  useEffect(() => {
    get_loan_type_variables();
  }, [loan]);

  const get_loan_type_variables = () => {
    if (loan.length > 0) {
      if (Array.isArray(LoanTypes)) {
        LoanTypes.forEach((value) => {
          if (value.id === loan) {
            setInterestRate(value.interest_rate);
            setMonitoring(value.monitoring);
            setProcessingFees(value.processing_fee_rate);
            setApplication_rate(value.application_rate);
            setInsurance(value.insurance);
          }
        });
      }
    }
  };

  // const isDaysDivisible = (daysInPeriod, interval) => {
  //   switch (interval) {
  //     case "daily":
  //       return true; // Any number of days is divisible by daily
  //     case "weekly":
  //       return daysInPeriod % 7 === 0;
  //     case "fortnight":
  //       return daysInPeriod % 14 === 0;
  //     case "monthly":
  //       // Note: This is a basic check and may not cover all cases due to varying month lengths
  //       return daysInPeriod % 30 === 0;
  //     default:
  //       return false;
  //   }
  // };

  const [sheet, Setsheet] = useStateCallback(false);
  const Handle_reciept = (rates, data) => {
    Setsheet(false, () =>
      Setsheet(<LoanSheet isOpen={true} data={data} rates={rates} />)
    );
  };

  const handler = async (e) => {
    e.preventDefault();

    // if (!isDaysDivisible(duration, installment)) {
    //   alert(
    //     "number of days selected is not divisible with the selected payment plan"
    //   );
    //   return false;
    // }

    if (
      loan.length > 0 &&
      monitoring.length > 0 &&
      interestRate.length > 0 &&
      installment.length > 0 &&
      amount.length > 0 &&
      insurance.length > 0 &&
      processingFees.length > 0 &&
      application_rate.length > 0 &&
      duration.length > 0
    ) {
      var data = {
        loan: loan,
        monitoring: monitoring,
        interestRate: interestRate,
        installment: installment,
        amount: amount,
        duration: duration,
        insurance: insurance,
        processingFees: processingFees,
        application_rate: application_rate,
      };

      const server_response = await ajaxLaons.LoanCalculator(data);
      if (server_response.status === "OK") {
        toast.success(server_response.message);
        Handle_reciept(server_response.details, data);
      } else {
        toast.error(server_response.message);
      }
    } else {
      toast.error("Fill all the fields, they are mandatory");
    }
  };

  const RenderFooter = (controls) => {
    return (
      <>
        <button
          className="btn ripple btn-dark"
          type="button"
          onClick={controls.close}>
          Close
        </button>
        <button
          type="button"
          className={`btn ripple btn-success`}
          onClick={handler}>
          calculate
        </button>
      </>
    );
  };
  return (
    <div>
      <SystemModal
        title="Loan  Calcutator"
        id="model-update-cross"
        size="md"
        footer={RenderFooter}>
        <Toaster />
        {sheet}
        <div className="mb-4">
          <label htmlFor="">Loan Type</label>
          <Select
            onChange={(e) => setLoan(e.id)}
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            isSearchable
            options={Array.isArray(LoanTypes) && LoanTypes}
            value={
              LoanTypes &&
              Array.isArray(LoanTypes) &&
              LoanTypes.find((value) => value.id === loan)
            }
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Loan Amount</label>
          <input
            type="text"
            className="form-control"
            placeholder="amount of the loan"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Duration </label>
          <input
            type="text"
            className="form-control"
            placeholder="desired duration but divisible with the selected installment"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <p className="mg-b-10">Select Installments</p>
          <select
            name=""
            id=""
            className="form-control col-12"
            value={installment}
            onChange={(e) => setInstallment(e.target.value)}>
            <option value="" selected disabled>
              -----select payment plan------
            </option>
            <option value="daily">daily</option>
            <option value="weekly">weekly</option>
            <option value="fortnight">fortnight</option>
            <option value="monthly">monthly</option>
          </select>
        </div>
        {loan && (
          <div className="mb-4">
            <label htmlFor="">Interest Rates</label>
            <input
              type="text"
              className="form-control"
              placeholder="interest rate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
        )}
        {loan && (
          <div className="mb-4">
            <label htmlFor="">Monitoring Fees Rate</label>
            <input
              type="text"
              className="form-control"
              placeholder="monitoring fees rate"
              value={monitoring}
              onChange={(e) => setMonitoring(e.target.value)}
            />
          </div>
        )}
        {loan && (
          <div className="mb-4">
            <div className="form-group">
              <label className="mg-b-10">Application Rate</label>
              <input
                type="text"
                className="form-control text-success"
                placeholder="Application fees rate"
                value={application_rate}
                onChange={(e) => setApplication_rate(e.target.value)}
              />
            </div>
          </div>
        )}
        {loan && (
          <div className="mb-4">
            <div className="form-group">
              <label className="mg-b-10">Processing Fees</label>
              <input
                type="text"
                className="form-control text-success"
                name="processingFees"
                placeholder="Processing fees"
                value={processingFees}
                onChange={(e) => setProcessingFees(e.target.value)}
              />
            </div>
          </div>
        )}
        {loan && (
          <div className="mb-4">
            <div className="form-group">
              <label className="mg-b-10">insurance Rate</label>
              <input
                type="text"
                className="form-control text-success"
                name="insurance rate"
                placeholder="insurance rate"
                // readOnly
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
              />
            </div>
          </div>
        )}
      </SystemModal>
    </div>
  );
}

export default LoanCalculator;
