import React from "react";
import {AuthProvider} from "./AuthContext";
import {ClientProvider} from "./ClientContext";
// import {PermissionProvider} from "./PermissionContext";

import {RoleProvider} from "./RoleContext";
// import { IssueLogProvider } from './IssueLogContext';

import {ThemeProvider} from "./ThemeContext";

import {UserProvider} from "./UserContext";
import {LoanTypesProvider} from "./LoanTypesContext";

const SuperProvider = (props) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UserProvider>
          {/* <PermissionProvider> */}
          <RoleProvider>
            <LoanTypesProvider>
              <ClientProvider>
                {/* <IssueLogProvider> */}

                {props.children}

                {/* </IssueLogProvider> */}
              </ClientProvider>
            </LoanTypesProvider>
          </RoleProvider>
          {/* </PermissionProvider> */}
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default SuperProvider;
