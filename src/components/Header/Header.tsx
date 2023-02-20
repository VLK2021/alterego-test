import React, {ChangeEvent, useCallback} from 'react';

import './HeaderStyle.css';
import {NavLink} from "react-router-dom";
import i18n from "i18next";


const Header: React.FC = () => {

    // const changeLanguage = (language: any) => {
    //     i18n.changeLanguage(language);
    // };

    const langHandler =useCallback((e: ChangeEvent<HTMLInputElement>) => i18n.changeLanguage(e.target.checked ? 'en' : 'ua'),[i18n])


    return (
        <div className={'header'}>
            <div className={'select'}>
                {/*<button onClick={()=> changeLanguage('ua')}>ua</button>*/}
                {/*<button onClick={()=> changeLanguage('en')}>en</button>*/}
                {/*<select>*/}
                {/*    <option>UA</option>*/}
                {/*    <option>EN</option>*/}
                {/*</select>*/}



                <div className={'input'}>
                    <div>UA</div>
                    <div><input className={'inputStyle'} type="checkbox" onChange={langHandler}/></div>
                    <div>EN</div>
                </div>


            </div>

            <ul>
                <li><NavLink to={'/'}>Головев</NavLink></li>
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