import apiCall from "./apiCall";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async loginUser(username, password) {
    let data = {
      username: username,
      password: password,
    };
    let response = await apiCall("login", data);
    return response;
  },

  async getUserList(data) {
    let response = await apiCall("user_list", data);
    return response;
  },

  async createUser(data) {
    let response = await apiCall("user_create", data);
    return response;
  },
  async fetchSingleUser(data) {
    let response = await apiCall("user_single_user", data);

    return response;
  },
  async fetchCustomers() {
    let response = await apiCall("get_all_customers");

    return response;
  },
  async updateUserProfile(data) {
    let response = await apiCall("client_profile_update", data);
    return response;
  },
  async viewsysuser_profile(data) {
    let response = await apiCall("sysUser/profile/view", data);
    return response;
  },
  async getUserPermissionCodes(data) {
    let response = await apiCall("user/permission/codes", data);
    return response;
  },
  async AddclientNextOfKin(data) {
    let response = await apiCall("Client/next_of_kin/add", data);
    return response;
  },
  async fetchNextOfKindata(data) {
    let response = await apiCall("Client/next_of_kin/get/forUSer", data);
    return response;
  },
  async UpdateNextOfKin(data) {
    let response = await apiCall("Client/next_of_kin/add/update", data);
    return response;
  },
  async AddWalletCashToUser(data) {
    let response = await apiCall("cutomer/wallet/cash/deposite", data);
    return response;
  },
  async ActivateAccount(data) {
    let response = await apiCall("user/account/activate", data);
    return response;
  },
  // ==============================================================================

  async updateUser(data) {
    let response = await apiCall("user/update", data);
    return response;
  },

  async updatePassword(data) {
    let response = await apiCall("password/update", data);
    //console.log(data.id);
    return response;
  },

  async fetchUserNumber(data) {
    let response = await apiCall("user/count", data);
    return response;
  },

  async fetchSupervisorsNumber(data) {
    let response = await apiCall("user/count/supervisors", data);
    return response;
  },

  async fetchProjectManagersNumber(data) {
    let response = await apiCall("user/count/projectmanagers", data);
    return response;
  },

  async fetchDevelopersNumber(data) {
    let response = await apiCall("user/count/developers", data);
    return response;
  },

  async fetchUserProfile(id) {
    let data = {
      id: id,
    };
    let response = await apiCall("user/profile", data);
    return response;
  },

  async updatePasswordByAdmin(user_id) {
    let data = {
      user_id: user_id,
    };
    let response = await apiCall("password/update/admin", data);
    return response;
  },
  async disableUser(user_id) {
    let data = {
      user_id: user_id,
    };
    let response = await apiCall("user/disable", data);
    return response;
  },
  async enableUser(user_id) {
    let data = {
      user_id: user_id,
    };
    let response = await apiCall("user/enable", data);
    return response;
  },
};
