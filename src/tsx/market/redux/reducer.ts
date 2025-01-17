import { ADD_MARKET_ITEM } from "./action"

const initialValue = {
    marketList: [] as MarketItem[]
}

export const marketReducer = (state = initialValue, action: Action) => {
    switch (action.type) {
        case ADD_MARKET_ITEM:
            return {...state, marketList: [...state.marketList, action.payload]}
        default:
            return state
    }
}