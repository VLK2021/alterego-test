import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';
import Layout from "./Layout/Layout";
import Users from "./components/Users/Users";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import RequireAuth from "./hoc/RequireAuth";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Users/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/profile'} element={
                        <RequireAuth>
                            <Profile/>
                        </RequireAuth>}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
