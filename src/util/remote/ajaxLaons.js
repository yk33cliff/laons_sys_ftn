import apiCall from "./apiCall";
/**
 * deals with loan application,  processing
 */
export default {
  async CreateLoanApplication(data) {
    let response = await apiCall("Loan_application_add", data);
    return response;
  },
  async fetchLoanTypeList(data) {
    let response = await apiCall("Loan_types_list", data);
    return response;
  },
};
