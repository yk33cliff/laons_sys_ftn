import React from "react";

import Header from "./Header";
import PageHeader from "./PageHeader";
import Sidebar from "./Sidebar";

export default function AppContainer(props) {
  return (
    <>
      <div>
        {/* LOADEAR */}
        {/* <div id="global-loader">
          <img
            src="https://php.spruko.com/spruha/spruha/assets/img/loader.svg"
            className="loader-img"
            alt="Loader"
          />
        </div> */}
        {/* END LOADEAR */}
        {/* PAGE */}
        <div className="page">
          {/* HEADER */}
          <Header />
          {/* END HEADER */}
          {/* SIDEBAR */}

          <Sidebar />

          {/* END SIDEBAR */}
          {/* MAIN-CONTENT */}
          <div className="main-content side-content pt-0">
            <div className="main-container container-fluid">
              <div className="inner-body">
                {/* Page Header */}
                <br />
                <br />
                <PageHeader title={props.title} />
                {/* End Page Header */}
                {/*Row*/}

                {/*Row*/}

                {props.children}
                {/*End row*/}

                {/* Row end */}
              </div>
            </div>
          </div>
          {/* END MAIN-CONTENT */}
          {/* RIGHT-SIDEBAR */}

          {/* END RIGHT-SIDEBAR */}
          {/* FOOTER */}
          <div className="main-footer text-center">
            <div className="container">
              <div className="row row-sm">
                <div className="col-md-12">
                  <span>
                    Copyright © {new Date().getFullYear()}
                    &nbsp;
                    <a href="https://www.wisecliffed.com/" target="blank">
                      {" "}
                      ARAKNERD COMPANY LIMITED
                    </a>
                    &nbsp; All rights reserved.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* END FOOTER */}
        </div>
        {/* END PAGE */}
      </div>
    </>
  );
}
