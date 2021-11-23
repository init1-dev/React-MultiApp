import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { RealExampleRef } from '../04-useRef/RealExampleRef';


const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
};

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [ todos ]);

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    };

    const handleDeleteToDo = ( todoId ) => {
        dispatch({
            type: 'delete',
            payload: todoId
        });
    };

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    };

    return (
        <div>
            <h1>TodoApp ( { todos.length } { todos.length === 1 ? 'Nota' : 'Notas'} ) </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={ todos }
                        handleDeleteToDo={ handleDeleteToDo }
                        handleToggle={ handleToggle }
                    />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
            <div className="quotesApp">
                <RealExampleRef />
            </div>
        </div>
    )
};