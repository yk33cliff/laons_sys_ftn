import React from "react";
import { Link } from "react-router-dom";
import { RenderSecure } from "../../util/script/RenderSecure";

const Sidebar = (props) => {
  const toggleDropdown = (e) => {
    // e.preventDefault();
    // Toggle the "show" class on the main menu item
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
            <div className="sidemenu-logo">
              <a className="main-logo" href="/Dashboard/home">
                <img
                  src="../assets/img/brand/logo-light.png"
                  className="header-brand-img desktop-logo"
                  alt="logo"
                />
                <img
                  src="../assets/img/brand/icon-light.png"
                  className="header-brand-img icon-logo"
                  alt="logo"
                />
                <img
                  src="../assets/img/brand/logo.png"
                  className="header-brand-img desktop-logo theme-logo"
                  alt="logo"
                />
                <img
                  src="../assets/img/brand/icon.png"
                  className="header-brand-img icon-logo theme-logo"
                  alt="logo"
                />
              </a>
            </div>
            <div className="main-sidebar-body main-body-1">
              <div className="slide-left disabled" id="slide-left">
                <i className="fe fe-chevron-left" />
              </div>
              <ul className="menu-nav nav">
                <li className="nav-header">
                  <span className="nav-label"> Dashboard</span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Dashboard/home">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-home sidemenu-icon menu-icon" />
                    <span className="sidemenu-label">Farm Dashboard</span>
                  </a>
                </li>
                <li className="nav-item" onClick={toggleDropdown}>
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    {/* <i class="fa-sharp fa-solid fa-cow"></i> */}
                    <i className="ti-write sidemenu-icon menu-icon" />
                    <span className="sidemenu-label">
                      Farm
                      <span className="sidemenu-label2">Animals</span>
                    </span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                  <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/animals/dashboard">
                        Animals Dashboard
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/animals/operations">
                        Animals Operations
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/animals/diseases_manager">
                        animal_disease Manager
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a
                        className="nav-sub-link"
                        href="/animals/housing"
                      >
                        Animal Houses
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/animal/sales">
                        animal_sales
                      </a>
                    </li>
                    
                    <li className="nav-sub-item">
                      <a
                        className="nav-sub-link"
                        href="/animal/deaths"
                      >
                        Animal_deaths
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item" onClick={toggleDropdown}>
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    {/* <i class="fa-sharp fa-solid fa-cow"></i> */}
                    <i className="ti-write sidemenu-icon menu-icon" />
                    <span className="sidemenu-label">
                    Animals
                      <span className="sidemenu-label2">Feeds</span>
                    </span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                  
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/animals/feeds">
                        Feeds stock
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/animals/using">
                        Use Animal Feeds
                      </a>
                    </li>          
                  </ul>
                </li>             
                <li className="nav-item" onClick={toggleDropdown}>
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-shopping-cart-full sidemenu-icon menu-icon" />
                    <span className="sidemenu-label">Poultry</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1">
                      <a href="javascript:void(0)">Poultry</a>
                    </li>
                    <li className="nav-sub-item">
                      <a
                        className="nav-sub-link"
                        href="/Poultry/dashboard"
                      >
                        Poultry Dashboard
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a
                        className="nav-sub-link"
                        href="/Poultry/Control"
                      >
                       Poultry Control
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a
                        className="nav-sub-link"
                        href="ecommerce-product-details.html"
                      >
                       Poultry diseases_manager
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a
                        className="nav-sub-link"
                        href="/Poultry/Control"
                      >
                       Eggs production
                      </a>
                    </li>                 
                  </ul>
                </li>
                <li className="nav-item" onClick={toggleDropdown}>
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-shopping-cart-full sidemenu-icon menu-icon" />
                    <span className="sidemenu-label">Poultry Feeds</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1">
                      <a href="javascript:void(0)">Poultry Feeds</a>
                    </li>
                    {/* <li className="nav-sub-item">
                      <a
                        className="nav-sub-link"
                        href="/poultry/feeds_stock"
                      >
                        Poultry Feeds Stock
                      </a>
                    </li> */}
                    <li className="nav-sub-item">
                      <a
                        className="nav-sub-link"
                        href="/poultry/feeds_formulars"
                      >
                       Poultry Feeds_formulars
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a
                        className="nav-sub-link"
                        href="/poultry/mix_feeds"
                      >
                      Mix Poultry_feed 
                      </a>
                    </li>
                                 
                  </ul>
                </li>
           
              
          
                <li className="nav-item" onClick={toggleDropdown}>
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-write sidemenu-icon menu-icon" />
                    <span className="sidemenu-label">Plants</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1">
                      <a href="javascript:void(0)">plants</a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/plants/dash">
                        Plants Dashboard
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/plants/planting">
                        planting
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/plants/planting">
                        plants diseases_manager
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/plants/fertilisation">
                        Manage_fertilisation
                      </a>
                    </li>
              
               
{/*                   
                    <li className="nav-sub-item">
                      <a
                        className="nav-sub-link sub-with-sub"
                        href="javascript:void(0)"
                      >
                        <span className="sidemenu-label">File Manager</span>
                        <i className="angle fe fe-chevron-right" />
                      </a>
                      <ul className="sub-nav-sub">
                        <li className="nav-sub-item">
                          <a className="nav-sub-link" href="filemanager.html">
                            File Manager
                          </a>
                        </li>
                        <li className="nav-sub-item">
                          <a
                            className="nav-sub-link"
                            href="filemanager-list.html"
                          >
                            File Manager List
                          </a>
                        </li>
                        <li className="nav-sub-item">
                          <a className="nav-sub-link" href="file-details.html">
                            File Details
                          </a>
                        </li>
                        <li className="nav-sub-item">
                          <a
                            className="nav-sub-link"
                            href="file-attachments.html"
                          >
                            File Attachments
                          </a>
                        </li>
                      </ul>
                    </li> */}
                
                  </ul>
                </li>
                <li className="nav-item" onClick={toggleDropdown}>
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-write sidemenu-icon menu-icon" />
                    <span className="sidemenu-label"> Farm Products</span>
                    <i className="angle fe fe-chevron-right" />
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1">
                      <a href="javascript:void(0)">Farm Products</a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/plants/dash/">
                      Products Dashboard
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/plants/planting">
                        plants Manager
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="/plants/planting">
                        Product sales reports
                      </a>
                    </li>           
               </ul>
                </li>       
    
                <li className="nav-item" onClick={toggleDropdown}>
                  <a className="nav-link with-sub" href="javascript:void(0)">
                    <span className="shape1" />
                    <span className="shape2" />
                    <i className="ti-bar-chart-alt sidemenu-icon menu-icon" />
                    <span className="sidemenu-label">Sales</span>
                    <span className="badge bg-danger side-badge">5</span>
                  </a>
                  <ul className="nav-sub">
                    <li className="side-menu-label1">
                      <a href="javascript:void(0)">Sales</a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="chart-morris.html">
                        sales Dashboard
                      </a>
                    </li>
               
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="chart-chartjs.html">
                      Manage Sales 
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="chart-flot.html">
                        Sales Reports
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="chart-spark-peity.html">
                        Recent sales
                      </a>
                    </li>
                    <li className="nav-sub-item">
                      <a className="nav-sub-link" href="chart-echart.html">
                        Echart
                      </a>
                    </li>
                  </ul>
                </li>

              </ul>
              <div className="slide-right" id="slide-right">
                <i className="fe fe-chevron-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END SIDEBAR */}
    </div>
  );
};

export default Sidebar;
                    

              
