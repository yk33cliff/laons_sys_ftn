import React from "react";
import {AuthProvider} from "./AuthContext";
import {ClientProvider} from "./ClientContext";

import {RoleProvider} from "./RoleContext";

import {ThemeProvider} from "./ThemeContext";

import {UserProvider} from "./UserContext";
import {LoanTypesProvider} from "./LoanTypesContext";

const SuperProvider = (props) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UserProvider>
          <RoleProvider>
            <LoanTypesProvider>
              <ClientProvider>{props.children}</ClientProvider>
            </LoanTypesProvider>
          </RoleProvider>
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default SuperProvider;
