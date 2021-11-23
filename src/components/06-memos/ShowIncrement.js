import React from 'react'
import PropTypes from 'prop-types';

export const ShowIncrement = React.memo(({ increment, number }) => {

    console.log('Me volví a generar :( ');

    return (
        <button
            className="btn btn-primary"
            onClick={ () => {
                increment( number );
            } }
        >
            Incrementar
        </button>
    )
})

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired,
}