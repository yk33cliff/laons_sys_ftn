import React from "react";
import AppContainer from "../../Components/Structure/AppContainer";


function Animal_profile() {
  return (
    <div>
        <AppContainer title="Animal Profile">

    
      <div>
        <div className="row square">
          <div className="col-lg-12 col-md-12">
            <div className="card custom-card">
              <div className="card-body">
                <div className="panel profile-cover">
                  <div className="profile-cover__img">
                    <img src="../assets/img/users/1.jpg" alt="img" />
                    <h3 className="h3">Sonia Taylor</h3>
                  </div>
                  <div className="btn-profile">
                    <button className="btn btn-rounded btn-danger">
                      <i className="fa fa-plus" />
                      <span>Change_group</span>
                    </button>
                    <button className="btn btn-rounded btn-success">
                    <i className="fa fa-plus" />
                     
                      <span>Change_house</span>
                    </button>
                  </div>
                  <div className="profile-cover__action bg-img" />
                  <div className="profile-cover__info">
                    <ul className="nav">
                      <li>
                        <strong>26</strong>Projects
                      </li>
                      <li>
                        <strong>33</strong>Followers
                      </li>
                      <li>
                        <strong>136</strong>Following
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="profile-tab tab-menu-heading">
                  <nav className="nav main-nav-line p-3 tabs-menu profile-nav-line bg-gray-100">
                    <a
                      className="nav-link  active"
                      data-bs-toggle="tab"
                      href="#about"
                    >
                      About
                    </a>
                    <a className="nav-link" data-bs-toggle="tab" href="#edit">
                      Edit Profile
                    </a>
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#timeline"
                    >
                      Timeline
                    </a>
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#gallery"
                    >
                      Gallery
                    </a>
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#friends"
                    >
                      Friends
                    </a>
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#settings"
                    >
                      Account Settings
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Row */}
        <div className="row row-sm">
          <div className="col-lg-12 col-md-12">
            <div className="card custom-card main-content-body-profile">
              <div className="tab-content">
                <div
                  className="main-content-body tab-pane p-4 border-top-0 active"
                  id="about"
                >
                  <div className="card-body p-0 border p-0 rounded-10">
                    <div className="p-4">
                      <h4 className="tx-15 text-uppercase mb-3">BIOdata</h4>
                      <p className="m-b-5">
                        Hi I'm Petey Cruiser,has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took a galley of type. Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu. In enim justo,
                        rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                        dictum felis eu pede mollis pretium. Integer
                        tincidunt.Cras dapibus. Vivamus elementum semper nisi.
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend ac, enim.
                      </p>
                      <div className="m-t-30">
                        <h4 className="tx-15 text-uppercase mt-3">
                          Experience
                        </h4>
                        <div className=" p-t-10">
                          <h5 className="text-primary m-b-5 tx-14">
                            Lead designer / Developer
                          </h5>
                          <p className>websitename.com</p>
                          <p>
                            <b>2010-2015</b>
                          </p>
                          <p className="text-muted tx-13 m-b-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <div className>
                          <h5 className="text-primary m-b-5 tx-14">
                            Senior Graphic Designer
                          </h5>
                          <p className>coderthemes.com</p>
                          <p>
                            <b>2007-2009</b>
                          </p>
                          <p className="text-muted tx-13 mb-0">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-top" />
                    <div className="p-4">
                      <label className="main-content-label tx-13 mg-b-20">
                        Contact
                      </label>
                      <div className="d-sm-flex">
                        <div className="mg-sm-r-20 mg-b-10">
                          <div className="main-profile-contact-list">
                            <div className="media">
                              <div className="media-icon bg-primary-transparent text-primary">
                                {" "}
                                <i className="icon ion-md-phone-portrait" />{" "}
                              </div>
                              <div className="media-body">
                                {" "}
                                <span>Mobile</span>
                                <div> +245 354 654 </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mg-sm-r-20 mg-b-10">
                          <div className="main-profile-contact-list">
                            <div className="media">
                              <div className="media-icon bg-success-transparent text-success">
                                {" "}
                                <i className="icon ion-logo-slack" />{" "}
                              </div>
                              <div className="media-body">
                                {" "}
                                <span>Slack</span>
                                <div> @spruko.w </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className>
                          <div className="main-profile-contact-list">
                            <div className="media">
                              <div className="media-icon bg-info-transparent text-info">
                                {" "}
                                <i className="icon ion-md-locate" />{" "}
                              </div>
                              <div className="media-body">
                                {" "}
                                <span>Current Address</span>
                                <div> San Francisco, CA </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-top" />
                    <div className="p-3 p-sm-4">
                      <label className="main-content-label tx-13 mg-b-20">
                        Social
                      </label>
                      <div className="d-xl-flex">
                        <div className="mg-md-r-20 mg-b-10">
                          <div className="main-profile-social-list">
                            <div className="media">
                              <div className="media-icon bg-primary-transparent text-primary">
                                {" "}
                                <i className="icon ion-logo-github" />{" "}
                              </div>
                              <div className="media-body">
                                {" "}
                                <span>Github</span>{" "}
                                <a href="javascript:void(0);">
                                  github.com/spruko
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mg-md-r-20 mg-b-10">
                          <div className="main-profile-social-list">
                            <div className="media">
                              <div className="media-icon bg-success-transparent text-success">
                                {" "}
                                <i className="icon ion-logo-twitter" />{" "}
                              </div>
                              <div className="media-body">
                                {" "}
                                <span>Twitter</span>{" "}
                                <a href="javascript:void(0);">
                                  twitter.com/spruko.me
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mg-md-r-20 mg-b-10">
                          <div className="main-profile-social-list">
                            <div className="media">
                              <div className="media-icon bg-info-transparent text-info">
                                {" "}
                                <i className="icon ion-logo-linkedin" />{" "}
                              </div>
                              <div className="media-body">
                                {" "}
                                <span>Linkedin</span>{" "}
                                <a href="javascript:void(0);">
                                  linkedin.com/in/spruko
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mg-md-r-20 mg-b-10">
                          <div className="main-profile-social-list">
                            <div className="media">
                              <div className="media-icon bg-danger-transparent text-danger">
                                {" "}
                                <i className="icon ion-md-link" />{" "}
                              </div>
                              <div className="media-body">
                                {" "}
                                <span>My Portfolio</span>{" "}
                                <a href="javascript:void(0);">spruko.com/</a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="main-content-body tab-pane p-4 border-top-0"
                  id="edit"
                >
                  <div className="card-body border">
                    <div className="mb-4 main-content-label">
                      Personal Information
                    </div>
                    <form className="form-horizontal">
                      <div className="mb-4 main-content-label">Name</div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">User Name</label>
                          </div>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="User Name"
                              defaultValue="Mack Adamia"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">First Name</label>
                          </div>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name"
                              defaultValue="Mack Adamia"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">last Name</label>
                          </div>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last Name"
                              defaultValue="Mack Adamia"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">Nick Name</label>
                          </div>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Nick Name"
                              defaultValue="Spruha"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">Designation</label>
                          </div>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Designation"
                              defaultValue="Web Designer"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-4 main-content-label">
                        Contact Info
                      </div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">
                              Email<i>(required)</i>
                            </label>
                          </div>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                              defaultValue="info@Spruha.in"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">Website</label>
                          </div>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Website"
                              defaultValue="@spruko.w"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">Phone</label>
                          </div>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="phone number"
                              defaultValue="+245 354 654"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">Address</label>
                          </div>
                          <div className="col-md-9">
                            <textarea
                              className="form-control"
                              name="example-textarea-input"
                              rows={2}
                              placeholder="Address"
                              defaultValue={"San Francisco, CA"}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-4 main-content-label">Social Info</div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">Twitter</label>
                          </div>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="twitter"
                              defaultValue="twitter.com/spruko.html"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">Facebook</label>
                          </div>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="facebook"
                              defaultValue="https://www.facebook.com/Spruha"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">Google+</label>
                          </div>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="google"
                              defaultValue="spruko.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">Linked in</label>
                          </div>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="linkedin"
                              defaultValue="linkedin.com/in/spruko"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">Github</label>
                          </div>
                          <div className="col-md-9">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="github"
                              defaultValue="github.com/sprukos"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-4 main-content-label">
                        About Yourself
                      </div>
                      <div className="form-group ">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">
                              Biographical Info
                            </label>
                          </div>
                          <div className="col-md-9">
                            <textarea
                              className="form-control"
                              name="example-textarea-input"
                              rows={4}
                              placeholder
                              defaultValue={
                                "pleasure rationally encounter but because pursue consequences that are extremely painful.occur in which toil and pain can procure him some great pleasure.."
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-4 main-content-label">
                        Email Preferences
                      </div>
                      <div className="form-group mb-0">
                        <div className="row row-sm">
                          <div className="col-md-3">
                            <label className="form-label">Verified User</label>
                          </div>
                          <div className="col-md-9">
                            <div className="form-controls-stacked">
                              <label className="ckbox mg-b-10">
                                <input defaultChecked type="checkbox" />
                                <span>
                                  {" "}
                                  Accept to receive post or page notification
                                  emails
                                </span>
                              </label>
                              <label className="ckbox">
                                <input defaultChecked type="checkbox" />
                                <span>
                                  {" "}
                                  Accept to receive email sent to multiple
                                  recipients
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  className="main-content-body  tab-pane border-top-0"
                  id="timeline"
                >
                  <div className="border p-4">
                    <div className="main-content-body main-content-body-profile">
                      <div className="main-profile-body p-0">
                        <div className="row row-sm">
                          <div className="col-12">
                            <div className="card mg-b-20 border">
                              <div className="card-header p-4">
                                <div className="media">
                                  <div className="media-user me-2">
                                    <div className="main-img-user avatar-md">
                                      <img
                                        alt
                                        className="rounded-circle"
                                        src="../assets/img/users/6.jpg"
                                      />
                                    </div>
                                  </div>
                                  <div className="media-body">
                                    <h6 className="mb-0 mg-t-2 ms-2">
                                      Mintrona Pechon Pechon
                                    </h6>
                                    <span className="text-primary ms-2">
                                      just now
                                    </span>{" "}
                                  </div>
                                  <div className="ms-auto">
                                    <div className="dropdown show">
                                      {" "}
                                      <a
                                        className="new option-dots2"
                                        data-bs-toggle="dropdown"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="fas fa-ellipsis-v" />
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end shadow">
                                        {" "}
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          Edit Post
                                        </a>{" "}
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          Delete Post
                                        </a>{" "}
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          Personal Settings
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-body">
                                <p className="mg-t-0">
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration in some form, by injected
                                  humour, or randomised words which don't look
                                  even slightly believable.
                                </p>
                                <div className="row row-sm">
                                  <div className="col">
                                    {" "}
                                    <img
                                      alt="img"
                                      className="wd-200 me-4 mt-2"
                                      src="../assets/img/media/1.jpg"
                                    />{" "}
                                    <img
                                      alt="img"
                                      className="wd-200 mt-2"
                                      src="../assets/img/media/2.jpg"
                                    />{" "}
                                  </div>
                                </div>
                                <div className="media mg-t-15 profile-footer">
                                  <div className="media-user me-2">
                                    <div className="demo-avatar-group">
                                      <div className="demo-avatar-group main-avatar-list-stacked">
                                        <div className="main-img-user">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/12.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/12.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/3.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user online">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/5.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/6.jpg"
                                          />
                                        </div>
                                        <div className="main-avatar"> +23 </div>
                                      </div>
                                      {/* demo-avatar-group */}
                                    </div>
                                    {/* demo-avatar-group */}
                                  </div>
                                  <div className="media-body">
                                    <h6 className="mb-0 mg-t-10">
                                      28 people like your photo
                                    </h6>{" "}
                                  </div>
                                  <div className="ms-auto">
                                    <div className="dropdown show">
                                      {" "}
                                      <a
                                        className="new"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="far fa-heart me-3" />
                                      </a>{" "}
                                      <a
                                        className="new"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="far fa-comment me-3" />
                                      </a>{" "}
                                      <a
                                        className="new"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="far fa-share-square" />
                                      </a>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card mg-b-20 border">
                              <div className="card-header p-4">
                                <div className="media">
                                  <div className="media-user me-2">
                                    <div className="main-img-user avatar-md">
                                      <img
                                        alt
                                        className="rounded-circle"
                                        src="../assets/img/users/6.jpg"
                                      />
                                    </div>
                                  </div>
                                  <div className="media-body">
                                    <h6 className="mb-0 ms-2 mg-t-3">
                                      Mintrona Pechon Pechon
                                    </h6>
                                    <span className="text-muted ms-2">
                                      Sep 26 2019, 10:14am
                                    </span>{" "}
                                  </div>
                                  <div className="ms-auto">
                                    <div className="dropdown show">
                                      {" "}
                                      <a
                                        className="new option-dots2"
                                        data-bs-toggle="dropdown"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="fas fa-ellipsis-v" />
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end shadow">
                                        {" "}
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          Edit Post
                                        </a>{" "}
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          Delete Post
                                        </a>{" "}
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          Personal Settings
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-body h-100">
                                <p className="mg-t-0">
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration in some form, by injected
                                  humour, or randomised words which don't look
                                  even slightly believable.
                                </p>
                                <div className="row row-sm">
                                  <div className="col">
                                    {" "}
                                    <img
                                      alt="img"
                                      className="wd-200 me-4 mt-2"
                                      src="../assets/img/media/4.jpg"
                                    />{" "}
                                    <img
                                      alt="img"
                                      className="wd-200 mt-2"
                                      src="../assets/img/media/5.jpg"
                                    />{" "}
                                  </div>
                                </div>
                                <div className="media mg-t-15 profile-footer">
                                  <div className="media-user me-2">
                                    <div className="demo-avatar-group">
                                      <div className="demo-avatar-group main-avatar-list-stacked">
                                        <div className="main-img-user">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/12.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user online">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/7.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/2.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user online">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/5.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/6.jpg"
                                          />
                                        </div>
                                        <div className="main-avatar"> +23 </div>
                                      </div>
                                      {/* demo-avatar-group */}
                                    </div>
                                    {/* demo-avatar-group */}
                                  </div>
                                  <div className="media-body">
                                    <h6 className="mb-0 mg-t-10">
                                      28 people like your photo
                                    </h6>{" "}
                                  </div>
                                  <div className="ms-auto">
                                    <div className="dropdown show">
                                      {" "}
                                      <a
                                        className="new"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="far fa-heart me-3" />
                                      </a>{" "}
                                      <a
                                        className="new"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="far fa-comment me-3" />
                                      </a>{" "}
                                      <a
                                        className="new"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="far fa-share-square" />
                                      </a>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card mg-b-20 border">
                              <div className="card-header p-4">
                                <div className="media">
                                  <div className="media-user me-2">
                                    <div className="main-img-user avatar-md">
                                      <img
                                        alt
                                        className="rounded-circle"
                                        src="../assets/img/users/6.jpg"
                                      />
                                    </div>
                                  </div>
                                  <div className="media-body">
                                    <h6 className="mb-0 ms-2 mg-t-3">
                                      Mintrona Pechon Pechon
                                    </h6>
                                    <span className="text-muted ms-2">
                                      Sep 26 2019, 10:14am
                                    </span>{" "}
                                  </div>
                                  <div className="ms-auto">
                                    <div className="dropdown show">
                                      {" "}
                                      <a
                                        className="new option-dots2"
                                        data-bs-toggle="dropdown"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="fas fa-ellipsis-v" />
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end shadow">
                                        {" "}
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          Edit Post
                                        </a>{" "}
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          Delete Post
                                        </a>{" "}
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          Personal Settings
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-body h-100">
                                <p className="mg-t-0">
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration in some form, by injected
                                  humour, or randomised words which don't look
                                  even slightly believable.
                                </p>
                                <div className="media mg-t-15 profile-footer">
                                  <div className="media-user me-2">
                                    <div className="demo-avatar-group">
                                      <div className="demo-avatar-group main-avatar-list-stacked">
                                        <div className="main-img-user online">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/12.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/3.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/4.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/9.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user online">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/10.jpg"
                                          />
                                        </div>
                                        <div className="main-avatar"> +23 </div>
                                      </div>
                                      {/* demo-avatar-group */}
                                    </div>
                                    {/* demo-avatar-group */}
                                  </div>
                                  <div className="media-body">
                                    <h6 className="mb-0 mg-t-10">
                                      28 people like your photo
                                    </h6>{" "}
                                  </div>
                                  <div className="ms-auto">
                                    <div className="dropdown show">
                                      {" "}
                                      <a
                                        className="new"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="far fa-heart me-3" />
                                      </a>{" "}
                                      <a
                                        className="new"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="far fa-comment me-3" />
                                      </a>{" "}
                                      <a
                                        className="new"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="far fa-share-square" />
                                      </a>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card border">
                              <div className="card-header p-4">
                                <div className="media">
                                  <div className="media-user me-2">
                                    <div className="main-img-user avatar-md">
                                      <img
                                        alt
                                        className="rounded-circle"
                                        src="../assets/img/users/2.jpg"
                                      />
                                    </div>
                                  </div>
                                  <div className="media-body">
                                    <h6 className="mb-0 ms-2 mg-t-3">
                                      Mintrona Pechon Pechon
                                    </h6>
                                    <span className="text-muted ms-2">
                                      Sep 26 2019, 10:14am
                                    </span>{" "}
                                  </div>
                                  <div className="ms-auto">
                                    <div className="dropdown show">
                                      {" "}
                                      <a
                                        className="new option-dots2"
                                        data-bs-toggle="dropdown"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="fas fa-ellipsis-v" />
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end shadow">
                                        {" "}
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          Edit Post
                                        </a>{" "}
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          Delete Post
                                        </a>{" "}
                                        <a
                                          className="dropdown-item"
                                          href="javascript:void(0);"
                                        >
                                          Personal Settings
                                        </a>{" "}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="card-body h-100">
                                <p className="mg-t-0">
                                  There are many variations of passages of Lorem
                                  Ipsum available, but the majority have
                                  suffered alteration in some form, by injected
                                  humour, or randomised words which don't look
                                  even slightly believable.
                                </p>
                                <div className="row row-sm">
                                  <div className="col">
                                    {" "}
                                    <img
                                      alt="img"
                                      className="wd-200 me-3 mt-2"
                                      src="../assets/img/media/4.jpg"
                                    />{" "}
                                    <img
                                      alt="img"
                                      className="wd-200 mt-2"
                                      src="../assets/img/media/7.jpg"
                                    />{" "}
                                  </div>
                                </div>
                                <div className="media mg-t-15 profile-footer">
                                  <div className="media-user me-2">
                                    <div className="demo-avatar-group">
                                      <div className="demo-avatar-group main-avatar-list-stacked">
                                        <div className="main-img-user online">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/11.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/12.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/3.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/4.jpg"
                                          />
                                        </div>
                                        <div className="main-img-user online">
                                          <img
                                            alt
                                            className="rounded-circle"
                                            src="../assets/img/users/5.jpg"
                                          />
                                        </div>
                                        <div className="main-avatar"> +23 </div>
                                      </div>
                                      {/* demo-avatar-group */}
                                    </div>
                                    {/* demo-avatar-group */}
                                  </div>
                                  <div className="media-body">
                                    <h6 className="mb-0 mg-t-10">
                                      28 people like your photo
                                    </h6>{" "}
                                  </div>
                                  <div className="ms-auto">
                                    <div className="dropdown show">
                                      {" "}
                                      <a
                                        className="new"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="far fa-heart me-3" />
                                      </a>{" "}
                                      <a
                                        className="new"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="far fa-comment me-3" />
                                      </a>{" "}
                                      <a
                                        className="new"
                                        href="JavaScript:void(0);"
                                      >
                                        <i className="far fa-share-square" />
                                      </a>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* main-profile-body */}
                    </div>
                  </div>
                </div>
                <div
                  className="main-content-body p-4 border tab-pane border-top-0"
                  id="gallery"
                >
                  <div className="card-body border">
                    <div className="demo-gallery">
                      <ul
                        id="lightgallery"
                        className="list-unstyled row row-sm"
                      >
                        <li
                          className="col-sm-6 col-lg-4"
                          data-responsive="https://php.spruko.com/spruha/spruha/assets/img/media/1.jpg"
                          data-src="https://php.spruko.com/spruha/spruha/assets/img/media/1.jpg"
                          data-sub-html="<h4>Gallery Image 1</h4>"
                        >
                          <a href="javascript:void(0);" className="wd-100p">
                            <img
                              className="img-responsive mb-4 wd-100p"
                              src="../assets/img/media/1.jpg"
                              alt="Thumb-1"
                            />{" "}
                          </a>
                        </li>
                        <li
                          className="col-sm-6 col-lg-4"
                          data-responsive="https://php.spruko.com/spruha/spruha/assets/img/media/2.jpg"
                          data-src="https://php.spruko.com/spruha/spruha/assets/img/media/2.jpg"
                          data-sub-html="<h4>Gallery Image 2</h4>"
                        >
                          <a href="javascript:void(0);" className="wd-100p">
                            <img
                              className="img-responsive mb-4"
                              src="../assets/img/media/2.jpg"
                              alt="Thumb-1"
                            />{" "}
                          </a>
                        </li>
                        <li
                          className="col-sm-6 col-lg-4"
                          data-responsive="https://php.spruko.com/spruha/spruha/assets/img/media/3.jpg"
                          data-src="https://php.spruko.com/spruha/spruha/assets/img/media/3.jpg"
                          data-sub-html="<h4>Gallery Image 3</h4>"
                        >
                          <a href="javascript:void(0);" className="wd-100p">
                            <img
                              className="img-responsive mb-4"
                              src="../assets/img/media/3.jpg"
                              alt="Thumb-1"
                            />{" "}
                          </a>
                        </li>
                        <li
                          className="col-sm-6 col-lg-4"
                          data-responsive="https://php.spruko.com/spruha/spruha/assets/img/media/4.jpg"
                          data-src="https://php.spruko.com/spruha/spruha/assets/img/media/4.jpg"
                          data-sub-html="<h4>Gallery Image 4</h4>"
                        >
                          <a href="javascript:void(0);" className="wd-100p">
                            <img
                              className="img-responsive mb-4"
                              src="../assets/img/media/4.jpg"
                              alt="Thumb-1"
                            />{" "}
                          </a>
                        </li>
                        <li
                          className="col-sm-6 col-lg-4"
                          data-responsive="https://php.spruko.com/spruha/spruha/assets/img/media/5.jpg"
                          data-src="https://php.spruko.com/spruha/spruha/assets/img/media/5.jpg"
                          data-sub-html="<h4>Gallery Image 5</h4>"
                        >
                          <a href="javascript:void(0);" className="wd-100p">
                            <img
                              className="img-responsive mb-4"
                              src="../assets/img/media/5.jpg"
                              alt="Thumb-1"
                            />{" "}
                          </a>
                        </li>
                        <li
                          className="col-sm-6 col-lg-4"
                          data-responsive="https://php.spruko.com/spruha/spruha/assets/img/media/6.jpg"
                          data-src="https://php.spruko.com/spruha/spruha/assets/img/media/6.jpg"
                          data-sub-html="<h4>Gallery Image 6</h4>"
                        >
                          <a href="javascript:void(0);" className="wd-100p">
                            <img
                              className="img-responsive mb-4"
                              src="../assets/img/media/6.jpg"
                              alt="Thumb-1"
                            />{" "}
                          </a>
                        </li>
                        <li
                          className="col-sm-6 col-lg-4"
                          data-responsive="https://php.spruko.com/spruha/spruha/assets/img/media/7.jpg"
                          data-src="https://php.spruko.com/spruha/spruha/assets/img/media/7.jpg"
                          data-sub-html="<h4>Gallery Image 7</h4>"
                        >
                          <a href="javascript:void(0);" className="wd-100p">
                            <img
                              className="img-responsive mb-4 mb-lg-0"
                              src="../assets/img/media/7.jpg"
                              alt="Thumb-1"
                            />{" "}
                          </a>
                        </li>
                        <li
                          className="col-sm-6 col-lg-4"
                          data-responsive="https://php.spruko.com/spruha/spruha/assets/img/media/8.jpg"
                          data-src="https://php.spruko.com/spruha/spruha/assets/img/media/8.jpg"
                          data-sub-html="<h4>Gallery Image 8</h4>"
                        >
                          <a href="javascript:void(0);" className="wd-100p">
                            <img
                              className="img-responsive mb-4 mb-lg-0"
                              src="../assets/img/media/8.jpg"
                              alt="Thumb-1"
                            />{" "}
                          </a>
                        </li>
                        <li
                          className="col-sm-6 col-lg-4"
                          data-responsive="https://php.spruko.com/spruha/spruha/assets/img/media/9.jpg"
                          data-src="https://php.spruko.com/spruha/spruha/assets/img/media/9.jpg"
                          data-sub-html="<h4>Gallery Image 9</h4>"
                        >
                          <a href="javascript:void(0);" className="wd-100p">
                            <img
                              className="img-responsive mb-4 mb-lg-0"
                              src="../assets/img/media/9.jpg"
                              alt="Thumb-1"
                            />{" "}
                          </a>
                        </li>
                      </ul>
                      {/* /Gallery */}
                    </div>
                  </div>
                </div>
                <div
                  className="main-content-body tab-pane border-top-0"
                  id="friends"
                >
                  <div className="card-body border pd-b-10">
                    {/* row */}
                    <div className="row row-sm">
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className="card custom-card border">
                          <div className="card-body text-center">
                            <div className="user-lock text-center">
                              <div className="dropdown text-end">
                                <a
                                  href="javascript:void(0);"
                                  className="option-dots"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="true"
                                >
                                  {" "}
                                  <i className="fe fe-more-vertical" />{" "}
                                </a>
                                <div className="dropdown-menu dropdown-menu-end shadow">
                                  {" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-message-square me-2" />{" "}
                                    Message
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-edit-2 me-2" /> Edit
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-eye me-2" /> View
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-trash-2 me-2" /> Delete
                                  </a>{" "}
                                </div>
                              </div>
                              <a href="profile.html">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src="../assets/img/users/2.jpg"
                                />
                              </a>
                            </div>
                            <a href="profile.html">
                              <h5 className=" mb-1 mt-3 main-content-label">
                                Socrates Itumay
                              </h5>
                            </a>
                            <p className="mb-2 mt-1 tx-inverse">
                              Project Manager
                            </p>
                            <p className="text-muted text-center mt-1">
                              Lorem Ipsum is not simply popular belief Contrary.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className="card custom-card border">
                          <div className="card-body text-center">
                            <div className="user-lock text-center">
                              <div className="dropdown text-end">
                                <a
                                  href="javascript:void(0);"
                                  className="option-dots"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="true"
                                >
                                  {" "}
                                  <i className="fe fe-more-vertical" />{" "}
                                </a>
                                <div className="dropdown-menu dropdown-menu-end shadow">
                                  {" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-message-square me-2" />{" "}
                                    Message
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-edit-2 me-2" /> Edit
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-eye me-2" /> View
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-trash-2 me-2" /> Delete
                                  </a>{" "}
                                </div>
                              </div>
                              <a href="profile.html">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src="../assets/img/users/3.jpg"
                                />
                              </a>
                            </div>
                            <a href="profile.html">
                              <h5 className="mb-1 mt-3  main-content-label">
                                Reynante Labares
                              </h5>
                            </a>
                            <p className="mb-2 mt-1 tx-inverse">Web Designer</p>
                            <p className="text-muted text-center mt-1">
                              Lorem Ipsum is not simply popular belief Contrary.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className="card custom-card border">
                          <div className="card-body text-center">
                            <div className="user-lock text-center">
                              <div className="dropdown text-end">
                                <a
                                  href="javascript:void(0);"
                                  className="option-dots"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="true"
                                >
                                  {" "}
                                  <i className="fe fe-more-vertical" />{" "}
                                </a>
                                <div className="dropdown-menu dropdown-menu-end shadow">
                                  {" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-message-square me-2" />{" "}
                                    Message
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-edit-2 me-2" /> Edit
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-eye me-2" /> View
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-trash-2 me-2" /> Delete
                                  </a>{" "}
                                </div>
                              </div>
                              <a href="profile.html">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src="../assets/img/users/4.jpg"
                                />
                              </a>
                            </div>
                            <a href="profile.html">
                              <h5 className="mb-1 mt-3 main-content-label">
                                Owen Bongcaras
                              </h5>
                            </a>
                            <p className="mb-2 mt-1 tx-inverse">
                              App Developer
                            </p>
                            <p className="text-muted text-center mt-1">
                              Lorem Ipsum is not simply popular belief Contrary.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className="card custom-card border">
                          <div className="card-body text-center">
                            <div className="user-lock text-center">
                              <div className="dropdown text-end">
                                <a
                                  href="javascript:void(0);"
                                  className="option-dots"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="true"
                                >
                                  {" "}
                                  <i className="fe fe-more-vertical" />{" "}
                                </a>
                                <div className="dropdown-menu dropdown-menu-end shadow">
                                  {" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-message-square me-2" />{" "}
                                    Message
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-edit-2 me-2" /> Edit
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-eye me-2" /> View
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-trash-2 me-2" /> Delete
                                  </a>{" "}
                                </div>
                              </div>
                              <a href="profile.html">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src="../assets/img/users/8.jpg"
                                />
                              </a>
                            </div>
                            <a href="profile.html">
                              <h5 className="mb-1 mt-3 main-content-label">
                                Stephen Metcalfe
                              </h5>
                            </a>
                            <p className="mb-2 mt-1 tx-inverse">
                              Administrator
                            </p>
                            <p className="text-muted text-center mt-1">
                              Lorem Ipsum is not simply popular belief Contrary.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className="card custom-card border">
                          <div className="card-body text-center">
                            <div className="user-lock text-center">
                              <div className="dropdown text-end">
                                <a
                                  href="javascript:void(0);"
                                  className="option-dots"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="true"
                                >
                                  {" "}
                                  <i className="fe fe-more-vertical" />{" "}
                                </a>
                                <div className="dropdown-menu dropdown-menu-end shadow">
                                  {" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-message-square me-2" />{" "}
                                    Message
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-edit-2 me-2" /> Edit
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-eye me-2" /> View
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-trash-2 me-2" /> Delete
                                  </a>{" "}
                                </div>
                              </div>
                              <a href="profile.html">
                                {" "}
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src="../assets/img/users/2.jpg"
                                />
                              </a>
                            </div>
                            <a href="profile.html">
                              <h5 className=" mb-1 mt-3 main-content-label">
                                Socrates Itumay
                              </h5>
                            </a>
                            <p className="mb-2 mt-1 tx-inverse">
                              Project Manager
                            </p>
                            <p className="text-muted text-center mt-1">
                              Lorem Ipsum is not simply popular belief Contrary.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className="card custom-card border">
                          <div className="card-body text-center">
                            <div className="user-lock text-center">
                              <div className="dropdown text-end">
                                <a
                                  href="javascript:void(0);"
                                  className="option-dots"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="true"
                                >
                                  {" "}
                                  <i className="fe fe-more-vertical" />{" "}
                                </a>
                                <div className="dropdown-menu dropdown-menu-end shadow">
                                  {" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-message-square me-2" />{" "}
                                    Message
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-edit-2 me-2" /> Edit
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-eye me-2" /> View
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-trash-2 me-2" /> Delete
                                  </a>{" "}
                                </div>
                              </div>
                              <a href="profile.html">
                                {" "}
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src="../assets/img/users/3.jpg"
                                />
                              </a>
                            </div>
                            <a href="profile.html">
                              <h5 className="mb-1 mt-3  main-content-label">
                                Reynante Labares
                              </h5>
                            </a>
                            <p className="mb-2 mt-1 tx-inverse">Web Designer</p>
                            <p className="text-muted text-center mt-1">
                              Lorem Ipsum is not simply popular belief Contrary.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className="card custom-card border">
                          <div className="card-body text-center">
                            <div className="user-lock text-center">
                              <div className="dropdown text-end">
                                <a
                                  href="javascript:void(0);"
                                  className="option-dots"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="true"
                                >
                                  {" "}
                                  <i className="fe fe-more-vertical" />{" "}
                                </a>
                                <div className="dropdown-menu dropdown-menu-end shadow">
                                  {" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-message-square me-2" />{" "}
                                    Message
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-edit-2 me-2" /> Edit
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-eye me-2" /> View
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-trash-2 me-2" /> Delete
                                  </a>{" "}
                                </div>
                              </div>
                              <a href="profile.html">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src="../assets/img/users/4.jpg"
                                />
                              </a>{" "}
                            </div>
                            <a href="profile.html">
                              <h5 className="mb-1 mt-3 main-content-label">
                                Owen Bongcaras
                              </h5>
                            </a>
                            <p className="mb-2 mt-1 tx-inverse">
                              App Developer
                            </p>
                            <p className="text-muted text-center mt-1">
                              Lorem Ipsum is not simply popular belief Contrary.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3">
                        <div className="card custom-card border">
                          <div className="card-body text-center">
                            <div className="user-lock text-center">
                              <div className="dropdown text-end">
                                <a
                                  href="javascript:void(0);"
                                  className="option-dots"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="true"
                                >
                                  {" "}
                                  <i className="fe fe-more-vertical" />{" "}
                                </a>
                                <div className="dropdown-menu dropdown-menu-end shadow">
                                  {" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-message-square me-2" />{" "}
                                    Message
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-edit-2 me-2" /> Edit
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-eye me-2" /> View
                                  </a>{" "}
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="fe fe-trash-2 me-2" /> Delete
                                  </a>{" "}
                                </div>
                              </div>
                              <a href="profile.html">
                                <img
                                  alt="avatar"
                                  className="rounded-circle"
                                  src="../assets/img/users/8.jpg"
                                />
                              </a>
                            </div>
                            <a href="profile.html">
                              <h5 className="mb-1 mt-3 main-content-label">
                                Stephen Metcalfe
                              </h5>
                            </a>
                            <p className="mb-2 mt-1 tx-inverse">
                              Administrator
                            </p>
                            <p className="text-muted text-center mt-1">
                              Lorem Ipsum is not simply popular belief Contrary.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </AppContainer>
    </div>
  );
}

export default Animal_profile;
