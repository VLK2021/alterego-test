import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import './index.css';
import './18n';
import App from './App';
import store from "./store/store";
import Spinner from "./components/Spinner/Spinner";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<div><Spinner/></div>}>
                <App/>
            </Suspense>
        </BrowserRouter>
    </Provider>
    // </React.StrictMode>
);




