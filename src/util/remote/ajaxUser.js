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
  async fetchSingleUser(id) {
    let response = await apiCall("user_single_user", id);

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
  // ==============================================================================
  async getUserPermissionCodes(userId) {
    let data = {
      user_id: userId,
    };

    let response = await apiCall("user/permission/codes", data);
    return response;
  },

  async updateUser(data) {
    let response = await apiCall("user/update", data);
    return response;
  },

  async updatePassword(user_id, old_password, new_password) {
    let data = {
      user_id: user_id,
      old_password: old_password,
      new_password: new_password,
    };
    let response = await apiCall("password/update", data);
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
