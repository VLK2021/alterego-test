import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {INew} from "../../interfaces/INew";
import {newsServices} from "../../services/news.services";
import {IInitialstate} from "../../interfaces/IInitialstate";


export const getAllNews = createAsyncThunk(
    'newsSlice/getAllNews',
    async (page: number, {rejectWithValue}) => {
        try {
            const newsArrG = await newsServices.getNews(page);
            return newsArrG;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

export const getNewsMore = createAsyncThunk(
    'newsSlice/getNewsMore',
    async (page: number, {rejectWithValue, dispatch}) => {
        try {
            const response = await newsServices.getNews(page);
            dispatch(addNews({response}));
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

const initialState: IInitialstate = {
    newsArr: [],
    status: "",
    error: null,
    page: 1,
}

const newsSlice = createSlice({
    name: 'newsSlice',
    initialState,

    reducers: {
        deleteNew: (state, action) => {
            state.newsArr = state.newsArr.filter(item => item.id !== action.payload)
        },
        addNews: (state, action) => {
            action.payload.response.map((n: INew) => state.newsArr.push(n));
        }
    },

    extraReducers: {
        [getAllNews.pending.type]: (state: IInitialstate, action: PayloadAction<undefined>) => {
            state.status = "Loading..."
            state.error = null
        },
        [getAllNews.fulfilled.type]: (state: IInitialstate, action: PayloadAction<INew[]>) => {
            state.status = "fulfilled"
            state.newsArr = action.payload
        },
        [getAllNews.rejected.type]: (state: IInitialstate, action: PayloadAction<string>) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
});

export const {deleteNew, addNews} = newsSlice.actions;
const newsReducer = newsSlice.reducer;
export default newsReducer;




