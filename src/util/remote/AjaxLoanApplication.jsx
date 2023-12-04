import apiCall from "./apiCall";

export default {
  async AddLoanApplication(
    name,
    duration,
    max_amount,
    Interest_rate,
    processing_fee
  ) {
    let data = {
      name: name,
      duration: duration,
      max_amount: max_amount,
      Interest_rate: Interest_rate,
      processing_fee: processing_fee,
    };
    let response = await apiCall("createLoanType", data);
    return response;
  },
  async viewLoanType() {
    let response = await apiCall("ListLoanTypes", data);
    return response;
  },
};
