import React, {FC} from 'react';
import {useForm} from "react-hook-form";

import './FormStyle.css';
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";


const Form: FC = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "onBlur"});
    const {t} = useTranslation();
    const navigate = useNavigate();

    const submit = (data: any) => {
        if (data.username === 'admin' && data.password === '12345'){
            localStorage.setItem('usernameAuth', data.username)
            localStorage.setItem('passwordAuth', data.password)
            navigate('/profile')
            reset();
        } else {
            navigate('/login')
            reset();
            return
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
                    <input type="text" placeholder={'Enter password...'} {...register('password', {
                        required: 'Ім\'я користувача або пароль введено неправильно',
                        pattern: {
                            value: /^12345$/,
                            message: 'Ім\'я користувача або пароль введено неправильно'
                        }
                    })}/>
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