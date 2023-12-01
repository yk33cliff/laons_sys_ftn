import React, { useContext, useState } from 'react'
import RoleContext from '../../Context/RoleContext'
import UserContext from '../../Context/UserContext'
import ajaxUser from '../../util/remote/ajaxUser'
import Alert from '../Common/Alert'
import Loader from '../Common/Loader';
import ModalComponent from '../Common/Modal'
import Select from 'react-select'

export default function CreateUsers() {

    const {getUserList} = useContext(UserContext)
       const {roleList} = useContext(RoleContext)
       const [loading,setLoading] = useState(false)

       const [info,setInfo] =useState("")

       const [role,setRole] =useState("")
       const [firstName,setFirstName] =useState("")
       const [lastName,setLastName] =useState("")
       const [userName,setUserName] =useState("")
       const [password,setPassword] =useState("")
       const [email,setEmail] =useState("")
       const [NIN,setNIN] =useState("")
       const [district,setDistrict] =useState("")

       const handleAdd = async(e) =>{
        e.preventDefault()
    
       if(role>0 || firstName.length>0 || lastName.length>0 || userName.length>0
         || password.length>0 || email.length>0 || NIN.length>0 || district.length>0)
    {
        setLoading(true)
      const server_response = await ajaxUser.createUser(role,firstName,lastName,userName,password,email,NIN,district);
      setTimeout(() => setLoading(false), 1000);
       
      if(server_response.status==="OK")
        {
                setRole("")
                setFirstName("")
                setLastName("")
                setUserName("")
                setPassword("")
                setEmail("")
                setNIN("")
                setDistrict("")
                setInfo(<Alert type="success" message={server_response.message}/>) 
                getUserList()
        }
        // setInfo("");
    }
    
    else{
            setInfo(<Alert type="danger" message="Complete all fields and try again"/>)
    }  
    }

    return (
        <ModalComponent 

        color="btn-primary"
        name="Add User"
        title="Add New User"
        id="add"
        size="sm"
        icon="fa fa-plus"
        actionBtn="Save">
                                        {loading ? <Loader /> :info}

        <form onSubmit={(e)=>handleAdd(e)} method="post">
            <div className="row">
            <div className="mb-4 col-md-6">
                <label htmlFor="">First Name</label>
                <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="form-control"/>
            </div>
            <div className="mb-4 col-md-6">
                <label htmlFor="">Last Name</label>
                <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="form-control"/>
            </div>
            
            <div className="mb-4 col-md-12">
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
            </div>
            <div className="mb-4 col-md-6">
                <label htmlFor="">Username</label>
                <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} className="form-control"/>
            </div>
            <div className="mb-4 col-md-6">
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"/>
            </div>
            <div className="mb-4 col-md-12">
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
            <div className="mb-4 col-md-12">
                <label htmlFor="">NIN</label>
                <input type="text" value={NIN} onChange={(e)=>setNIN(e.target.value)} className="form-control"/>
            </div>
            
            <div className="mb-4 col-md-12">
                <label htmlFor="">District</label>
                <input type="text" value={district} onChange={(e)=>setDistrict(e.target.value)} className="form-control"/>
            </div>
            </div>
            <div className="mb-4">
                <input type="submit" style={{float:"right"}} className="btn btn-success" value="Save"/>
                </div>

        </form>
</ModalComponent>
    )
}
