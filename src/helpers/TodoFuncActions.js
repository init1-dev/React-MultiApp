export const handleAddTodo = ( newTodo ) => {
    return {
        type: 'add',
        payload: newTodo
    };
};

export const handleDeleteToDo = ( todoId ) => {
    return {
        type: 'delete',
        payload: todoId
    };
};

export const handleToggle = ( todoId ) => {
    return {
        type: 'toggle',
        payload: todoId
    };
};