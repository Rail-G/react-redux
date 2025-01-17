export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHANGE_INPUT_FILTER = 'CHANGE_INPUT_FILTER' 

export const addItem = (item: Item) => ({
    type: ADD_ITEM,
    payload: item
})

export const updateItem = (updateedItem: Item) => ({
    type: UPDATE_ITEM,
    updateItem: updateedItem
})

export const deleteItem = (id: string) => ({
    type: DELETE_ITEM,
    payload: id
})

export const filterItems = (text: string) => ({
    type: CHANGE_INPUT_FILTER,
    payload: text
})