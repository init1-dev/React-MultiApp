import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div className="quotesApp">
            <h1>React-QuotesApp <button
                                    className="btn btn-warning ms-3"
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