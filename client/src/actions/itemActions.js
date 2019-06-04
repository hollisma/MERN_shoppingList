import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
    return {
        type: GET_ITEMS
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id  // send payload because reducer also needs to know id of item to be deleted
    }
}

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}