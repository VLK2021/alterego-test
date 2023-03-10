import React from 'react';
import {Navigate, useLocation} from "react-router-dom";


const RequireAuth = ({children}: any) => {
    const location = useLocation();

    const usernameAuth = localStorage.getItem('usernameAuth');
    const passwordAuth = localStorage.getItem('passwordAuth');


    if (usernameAuth === 'admin' && passwordAuth === '12345') {
        return children
    } else {
        return <Navigate to={'/login'} state={location}/>
    }

};

export default RequireAuth;