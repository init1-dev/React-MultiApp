import React from 'react';

export const Error404 = () => {

    return (
        <div className="mt2">
            <h1>This page doesn't exist</h1>
            <hr />

            <a href={ process.env.PUBLIC_URL + "/" }>Homepage</a>

        </div>
    )
};