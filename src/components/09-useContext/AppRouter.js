import React from 'react';
import {
    Routes,
    Route,
    Navigate,
    HashRouter
    // Link
  } from 'react-router-dom';
  
import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';  
import { RealExampleRef } from '../04-useRef/RealExampleRef';
import { TodoApp } from '../08-useReducer/TodoApp';

export const AppRouter = () => {
    return (
        <HashRouter>
            <div>

                <NavBar />

                <Routes>
                    <Route path="/" element={ <HomeScreen /> } />
                    <Route path="/about" element={ <AboutScreen /> } />
                    <Route path="/login" element={ <LoginScreen /> } />
                    <Route path="/quotes" element={ <RealExampleRef /> } />
                    <Route path="/todo" element={ <TodoApp /> } />
                    
                    <Route path="*" element={ <Navigate replace to="/" /> } />
                </Routes>

            </div>
        </HashRouter>
    )
};