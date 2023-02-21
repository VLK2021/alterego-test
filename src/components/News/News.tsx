import React, {FC, useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";

import './NewsStyle.css';
import New from "../New/New";
import {getAllNews, getNewsMore} from "../../store/slices/news.slice";
import {INew} from "../../interfaces/INew";


const News: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    // @ts-ignore
    const {page, newsArr} = useSelector(state => state.news);
    let p: number = page;

    useEffect(() => {
        // @ts-ignore
        dispatch(getAllNews(page))
    }, [dispatch, page]);


    const addMoreHandler: React.EventHandler<React.MouseEvent> = useCallback(() => {
        // @ts-ignore
        dispatch(getNewsMore(p + 1));
        p = p + 1
    }, [p]);


    return (
        <div className={'news'}>

            <h1>{t('news-title')}</h1>

            <div className={'news-block'}>
                {
                    //@ts-ignore
                    newsArr.map((item: INew) => <New key={item.id} item={item}/>)
                }
            </div>

            <div className={'btn'}>
                <button onClick={addMoreHandler}>{t('news-btn-add')}</button>
            </div>
        </div>
    );
};

export default News;