import React from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import ViewUsers from "../../Components/Users/ViewUsers";

function ViewSysUsers() {
  return (
    <div>
      <AppContainer title="system users">
        <ViewUsers />
      </AppContainer>
    </div>
  );
}

export default ViewSysUsers;
