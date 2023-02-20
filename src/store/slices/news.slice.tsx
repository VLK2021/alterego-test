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
    async (page:number, {rejectWithValue, dispatch}) => {
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
    status: null,
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
            action.payload.response.map((n:INew) => state.newsArr.push(n));
        }
    },

    extraReducers: {
        [getAllNews.pending as any]: (state: any, action: PayloadAction) => {
            state.status = "Loading..."
            state.error = null
        },
        [getAllNews.fulfilled as any]: (state: any, action: PayloadAction) => {
            state.status = "fulfilled"
            state.newsArr = action.payload
        },
        [getAllNews.rejected as any]: (state: any, action: PayloadAction) => {
            state.status = 'rejected'
            state.error = action.payload
        },
    }
});

export const {deleteNew, addNews} = newsSlice.actions;
const newsReducer = newsSlice.reducer;
export default newsReducer;