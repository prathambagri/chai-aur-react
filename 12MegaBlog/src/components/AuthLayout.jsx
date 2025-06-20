import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status)
    // TODO make it more easy to understand

    // if(authStatus===true){
    //     navigate("/")
    // }else if(authStatus ===false){
    //     navigate("/login")
    // }

    // let authvalue = authStatus === true ? true : false; // use it and replace with the authStatus in below if conditions

    useEffect(()=>{
        if (authentication && authStatus !== authentication) {
            navigate("/login")
            
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}

