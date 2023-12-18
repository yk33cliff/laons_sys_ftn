import React from "react";
import {AuthProvider} from "./AuthContext";
import {ClientProvider} from "./ClientContext";
// import {PermissionProvider} from "./PermissionContext";

import {RoleProvider} from "./RoleContext";
// import { IssueLogProvider } from './IssueLogContext';

import {ThemeProvider} from "./ThemeContext";

import {UserProvider} from "./UserContext";
import {LoanTypesProvider} from "./LoanTypesContext";
import {LoansProvider} from "./LoansContext";

const SuperProvider = (props) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UserProvider>
          {/* <PermissionProvider> */}
          <RoleProvider>
            <LoanTypesProvider>
              <ClientProvider>
                <LoansProvider>
                  {/* <IssueLogProvider> */}

                  {props.children}

                  {/* </IssueLogProvider> */}
                </LoansProvider>
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
