import React, {FC} from 'react';
import {useForm} from "react-hook-form";

import './FormStyle.css';
import {useTranslation} from "react-i18next";


const Form: FC = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "onBlur"});
    const {t} = useTranslation();

    const submit = (data: any) => {
        console.log(data);
        reset();
    }


    return (
        <div className={'maine'}>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>{t('news-form-username')}:</label><br/>
                    <input type="text" placeholder={'Enter username...'} {...register('username', {
                        required: 'Ім\'я користувача або пароль введено неправильно'
                    })}/>
                </div>
                <div className={'error'}>
                    {errors?.username && <p>{errors.username.message as string || 'Error'}</p>}
                </div>

                <div>
                    <label>{t('news-form-password')}:</label><br/>
                    <input type="text" placeholder={'Enter password...'} {...register('password', {
                        required: 'Ім\'я користувача або пароль введено неправильно'
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