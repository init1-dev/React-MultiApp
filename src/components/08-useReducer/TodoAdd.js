import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAdd }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {

        e.preventDefault();

        if( description.trim().length < 3 ) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAdd( newTodo );
        reset();

    }

    return (
        <>
            <h4>Agregar ToDo</h4>
            <hr />

            <form onSubmit={ handleSubmit }>

                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Escribe aquí tu tarea"
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />

                <div className="d-grid gap-1">
                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-1"
                    >
                        Agregar
                    </button>
                </div>

            </form>
        </>
    )
}
