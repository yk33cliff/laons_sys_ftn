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
  async fetchUserList(data) {
    let response = await apiCall("user/list", data);
    return response;
  },

  async getUserPermissionCodes(userId) {
    let data = {
      user_id: userId,
    };

    let response = await apiCall("user/permission/codes", data);
    return response;
  },
  async createUser(
    role_id,
    first_name,
    last_name,
    username,
    password,
    email,
    nin,
    district
  ) {
    let data = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
      email: email,
      nin: nin,
      role_id: role_id,
      district: district,
    };
    let response = await apiCall("user/create", data);

    return response;
  },
  async updateUser(
    user_id,
    role_id,
    first_name,
    last_name,
    username,
    email,
    nin,
    district,
    team_id
  ) {
    let data = {
      user_id: user_id,
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      nin: nin,
      role_id: role_id,
      district: district,
      team_id: team_id,
    };
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
  async getUserList(data) {
    let response = await apiCall("user/list", data);
    return response;
  },
  async fetchUserNumber(data) {
    let response = await apiCall("user/count", data);
    return response;
  },
  async fetchUserProfile(id) {
    let data = {
      id: id,
    };
    let response = await apiCall("user/profile", data);

    return response;
  },
  async fetchSingleUser(id) {
    let data = {
      user_id: id,
    };
    let response = await apiCall("user/list/single", data);

    return response;
  },

  async fetchSalesReps(data) {
    let response = await apiCall("user/list/salesrep", data);

    return response;
  },

  async fetchDevelopers(data) {
    let response = await apiCall("user/list/developer", data);

    return response;
  },
};
