import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {

    return (
        <div onClick={ () => navigator.clipboard.writeText(url) }>
            <div className="card animate__animated animate__fadeIn">
                <img src={ url } alt={ title } />
                <p>{ title }</p>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}