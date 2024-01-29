import React, {useState} from "react";
import AppContainer from "../../Components/Structure/AppContainer";
import toast, {Toaster} from "react-hot-toast";
import ajaxUser from "../../util/remote/ajaxUser";
function CreateClients() {
  // +++++++++++++++++++++++++++++++++++++++++++++
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [gender, setGender] = useState("");
  const [nin, setNin] = useState("");
  const [location, setLocation] = useState("");
  const [role, setRole] = useState(5);
  const [others, setOthers] = useState("");
  const [photo, setPhoto] = useState("");
  const [ide, SetIde] = useState("");
  const [job, setJob] = useState("");
  const [dob, setDob] = useState("");
  const [marital, setMarital] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      fname.length > 0 &&
      lname.length > 0 &&
      phone.length > 0 &&
      nin.length > 0
    ) {
      const data = {
        first_name: fname,
        last_name: lname,
        nin: nin,
        contact: phone,
        location: location,
        role_id: role,

        contact2: phone2,
        email: email,

        photo: photo,
        otherId: ide,
        job: job,
        dob: dob,
        marital: marital,
        othernames: others,
        gender: gender,
      };

      const server_response = await ajaxUser.createUser(data);

      if (server_response.status === "OK") {
        toast.success(server_response.message);
        resetForm();
      } else {
        toast.error(server_response.message);
        //console.log(server_response.message);
      }
    } else {
      toast.error("Complete all fields and try again");
    }
  };

  const changePicture = (e) => {
    e.preventDefault();

    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      const newItem = {file: e.target.result};

      setPhoto(e.target.result);
    };
  };

  const resetForm = () => {
    setFname("");
    setLname("");
    setEmail("");
    setNin("");
    setLocation("");
    setPhone("");
    setPhone2("");
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
                    <form
                      action=""
                      onSubmit={handleSubmit}
                      enctype="multipart/form-data">
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="row">
                            <div className="col-md-6 col-lg-6">
                              {/* left hand side  */}
                              <div className="col-12">
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
                              <div className="col-12">
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
                              <div className="col-12">
                                <div className="form-group">
                                  <p className="mg-b-10">Other Names</p>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="other user names"
                                    value={others}
                                    onChange={(e) => setOthers(e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="col-12">
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
                              <div className="col-12">
                                <div className="form-group">
                                  <p className="mg-b-10">
                                    client's passport photo
                                  </p>
                                  <input
                                    type="file"
                                    className="form-control"
                                    placeholder="choice username"
                                    onChange={(e) => changePicture(e)}
                                  />
                                </div>
                              </div>

                              <div className="col-12">
                                <div className="form-group">
                                  <label className="mg-b-10">
                                    Date of birth
                                  </label>
                                  <input
                                    type="date"
                                    className="form-control"
                                    placeholder="date"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <label className="mg-b-10">Location</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="user location"
                                    value={location}
                                    onChange={(e) =>
                                      setLocation(e.target.value)
                                    }
                                  />
                                </div>
                              </div>

                              <div className="col-12"></div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                              {/* right hand side  */}
                              <div className="col-12">
                                <div className="form-group">
                                  Primary contact
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="user telephone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <label className="mg-b-10">
                                    Alternative contact
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="client second telephone number"
                                    value={phone2}
                                    onChange={(e) => setPhone2(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <label className="mg-b-10">email </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="user email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <label className="mg-b-10">NIN number</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="user nin number"
                                    value={nin}
                                    onChange={(e) => setNin(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <label className="mg-b-10">
                                    other Identification Means
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="other Identification e.g passport"
                                    value={ide}
                                    onChange={(e) => SetIde(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group">
                                  <label className="mg-b-10">
                                    occupation / business activity
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="users jobs"
                                    value={job}
                                    onChange={(e) => setJob(e.target.value)}
                                  />
                                </div>
                              </div>

                              <div className="col-12">
                                <div className="form-group">
                                  <label className="mg-b-10">
                                    Marital status
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="marital status"
                                    value={marital}
                                    onChange={(e) => setMarital(e.target.value)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <div className="col-md-6">
                          <div className="form-group">
                            <label className="mg-b-10">
                              NINNtional ID photo
                            </label>
                            <input
                              type="file"
                              className="form-control"
                              placeholder="user telephone number"
                              onChange={(e) => setImage(e.target.files[0])}
                            />
                          </div>
                        </div> */}

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
