import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import functions from "../../util/functions";
import useStateCallback from "../../util/customHooks/useStateCallback";
import ChangePassword from "../Users/ChangePassword";

import dictionary from "../../util/dictionary";
import ClientContext from "../../Context/ClientContext";
import Select from "react-select";
export default function Header() {
  const navigate = useNavigate();
  const {clientList} = useContext(ClientContext);
  const [client, setClient] = useState("");
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

  const handle_search = (e) => {
    e.preventDefault();
    if (client) {
      navigate(`/profile/${client}`);
      window.location.reload();
    }
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
          <div className="input-group" style={{width: "400px"}}>
            <Select
              className="col-9"
              onChange={(e) => setClient(e.id)}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              isSearchable
              options={clientList && Array.isArray(clientList) && clientList}
              value={
                clientList &&
                Array.isArray(clientList) &&
                clientList.find((value) => value.id === client)
              }
              placeholder="----search user----"
            />
            {/* <input
              type="search"
              className="form-control rounded-0"
              placeholder="Search client..."
            /> */}
            <button
              className="btn search-btn"
              type="button"
              onClick={(e) => handle_search(e)}>
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
                    <div className="input-group" style={{width: "400px"}}>
                      <Select
                        className="col-9"
                        onChange={(e) => setClient(e.id)}
                        getOptionLabel={(option) => option.name}
                        getOptionValue={(option) => option.id}
                        isSearchable
                        options={
                          clientList && Array.isArray(clientList) && clientList
                        }
                        value={
                          clientList &&
                          Array.isArray(clientList) &&
                          clientList.find((value) => value.id === client)
                        }
                        placeholder="----search user----"
                      />
                      {/* <input
              type="search"
              className="form-control rounded-0"
              placeholder="Search client..."
            /> */}
                      <button
                        className="btn search-btn"
                        type="button"
                        onClick={(e) => handle_search(e)}>
                        <i className="fe fe-search" />
                      </button>
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
