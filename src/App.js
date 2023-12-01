// import "./App.css";
// import "./chat.css";

import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import Dash from "./Dash";
import LoginPage from "./Pages/LoginPage";
import Loader from "./Components/Common/Loader";
import Poultry_dashboard from "./Pages/Poultry/Poultry_dashboard";
import Add_animal from "./Components/animal/Add_animal";
import View_animal from "./Components/animal/view_animals";
import Animal_dashboard from "./Pages/Animals/Animal_dashboard";
import Animal_profile from "./Pages/Animals/Animal_profile";




// import DashboardPage from "./Pages/DashboardPage";
// import SuperProvider from "./Context/SuperProvider";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(true);

  function checkLogin() {
    if (!window.localStorage.getItem("@user")) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    // <SuperProvider>
    <Router forceRefresh={false}>
      <Switch>
        {/* {!loggedIn && ( */}
        <>
          {/* <Route path="*" element={<LoginPage />} /> */}
          {/* <Route path="/login" element={<LoginPage />} />
              <Route
                path="/"
                element={
                  !loggedIn ? (
                    <Navigate replace to="/login" />
                  ) : (
                    <DashboardPage />
                  )
                }
              />
            </>
          )} */}
          {/* {loggedIn && (
            <>
              <Route
                path="/"
                element={
                  !loggedIn ? (
                    <Navigate replace to="/login" />
                  ) : (
                    <DashboardPage />
                  )
                }
              /> */}
          {/* <Route
            path="/login"
            element={loggedIn ? <Navigate replace to="/" /> : <LoginPage />}
          />
          <Route path="/" element={<DashboardPage />} /> */}
          {/* <RenderSecure > */}
        </>
        {/* )} */}
        <Route path="*" element={<Dash />} />
        <Route path="/Dashboard/home" element={<Dash />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Poultry/dashboard" element={<Poultry_dashboard />} />
        <Route path="/animals/add" element={<Add_animal />} />
        <Route path="/animals/view_animals" element={<View_animal />} />
        <Route path="/animals/dashboard" element={<Animal_dashboard />} />
        <Route path="/animals/profile" element={<Animal_profile />} />
        {/* <Route path="/" element={<Loader />} /> */}
        {/* <Route path="/" element={<Loader />} /> */}
      </Switch>
    </Router>
    // </SuperProvider>
  );
}

export default App;
