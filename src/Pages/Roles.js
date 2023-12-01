import React, { useContext} from 'react'
import AppContainer from '../Components/Structure/AppContainer';
import RoleContext from '../Context/RoleContext';
import CreateRole from '../Components/Role/CreateRole';
import Loader from '../Components/Common/Loader';


export default function Roles() {
    const {roleList} = useContext(RoleContext);

       

  return (
        <AppContainer title="Roles" style={{backgroundColor:"#189b18 !important"}}>
            
            <div class="white_card card_height_100 mb_30 shadow">
<div class="white_card_header">
<div class="box_header m-0">

</div>
</div>
<div class="white_card_body">
<div class="QA_section">
<div class="white_box_tittle list_header">
<h4>Role List</h4>
<div class="box_right d-flex lms_block">

<div class="add_button ms-2">
<div className="col-md-12 mb-3">
            <CreateRole color="btn-primary btn-sm"/>
       
        </div>
</div>
</div>
</div>
<div class="QA_table mb_30">

<table class="table lms_table_active" style={{width:'100%'}}>
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">Role</th>
</tr>
</thead>

<tbody>
{Array.isArray(roleList) && roleList.map((item,key)=>
<tr key={key}>
<th>{key+1}</th>
<td>{item.role_name}</td>



</tr>
)}

</tbody>
</table>
{!roleList && <Loader/>}
</div>
</div>
</div>
</div>
       
    
    </AppContainer>
    )
}
