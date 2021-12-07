import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div className="mt2">
            <h1>React-QuotesApp
                <button
                    className="btn btn-warning ms-4"
                    onClick={ () => {
                        setShow( !show );
                    }}
                >
                    Show/Hide Quotes
                </button>
            </h1>

            { show && <MultipleCustomHooks />}

        </div>
    )
};