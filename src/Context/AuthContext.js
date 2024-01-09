import React, {useEffect, useState} from "react";
import functions from "../util/functions";
import ajaxUser from "../util/remote/ajaxUser";

const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = (props) => {
  const [userId, setUserId] = useState(functions.sessionGuard());
  const [permissionLists, setPermissionList] = useState([]);
  const [user, setUser] = useState(false);
  // const data = {id: userId};
  var data = {
    user_id: userId,
  };
  const getUserAccess = async () => {
    if (!userId) {
      return false;
    }
    // //console.log(userId);

    const server_response = await ajaxUser.getUserPermissionCodes(data);

    if (server_response.status === "OK") {
      setPermissionList(server_response.details);
    } else {
      // alert("Something went wrong loading YEXP, check your connection or contact system admin")
    }
  };

  const getUserInfo = async () => {
    const server_response = await ajaxUser.fetchSingleUser(data);

    if (server_response.status === "OK") {
      setUser(server_response.details);
    } else {
      // alert("Something went wrong loading YEXP, check your connection or contact system admin")
    }
  };
  useEffect(() => {
    getUserAccess();
    getUserInfo();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        userId,
        permissionLists,
        getUserInfo,
        getUserAccess,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
