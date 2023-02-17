import React from 'react';
import { Outlet } from 'react-router-dom';

import './LayoutStyle.css';
import Header from "../components/Header/Header";


const Layout = () => {

    return (
        <div className={'layout'}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Layout;