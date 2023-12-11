import apiCall from "./apiCall";

export default {
  /**looan types operations
   *
   */
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
  // async fetchLoanTypeList(data) {
  //   let response = await apiCall("Loan_types_list", data);
  //   return response;
  // },
  // ********************************************************

  /**
   * loans operations
   */

  // *****************************************************
};
