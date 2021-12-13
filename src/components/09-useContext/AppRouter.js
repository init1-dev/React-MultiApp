import React from 'react';
import {
    // BrowserRouter as Router,
    Routes,
    Route,
    // Navigate,
    HashRouter,
    // Link
  } from 'react-router-dom';
  
import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';  
import { RealExampleRef } from '../04-useRef/RealExampleRef';
import { TodoApp } from '../08-useReducer/TodoApp';
import { Error404 } from './404';
import GifExpertApp from '../GifExpertApp/GifExpertApp';

export const AppRouter = () => {
    return (
        // HashRouter para que las rutas funcionen en GitHub Pages, con BrowserRouter dan error 404
        <HashRouter>
            <div>

                <NavBar />

                <Routes>
                    <Route path="/" element={ <HomeScreen /> } />
                    <Route path="/about" element={ <AboutScreen /> } />
                    <Route path="/gifs" element={ <GifExpertApp /> } />
                    <Route path="/quotes" element={ <RealExampleRef /> } />
                    <Route path="/todo" element={ <TodoApp /> } />
                    <Route path="/login" element={ <LoginScreen /> } />
                    
                    {/* <Route path="*" element={ <Navigate replace to="/" /> } /> */}
                    <Route path="*" element={ <Error404 /> } />
                </Routes>

            </div>
        </HashRouter>
    )
};