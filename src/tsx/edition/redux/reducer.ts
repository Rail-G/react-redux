import { ADD_ITEM, CHANGE_INPUT_FILTER, DELETE_ITEM, UPDATE_ITEM } from "./action"

const initialValue = {
    items: [] as Item[],
}

export const itemReducer = (state = initialValue, action: Action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {...state, items: [...state.items, action.payload]}
        case UPDATE_ITEM:
            return {...state, items: state.items.map((el: Item) => el.id == action.updateItem?.id ? {...el, ...action.updateItem} : el)}
        case DELETE_ITEM:
            return {...state, items: state.items.filter((el: Item) => el.id != action.payload)}
        case  CHANGE_INPUT_FILTER:
            return {...state, items: state.items.map((el) => {
                if (!el.text.toLowerCase().includes(action.payload.toLowerCase())) {
                    return {...el, filtered: true}
                } else {
                    return {...el, filtered: false}
                }
            })}
        default:
            return state
    }
}