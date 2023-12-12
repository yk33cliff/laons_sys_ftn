import apiCall from "./apiCall";
/**
 * deals with loan application,  processing
 */
export default {
  async createLoanType(data) {
    let response = await apiCall("Loan_create_type", data);
    return response;
  },
  async fetchLoanTypeList(data) {
    let response = await apiCall("Loan_types_list", data);
    return response;
  },
  async UpdateLoanType(data) {
    let response = await apiCall("Loan_update_type", data);
    return response;
  },
  async CreateLoanApplication(data) {
    let response = await apiCall("Loan_application_add", data);
    return response;
  },
  async ViewUsersLoans(data) {
    let response = await apiCall("get_user_loans", data);
    return response;
  },
};
