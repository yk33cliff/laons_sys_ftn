import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock} from "@fortawesome/free-solid-svg-icons";
import functions from "../../util/functions";
import useStateCallback from "../../util/customHooks/useStateCallback";
import ChangePassword from "../Users/ChangePassword";
import {Modal} from "bootstrap";
import dictionary from "../../util/dictionary";

export default function Header() {
  const [modal, setModal] = useStateCallback(false);
  const nav = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("logs@user");
    nav("/");
    window.location.reload();
  };
  const user = functions.sessionGuard();

  const handle_model = () => {
    setModal(false, () =>
      setModal(<ChangePassword isOpen={false} id={user} set />)
    );
  };
  return (
    <div className="main-header side-header sticky">
      <div className="main-container container-fluid">
        <div className="main-header-left">
          <a
            className="main-header-menu-icon"
            href="javascript:void(0);"
            id="mainSidebarToggle">
            <span />
          </a>
          {modal}
          {/* <div className="hor-logo">
            <a className="main-logo" href="/Dashboard/home">
              <img
                src="../assets/img/brand/logo.png"
                className="header-brand-img desktop-logo"
                alt="logo"
              />
              <img
                src="../assets/img/brand/logo-light.png"
                className="header-brand-img desktop-logo-dark"
                alt="logo"
              />
            </a>
          </div> */}
        </div>
        <div className="main-header-center">
          <div className="responsive-logo">
            <a href="/Dashboard/home">
              <img
                src="../assets/img/brand/logo.png"
                className="mobile-logo"
                alt="logo"
              />
            </a>
            <a href="/Dashboard/home">
              {/* <img
                src="../assets/img/brand/logo-light.png"
                className="mobile-logo-dark"
                alt="logo"
              /> */}
            </a>
          </div>
          <div className="input-group">
            <input
              type="search"
              className="form-control rounded-0"
              placeholder="Search client..."
            />
            <button className="btn search-btn">
              <i className="fe fe-search" />
            </button>
          </div>
        </div>
        <div className="main-header-right">
          <button
            className="navbar-toggler navresponsive-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent-4"
            aria-controls="navbarSupportedContent-4"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fe fe-more-vertical header-icons navbar-toggler-icon" />
          </button>
          {/* Navresponsive closed */}
          <div className="navbar navbar-expand-lg nav nav-item navbar-nav-right responsive-navbar navbar-dark">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent-4">
              <div className="d-flex order-lg-2 ms-auto">
                {/* Search */}
                <div className="dropdown header-search">
                  <a className="nav-link icon header-search">
                    <i className="fe fe-search header-icons" />
                  </a>
                  <div className="dropdown-menu">
                    <div className="main-form-search p-2">
                      <div className="input-group">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search customer..."
                        />
                        <button className="btn search-btn">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-search">
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Search */}
                {/* Theme-Layout */}
                <div className="dropdown d-flex main-header-theme">
                  <a className="nav-link icon layout-setting">
                    <span className="dark-layout">
                      <i className="fe fe-sun header-icons" />
                    </span>
                    <span className="light-layout">
                      <i className="fe fe-moon header-icons" />
                    </span>
                  </a>
                </div>
                {/* Theme-Layout */}

                {/* Full screen */}
                <div className="dropdown">
                  <a className="nav-link icon full-screen-link">
                    <i className="fe fe-maximize fullscreen-button fullscreen header-icons" />
                    <i className="fe fe-minimize fullscreen-button exit-fullscreen header-icons" />
                  </a>
                </div>
                {/* Full screen */}

                {/* Messages */}

                {/* Messages */}
                {/* Profile */}
                <div className="dropdown main-profile-menu">
                  <a className="d-flex" href="javascript:void(0);">
                    <span className="main-img-user">
                      <img
                        alt="avatar"
                        src={dictionary.apiHost + "img/avatar.png"}
                      />
                    </span>
                  </a>
                  <div className="dropdown-menu">
                    <div className="header-navheading">
                      <h6 className="main-notification-title">sys user</h6>
                      <p className="main-notification-text"> role me</p>
                    </div>
                    <a className="dropdown-item border-top" href="profile.html">
                      <i className="fe fe-user" /> My Profile
                    </a>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={handle_model}>
                      <i className="fe fe-edit" /> Edit password
                    </a>

                    <a className="dropdown-item" onClick={onLogout} href="#">
                      <i className="fe fe-power" /> Sign Out
                    </a>
                  </div>
                </div>
                {/* Profile */}
              </div>
            </div>
          </div>
          <div className="d-flex header-setting-icon demo-icon fa-spin">
            <a className="nav-link icon" href="javascript:void(0);">
              <i className="fe fe-settings settings-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
