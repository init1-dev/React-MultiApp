export const handleAdd = ( newItem ) => {
    return {
        type: 'add',
        payload: newItem
    };
};

export const handleDelete = ( deletedItem ) => {
    return {
        type: 'delete',
        payload: deletedItem
    };
};

export const handleToggle = ( toggledItem ) => {
    return {
        type: 'toggle',
        payload: toggledItem
    };
};