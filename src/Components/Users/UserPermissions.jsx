import React, {useEffect, useState} from "react";
import AppContainer from "../Structure/AppContainer";

import {useParams} from "react-router-dom";
import ajaxLaons from "../../util/remote/ajaxLaons";
import Permissions from "./Permissions";
import AllocatePermissions from "./AllocatePermissions";

function UserPermissions(props) {
  var {id} = useParams();

  return (
    <div>
      <AppContainer title="permissions mannagement">
        <>
          {/* Row*/}
          <div className="row row-sm">
            <div className="col-xl-8 col-lg-8 col-md-8">
              <div className="card custom-card overflow-hidden crypto-buysell-card">
                <div className="card-body">
                  <div className="card-header border-bottom-0 ps-0 pt-0">
                    <p className="main-content-label my-auto">
                      <i> Loan Summary </i>
                    </p>
                    <div className="row">
                      <div className="col-12">
                        <Permissions />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="card custom-card overflow-hidden crypto-buysell-card">
                <div className="card-body">
                  <div className="card-header border-bottom-0 ps-0 pt-0">
                    <p className="main-content-label my-auto">
                      <i> Allocate permission to a user </i>
                    </p>
                    <div className="row">
                      <div className="col-12">
                        <AllocatePermissions />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </AppContainer>
    </div>
  );
}

export default UserPermissions;
