import React from 'react';
import { AuthConsumer } from '../../Context/AuthContext';
import functions from '../functions';

export const RenderSecure=(props)=>{


    return(
        <AuthConsumer>
            {userProps=>{
                if(functions.findInObject(userProps.permissionLists, props.code))
                {
                    return <>{props.children}</>
                }else{
                    return <></>
                }
            }}
        </AuthConsumer>
    )

}