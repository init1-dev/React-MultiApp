import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
// import { RealExampleRef } from '../04-useRef/RealExampleRef';
import { handleAdd, handleDelete, handleToggle } from '../../helpers/TodoFuncActions';

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || [];
};

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [ todos ]);

    return (
        <div className="mt2">
            <h1>TodoApp ( { todos.length } { todos.length === 1 ? 'Nota' : 'Notas'} ) </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={ todos }
                        handleDelete={ (e) => dispatch( handleDelete(e) )}
                        handleToggle={ (e) => dispatch( handleToggle(e) )}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAdd={ (e) => dispatch( handleAdd(e) )}
                    />
                </div>
            </div>
        </div>
    )
};