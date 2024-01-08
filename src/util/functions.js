/* eslint-disable import/no-anonymous-default-export */

//const { ipcRenderer } = window.require('electron');
//const electron = window.require('electron')
import $ from "jquery";

export default {
  parseJwt(token) {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  },

  sessionGuard() {
    // const cookies = new Cookies();
    if (!localStorage.getItem("logs@user")) {
      //window.location='/login';
      return false;
    } else {
      const access_token = localStorage.getItem("logs@user");
      const decorded_token = this.parseJwt(access_token);
      return decorded_token["data"]["user_id"];
    }
  },
  role_user() {
    // const cookies = new Cookies();
    if (!localStorage.getItem("logs@user")) {
      //window.location='/login';
      return false;
    } else {
      const access_token = localStorage.getItem("logs@user");
      const decorded_token = this.parseJwt(access_token);
      // console.log(decorded_token);
      return decorded_token["data"]["role_id"];
    }
  },
  readPermissions() {
    if (localStorage.getItem("logs@user")) {
      const access_token = localStorage.getItem("logs@user");
      const decorded_token = this.parseJwt(access_token);
      return decorded_token["data"]["permissions"]["list"];
    } else {
      return false;
    }
  },
  readUser() {
    if (localStorage.getItem("logs@user")) {
      const access_token = localStorage.getItem("logs@user");
      const decorded_token = this.parseJwt(access_token);
      return decorded_token["data"];
    } else {
      return false;
    }
  },
  checkSecureAccount() {
    if (localStorage.getItem("logs@user")) {
      const access_token = localStorage.getItem("logs@user");
      const decorded_token = this.parseJwt(access_token);
      return decorded_token["data"]["secure"];
    } else {
      return 0;
    }
  },

  db_date(objDate) {
    const month = (objDate.getMonth() + 1).toString();
    const newMonth = month.length === 1 ? "0" + month : month;

    const day = objDate.getDate().toString();
    const newDay = day.length === 1 ? "0" + day : day;

    const newDate =
      objDate.getFullYear().toString() + "-" + newMonth + "-" + newDay;
    return newDate;
  },
  simple_date() {
    const longDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const longMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const today = new Date();
    const day = today.getDate().toString();
    const newDay = day.length === 1 ? "0" + day : day;
    const date =
      longDays[today.getDay()] +
      ", " +
      newDay +
      " " +
      longMonths[today.getMonth()];
    return date;
  },

  uCfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  baseValue(value) {
    if (value < 10) {
      return 0;
    } else if (value < 20) {
      return 10;
    } else if (value < 30) {
      return 20;
    } else if (value < 40) {
      return 30;
    } else if (value < 50) {
      return 40;
    } else if (value < 60) {
      return 50;
    } else if (value < 70) {
      return 60;
    } else if (value < 80) {
      return 70;
    } else if (value < 90) {
      return 80;
    } else if (value < 100) {
      return 90;
    } else {
      return 100;
    }
  },
  handleFocus(event) {
    event.target.select();
  },
  findInObject(object, value) {
    for (var i = 0; i < object.length; i++) {
      var exists = object[i].code === value;
      if (exists) {
        return true;
      }
    }

    return false;
  },
  getSiblings(elem) {
    // Setup siblings array and get the first sibling
    var siblings = [];
    var sibling = elem.parentNode.firstChild;

    // Loop through each sibling and push to the array
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }

    return siblings;
  },
  removeClassFromElementSiblings(elem, selectorClass) {
    // Setup siblings array and get the first sibling
    var siblings = [];
    var sibling = elem.parentNode.firstChild;

    // Loop through each sibling and push to the array
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        sibling.classList.remove(selectorClass);
      }
      sibling = sibling.nextSibling;
    }
  },
  closeSystemDrawer() {
    document.getElementById("system_drawer").classList.remove("sidebar-open");
  },
  removeClassFromElements(elementClass, selectorClass) {
    // Setup siblings array and get the first sibling
    var sibling = document.getElementsByClassName(elementClass);

    for (var i = 0; i < sibling.length; i++) {
      sibling[i].classList.remove(selectorClass);
    }
  },
  closeHeaderDropdowns() {
    var sibling = document.getElementsByClassName("header-dropdown");

    for (var i = 0; i < sibling.length; i++) {
      sibling[i].classList.remove("show");
    }
  },

  hide(id) {
    document.getElementById(id).style.display = "none";
  },

  closePopup(id) {
    $("#" + id).modal("hide");
  },
  openPopup(id) {
    $("#" + id).modal("show");
  },

  printElement(ele) {
    var sOption =
      "toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes,width=300,height=600,left=100,top=25";

    var sWinHTML = document.getElementById(ele).innerHTML;
    var winprint = window.open("", "Print", sOption);
    winprint.document.open();
    winprint.document.write("<html><head>");
    winprint.document.write('<style type="text/css">');
    winprint.document.write(
      "body{font-size:13px; line-height:1.45; font-family:Arial; } \n"
    );
    winprint.document.write(".break_page{page-break-after: always; } \n");
    winprint.document.write(
      ".table{width:100%; max-width:100%; border-collapse: collapse; font-size:13px } \n"
    );
    winprint.document.write(
      ".table-bordered, .table-bordered > tbody > tr > td, .table-bordered > tbody > tr > th, .table-bordered > tfoot > tr > td, .table-bordered > tfoot > tr > th, .table-bordered > thead > tr > td, .table-bordered > thead > tr > th { border: 1px solid #F5F5F5;}"
    );
    winprint.document.write(
      ".main-item{font-weight: bold; } \n.main-sub-item{font-weight: bold;margin-left: 20px;} \n.sub-item{ margin-left: 20px !important;} .sub-sub-item{ margin-left: 40px !important;} \n.hide{display:none} \n.tx-right:{text-align: right !important;} \n.tx-left:{text-align: left !important;} \n.tx-center{text-align:center}"
    );
    winprint.document.write(
      ".table th, .table td {padding: 9px 15px !important;line-height: 1.462 !important;} th{text-align:left}"
    );
    winprint.document.write('</style></head><body onload="window.print();">');
    winprint.document.write(sWinHTML);
    winprint.document.write("</body></html>");
    winprint.document.close();
    winprint.focus();
    //winprint.close();border: 1px solid #F5F5F5;
  },

  getHost() {
    switch (process.env.REACT_APP_ENVIRONMENT) {
      case "PRODUCTION":
        return process.env.REACT_APP_PRODUCTIONURL;
      case "TEST":
        return process.env.REACT_APP_TESTURL;

      default:
        return process.env.REACT_APP_DEVELOPMENTURL;
    }
  },

  getCaptiveHost() {
    switch (process.env.REACT_APP_ENVIRONMENT) {
      case "PRODUCTION":
        return process.env.REACT_APP_PRODUCTIONURL;
      case "TEST":
        return process.env.REACT_APP_TESTURL;

      default:
        return process.env.REACT_APP_DEVELOPMENTURL;
    }
  },
};
