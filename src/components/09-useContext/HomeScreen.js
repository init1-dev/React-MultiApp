import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    const { user } = useContext(UserContext);

    // console.log(user);
    
    return (
        <div className="mt2">
            <h1>Home Section</h1>
            <hr />

            <pre> Esto es un mensaje en la sección de bienvenida. </pre>
            <pre> Usuario activo: { user.name || 'Nadie' } </pre>
            
        </div>
    )
};