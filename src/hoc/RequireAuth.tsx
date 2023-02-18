import React, {useState} from 'react';
import {Navigate, useLocation} from "react-router-dom";


const RequireAuth = ({children}: any) => {
    const location = useLocation();
    const [user, setUser] = useState(false);


    if (!user) {
        return <Navigate to={'/login'} state={location}/>
    }

    return children
};

export default RequireAuth;