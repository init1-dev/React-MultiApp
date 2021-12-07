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
            <h1>Login Section
                <button
                    className={ `btn ms-4 ${ isAuth() ? 'btn btn-warning' : 'btn btn-primary' }` }
                    onClick={ isAuth() ? handleLogOut : handleLogIn }
                >
                    { isAuth() ? 'Logout' : 'Login' }
                </button>
            </h1>
            <hr />
            <p> { isAuth() ? 'Usuario correcto' : 'No hay datos de usuario' } </p>
            <br />
            <pre>
                userData: { JSON.stringify( user, null, 3 ) }
            </pre>

        </div>
    )
};