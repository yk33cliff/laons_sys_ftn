import React, { useContext, useState } from 'react'
import AppContainer from '../Components/Structure/AppContainer'
import TeamContext from '../Context/TeamContext'
import RoleContext from '../Context/RoleContext'
import ajaxUser from '../util/remote/ajaxUser'
import Alert from '../Components/Common/Alert'
import UserContext from '../Context/UserContext'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RenderSecure } from '../util/script/RenderSecure'
import CreateUsers from '../Components/Users/CreateUsers'
import Loader from '../Components/Common/Loader'
import Select from 'react-select'


export default function UsersPage() {
    const {userList,getUserList} = useContext(UserContext)
    const {teamList} = useContext(TeamContext)
    const {roleList} = useContext(RoleContext)
    const [loading,setLoading] = useState(false)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

       const [info,setInfo] =useState("")
       const [info1,setInfo1] =useState("")
       const [team,setTeam] =useState("")

       const [userID,setUserID] =useState("")
       const [old_password,setOldPassword] =useState("")
        const [new_password,setNewPassword] =useState("")
       const [role,setRole] =useState("")
       const [firstName,setFirstName] =useState("")
       const [lastName,setLastName] =useState("")
       const [userName,setUserName] =useState("")
       const [email,setEmail] =useState("")
       const [NIN,setNIN] =useState("")
       const [district,setDistrict] =useState("")

       const setUserUpdate = (e,item) =>{
        handleShow(true)
           setFirstName(item.first_name)
           setLastName(item.last_name)
           setUserName(item.username)
           setEmail(item.email)
           setRole(item.role.role_id)
           setNIN(item.nin)
           setDistrict(item.district)
            setUserID(item.id)
            setTeam(item.team.team_id)


       }
       const setPasswordUpdate = (e,item) =>{
        handleShow1(true)
        setUserID(item.id)
            


       }

       const handleUpdateUser = async(e) =>{
        e.preventDefault()
    
       if(userID>0 || role>0 || team>0 || firstName.length>0 || lastName.length>0 || userName.length>0
         ||  email.length>0 || NIN.length>0 || district.length>0)
    {
        setLoading(true)
      const server_response = await ajaxUser.updateUser(userID,role,firstName,lastName,userName,email,NIN,district,team);
      setTimeout(() => setLoading(false), 1000);
        if(server_response.status==="OK")
        {
    
                setRole("")
                setFirstName("")
                setLastName("")
                setUserName("")
                setEmail("")
                setNIN("")
                setDistrict("")
                setInfo(<Alert type="success" message={server_response.message}/>) 
                getUserList()
        }
    }
    
    else{
    
            setInfo(<Alert type="danger" message="Complete all fields and try again"/>)
    }  
    }
    const handleUpdatePassword = async(e) =>{
        e.preventDefault()
        if(userID>0 || old_password.length>0 || new_password.length>0){
            setLoading(true)
            const server_response = await ajaxUser.updatePassword(userID,old_password,new_password);
            setLoading(false);
            if(server_response.status==="OK"){
                setOldPassword("");
                setNewPassword("");
                setInfo1(<Alert type="success" message={server_response.message}/>)
            }
            else{
                setInfo1(<Alert type="danger" message={server_response.message}/>)
            }
        }
        else{
            setInfo1(<Alert type="danger" message="Complete all fields and try again"/>)
        }  
    }
    // const handleUpdatePassword = async(e) =>{
    //     e.preventDefault()
    
    //    if(userID>0 || password.length>0 )
    // {
    //     setLoading(true)
    //   const server_response = await ajaxUser.updatePassword(userID,password);
    //   setTimeout(() => setLoading(false), 1000);
    //     if(server_response.status==="OK")
    //     {
    
    //             setPassword("")
    //             setInfo1(<Alert type="success" message={server_response.message}/>) 
    //     }
    
    // }
    
    // else{
    
    //         setInfo1(<Alert type="danger" message="Complete all fields and try again"/>)
    // }  
    // }

       


    return (
        <AppContainer title="Users List">

           
 <div class="white_card card_height_100 mb_30 shadow">
<div class="white_card_header">
<div class="box_header m-0">

</div>
</div>
<div class="white_card_body">
<div class="QA_section">
<div class="white_box_tittle list_header">
<h4>Users List</h4>
<div class="box_right d-flex lms_block">

<div class="add_button ms-2">
<div className="col-md-12 mb-3">
<RenderSecure code="ADD-USER">
           <CreateUsers color="btn-primary" />
</RenderSecure>
        </div>
</div>
</div>
</div>
<div class="QA_table mb_30">
        <table id="example1" class="table lms_table_active" style={{width:'100%'}}>
        <thead className="">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
                <th>Team</th>
                <th>
                Action
                </th>
            </tr>
        </thead>
        <tbody >
            {Array.isArray(userList) && userList.map((item,key)=>
            <tr key={key}>
                <td>{key+1}</td>
                <td><Link to={`user-profile/${item.id}`} > {item.first_name} {item.last_name}</Link></td>
                <td>{item.role.role_name}</td>
                <td>
                    
                    {item.team===false ?"Unassigned":item.team.team_name}</td>

               <td className="d-flex">
<RenderSecure code="EDIT-USER">

               <Button variant="warning" size="sm" id="dashbtn"  onClick={(e)=>setUserUpdate(e,item)}>
<i className="fa fa-edit"></i>

      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {loading ? <Loader /> :info}
        <form onSubmit={(e)=>handleUpdateUser(e)} method="post">
                <div className="row">
                <div className="mb-4 col-md-6">
                    <label htmlFor="">First Name</label>
                    <input type="text" defaultValue={firstName} onChange={(e)=>setFirstName(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-4 col-md-6">
                    <label htmlFor="">Last Name</label>
                    <input type="text" defaultValue={lastName} onChange={(e)=>setLastName(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-4 col-md-12">
                    <label htmlFor="">Username</label>
                    <input type="text" defaultValue={userName} onChange={(e)=>setUserName(e.target.value)} className="form-control"/>
                </div>
               
                <div className="mb-4 col-md-6">
                <label htmlFor="">Role</label>

                    <Select
                        onChange={(e)=>setRole(e.role_id)}
                        getOptionLabel ={(option)=>option.role_name}
                        getOptionValue ={(option)=>option.role_id}
                        isSearchable
                        options={roleList}
                        value={Array.isArray(roleList) && roleList.find(( value ) => value.role_id===role)}
                    />
                </div>
                <div className="mb-4 col-md-6">
                    <label htmlFor="">Team</label>
                    
                    <Select
                        onChange={(e)=>setTeam(e.team_id)}
                        getOptionLabel ={(option)=>option.team_name}
                        getOptionValue ={(option)=>option.team_id}
                        isSearchable
                        options={teamList}
                        value={Array.isArray(teamList) && teamList.find(( value ) => value.team_id===team)}
                    />
                </div>
                <div className="mb-4 col-md-12">
                    <label htmlFor="">Email</label>
                    <input type="email" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-4 col-md-6">
                    <label htmlFor="">District</label>
                    <input type="text" defaultValue={district} onChange={(e)=>setDistrict(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-4 col-md-6">
                    <label htmlFor="">NIN</label>
                    <input type="text" defaultValue={NIN} onChange={(e)=>setNIN(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-4">
                    <input type="submit" style={{float:"right"}} className="btn btn-success" value="Save"/>
                    </div>
                    </div>

            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
</RenderSecure>               

<Button variant="secondary" size="sm"  onClick={(e)=>setPasswordUpdate(e,item)}>
Update Password

      </Button>

      <Modal show={show1} onHide={handleClose1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {loading ? <Loader /> :info1}
        <form onSubmit={(e)=>handleUpdatePassword(e)} method="post">
                <div className="row">
                <div className="mb-4 col-md-6">
                    <label htmlFor="">Enter Old Password</label>
                    <input type="password"  onChange={(e)=>setOldPassword(e.target.value)} className="form-control"/>
                </div>
                <div className="mb-4 col-md-6">
                    <label htmlFor="">Set New Password</label>
                    <input type="password"  onChange={(e)=>setNewPassword(e.target.value)} className="form-control"/>
                </div>
               
                
                <div className="mb-4">
                    <input type="submit" style={{float:"right"}} className="btn btn-success" value="Save"/>

                    </div>
                    <div className="mb-4">
                    <Button variant="secondary" style={{float:"right"}} onClick={handleClose1}>
            Close
          </Button>

                    </div>
                    
                    </div>

            </form>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
</td>
            </tr>
            )}

           
           
            </tbody>
            </table>
            {!userList && <Loader/>}
        </div>
        </div>
        </div>
        </div>
        
        </AppContainer>
    )
}
