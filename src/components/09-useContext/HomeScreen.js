import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    const { user } = useContext(UserContext);

    // console.log(user);
    
    return (
        <div className="mt2">
            <h1>Home Section</h1>
            <hr />

            <p>Esto es un mensaje en la sección de bienvenida.</p>
            <br />
            <p>Si hay un usuario activo, se mostrará a continuación, en caso contrario el Usuario activo será 'none'. Para activar un usuario ve a la sección 'Login'.</p>
            <br />
            <pre>Usuario activo: <strong>{ user.name || '<none>' }</strong></pre>
            
        </div>
    )
};