import React from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import {useParams} from "react-router-dom";

function ClientProfile(props) {
  const {id} = useParams();
  return (
    <div>
      <AppContainer title="user profile">
        <div className="ro">
          cliffed
          {id}
        </div>
      </AppContainer>
    </div>
  );
}

export default ClientProfile;
