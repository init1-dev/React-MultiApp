import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>React-QuotesApp</h1>
            <hr />

            { show && <MultipleCustomHooks />}

            <button
                className="btn btn-primary mt-3"
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide Quotes
            </button>

        </div>
    )
}
