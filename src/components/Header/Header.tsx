import React from 'react';

import './HeaderStyle.css';
import {NavLink} from "react-router-dom";


const Header = () => {

    return (
        <div className={'header'}>
            <div className={'select'}>
                <select>
                    <option>UK</option>
                    <option>EN</option>
                </select>
            </div>

            <ul>
                <li><NavLink to={'/'}>На головну</NavLink></li>
                <li><NavLink to={'/news'}>Новини</NavLink></li>
                <li><NavLink to={'/profile'}>Профіль </NavLink></li>
            </ul>

            <div className={'header-login'}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </div>
    );
};

export default Header;