import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const LayoutEffect = () => {

    const { counter, increment, decrement } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote } = !!data && data[0];

    const parraf = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect( () => {
        setBoxSize( parraf.current.getBoundingClientRect() );
    }, [ quote ])

    return (
        <div>
            <h1>LayoutEffect [{ counter }]</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p ref={ parraf }> { quote } </p>
            </blockquote>

            <pre>{ JSON.stringify( boxSize, null, 3 ) }</pre>
            
            <div className="btn-group me-2">
                <button
                    className="btn btn-primary"
                    onClick={ () => decrement() }
                >
                    Quote Anterior
                </button>
            </div>

            <div className="btn-group me-2">
                <button
                    className="btn btn-primary"
                    onClick={ () => increment() }
                >
                    Siguiente Quote
                </button>
            </div>       

        </div>
    )
}
