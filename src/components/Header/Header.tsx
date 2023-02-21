import React, {ChangeEvent} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

import './HeaderStyle.css';


const Header: React.FC = () => {
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();

    const langHandler = (e: ChangeEvent<HTMLInputElement>) => {
        i18n.changeLanguage(e.target.checked ? 'en' : 'ua')
    }

    const logout = () => {
        localStorage.removeItem('usernameAuth');
        localStorage.removeItem('passwordAuth');
        navigate('/');
    }


    return (
        <div className={'header'}>
            <div className={'input'}>
                <p>ua</p>
                <input className={'inputStyle'} type="checkbox" onChange={langHandler}/>
                <p>en</p>
            </div>

            <ul>
                <li><NavLink to={'/'}>{t('news-h-home')}</NavLink></li>
                <li><NavLink to={'/news'}>{t('news-h-news')}</NavLink></li>
                <li><NavLink to={'/profile'}>{t('news-h-profile')} </NavLink></li>
            </ul>

            <div className={'header-login'}>
                <NavLink to={'/login'}>{t('news-h-login')} /</NavLink>
                <NavLink to={'/'} onClick={logout}> {t('news-h-logout')}</NavLink>
            </div>
        </div>
    );
};

export default Header;