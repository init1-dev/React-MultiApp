import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // 1. Obtener la referencia al userContext
    const { user, setUser } = useContext(UserContext);
    const isAuth = () => {
        return Object.keys(user).length === 0
            ? false
            : true
    };

    // console.log(isAuth());

    const handleLogIn = () => {
        setUser({
            id: 1234,
            name: 'In1t',
            email: 'in1t@email.com'
        });
    };

    const handleLogOut = () => {
        setUser({});
    };

    return (
        <div className="mt2">
            <h1>Login Section</h1>
            <hr />

            <pre>
                userData: { JSON.stringify( user, null, 3 ) }
            </pre>

            <button
                className={ isAuth() ? 'btn btn-warning' : 'btn btn-primary' }
                onClick={ isAuth() ? handleLogOut : handleLogIn }
            >
                { isAuth() ? 'Logout' : 'Login' }
            </button>
        </div>
    )
};