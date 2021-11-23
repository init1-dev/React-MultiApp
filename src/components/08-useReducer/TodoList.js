import React from 'react'
import { TodoListItem } from './TodoListItem';
import PropTypes from 'prop-types';

export const TodoList = ({ todos, handleDeleteToDo, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    // TodoListItem, todo, index, handleDelete, handleToggle
                    <TodoListItem
                        key={ todo.id }
                        todo={ todo }
                        index={ i }
                        handleDeleteToDo={ handleDeleteToDo }
                        handleToggle={ handleToggle }
                    />
                ))
            }
        </ul>
    )
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDeleteToDo: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
}