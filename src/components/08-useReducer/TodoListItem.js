import React from 'react';
import PropTypes from 'prop-types';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    const { id, desc, done } = todo;
    return (
        <li
            key={ id }
            className="list-group-item"
        >
            <p
                className={`listItem ${ done && 'complete' }`}
                onClick={ () => handleToggle( id ) }
            >
                { index + 1 }. { desc } [ {done ? 'Done' : 'Pending'} ]
            </p>
            <button
                className="btn btn-danger"
                onClick={ () => handleDelete( id ) }
            >
                Borrar
            </button>
        </li>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}