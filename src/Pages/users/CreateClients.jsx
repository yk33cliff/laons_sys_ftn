import React, {useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import toast, {Toaster} from "react-hot-toast";
import ajaxUser from "../../util/remote/ajaxUser";
function CreateClients() {
  // +++++++++++++++++++++++++++++++++++++++++++++
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [nin, setNin] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState(4);
  const [pass, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      fname.length > 0 ||
      lname.length > 0 ||
      uname.length > 0 ||
      phone.length > 0 ||
      nin.length > 0
    ) {
      const password = btoa(pass);
      const data = {
        first_name: fname,
        last_name: lname,
        username: uname,
        nin: nin,
        gender: gender,
        contact: phone,
        email: email,
        location: location,
        role_id: role,
        password: password,
      };
      const server_response = await ajaxUser.createUser(data);
      if (server_response.status === "OK") {
        toast.success(server_response.message);
        resetForm();
      } else {
        toast.error(server_response.message);
      }
    } else {
      toast.error("Complete all fields and try again");
    }
  };

  const resetForm = () => {
    setFname("");
    setLname("");
    setUname("");
    setPass("");
    setEmail("");
    setNin("");
    setLocation("");
    setPhone("");
    setRole(false);
  };

  return (
    <div>
      <AppContainer title="Create system User">
        {/* <!-- Row --> */}
        <div className="row">
          <div className="row row-sm">
            <div className="col-lg-12 col-md-12 mx-10">
              <div
                style={{
                  float: "right",
                  marginBottom: "20px",
                }}
                className="col-lg-2 col-md-2">
                <div className="form-group mb-0">
                  <a
                    href="/clients/view"
                    className="btn col-lg -12 rounded-50 col-md-12 btn-primary">
                    View clients
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>

          <div className="row row-sm">
            <div className="col-lg-12 col-md-12">
              <div className="card custom-card">
                <div className="card-body">
                  <div>
                    <h5 className="main-content-label mb-1">
                      Register clients/ customers
                    </h5>

                    <Toaster />
                  </div>
                  <div className="row row-sm">
                    <form action="" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <p className="mg-b-10">First Name</p>
                            <input
                              type="text"
                              className="form-control"
                              name="example-text-input"
                              placeholder="users first name"
                              value={fname}
                              onChange={(e) => setFname(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <p className="mg-b-10">Last Name</p>
                            <input
                              type="text"
                              value={lname}
                              onChange={(e) => setLname(e.target.value)}
                              className="form-control"
                              placeholder="user last name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <p className="mg-b-10">UserName</p>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="choice user name"
                              value={uname}
                              onChange={(e) => setUname(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="mg-b-10">Gender</label>
                            <select
                              name=""
                              className="form-control"
                              id=""
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}>
                              <option value="" disabled>
                                ------select gender-------
                              </option>
                              <option value="male">male</option>
                              <option value="female">female</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="mg-b-10">email</label>
                            <input
                              type="text"
                              className="form-control"
                              name="example-text-input"
                              placeholder="user email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="mg-b-10">telephone number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="user telephone number"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="mg-b-10">NIN number</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="user telephone number"
                              value={nin}
                              onChange={(e) => setNin(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="mg-b-10">Location</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="user location"
                              value={location}
                              onChange={(e) => setLocation(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="mg-b-10">password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="user location"
                              value={pass}
                              onChange={(e) => setPass(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-md-12 ">
                          <div className="form-group mb-0">
                            <button
                              type="submit"
                              className="btn col-lg -12 col-md-12 btn-primary">
                              Save user
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- End Row --> */}
          <div className="row row-sm">
            <div className="col-lg-12 col-md-12"></div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
}

export default CreateClients;
