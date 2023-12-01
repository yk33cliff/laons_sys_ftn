import React from 'react'
import AppContainer from '../Components/Structure/AppContainer'
import Permissions from './Permissions'

export default function RolesPermissions() {
    return (
        <AppContainer title="Roles and Permissions">
            <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-roles-tab" data-bs-toggle="tab" data-bs-target="#nav-roles" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Roles</button>
    <button class="nav-link" id="nav-permissions-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-permissions" aria-selected="false">Permissions</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="#nav-roles" role="tabpanel" aria-labelledby="nav-roles-tab">
  </div>
  <div class="tab-pane fade" id="nav-permissions" role="tabpanel" aria-labelledby="nav-permissions-tab">
  <Permissions />

  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div>
        </AppContainer>
    )
}
