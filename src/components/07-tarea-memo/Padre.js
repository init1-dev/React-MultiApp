import React, { useCallback } from 'react'
import { useState } from 'react';
import { Hijo } from './Hijo'

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // };

    const incrementar = useCallback(( num ) => {
        setValor( valor => valor + num )
    }, [ setValor ]);

    const reset = () => {
        setValor( 0 );
    }

    return (
        <div>
            <h1>Incrementos</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
            <button className="btn btn-primary me-3" onClick={ reset } > Reset </button>
        </div>
    )
}
