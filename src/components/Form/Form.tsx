import React from 'react';
import {useForm} from "react-hook-form";

import './FormStyle.css';


const Form = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({mode: "onBlur"});

    const submit = (data: any) => {
        console.log(data);
        reset();
    }


    return (
        <div className={'maine'}>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Username:</label><br/>
                    <input type="text" placeholder={'Enter username...'} {...register('username',{
                        required: 'Ім\'я користувача або пароль введено неправильно'
                    })}/>
                </div>
                <div className={'error'}>
                    {errors?.username && <p>{errors.username.message as string || 'Error'}</p>}
                </div>

                <div>
                    <label>Password:</label><br/>
                    <input type="text" placeholder={'Enter password...'} {...register('password',{
                        required:'Ім\'я користувача або пароль введено неправильно'
                    })}/>
                </div>
                <div className={'error'}>
                    {errors?.password && <p>{errors.password.message as string || 'Error'}</p>}
                </div>

                <button disabled={!isValid}>login</button>
            </form>
        </div>
    );
};

export default Form;