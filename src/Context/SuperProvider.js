import React from 'react';
import { AuthProvider } from './AuthContext';
import { ClientProvider } from './ClientContext';
import { PermissionProvider } from './PermissionContext';
import { ProjectProvider } from './ProjectContext';
import { RoleProvider } from './RoleContext';
import { IssueLogProvider } from './IssueLogContext';
import { RegionProvider } from './RegionContext';
import { ThemeProvider } from './ThemeContext';
import { TeamProvider } from './TeamContext';
import { UserProvider } from './UserContext';


const SuperProvider=(props)=>{
  
        return (
            <ThemeProvider>
               <AuthProvider>
                 <UserProvider>
                 <ProjectProvider>
                  <ClientProvider>
                    <PermissionProvider>
                      <RoleProvider>
                      <IssueLogProvider>
                      <RegionProvider>
                        <TeamProvider>
                     {props.children}
                     </TeamProvider>
                     </RegionProvider>
                     </IssueLogProvider>
                     </RoleProvider>
                  </PermissionProvider>
                  </ClientProvider>
                 </ProjectProvider>
                 </UserProvider>
             </AuthProvider>
          </ThemeProvider>                         
        )
}

export default SuperProvider;