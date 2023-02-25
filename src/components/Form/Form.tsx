import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {BiHide} from 'react-icons/bi';

import './FormStyle.css';


const Form: FC = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "onBlur"});
    const {t} = useTranslation();
    const navigate = useNavigate();

    const submit = (data: any) => {
        if (data.username === 'admin' && data.password === '12345') {
            localStorage.setItem('usernameAuth', data.username)
            localStorage.setItem('passwordAuth', data.password)
            navigate('/profile')
            reset();
        } else {
            navigate('/login')
            reset();
            return
        }
    };

    const showPassword = (): void => {
        const inputPassword = document.getElementById('password') as HTMLInputElement;

        if (inputPassword.type === 'password') {
            inputPassword.type = 'text';
        } else {
            inputPassword.type = 'password'
        }
    }


    return (
        <div className={'maine'}>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>{t('news-form-username')}:</label><br/>
                    <input type="text" placeholder={'Enter username...'} {...register('username', {
                        required: 'Ім\'я користувача або пароль введено неправильно',
                        pattern: {
                            value: /^admin$/,
                            message: 'Ім\'я користувача або пароль введено неправильно'
                        }
                    })}/>
                </div>
                <div className={'error'}>
                    {errors?.username && <p>{errors.username.message as string || 'Error'}</p>}
                </div>

                <div>
                    <label>{t('news-form-password')}:</label><br/>
                    <input type="password" id={'password'} placeholder={'Enter password...'} {...register('password', {
                        required: 'Ім\'я користувача або пароль введено неправильно',
                        pattern: {
                            value: /^12345$/,
                            message: 'Ім\'я користувача або пароль введено неправильно'
                        }
                    })}/>

                    <BiHide className={'icon-hide'} size={23} onClick={showPassword}/>
                </div>

                <div className={'error'}>
                    {errors?.password && <p>{errors.password.message as string || 'Error'}</p>}
                </div>

                <button disabled={!isValid}>{t('news-form-btn')}</button>
            </form>
        </div>
    );
};

export default Form;