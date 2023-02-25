import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

import './NewStyle.css';
import {INew} from "../../interfaces/INew";
import {deleteNew} from "../../store/slices/news.slice";


// @ts-ignore
const New: FC<INew> = ({item}) => {
    const {id, title, body} = item;
    const dispatch = useDispatch();
    const {t} = useTranslation();

    const handlerDelete = () => {
        dispatch(deleteNew(id))
    }


    return (
        <div className={'new'}>
            <h3>{id}</h3>
            <p>{title}</p>
            <p>{body}</p>
            <div className={'new-del'}>
                <button onClick={handlerDelete}>{t("news-new-delete")}</button>
            </div>
        </div>
    );
};

export default New;