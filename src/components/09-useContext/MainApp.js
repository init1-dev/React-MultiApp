import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {

    const init = () => {
        return JSON.parse( localStorage.getItem('login') ) || [];
    };

    const [user, setUser] = useState(init);

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>

            <AppRouter />

        </UserContext.Provider>
    )
};
