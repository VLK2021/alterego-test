import {configureStore} from "@reduxjs/toolkit";

import newsReducer from "./slices/news.slice";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";


const store: ToolkitStore = configureStore({
    reducer: {
        news: newsReducer
    }
});

export default store;