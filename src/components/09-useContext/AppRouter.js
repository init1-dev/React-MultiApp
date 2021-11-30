import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
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
        <Router>
            <div>

                <NavBar />

                <Routes>
                    <Route path="/React-MultiApp/" element={ <HomeScreen /> } />
                    <Route path="/React-MultiApp/about" element={ <AboutScreen /> } />
                    <Route path="/React-MultiApp/login" element={ <LoginScreen /> } />
                    <Route path="/React-MultiApp/quotes" element={ <RealExampleRef /> } />
                    <Route path="/React-MultiApp/todo" element={ <TodoApp /> } />
                    
                    <Route path="*" element={ <Navigate replace to="/React-MultiApp/" /> } />
                </Routes>

            </div>
        </Router>
    )
};