import React, {FC} from 'react';
import { Outlet } from 'react-router-dom';

import './LayoutStyle.css';
import Header from "../components/Header/Header";


const Layout: FC = () => {

    return (
        <div className={'layout'}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Layout;