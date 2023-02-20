import React, {FC} from 'react';
import {useDispatch} from "react-redux";

import './NewStyle.css';
import {INew} from "../../interfaces/INew";
import {deleteNew} from "../../store/slices/news.slice";


// @ts-ignore
const New: FC<INew> = ({item}) => {
    const {id, title, body} = item;
    const dispatch = useDispatch();

    const handlerDelete = () => {
        dispatch(deleteNew(id))
    }


    return (
        <div className={'new'}>
            <div className={'new-del'} onClick={handlerDelete}>Х</div>
            <h3>{id}</h3>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default New;