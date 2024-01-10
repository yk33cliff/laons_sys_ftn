import React from "react";
import {Link} from "react-router-dom";
import {RenderSecure} from "../../util/script/RenderSecure";

const Sidebar = (props) => {
  const hrefggleDropdown = (e) => {
    // e.preventDefault();
    // hrefggle the "show" class on the main menu item
    if (e.target.parentElement.classList.contains("show ")) {
      e.target.parentElement.classList.remove("show");
    } else {
      e.target.parentElement.classList.add("show");
    }

    // Display submenu items as blocks
    const submenu = e.target.nextElementSibling;
    if (submenu) {
      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    }
    // submenu.classList.contains("show");
  };
  return (
    <div>
      {/* SIDEBAR */}
      <div className="sticky">
        <div className="main-menu main-sidebar main-sidebar-sticky side-menu">
          <div className="main-sidebar-header main-container-1 active">
            <div
              className="sidemenu-logo "
              style={{borderBottomRightRadius: "18px"}}>
              <a
                className="main-logo"
                href="/Dashboard/home"
                style={{borderBottomRightRadius: "25px"}}>
                <img
                  src="../assets/img/brand/logo-light.png"
                  className="header-brand-img deskhrefp-logo"
                  alt="logo"
                  style={{
                    height: "60px",
                    width: "300px",
                    borderRadius: "20px",
                  }}
                />
                {/* <img
                  src="../assets/img/brand/icon-light.png"
                  className="header-brand-img icon-logo"
                  alt="logo"
                /> */}
                {/* <img
                  src="../assets/img/brand/logo.png"
                  className="header-brand-img deskhrefp-logo theme-logo"
                  alt="logo"
                /> */}
                {/* <img
                  src="../assets/img/brand/icon.png"
                  className="header-brand-img icon-logo theme-logo"
                  alt="logo"
                /> */}
              </a>
            </div>
            <div className="main-sidebar-body main-body-1">
              <div className="slide-left disabled" id="slide-left">
                <i className="fe fe-chevron-left" />
              </div>
              <ul className="menu-nav nav">
                <li className="nav-item">
                  <a className="nav-link" href="/Dashboard/home">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-home sidemenu-icon menu-icon" />
                    <span className="sidemenu-label"> Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Loans/types">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-home sidemenu-icon menu-icon" />
                    <span className="sidemenu-label"> Loan Types</span>
                  </a>
                </li>
                <li className="nav-item" onClick={hrefggleDropdown}>
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    {/* <i class="fa-sharp fa-solid fa-cow"></i> */}
                    <i className="ti-write sidemenu-icon menu-icon" />
                    <span className="sidemenu-label">
                      Loans
                      <span className="sidemenu-label2"> aplications</span>
                    </span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <RenderSecure code="ADD-LOAN">
                      <li className="nav-sub-item">
                        <a className="nav-sub-link" href="/applications/add">
                          Add applications
                        </a>
                      </li>
                    </RenderSecure>
                    <RenderSecure code="LOANS-VIEW">
                      <li className="nav-sub-item">
                        <a className="nav-sub-link" href="/Applications/View">
                          View Applications
                        </a>
                      </li>
                    </RenderSecure>
                  </ul>
                </li>
                {/* <RenderSecure code="VIEW-USER"> */}
                {/* <li className="nav-item">
                  <a className="nav-link" href="/applications/add">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-book sidemenu-icon menu-icon" />
                    <span className="sidemenu-label"> Loan applications</span>
                  </a>
                </li> */}
                {/* </RenderSecure> */}
                <li className="nav-item" onClick={hrefggleDropdown}>
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-shopping-cart-full sidemenu-icon menu-icon" />
                    <span className="sidemenu-label">Loans</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1">
                      <a href="javascript:void(0)">Loans</a>
                    </li>
                    {/* <RenderSecure code="LOANS-VIEW"> */}
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/Loans/active">
                        Active Loans
                      </a>
                    </li>
                    {/* </RenderSecure> */}

                    <li className="nav-sub-item">
                      <a
                        className="nav-sub-link"
                        href="/Loans/pending_installments">
                        pending installments
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item" onClick={hrefggleDropdown}>
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-wallet sidemenu-icon menu-icon " />
                    <span className="sidemenu-label">
                      Reports
                      <span className="sidemenu-label2"></span>
                    </span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/loans/performance">
                        Loans Performance
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/loans/performance">
                        Loans Performance
                      </a>
                    </li>
                  </ul>
                </li>
                <RenderSecure code="USER-PRINT">
                  <li className="nav-item">
                    <a className="nav-link" href="/loan_reciepts/view">
                      <span className="shape1" />
                      <span className="shape2" />
                      <i className="ti-book sidemenu-icon menu-icon" />
                      <span className="sidemenu-label"> Payment Reciepts</span>
                    </a>
                  </li>
                </RenderSecure>
                <RenderSecure code="USER-PRINT">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/Approved_and_not_yet_paid/view">
                      <span className="shape1" />
                      <span className="shape2" />
                      <i className="ti-book sidemenu-icon menu-icon" />
                      <span className="sidemenu-label"> Loan cashout</span>
                    </a>
                  </li>
                </RenderSecure>
                <RenderSecure code="VIEW-USER">
                  <li className="nav-item" onClick={hrefggleDropdown}>
                    <a className="nav-link with-sub" href="javascript:void(0)">
                      <span className="shape1" />
                      <span className="shape2" />

                      <i className="ti-user sidemenu-icon menu-icon" />
                      <span className="sidemenu-label">
                        Clients
                        <span className="sidemenu-label2"></span>
                      </span>
                      <i className="angle fe fe-chevron-right" />
                    </a>
                    <ul className="nav-sub">
                      <RenderSecure code="ADD-USER">
                        <li className="nav-sub-item">
                          <a className="nav-sub-link" href="/clients/Add">
                            register client
                          </a>
                        </li>
                      </RenderSecure>
                      <RenderSecure code="VIEW-USER">
                        <li className="nav-sub-item">
                          <a className="nav-sub-link" href="/clients/view">
                            view clients
                          </a>
                        </li>
                      </RenderSecure>
                    </ul>
                  </li>
                </RenderSecure>
                <RenderSecure code="VIEW-USER">
                  <li className="nav-item">
                    <a className="nav-link" href="/users/register">
                      <span className="shape1" />
                      <span className="shape2" />
                      <i className="ti-user sidemenu-icon menu-icon" />
                      <span className="sidemenu-label"> system users</span>
                    </a>
                  </li>
                </RenderSecure>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END SIDEBAR */}
    </div>
  );
};

export default Sidebar;
